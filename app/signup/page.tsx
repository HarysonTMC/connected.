"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Editor");
  const [message, setMessage] = useState("");

  async function handleSignup() {
    setMessage("Creating account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: role,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Account created! Check your email to confirm your account.");
  }

  return (
    <main className="container section">
      <div className="card" style={{ maxWidth: 560, margin: "auto" }}>
        <h1>Create your Connected account</h1>
        <p className="muted">Signup for learners or companies.</p>

        <input
          className="input"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Learner</option>
          <option>Company</option>
        </select>

        <button className="btn" onClick={handleSignup}>
          Create account
        </button>

        {message && <p style={{ marginTop: 16 }}>{message}</p>}

        <p style={{ marginTop: 20 }}>
          Already have an account?{" "}
          <button onClick={() => router.push("/login")}>Login</button>
        </p>
      </div>
    </main>
  );
}
