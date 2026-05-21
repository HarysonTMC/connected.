import Link from "next/link";
import PricingSection from "../components/PricingSection";

export default function Home() {
  return (
    <>
      <div style={{ background: "#0f172a", color: "white" }}>
        <div className="container">
          <nav className="nav">
            <div className="logo">Connected</div>
            <div className="links">
              <Link href="/signup">Start Learning</Link>
              <Link href="/company">Hire Editors</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>

          <div className="hero">
            <div>
              <h1>Get your first paid editing client in 30 days.</h1>
              <p>
                Learn short-form video editing, build a portfolio, and get
                matched with creators and brands looking for fresh editors.
              </p>

              <Link className="btn btn-light" href="/signup">
                Start Learning
              </Link>

              <Link className="btn" href="/company">
                Hire Editors
              </Link>

              <p style={{ marginTop: 18, color: "#cbd5e1" }}>
                No experience needed. Just start.
              </p>
            </div>

            <div className="card" style={{ color: "#172033" }}>
              <h2>Built for short-form editors</h2>
              <p className="muted">
                TikTok, Reels, Shorts, captions, hooks, pacing, retention, and
                portfolio-ready projects.
              </p>
              <p>
                <strong>0</strong> verified editors trained
              </p>
              <p>
                <strong>0</strong> company shortlist requests
              </p>
              <p>
                <strong>0</strong> successful matches
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container section">
        <h2>How Connected works</h2>
        <p className="muted">
          A focused path from beginner editor to client-ready freelancer.
        </p>

        <div className="grid">
          <div className="card">
            <h3>1. Learn editing</h3>
            <p className="muted">
              Master short-form content for TikTok, Instagram Reels, and
              YouTube Shorts.
            </p>
          </div>

          <div className="card">
            <h3>2. Build your portfolio</h3>
            <p className="muted">
              Create real edits that prove your skill before applying for paid
              work.
            </p>
          </div>

          <div className="card">
            <h3>3. Get matched</h3>
            <p className="muted">
              We help connect trained editors with creators, businesses, and
              brands that need content.
            </p>
          </div>
        </div>
      </main>

      <section className="container section">
        <h2>What you’ll learn</h2>
        <p className="muted">
          Everything is focused on becoming useful to creators and brands.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Hooks</h3>
            <p className="muted">
              Learn how to make the first 3 seconds strong enough to keep people
              watching.
            </p>
          </div>

          <div className="card">
            <h3>Captions</h3>
            <p className="muted">
              Create clean captions and subtitles that improve retention and
              make videos easier to watch.
            </p>
          </div>

          <div className="card">
            <h3>Pacing</h3>
            <p className="muted">
              Learn cuts, zooms, timing, sound, and structure for short-form
              content.
            </p>
          </div>

          <div className="card">
            <h3>Retention editing</h3>
            <p className="muted">
              Understand how to keep viewers watching until the end.
            </p>
          </div>

          <div className="card">
            <h3>Portfolio building</h3>
            <p className="muted">
              Build proof that companies and creators can actually judge.
            </p>
          </div>

          <div className="card">
            <h3>Client readiness</h3>
            <p className="muted">
              Learn communication, delivery, revisions, and how to work with
              real clients.
            </p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid2">
          <div className="card">
            <h2>For beginner editors</h2>
            <p className="muted">
              Connected gives you a clear path to learn editing, build proof,
              and become ready for your first client.
            </p>
            <Link className="btn" href="/signup">
              Start Learning
            </Link>
          </div>

          <div className="card">
            <h2>For creators and brands</h2>
            <p className="muted">
              Skip the search. Get access to beginner editors who are trained,
              motivated, and ready to create short-form content.
            </p>
            <Link className="btn" href="/company">
              Find Editors
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Built from zero, no fake numbers</h2>
        <p className="muted">
          Connected is brand new. Every match, editor, and company request will
          be tracked honestly as the platform grows.
        </p>

        <div className="grid">
          <div className="card">
            <h3>0</h3>
            <p className="muted">Editors trained</p>
          </div>

          <div className="card">
            <h3>0</h3>
            <p className="muted">Company requests</p>
          </div>

          <div className="card">
            <h3>0</h3>
            <p className="muted">Matches made</p>
          </div>
        </div>
      </section>

      <PricingSection />

      <footer className="footer">
        <div className="container">
          <strong>Connected</strong>
          <p>Learn short-form editing. Build proof. Get hired.</p>
          <Link href="/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/terms">Terms</Link>
        </div>
      </footer>
    </>
  );
}
