"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const supabase = createClient();

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (err) {
      setError(err.message);
      setLoading(false);
    } else {
      // Auto-sign in
      const { error: signInErr } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signInErr) {
        setError(signInErr.message);
        setLoading(false);
      } else {
        router.push(redirect);
        router.refresh();
      }
    }
  }

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-extrabold tracking-tight uppercase">Status</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
        <h1 className="text-2xl font-extrabold mb-1">Create your account</h1>
        <p className="text-muted text-sm mb-6">Join STATUS and start saving on HVAC</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1.5">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              placeholder="Min 6 characters"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full gradient-bg text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[48px] text-sm"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-muted mt-6">
          Already have an account?{" "}
          <Link href={`/login${redirect !== "/" ? `?redirect=${redirect}` : ""}`} className="text-primary font-semibold hover:underline">
            Sign in
          </Link>
        </p>
      </div>

      {/* Trust signals */}
      <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted">
        {["256-bit encryption", "No spam, ever", "Free to join"].map((t) => (
          <span key={t} className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <div className="w-full max-w-md">
        <div className="animate-pulse bg-surface rounded-2xl h-[500px]" />
      </div>
    }>
      <SignupForm />
    </Suspense>
  );
}
