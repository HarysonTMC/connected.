"use client";

import { useState } from "react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$10",
    description: "Get started with core skill training and build your first portfolio projects. Designed for beginners who want practical, step-by-step learning.",
    features: [
      "Access to basic skill pathways",
      "Beginner challenges",
      "Simple learner profile",
      "Achievement tracking"
    ]
  },
  {
    id: "builder",
    name: "Builder",
    price: "$35",
    description: "Build stronger skills and a real portfolio with structured projects and progress tracking designed to prepare you for freelance work.",
    features: [
      "Everything in Starter",
      "Portfolio project templates",
      "Progress tracking system",
      "Guided learning structure"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    price: "$75",
    description: "Become visible to companies and get matched with opportunities once you’re ready. Designed for learners preparing to earn.",
    features: [
      "Everything in Builder",
      "Higher visibility to companies",
      "Verified project reviews",
      "Priority shortlist matching"
    ],
    popular: true
  },
  {
    id: "elite",
    name: "Elite Mentored",
    price: "$150",
    description: "Get direct support, faster improvement, and stronger exposure to companies. Built for serious learners aiming to secure freelance opportunities.",
    features: [
      "Everything in Professional",
      "Mentoring support",
      "Profile optimisation guidance",
      "Enhanced promotion to companies",
      "Advanced skill pathways"
    ]
  }
];

export default function PricingSection() {
  const [loadingPlan, setLoadingPlan] = useState("");

  async function buyPlan(plan: string) {
    setLoadingPlan(plan);

    const response = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ plan })
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
      return;
    }

    alert(data.error || "Something went wrong starting checkout.");
    setLoadingPlan("");
  }

  return (
    <section className="container section">
      <h2>Choose your learning plan</h2>
      <p className="muted">
        Start small, build your proof, then upgrade when you want stronger visibility and support.
      </p>

      <div className="grid" style={{marginTop: 24}}>
        {plans.map((plan) => (
          <div
            className="card"
            key={plan.id}
            style={{
              border: plan.popular ? "2px solid #2563eb" : undefined,
              position: "relative"
            }}
          >
            {plan.popular && (
              <div className="tag" style={{marginBottom: 12}}>Most useful</div>
            )}

            <h3>{plan.name}</h3>
            <div className="price">
              {plan.price}<small>/mo</small>
            </div>
            <p className="muted">{plan.description}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <button
              className="btn"
              onClick={() => buyPlan(plan.id)}
              disabled={loadingPlan === plan.id}
              style={{marginTop: 16}}
            >
              {loadingPlan === plan.id ? "Opening checkout..." : `Buy ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
