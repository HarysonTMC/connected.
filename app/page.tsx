import Link from "next/link";

// ─── Global styles (paste into your globals.css) ───────────────────────────
// @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

export default function Home() {
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

        /* ── Layout ── */
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
        }
        .c-logo span { color: var(--white); }
        .c-nav-links { display: flex; align-items: center; gap: 8px; }
        .c-nav-links a {
          font-family: var(--font-body); font-size: 14px; font-weight: 500;
          color: var(--muted); text-decoration: none;
          padding: 8px 16px; border-radius: 100px; border: 1px solid transparent;
          transition: all 0.2s;
        }
        .c-nav-links a:hover { color: var(--white); border-color: var(--border); }
        .c-nav-links a.nav-cta {
          background: var(--accent); color: #fff;
          border-color: var(--accent); font-weight: 600;
        }
        .c-nav-links a.nav-cta:hover { background: #0051d4; border-color: #0051d4; }

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
          transition: all 0.2s;
        }
        .c-btn-primary:hover { background: #0051d4; transform: translateY(-1px); }
        .c-btn-secondary {
          display: inline-block; background: transparent; color: var(--white);
          font-family: var(--font-body); font-size: 15px; font-weight: 500;
          padding: 14px 28px; border-radius: 100px; text-decoration: none;
          border: 1px solid var(--border); transition: all 0.2s;
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
          transition: all 0.2s; margin-top: 8px;
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
        }
        .c-btn-green:hover { background: #fff; }
        .c-btn-blue {
          display: inline-block; background: var(--accent); color: #fff;
          font-weight: 600; font-size: 14px; padding: 12px 24px; border-radius: 100px;
          text-decoration: none; width: fit-content; transition: all 0.2s;
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

      {/* ── NAV ── */}
      <div style={{ background: "var(--navy)" }}>
        <div className="c-page">
          <nav className="c-nav">
            <Link href="/" className="c-logo">Con<span>nected</span></Link>
            <div className="c-nav-links">
              <Link href="#how-it-works">How it works</Link>
              <Link href="/company">For brands</Link>
              <Link href="/login">Login</Link>
              <Link href="/signup" className="nav-cta">Start learning</Link>
            </div>
          </nav>

          {/* ── HERO ── */}
          <div className="c-hero">
            <div>
              <div className="c-hero-eyebrow">Short-form video editing</div>
              <h1>Land your first paid editing client <em>in 30 days.</em></h1>
              <p className="c-hero-sub">
                Learn short-form video editing, build a real portfolio, and get matched with
                creators and brands that need fresh talent. No experience needed.
              </p>
              <div className="c-btn-row">
                <Link href="/signup" className="c-btn-primary">Start learning free</Link>
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

      {/* ── PLATFORM STRIP ── */}
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

          {/* ── HOW IT WORKS ── */}
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

      {/* ── CURRICULUM ── */}
      <div className="c-page">
        <div className="c-section">
          <div className="c-tag">The curriculum</div>
          <h2 className="c-section-head">Everything you'll learn</h2>
          <p className="c-section-sub">Every lesson is built around what brands and creators actually need from a hired editor.</p>
          <div className="c-skills-grid">
            <div className="c-skill-card">
              <div className="c-skill-week">Week 1</div>
              <div className="c-skill-h">Hooks &amp; first 3 seconds</div>
              <p className="c-skill-p">Learn to open videos so well that viewers have no choice but to keep watching.</p>
            </div>
            <div className="c-skill-card">
              <div className="c-skill-week">Week 1</div>
              <div className="c-skill-h">Captions &amp; subtitles</div>
              <p className="c-skill-p">Style, timing, and placement that improve retention and accessibility simultaneously.</p>
            </div>
            <div className="c-skill-card">
              <div className="c-skill-week">Week 2</div>
              <div className="c-skill-h">Pacing &amp; cuts</div>
              <p className="c-skill-p">Zooms, timing, sound design, and transitions built for the short-form attention span.</p>
            </div>
            <div className="c-skill-card">
              <div className="c-skill-week">Week 2</div>
              <div className="c-skill-h">Retention editing</div>
              <p className="c-skill-p">Understand what makes viewers reach the end — and structure every edit around that goal.</p>
            </div>
            <div className="c-skill-card">
              <div className="c-skill-week">Week 3</div>
              <div className="c-skill-h">Portfolio building</div>
              <p className="c-skill-p">Real briefs, real revisions, and a finished portfolio a hiring brand can actually judge.</p>
            </div>
            <div className="c-skill-card">
              <div className="c-skill-week">Week 4</div>
              <div className="c-skill-h">Client readiness</div>
              <p className="c-skill-p">Communication, briefs, revisions, invoicing — everything you need to work with real paying clients.</p>
            </div>
          </div>
        </div>

        {/* ── SPLIT CTA ── */}
        <div className="c-section" style={{ paddingTop: 0 }}>
          <div className="c-split">
            <div className="c-split-card editors">
              <div className="c-split-bg">E</div>
              <div className="c-split-label">For beginner editors</div>
              <div className="c-split-h">Go from zero to your first paid client</div>
              <p className="c-split-p">A focused 30-day path to learn editing, build a portfolio that proves your skills, and land your first real client.</p>
              <Link href="/signup" className="c-btn-green">Start learning free</Link>
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

        {/* ── STATS ── */}
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

      {/* ── FOOTER ── */}
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
  );
}
