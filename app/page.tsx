import Link from "next/link";
import { courses } from "@/lib/courseData";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      <div style={{background:"#0f172a",color:"white"}}>
        <div className="container">
          <nav className="nav">
            <div className="logo">Upskill</div>
            <div className="links">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/company">Companies</Link>
              <Link href="/login">Login</Link>
              <Link href="/signup">Signup</Link>
            </div>
          </nav>
          <div className="hero">
            <div>
              <h1>Learn real skills. Build proof. Get discovered.</h1>
              <p>Upskill helps people follow structured course paths, track progress, build portfolios, and become visible to companies looking for freelance talent.</p>
              <Link className="btn btn-light" href="/signup">Start learning</Link>
              <Link className="btn" href="/company">Find talent</Link>
            </div>
            <div className="card" style={{color:"#172033"}}>
              <h2>Brand-new platform</h2>
              <p className="muted">No fake statistics. Achievement numbers start at zero and update only from real activity.</p>
              <p><strong>0</strong> verified skills completed</p>
              <p><strong>0</strong> company shortlists created</p>
              <p><strong>0</strong> learners placed</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container section">
        <h2>Structured skill pathways</h2>
        <p className="muted">Each pathway is built around practical lessons and portfolio proof.</p>
        <div className="grid">
          {courses.map(course => (
            <div className="card" key={course.id}>
              <h3>{course.title}</h3>
              <p className="muted">{course.level}</p>
              {course.lessons.slice(0,3).map(l => <span className="tag" key={l}>{l}</span>)}
            </div>
          ))}
        </div>
      </main>

      <PricingSection />

      <footer className="footer">
        <div className="container">
          <strong>Upskill</strong>
          <p>Learn skills. Build proof. Get discovered.</p>
          <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms</Link>
        </div>
      </footer>
    </>
  );
}
