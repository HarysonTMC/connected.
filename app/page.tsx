import Link from "next/link";
import { useState } from "react";

type Lesson = {
  id: string;
  week: string;
  title: string;
  desc: string;
  tagline: string;
  what: string[];
  status: "done" | "next" | "locked";
};

export default function Home() {
  const [screen, setScreen] = useState<"home" | "dashboard" | "lesson">("home");
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  const lessons: Lesson[] = [
    {
      id: "hooks",
      week: "Week 1",
      title: "Hooks & first 3 seconds",
      desc: "Learn to open videos so well that viewers have no choice but to keep watching.",
      tagline: "The first 3 seconds determine everything. Master the frameworks top creators use to stop the scroll.",
      what: [
        "The psychology behind why hooks work and what makes a viewer stop scrolling",
        "The 4 hook frameworks used by top short-form creators",
        "How to match hook style to content type",
        "Common hook mistakes and how to fix them in the edit",
      ],
      status: "done",
    },
    {
      id: "captions",
      week: "Week 1",
      title: "Captions & subtitles",
      desc: "Style, timing, and placement that improve retention and accessibility simultaneously.",
      tagline: "85% of short-form video is watched without sound. Captions aren't optional — they're your second hook.",
      what: [
        "Why captions dramatically increase watch time across all platforms",
        "Font, size, and placement best practices for mobile-first viewing",
        "Auto-caption tools vs manual timing — when to use each",
        "Animated caption styles that match different creator aesthetics",
      ],
      status: "next",
    },
    {
      id: "pacing",
      week: "Week 2",
      title: "Pacing & cuts",
      desc: "Zooms, timing, sound design, and transitions built for the short-form attention span.",
      tagline: "Pacing is the invisible hand that keeps viewers watching. Every cut is a decision.",
      what: [
        "How to identify the right cut point in any talking-head video",
        "Using zooms and punch-ins to create visual energy",
        "Sound design basics: music selection, SFX, and audio layering",
        "Transition styles that work vs ones that distract",
      ],
      status: "locked",
    },
    {
      id: "retention",
      week: "Week 2",
      title: "Retention editing",
      desc: "Understand what makes viewers reach the end — and structure every edit around that goal.",
      tagline: "Completion rate is the metric that matters. Learn to engineer it deliberately.",
      what: [
        "Reading retention graphs and diagnosing drop-off points",
        "Pattern interrupt techniques to re-engage mid-video",
        "Loop structures and open loops that keep viewers watching",
        "How to edit a 3-minute raw clip down to a 45-second hook machine",
      ],
      status: "locked",
    },
    {
      id: "portfolio",
      week: "Week 3",
      title: "Portfolio building",
      desc: "Real project briefs, real feedback, and portfolio-ready deliverables that prove your skill.",
      tagline: "A portfolio that gets you hired looks nothing like most editors think. Here's what brands actually want.",
      what: [
        "What a hiring brand or creator actually looks for in an editor portfolio",
        "Your first 3 portfolio pieces — briefs, source footage, and deliverable specs",
        "How to present your work: format, framing, and what to say",
        "Getting feedback and iterating before you submit to the brand network",
      ],
      status: "locked",
    },
    {
      id: "client",
      week: "Week 4",
      title: "Client readiness",
      desc: "Communication, briefs, revisions, invoicing — everything you need to work with real paying clients.",
      tagline: "Editing skill gets you the job. Client skills keep it. Learn how to operate like a professional.",
      what: [
        "How to handle your first client brief and ask the right questions",
        "Revision etiquette: how many rounds, how to respond to feedback",
        "Pricing your work as a beginner editor",
        "Invoicing, contracts, and protecting yourself as a freelancer",
      ],
      status: "locked",
    },
  ];

  const openLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setScreen("lesson");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy:    #080f1e;
          --navy2:   #0a1220;
          --accent:  #0061fd;
          --accent2: #45e064;
          --white:   #f5f5f0;
          --muted:   rgba(245,245,240,0.52);
          --border:  rgba(255,255,255,0.08);
          --card-bg: rgba(255,255,255,0.04);
          --radius:  16px;
          --font-head: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }

        body {
          background: var(--navy);
          color: var(--white);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.7;
        }

        .c-page  { max-width: 1100px; margin: 0 auto; padding: 0 28px; }
        .c-section { padding: 88px 0; }

        /* ── Nav ── */
        .c-nav {
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 0 24px;
          border-bottom: 1px solid var(--border);
        }
        .c-logo {
          font-family: var(--font-head);
          font-size: 22px; font-weight: 800; letter-spacing: -0.5px;
          color: var(--accent);
          text-decoration: none;
          background: none; border: none; cursor: pointer;
        }
        .c-logo span { color: var(--white); }
        .c-nav-links { display: flex; align-items: center; gap: 8px; }
        .c-nav-links a, .c-nav-links button {
          font-family: var(--font-body); font-size: 14px; font-weight: 500;
          color: var(--muted); text-decoration: none;
          padding: 8px 16px; border-radius: 100px; border: 1px solid transparent;
          background: none; cursor: pointer;
          transition: all 0.2s;
        }
        .c-nav-links a:hover, .c-nav-links button:hover { color: var(--white); border-color: var(--border); }
        .c-nav-links a.nav-cta, .c-nav-links button.nav-cta {
          background: var(--accent); color: #fff;
          border-color: var(--accent); font-weight: 600;
        }
        .c-nav-links a.nav-cta:hover, .c-nav-links button.nav-cta:hover { background: #0051d4; border-color: #0051d4; }
        .c-nav-back {
          font-family: var(--font-body); font-size: 14px; font-weight: 500;
          color: var(--muted); background: var(--card-bg);
          padding: 8px 16px; border-radius: 100px;
          border: 1px solid var(--border); cursor: pointer;
          transition: all 0.2s;
        }
        .c-nav-back:hover { color: var(--white); border-color: rgba(255,255,255,0.25); }

        /* ── Hero ── */
        .c-hero {
          padding: 96px 0 80px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
        }
        .c-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent2); margin-bottom: 24px;
        }
        .c-hero-eyebrow::before {
          content: ''; width: 24px; height: 2px;
          background: var(--accent2); border-radius: 2px;
        }
        .c-hero h1 {
          font-family: var(--font-head);
          font-size: clamp(36px, 5vw, 54px); font-weight: 800;
          line-height: 1.08; letter-spacing: -1.5px; color: var(--white);
          margin-bottom: 20px;
        }
        .c-hero h1 em { font-style: normal; color: var(--accent); }
        .c-hero-sub {
          font-size: 17px; color: var(--muted); line-height: 1.65;
          margin-bottom: 36px; max-width: 440px;
        }
        .c-btn-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .c-btn-primary {
          display: inline-block; background: var(--accent); color: #fff;
          font-family: var(--font-body); font-size: 15px; font-weight: 600;
          padding: 14px 28px; border-radius: 100px; text-decoration: none;
          border: none; cursor: pointer;
          transition: all 0.2s;
        }
        .c-btn-primary:hover { background: #0051d4; transform: translateY(-1px); }
        .c-btn-secondary {
          display: inline-block; background: transparent; color: var(--white);
          font-family: var(--font-body); font-size: 15px; font-weight: 500;
          padding: 14px 28px; border-radius: 100px; text-decoration: none;
          border: 1px solid var(--border); cursor: pointer; transition: all 0.2s;
        }
        .c-btn-secondary:hover { border-color: rgba(255,255,255,0.3); background: var(--card-bg); }
        .c-hero-note { font-size: 13px; color: var(--muted); margin-top: 16px; }

        /* ── Hero card ── */
        .c-hero-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 24px; padding: 36px;
          position: relative; overflow: hidden;
        }
        .c-hero-card::before {
          content: ''; position: absolute; top: 0; right: 0;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(0,97,253,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .c-card-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 28px;
        }
        .c-platform-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.06); border: 1px solid var(--border);
          border-radius: 100px; padding: 6px 14px;
          font-size: 13px; color: var(--muted); margin-bottom: 28px;
        }
        .c-stat-row { display: flex; flex-direction: column; gap: 20px; margin-bottom: 28px; }
        .c-stat-item { display: flex; align-items: center; justify-content: space-between; }
        .c-stat-label { font-size: 14px; color: var(--muted); }
        .c-stat-value {
          font-family: var(--font-head); font-size: 26px; font-weight: 800;
          color: var(--accent); letter-spacing: -0.5px;
        }
        .c-stat-divider { height: 1px; background: var(--border); }
        .c-card-cta {
          display: block; text-align: center;
          background: rgba(0,97,253,0.08); border: 1px solid rgba(0,97,253,0.25);
          color: var(--accent); font-size: 14px; font-weight: 500;
          padding: 12px; border-radius: 12px; text-decoration: none;
          cursor: pointer; font-family: var(--font-body);
          transition: all 0.2s; margin-top: 8px; width: 100%;
        }
        .c-card-cta:hover { background: rgba(0,97,253,0.15); }

        /* ── Section shared ── */
        .c-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent2); margin-bottom: 16px;
        }
        .c-tag::before { content: ''; width: 16px; height: 2px; background: var(--accent2); border-radius: 2px; }
        .c-section-head {
          font-family: var(--font-head);
          font-size: clamp(28px, 4vw, 42px); font-weight: 800;
          letter-spacing: -1px; line-height: 1.12;
          color: var(--white); margin-bottom: 12px;
        }
        .c-section-sub { font-size: 16px; color: var(--muted); max-width: 520px; margin-bottom: 52px; }

        /* ── Platform strip ── */
        .c-platform-strip {
          border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
          padding: 36px 0; margin-bottom: 80px;
        }
        .c-platform-inner {
          display: flex; align-items: center; gap: 36px;
          justify-content: center; flex-wrap: wrap;
        }
        .c-platform-label { font-size: 12px; color: var(--muted); letter-spacing: 0.05em; font-weight: 500; }
        .c-platform-item {
          font-family: var(--font-head); font-size: 15px; font-weight: 700;
          color: rgba(255,255,255,0.3); letter-spacing: 0.02em;
        }
        .c-platform-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--border); }

        /* ── Steps ── */
        .c-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .c-step-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 32px 28px; position: relative;
        }
        .c-step-num {
          font-family: var(--font-head); font-size: 48px; font-weight: 800;
          color: rgba(255,255,255,0.05); line-height: 1; margin-bottom: 20px;
          letter-spacing: -2px;
        }
        .c-step-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; margin-bottom: 20px;
        }
        .c-step-icon.green  { background: rgba(69,224,100,0.12); }
        .c-step-icon.blue   { background: rgba(0,97,253,0.12); }
        .c-step-icon.white  { background: rgba(255,255,255,0.06); }
        .c-step-h { font-family: var(--font-head); font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
        .c-step-p { font-size: 14px; color: var(--muted); line-height: 1.65; }
        .c-connector {
          position: absolute; top: 50px; right: -13px;
          width: 26px; height: 1px; background: var(--border); z-index: 2;
        }
        .c-connector::after {
          content: ''; position: absolute; right: -4px; top: -3px;
          width: 7px; height: 7px; border-radius: 50%; background: var(--border);
        }

        /* ── Skills grid ── */
        .c-skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .c-skill-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 26px 24px;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s;
        }
        .c-skill-card:hover { border-color: rgba(0,97,253,0.35); transform: translateY(-2px); }
        .c-skill-week {
          font-size: 11px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--accent2); margin-bottom: 12px;
        }
        .c-skill-h { font-family: var(--font-head); font-size: 17px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
        .c-skill-p { font-size: 13px; color: var(--muted); line-height: 1.6; }

        /* ── Split CTA ── */
        .c-split { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .c-split-card {
          border-radius: 24px; padding: 44px 40px;
          position: relative; overflow: hidden;
          min-height: 300px; display: flex; flex-direction: column; justify-content: flex-end;
        }
        .c-split-card.editors {
          background: linear-gradient(135deg, #001a0a 0%, #001230 100%);
          border: 1px solid rgba(69,224,100,0.2);
        }
        .c-split-card.brands {
          background: linear-gradient(135deg, #00143a 0%, #000d26 100%);
          border: 1px solid rgba(0,97,253,0.3);
        }
        .c-split-bg {
          position: absolute; top: -10px; right: 20px;
          font-family: var(--font-head); font-size: 120px; font-weight: 800;
          opacity: 0.04; line-height: 1; letter-spacing: -4px; color: var(--white);
          pointer-events: none; user-select: none;
        }
        .c-split-label {
          font-size: 11px; font-weight: 600; letter-spacing: 0.09em; text-transform: uppercase;
          margin-bottom: 14px;
        }
        .c-split-card.editors .c-split-label { color: var(--accent2); }
        .c-split-card.brands  .c-split-label { color: var(--accent); }
        .c-split-h {
          font-family: var(--font-head); font-size: 26px; font-weight: 800;
          letter-spacing: -0.5px; color: var(--white); margin-bottom: 12px; line-height: 1.2;
        }
        .c-split-p { font-size: 14px; color: var(--muted); margin-bottom: 28px; line-height: 1.6; }
        .c-btn-green {
          display: inline-block; background: var(--accent2); color: #080f1e;
          font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 100px;
          text-decoration: none; width: fit-content; transition: all 0.2s;
          border: none; cursor: pointer; font-family: var(--font-body);
        }
        .c-btn-green:hover { background: #fff; }
        .c-btn-blue {
          display: inline-block; background: var(--accent); color: #fff;
          font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 100px;
          text-decoration: none; width: fit-content; transition: all 0.2s;
          border: none; cursor: pointer; font-family: var(--font-body);
        }
        .c-btn-blue:hover { background: #0051d4; }

        /* ── Stats ── */
        .c-stats-wrap {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: 24px; padding: 60px; text-align: center;
        }
        .c-stats-h {
          font-family: var(--font-head); font-size: clamp(28px, 4vw, 40px);
          font-weight: 800; letter-spacing: -1px; margin-bottom: 10px; color: var(--white);
        }
        .c-stats-sub { font-size: 15px; color: var(--muted); margin-bottom: 52px; }
        .c-stats-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: var(--border);
          border-radius: 16px; overflow: hidden;
        }
        .c-stat-box {
          background: var(--navy); padding: 36px 24px;
          display: flex; flex-direction: column; align-items: center;
        }
        .c-stat-big {
          font-family: var(--font-head); font-size: 52px; font-weight: 800;
          letter-spacing: -2px; color: var(--accent); line-height: 1; margin-bottom: 10px;
        }
        .c-stat-desc { font-size: 14px; color: var(--muted); }

        /* ── Footer ── */
        .c-footer {
          border-top: 1px solid var(--border);
          padding: 48px 0 40px; text-align: center;
          background: var(--navy2);
        }
        .c-footer-logo { font-family: var(--font-head); font-size: 22px; font-weight: 800; color: var(--accent); margin-bottom: 10px; }
        .c-footer-tag { font-size: 14px; color: var(--muted); margin-bottom: 24px; }
        .c-footer-links { display: flex; gap: 24px; justify-content: center; }
        .c-footer-links a { font-size: 13px; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .c-footer-links a:hover { color: var(--white); }

        /* ── Dashboard ── */
        .c-dash-hero { padding: 60px 0 40px; }
        .c-dash-greeting {
          font-family: var(--font-head); font-size: clamp(28px, 4vw, 42px);
          font-weight: 800; letter-spacing: -1px; margin-bottom: 10px;
        }
        .c-dash-sub { font-size: 16px; color: var(--muted); margin-bottom: 36px; }
        .c-progress-wrap { margin-bottom: 52px; }
        .c-progress-label {
          display: flex; justify-content: space-between;
          font-size: 13px; color: var(--muted); margin-bottom: 10px;
        }
        .c-progress-bar {
          background: var(--border); border-radius: 100px; height: 6px; overflow: hidden;
        }
        .c-progress-fill {
          background: linear-gradient(90deg, var(--accent), var(--accent2));
          height: 100%; border-radius: 100px; width: 8%;
        }
        .c-lesson-card {
          background: var(--card-bg); border: 1px solid var(--border);
          border-radius: var(--radius); padding: 26px 24px;
          cursor: pointer; position: relative;
          transition: border-color 0.2s, transform 0.2s;
        }
        .c-lesson-card:hover { border-color: rgba(0,97,253,0.35); transform: translateY(-2px); }
        .c-lesson-card.is-done { border-color: rgba(69,224,100,0.2); }
        .c-lesson-card.is-locked { opacity: 0.5; cursor: default; }
        .c-lesson-card.is-locked:hover { transform: none; border-color: var(--border); }
        .c-lesson-status {
          position: absolute; top: 18px; right: 18px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          padding: 4px 10px; border-radius: 100px;
        }
        .status-next { background: rgba(0,97,253,0.12); color: var(--accent); border: 1px solid rgba(0,97,253,0.25); }
        .status-done { background: rgba(69,224,100,0.1); color: var(--accent2); border: 1px solid rgba(69,224,100,0.25); }
        .status-lock { background: var(--card-bg); color: var(--muted); border: 1px solid var(--border); }

        /* ── Lesson detail ── */
        .c-lesson-hero { padding: 60px 0 40px; border-bottom: 1px solid var(--border); margin-bottom: 52px; }
        .c-lesson-big {
          font-family: var(--font-head); font-size: clamp(28px, 4vw, 48px);
          font-weight: 800; letter-spacing: -1.5px; line-height: 1.08;
          color: var(--white); margin-bottom: 16px;
        }
        .c-lesson-tagline { font-size: 18px; color: var(--muted); max-width: 560px; line-height: 1.6; }
        .c-what-list { display: flex; flex-direction: column; gap: 0; margin-bottom: 52px; }
        .c-what-item {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 20px 0; border-bottom: 1px solid var(--border);
          font-size: 15px; color: var(--muted); line-height: 1.6;
        }
        .c-what-item::before {
          content: '→'; color: var(--accent2); flex-shrink: 0;
          font-size: 16px; margin-top: 1px;
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .c-hero          { grid-template-columns: 1fr; gap: 40px; padding: 60px 0 48px; }
          .c-steps         { grid-template-columns: 1fr; }
          .c-skills-grid   { grid-template-columns: 1fr 1fr; }
          .c-split         { grid-template-columns: 1fr; }
          .c-stats-grid    { grid-template-columns: 1fr; }
          .c-connector     { display: none; }
          .c-nav           { flex-wrap: wrap; gap: 16px; }
          .c-nav-links     { flex-wrap: wrap; }
        }
      `}</style>

      {/* ── NAV — adapts per screen ── */}
      <div style={{ background: "var(--navy)" }}>
        <div className="c-page">
          <nav className="c-nav">
            <button className="c-logo" onClick={() => setScreen("home")}>
              Con<span>nected</span>
            </button>
            <div className="c-nav-links">
              {screen === "home" && (
                <>
                  <Link href="#how-it-works">How it works</Link>
                  <Link href="/company">For brands</Link>
                  <Link href="/login">Login</Link>
                  <button className="nav-cta" onClick={() => setScreen("dashboard")}>
                    Learner dashboard
                  </button>
                </>
              )}
              {screen === "dashboard" && (
                <button className="c-nav-back" onClick={() => setScreen("home")}>
                  ← Back to home
                </button>
              )}
              {screen === "lesson" && (
                <>
                  <button className="c-nav-back" onClick={() => setScreen("dashboard")}>
                    ← Back to dashboard
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SCREEN: HOME
      ══════════════════════════════════════ */}
      {screen === "home" && (
        <>
          <div style={{ background: "var(--navy)" }}>
            <div className="c-page">
              <div className="c-hero">
                <div>
                  <div className="c-hero-eyebrow">Short-form video editing</div>
                  <h1>Land your first paid editing client <em>in 30 days.</em></h1>
                  <p className="c-hero-sub">
                    Learn short-form video editing, build a real portfolio, and get matched with
                    creators and brands that need fresh talent. No experience needed.
                  </p>
                  <div className="c-btn-row">
                    <button className="c-btn-primary" onClick={() => setScreen("dashboard")}>
                      Start learning free
                    </button>
                    <Link href="/company" className="c-btn-secondary">Hire editors →</Link>
                  </div>
                  <p className="c-hero-note">No credit card required · Every number tracked honestly</p>
                </div>

                <div className="c-hero-card">
                  <div className="c-card-label">Platform overview</div>
                  <div className="c-platform-badge">🎬 Short-form video focus</div>
                  <div className="c-stat-row">
                    <div className="c-stat-item">
                      <span className="c-stat-label">Editors trained</span>
                      <span className="c-stat-value">0</span>
                    </div>
                    <div className="c-stat-divider" />
                    <div className="c-stat-item">
                      <span className="c-stat-label">Brand shortlist requests</span>
                      <span className="c-stat-value">0</span>
                    </div>
                    <div className="c-stat-divider" />
                    <div className="c-stat-item">
                      <span className="c-stat-label">Successful matches</span>
                      <span className="c-stat-value">0</span>
                    </div>
                  </div>
                  <Link href="/about" className="c-card-cta">Every number tracked honestly as we grow →</Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "var(--navy2)" }}>
            <div className="c-page">
              <div className="c-platform-strip">
                <div className="c-platform-inner">
                  <span className="c-platform-label">We train editors for</span>
                  <span className="c-platform-item">TikTok</span>
                  <span className="c-platform-dot" />
                  <span className="c-platform-item">Instagram Reels</span>
                  <span className="c-platform-dot" />
                  <span className="c-platform-item">YouTube Shorts</span>
                  <span className="c-platform-dot" />
                  <span className="c-platform-item">LinkedIn Video</span>
                  <span className="c-platform-dot" />
                  <span className="c-platform-item">Snapchat</span>
                </div>
              </div>

              <div className="c-section" id="how-it-works">
                <div className="c-tag">The path</div>
                <h2 className="c-section-head">How Connected works</h2>
                <p className="c-section-sub">Three clear steps from complete beginner to client-ready freelancer.</p>
                <div className="c-steps">
                  <div className="c-step-card">
                    <div className="c-step-num">01</div>
                    <div className="c-step-icon green">🎬</div>
                    <div className="c-step-h">Master short-form editing</div>
                    <p className="c-step-p">Learn hooks, pacing, captions, retention editing, and the tools creators actually use — all focused on TikTok, Reels, and Shorts.</p>
                    <div className="c-connector" />
                  </div>
                  <div className="c-step-card">
                    <div className="c-step-num">02</div>
                    <div className="c-step-icon blue">📁</div>
                    <div className="c-step-h">Build a real portfolio</div>
                    <p className="c-step-p">Real project briefs, real feedback, and portfolio-ready deliverables that prove your skill to any brand or creator.</p>
                    <div className="c-connector" />
                  </div>
                  <div className="c-step-card">
                    <div className="c-step-num">03</div>
                    <div className="c-step-icon white">🤝</div>
                    <div className="c-step-h">Get matched with clients</div>
                    <p className="c-step-p">We connect trained editors with creators and brands actively looking for short-form content help. No cold pitching required.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-page">
            <div className="c-section">
              <div className="c-tag">The curriculum</div>
              <h2 className="c-section-head">Everything you'll learn</h2>
              <p className="c-section-sub">Every lesson is built around what brands and creators actually need from a hired editor.</p>
              <div className="c-skills-grid">
                {lessons.map((l) => (
                  <div
                    key={l.id}
                    className="c-skill-card"
                    onClick={() => openLesson(l)}
                  >
                    <div className="c-skill-week">{l.week}</div>
                    <div className="c-skill-h">{l.title}</div>
                    <p className="c-skill-p">{l.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="c-section" style={{ paddingTop: 0 }}>
              <div className="c-split">
                <div className="c-split-card editors">
                  <div className="c-split-bg">E</div>
                  <div className="c-split-label">For beginner editors</div>
                  <div className="c-split-h">Go from zero to your first paid client</div>
                  <p className="c-split-p">A focused 30-day path to learn editing, build a portfolio that proves your skills, and land your first real client.</p>
                  <button className="c-btn-green" onClick={() => setScreen("dashboard")}>Start learning free</button>
                </div>
                <div className="c-split-card brands">
                  <div className="c-split-bg">B</div>
                  <div className="c-split-label">For creators &amp; brands</div>
                  <div className="c-split-h">Find editors who are trained and ready</div>
                  <p className="c-split-p">Skip the search. Get access to motivated, trained editors who understand short-form content and can start immediately.</p>
                  <Link href="/company" className="c-btn-blue">Browse editors</Link>
                </div>
              </div>
            </div>

            <div className="c-section">
              <div className="c-stats-wrap">
                <h2 className="c-stats-h">Built from zero. Every number is real.</h2>
                <p className="c-stats-sub">
                  Connected is brand new. No inflated stats, no fake social proof. Every editor,
                  match, and request will be tracked honestly as the platform grows.
                </p>
                <div className="c-stats-grid">
                  <div className="c-stat-box">
                    <div className="c-stat-big">0</div>
                    <div className="c-stat-desc">Editors trained so far</div>
                  </div>
                  <div className="c-stat-box">
                    <div className="c-stat-big">0</div>
                    <div className="c-stat-desc">Brand shortlist requests</div>
                  </div>
                  <div className="c-stat-box">
                    <div className="c-stat-big">0</div>
                    <div className="c-stat-desc">Successful matches made</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="c-footer">
            <div className="c-page">
              <div className="c-footer-logo">Connected</div>
              <p className="c-footer-tag">Learn short-form editing. Build proof. Get hired.</p>
              <div className="c-footer-links">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* ══════════════════════════════════════
          SCREEN: DASHBOARD
      ══════════════════════════════════════ */}
      {screen === "dashboard" && (
        <div style={{ background: "var(--navy)", minHeight: "100vh" }}>
          <div className="c-page">
            <div className="c-dash-hero">
              <div className="c-tag">Your learning path</div>
              <h1 className="c-dash-greeting">Learner dashboard</h1>
              <p className="c-dash-sub">Track your progress and pick up where you left off.</p>
              <div className="c-progress-wrap">
                <div className="c-progress-label">
                  <span>Overall progress</span>
                  <span>1 of 6 lessons complete</span>
                </div>
                <div className="c-progress-bar">
                  <div className="c-progress-fill" />
                </div>
              </div>
            </div>

            <div className="c-tag">Your lessons</div>
            <div className="c-skills-grid" style={{ marginBottom: 52 }}>
              {lessons.map((l) => (
                <div
                  key={l.id}
                  className={`c-lesson-card ${l.status === "done" ? "is-done" : ""} ${l.status === "locked" ? "is-locked" : ""}`}
                  onClick={() => l.status !== "locked" && openLesson(l)}
                >
                  <span className={`c-lesson-status ${l.status === "next" ? "status-next" : l.status === "done" ? "status-done" : "status-lock"}`}>
                    {l.status === "next" ? "Next up" : l.status === "done" ? "✓ Done" : "🔒 Locked"}
                  </span>
                  <div className="c-skill-week">{l.week}</div>
                  <div className="c-skill-h">{l.title}</div>
                  <p className="c-skill-p">{l.desc}</p>
                </div>
              ))}
            </div>

            {/* Upgrade nudge — no payment code, just a placeholder CTA */}
            <div
              style={{
                background: "var(--card-bg)", border: "1px solid var(--border)",
                borderRadius: "var(--radius)", padding: "32px 36px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: 24, marginBottom: 88,
              }}
            >
              <div>
                <div className="c-tag" style={{ marginBottom: 8 }}>Unlock everything</div>
                <div style={{ fontFamily: "var(--font-head)", fontSize: 20, fontWeight: 800, marginBottom: 6 }}>
                  Weeks 2–4 + the brand matching network
                </div>
                <p style={{ fontSize: 14, color: "var(--muted)" }}>
                  Complete all 6 lessons and get matched with real creators and brands.
                </p>
              </div>
              <button className="c-btn-primary" style={{ whiteSpace: "nowrap" }}>
                Get full access →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          SCREEN: LESSON DETAIL
      ══════════════════════════════════════ */}
      {screen === "lesson" && activeLesson && (
        <div style={{ background: "var(--navy)", minHeight: "100vh" }}>
          <div className="c-page">
            <div className="c-lesson-hero">
              <div className="c-tag">{activeLesson.week}</div>
              <h1 className="c-lesson-big">{activeLesson.title}</h1>
              <p className="c-lesson-tagline">{activeLesson.tagline}</p>
            </div>

            <div className="c-tag" style={{ marginBottom: 24 }}>What you'll learn</div>
            <div className="c-what-list">
              {activeLesson.what.map((item, i) => (
                <div key={i} className="c-what-item">{item}</div>
              ))}
            </div>

            {/* Intro video placeholder */}
            <div className="c-tag" style={{ marginBottom: 16 }}>Intro video</div>
            <div
              style={{
                background: "var(--card-bg)", border: "1px solid var(--border)",
                borderRadius: "var(--radius)", height: 220,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 14, marginBottom: 52,
              }}
            >
              <div
                style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: "var(--accent)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 20, paddingLeft: 4, cursor: "pointer",
                }}
              >
                ▶
              </div>
              <span style={{ fontSize: 14, color: "var(--muted)" }}>
                Intro video — {activeLesson.title}
              </span>
            </div>

            {/* Payment placeholder — no code, just a slot */}
            <div
              style={{
                background: "var(--card-bg)", border: "1px solid var(--border)",
                borderRadius: 24, padding: "44px 40px", marginBottom: 88,
                textAlign: "center",
              }}
            >
              <div className="c-tag" style={{ justifyContent: "center", marginBottom: 16 }}>
                Continue learning
              </div>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: 28, fontWeight: 800, letterSpacing: -1, marginBottom: 12 }}>
                Ready to unlock the full program?
              </h2>
              <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
                Get access to all 6 lessons, real project briefs, and the brand matching network.
                Payment details go here.
              </p>
              {/* ↓ Payment UI slot — insert your payment component here */}
              <div
                style={{
                  border: "1px dashed var(--border)", borderRadius: "var(--radius)",
                  padding: "28px 24px", fontSize: 13, color: "var(--muted)",
                  maxWidth: 400, margin: "0 auto",
                }}
              >
                [ Payment component slot ]
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
