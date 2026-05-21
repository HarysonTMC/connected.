"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("learner");
  const [message, setMessage] = useState("");

  async function createAccount() {
    setMessage("Creating account...");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role
        }
      }
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Account created. Check your email to confirm your account, then login.");
  }

  return (
    <main className="container section">
      <div className="card" style={{maxWidth:560,margin:"auto"}}>
        <h1>Create your Connected account</h1>
        <p className="muted">Signup for learners or companies.</p>

        <input className="input" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <select className="input" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="learner">Learner</option>
          <option value="company">Company</option>
        </select>

        <button className="btn" onClick={createAccount}>Create account</button>

        {message && <p style={{marginTop:16}}>{message}</p>}
      </div>
    </main>
  );
}
