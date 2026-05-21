import { NextResponse } from "next/server";

const sampleLearners = [
  { name: "Video Editing Learner", skills: ["video-editing", "short-form"], level: "beginner-trained" },
  { name: "Design Learner", skills: ["graphic-design", "branding"], level: "beginner-trained" },
  { name: "AI Automation Learner", skills: ["ai-automation", "admin"], level: "intermediate" }
];

export async function POST(req: Request) {
  const body = await req.json();
  const skill = body.skill;

  const matches = sampleLearners.filter(learner =>
    learner.skills.includes(skill)
  );

  return NextResponse.json({ matches });
}
