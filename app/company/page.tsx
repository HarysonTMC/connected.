export default function Company() {
  return (
    <main className="container section">
      <div className="grid2">
        <div>
          <h1>Shortlist talent</h1>
          <p className="muted">Tell Upskill exactly what kind of learner or freelancer your company needs.</p>
        </div>
        <div className="card">
          <input className="input" placeholder="Company name" />
          <input className="input" placeholder="Work email" />
          <select className="input"><option>Skill needed</option><option>Video Editing</option><option>Graphic Design</option><option>Website Building</option><option>Copywriting</option><option>Social Media</option><option>Virtual Assistant</option><option>AI Automation</option></select>
          <select className="input"><option>Experience level</option><option>Beginner but trained</option><option>Intermediate</option><option>Advanced</option></select>
          <textarea className="input" placeholder="Describe the task, timeline, and ideal person..." />
          <button className="btn">Create shortlist request</button>
        </div>
      </div>
    </main>
  );
}
