"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { courses } from "@/lib/courseData";

export default function Dashboard() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setEmail(data.user?.email || "");
    }
    getUser();
  }, []);

  return (
    <main className="container section">
      <h1>Learner Dashboard</h1>
      {email ? <p className="muted">Logged in as {email}</p> : <p className="muted">You are not logged in yet.</p>}
      <p className="muted">Track lessons, badges, profile strength, and company-readiness.</p>

      <div className="grid">
        {courses.map(course => (
          <div className="card" key={course.id}>
            <h3>{course.title}</h3>
            <p className="muted">{course.level}</p>
            <progress value={0} max={course.lessons.length} style={{width:"100%"}} />
            <ol>
              {course.lessons.map(lesson => <li key={lesson}>{lesson}</li>)}
            </ol>
          </div>
        ))}
      </div>
    </main>
  );
}
