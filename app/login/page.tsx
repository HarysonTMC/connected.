"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login() {
    setMessage("Logging in...");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="container section">
      <div className="card" style={{maxWidth:520,margin:"auto"}}>
        <h1>Login</h1>
        <p className="muted">Login with your Connected account.</p>

        <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button className="btn" onClick={login}>Login</button>

        {message && <p style={{marginTop:16}}>{message}</p>}
      </div>
    </main>
  );
}
