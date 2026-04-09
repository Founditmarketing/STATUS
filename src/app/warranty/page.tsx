"use client";

import { useState } from "react";
import Link from "next/link";
import { bundles, accessories, type Product } from "@/lib/products";
import { useToast } from "@/components/Toast";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const allSystems: Product[] = [...bundles, ...accessories];

export default function WarrantyPage() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState<"info" | "register">("info");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    productId: "",
    serialNumber: "",
    purchaseDate: "",
    purchaseFrom: "status-website",
    orderNumber: "",
  });

  function update(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Save to localStorage
    try {
      const registrations = JSON.parse(localStorage.getItem("status_warranty_registrations") || "[]");
      registrations.push({ ...form, registeredAt: new Date().toISOString() });
      localStorage.setItem("status_warranty_registrations", JSON.stringify(registrations));
    } catch { /* ignore */ }

    // Simulate brief processing
    await new Promise((r) => setTimeout(r, 1000));

    setSubmitted(true);
    setLoading(false);
    addToast("Warranty registered successfully!", "success");
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Industry-Leading Protection
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            STATUS <span className="gradient-text">Warranty</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Every STATUS system is backed by our comprehensive warranty program. 
            We stand behind our products because we know they&apos;re built to last.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex bg-surface rounded-xl p-1 border border-border/50">
            <button
              onClick={() => setActiveTab("info")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "info"
                  ? "gradient-bg text-white shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Warranty Coverage
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "register"
                  ? "gradient-bg text-white shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Register Your System
            </button>
          </div>
        </div>
      </section>

      {activeTab === "info" ? (
        <>
          {/* Coverage Tiers */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Compressor */}
                <div className="bg-surface rounded-2xl border border-border/50 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-bg" />
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-1">7 Years</h3>
                  <p className="text-primary font-semibold text-sm mb-4">Compressor Warranty</p>
                  <p className="text-muted text-sm leading-relaxed">
                    The heart of your system — fully covered for 7 years from the date of purchase. 
                    Includes replacement compressor and labor reimbursement.
                  </p>
                </div>

                {/* Parts */}
                <div className="bg-surface rounded-2xl border border-border/50 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-1">5 Years</h3>
                  <p className="text-emerald-600 font-semibold text-sm mb-4">Parts Warranty</p>
                  <p className="text-muted text-sm leading-relaxed">
                    All functional parts — motors, circuit boards, coils, expansion valves, and sensors — 
                    covered for 5 years. No fine print.
                  </p>
                </div>

                {/* Satisfaction */}
                <div className="bg-surface rounded-2xl border border-border/50 p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5">
                    <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-1">30 Days</h3>
                  <p className="text-amber-600 font-semibold text-sm mb-4">Satisfaction Guarantee</p>
                  <p className="text-muted text-sm leading-relaxed">
                    Not satisfied? Return within 30 days for a full refund. We&apos;ll even cover return 
                    shipping if the system is defective.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Covered */}
          <section className="py-16 sm:py-20 bg-surface">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">
                What&apos;s <span className="gradient-text">Covered</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Covered */}
                <div className="bg-white rounded-2xl border border-border/50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-emerald-700">Covered</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Compressor failure or malfunction",
                      "Fan motor defects (indoor & outdoor)",
                      "Electronic control board failures",
                      "Refrigerant leaks from factory joints",
                      "Heat exchanger / evaporator coils",
                      "Expansion valve defects",
                      "Temperature & pressure sensors",
                      "Factory wiring harness defects",
                      "WiFi module hardware failure",
                      "Remote control hardware defects",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Covered */}
                <div className="bg-white rounded-2xl border border-border/50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-red-600">Not Covered</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Damage from improper installation",
                      "Normal wear and tear on filters",
                      "Cosmetic damage (dents, scratches)",
                      "Power surge / lightning damage",
                      "Unauthorized modifications",
                      "Damage from natural disasters",
                      "Commercial / non-residential use",
                      "Refrigerant recharge (unless leak)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">
                How to File a <span className="gradient-text">Warranty Claim</span>
              </h2>

              <div className="space-y-0">
                {[
                  {
                    step: 1,
                    title: "Contact Us",
                    desc: "Call 1-888-STATUS-1 or email warranty@statusdiy.com with your order number and a description of the issue.",
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  },
                  {
                    step: 2,
                    title: "Diagnostic Support",
                    desc: "Our HVAC team will walk you through basic troubleshooting. Most issues can be resolved over the phone in minutes.",
                    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                  },
                  {
                    step: 3,
                    title: "Replacement Shipped",
                    desc: "If a part is defective, we ship the replacement at no cost. For compressor claims, we also reimburse reasonable labor costs.",
                    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
                  },
                ].map((s, i) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {s.step}
                      </div>
                      {i < 2 && <div className="w-px h-full bg-border my-2 min-h-[40px]" />}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 bg-foreground text-white text-center">
            <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-2xl font-extrabold mb-3">Ready to Register?</h2>
              <p className="text-white/70 mb-6">Activate your full warranty protection in under 2 minutes.</p>
              <button
                onClick={() => { setActiveTab("register"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-white/90 transition-colors"
              >
                Register Your System
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </section>
        </>
      ) : (
        /* ─── Registration Form ─── */
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30" />
                  <div className="relative w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-extrabold mb-3">Warranty Registered!</h2>
                <p className="text-muted max-w-md mx-auto mb-2">
                  Your STATUS system is now covered under our full warranty program.
                </p>
                <p className="text-sm text-muted mb-8">
                  A confirmation email has been sent to <span className="font-semibold text-foreground">{form.email}</span>
                </p>

                <div className="bg-surface rounded-2xl border border-border/50 p-6 text-left max-w-sm mx-auto mb-8">
                  <h3 className="font-bold text-sm mb-3">Your Coverage</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">Compressor</span>
                      <span className="font-semibold">7 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Parts</span>
                      <span className="font-semibold">5 Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Serial #</span>
                      <span className="font-semibold">{form.serialNumber || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Registered</span>
                      <span className="font-semibold">{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/account"
                    className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    View My Account
                  </Link>
                  <Link
                    href="/support"
                    className="border border-border px-6 py-3 rounded-xl font-semibold text-sm hover:bg-surface transition-colors"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                    Register Your <span className="gradient-text">Warranty</span>
                  </h2>
                  <p className="text-muted max-w-md mx-auto">
                    Complete the form below to activate your 7-year compressor and 5-year parts warranty.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Owner Info */}
                  <div className="bg-surface rounded-2xl border border-border/50 p-6 sm:p-8">
                    <h3 className="font-bold mb-5 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full gradient-bg text-white text-xs font-bold flex items-center justify-center">1</span>
                      Owner Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="w-name" className="block text-sm font-medium mb-1.5">Full Name *</label>
                        <input
                          id="w-name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="w-email" className="block text-sm font-medium mb-1.5">Email *</label>
                          <input
                            id="w-email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="you@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="w-phone" className="block text-sm font-medium mb-1.5">Phone</label>
                          <input
                            id="w-phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="w-address" className="block text-sm font-medium mb-1.5">Installation Address *</label>
                        <input
                          id="w-address"
                          type="text"
                          required
                          value={form.address}
                          onChange={(e) => update("address", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="col-span-2 sm:col-span-1">
                          <label htmlFor="w-city" className="block text-sm font-medium mb-1.5">City *</label>
                          <input
                            id="w-city"
                            type="text"
                            required
                            value={form.city}
                            onChange={(e) => update("city", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="w-state" className="block text-sm font-medium mb-1.5">State *</label>
                          <select
                            id="w-state"
                            required
                            value={form.state}
                            onChange={(e) => update("state", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                          >
                            <option value="">Select</option>
                            {US_STATES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="w-zip" className="block text-sm font-medium mb-1.5">ZIP *</label>
                          <input
                            id="w-zip"
                            type="text"
                            required
                            pattern="[0-9]{5}"
                            value={form.zip}
                            onChange={(e) => update("zip", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="12345"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="bg-surface rounded-2xl border border-border/50 p-6 sm:p-8">
                    <h3 className="font-bold mb-5 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full gradient-bg text-white text-xs font-bold flex items-center justify-center">2</span>
                      Product Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="w-product" className="block text-sm font-medium mb-1.5">System Purchased *</label>
                        <select
                          id="w-product"
                          required
                          value={form.productId}
                          onChange={(e) => update("productId", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="">Select your system</option>
                          <optgroup label="Mini-Split Systems">
                            {bundles.map((b) => (
                              <option key={b.id} value={b.id}>{b.shortName} — ${b.price.toLocaleString()}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Accessories">
                            {accessories.map((a) => (
                              <option key={a.id} value={a.id}>{a.shortName} — ${a.price}</option>
                            ))}
                          </optgroup>
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="w-serial" className="block text-sm font-medium mb-1.5">
                            Serial Number *
                            <span className="text-muted font-normal ml-1">(on outdoor unit label)</span>
                          </label>
                          <input
                            id="w-serial"
                            type="text"
                            required
                            value={form.serialNumber}
                            onChange={(e) => update("serialNumber", e.target.value.toUpperCase())}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all font-mono"
                            placeholder="SDIY-XXXXXXXXXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="w-date" className="block text-sm font-medium mb-1.5">Purchase Date *</label>
                          <input
                            id="w-date"
                            type="date"
                            required
                            value={form.purchaseDate}
                            onChange={(e) => update("purchaseDate", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="w-from" className="block text-sm font-medium mb-1.5">Purchased From</label>
                          <select
                            id="w-from"
                            value={form.purchaseFrom}
                            onChange={(e) => update("purchaseFrom", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                          >
                            <option value="status-website">STATUS Website</option>
                            <option value="amazon">Amazon</option>
                            <option value="other">Other Retailer</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="w-order" className="block text-sm font-medium mb-1.5">
                            Order Number <span className="text-muted font-normal">(optional)</span>
                          </label>
                          <input
                            id="w-order"
                            type="text"
                            value={form.orderNumber}
                            onChange={(e) => update("orderNumber", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            placeholder="e.g. STATUS-12345"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full gradient-bg text-white py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-50 min-h-[52px] inline-flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Registering...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Register My Warranty
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted text-center">
                    By registering, you agree to our{" "}
                    <Link href="/support" className="text-primary hover:underline">warranty terms</Link>.
                    Registration must be completed within 90 days of purchase.
                  </p>
                </form>
              </>
            )}
          </div>
        </section>
      )}
    </>
  );
}
