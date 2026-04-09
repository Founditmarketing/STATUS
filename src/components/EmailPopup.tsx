"use client";

import { useState, useEffect, useCallback } from "react";

const DISMISS_KEY = "status_email_popup_dismissed";
const DISMISS_DAYS = 30;

export default function EmailPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if dismissed recently
    const dismissedAt = localStorage.getItem(DISMISS_KEY);
    if (dismissedAt) {
      const daysSince = (Date.now() - Number(dismissedAt)) / (1000 * 60 * 60 * 24);
      if (daysSince < DISMISS_DAYS) return;
    }

    // Show after 8 seconds
    const timer = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = useCallback(() => {
    setShow(false);
    localStorage.setItem(DISMISS_KEY, String(Date.now()));
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    // Save to localStorage as backup
    try {
      const existing = JSON.parse(localStorage.getItem("status_subscribers") || "[]");
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem("status_subscribers", JSON.stringify(existing));
    } catch { /* ignore */ }

    setSubmitted(true);
    setTimeout(() => {
      handleDismiss();
    }, 3000);
  }

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="fixed inset-x-4 bottom-4 sm:inset-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[201] max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
          {/* Header gradient */}
          <div className="gradient-bg px-6 py-8 text-center text-white relative">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-3xl mb-2">❄️</div>
            <h3 className="text-xl font-extrabold mb-1">Get $100 Off</h3>
            <p className="text-white/80 text-sm">Your first STATUS mini-split system</p>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-bold text-lg">You&apos;re in!</p>
                <p className="text-muted text-sm mt-1">Check your email for your $100 off code.</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted text-center mb-4">
                  Join 2,000+ homeowners who chose DIY comfort. Get exclusive deals and installation tips.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                    autoFocus
                  />
                  {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
                  <button
                    type="submit"
                    className="w-full gradient-bg text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                  >
                    Get My $100 Off Code
                  </button>
                </form>
                <p className="text-xs text-muted text-center mt-3">No spam. Unsubscribe anytime.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
