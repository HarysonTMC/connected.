import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-04-22.basil"
});

const plans: Record<string, { priceId: string; name: string; description: string }> = {
  starter: {
    priceId: process.env.STRIPE_PRICE_STARTER || "",
    name: "Starter",
    description: "Core skill training, beginner challenges, simple learner profile, and achievement tracking."
  },
  builder: {
    priceId: process.env.STRIPE_PRICE_BUILDER || "",
    name: "Builder",
    description: "Portfolio templates, guided learning, project structure, and progress tracking."
  },
  professional: {
    priceId: process.env.STRIPE_PRICE_PROFESSIONAL || "",
    name: "Professional",
    description: "Higher company visibility, verified project reviews, and priority shortlist matching."
  },
  elite: {
    priceId: process.env.STRIPE_PRICE_ELITE || "",
    name: "Elite Mentored",
    description: "Mentoring support, profile optimisation, enhanced company promotion, and advanced pathways."
  }
};

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY in .env.local" },
        { status: 500 }
      );
    }

    const { plan } = await req.json();
    const selectedPlan = plans[plan];

    if (!selectedPlan) {
      return NextResponse.json({ error: "Invalid plan selected." }, { status: 400 });
    }

    if (!selectedPlan.priceId) {
      return NextResponse.json(
        { error: `Missing Stripe Price ID for ${selectedPlan.name}. Add it to .env.local.` },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: selectedPlan.priceId,
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/dashboard?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}?checkout=cancelled`,
      metadata: {
        plan,
        planName: selectedPlan.name
      }
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Stripe checkout failed." },
      { status: 500 }
    );
  }
}
