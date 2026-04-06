import Link from "next/link";
import FAQ from "@/components/FAQ";

const stats = [
  { value: "10x", label: "Faster Development", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { value: "85%", label: "Less Debugging Time", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "50+", label: "Languages Supported", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { value: "99.9%", label: "Uptime Guarantee", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

const features = [
  {
    title: "AI Code Completion",
    description: "Context-aware suggestions that understand your entire codebase, not just the current file. Autocomplete that feels like mind-reading.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    tag: "Core",
  },
  {
    title: "Real-Time Debugger",
    description: "AI-powered debugging that identifies root causes, suggests fixes, and can auto-patch issues before they reach production.",
    icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    tag: "Pro",
  },
  {
    title: "Seamless Collaboration",
    description: "Built-in multiplayer editing, AI-mediated code reviews, and real-time pair programming with your team or AI.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    tag: "Team",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Install in Seconds",
    description: "Download Antigravity or use it in-browser. Connect your repos and you're ready to go.",
  },
  {
    step: "02",
    title: "Let AI Understand Your Code",
    description: "Our AI indexes your entire codebase, learning patterns, dependencies, and architecture.",
  },
  {
    step: "03",
    title: "Code with Superpowers",
    description: "Get intelligent suggestions, auto-refactoring, natural language code generation, and more.",
  },
  {
    step: "04",
    title: "Ship with Confidence",
    description: "AI-powered testing, security scanning, and deployment checks ensure quality at every step.",
  },
];

const testimonials = [
  {
    quote: "Antigravity completely changed how our team writes code. The AI suggestions are scarily accurate.",
    name: "Sarah Chen",
    role: "Engineering Lead",
    rating: 5,
  },
  {
    quote: "I went from spending 40% of my time debugging to almost zero. The real-time debugger is magic.",
    name: "Marcus Johnson",
    role: "Senior Developer",
    rating: 5,
  },
  {
    quote: "The collaboration features alone are worth it. Add AI code generation and it's a no-brainer.",
    name: "Elena Rodriguez",
    role: "CTO, Startup",
    rating: 5,
  },
];

const resources = [
  { title: "Getting Started Guide", description: "Set up Antigravity and write your first AI-assisted code in minutes.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { title: "API Documentation", description: "Extend Antigravity with custom plugins and integrations using our API.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { title: "Video Tutorials", description: "Watch step-by-step walkthroughs of every feature and workflow.", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" },
  { title: "Language Support", description: "See the full list of 50+ supported languages and frameworks.", icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" },
  { title: "Blog & Updates", description: "Stay up to date with new features, tips, and engineering insights.", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
  { title: "Community Forum", description: "Join thousands of developers sharing tips, plugins, and workflows.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Now with GPT-5 &amp; Claude 4 Integration
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Code at the
                <br />
                <span className="gradient-text">Speed of Thought</span>
              </h1>

              <p className="text-lg text-muted max-w-lg mb-8 leading-relaxed">
                Antigravity is the AI-powered IDE that writes, debugs, and ships
                code with you. Build 10x faster with intelligent code completion,
                real-time debugging, and seamless collaboration.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/products"
                  className="gradient-bg text-white px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Start Building Free
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/tools"
                  className="bg-white border-2 border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:border-primary/30 transition-colors inline-flex items-center gap-2"
                >
                  Watch Demo
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-muted">
                {["Free tier forever", "No credit card", "Cancel anytime"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Code editor mockup */}
            <div className="relative">
              <div className="code-block animate-float">
                <div className="code-block-header">
                  <div className="code-dot bg-red-500" />
                  <div className="code-dot bg-yellow-500" />
                  <div className="code-dot bg-green-500" />
                  <span className="text-white/40 text-xs ml-3 font-mono">app.tsx — Antigravity</span>
                </div>
                <div className="p-6 font-mono text-sm leading-7">
                  <div><span className="text-purple-400">import</span> <span className="text-cyan-300">{"{ useAI }"}</span> <span className="text-purple-400">from</span> <span className="text-green-400">&apos;antigravity&apos;</span></div>
                  <div className="mt-2"><span className="text-purple-400">const</span> <span className="text-blue-300">assistant</span> = <span className="text-yellow-300">useAI</span>()</div>
                  <div className="mt-4"><span className="text-gray-500">{"// AI suggests the rest..."}</span></div>
                  <div className="mt-2"><span className="text-purple-400">const</span> <span className="text-blue-300">result</span> = <span className="text-purple-400">await</span> <span className="text-blue-300">assistant</span>.<span className="text-yellow-300">generate</span>({"{"}</div>
                  <div className="ml-4"><span className="text-cyan-300">prompt</span>: <span className="text-green-400">&apos;Build auth flow&apos;</span>,</div>
                  <div className="ml-4"><span className="text-cyan-300">context</span>: <span className="text-green-400">&apos;full-project&apos;</span>,</div>
                  <div className="ml-4"><span className="text-cyan-300">tests</span>: <span className="text-orange-400">true</span>,</div>
                  <div>{"}"}</div>
                  <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded px-3 py-2">
                    <span className="text-green-400">&#10003; AI generated 12 files, 47 tests passing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-3">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Everything You Need to <span className="gradient-text">Build Faster</span>
            </h2>
            <p className="text-lg text-muted">
              Antigravity combines the best of traditional IDEs with cutting-edge AI to supercharge every part of your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {feature.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">AI-First Development</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-6">
                Write Code in <span className="gradient-text">Natural Language</span>
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Stop context-switching between documentation and your editor. Just describe what you want in plain English and Antigravity builds it — with proper types, tests, and error handling.
              </p>
              <ul className="space-y-4">
                {[
                  "Natural language to production-ready code",
                  "Auto-generates unit and integration tests",
                  "Understands your project's patterns and conventions",
                  "Supports 50+ languages and frameworks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="code-block">
              <div className="code-block-header">
                <div className="code-dot bg-red-500" />
                <div className="code-dot bg-yellow-500" />
                <div className="code-dot bg-green-500" />
                <span className="text-white/40 text-xs ml-3 font-mono">AI Chat — Antigravity</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-primary/20 rounded-lg p-4">
                  <p className="text-white/60 text-xs mb-1">You</p>
                  <p className="text-white text-sm">Build a REST API for user management with JWT auth, rate limiting, and input validation</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-accent text-xs mb-1">Antigravity AI</p>
                  <p className="text-white/80 text-sm mb-3">Generated 8 files with full test coverage:</p>
                  <div className="font-mono text-xs space-y-1 text-white/50">
                    <div>&#10003; routes/users.ts</div>
                    <div>&#10003; middleware/auth.ts</div>
                    <div>&#10003; middleware/rateLimit.ts</div>
                    <div>&#10003; validators/user.schema.ts</div>
                    <div>&#10003; tests/users.test.ts</div>
                    <div className="text-green-400 mt-2">All 23 tests passing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Debugging Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-surface rounded-2xl border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-mono text-red-500">Bug Detected — Line 42</span>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4 font-mono text-sm">
                  <span className="text-red-400">TypeError: Cannot read property &apos;map&apos; of undefined</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="text-sm font-mono text-yellow-600">AI Analyzing Root Cause...</span>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 font-mono text-sm">
                  <p className="text-green-600 font-semibold mb-2">&#10003; Fix Applied</p>
                  <p className="text-muted text-xs">Added null check and fallback empty array. Data fetching race condition resolved.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Smart Debugging</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-6">
                Bugs Found &amp; Fixed <span className="gradient-text">Automatically</span>
              </h2>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Our AI debugger doesn&apos;t just find problems — it understands why they happen and how to fix them. Get root cause analysis and one-click patches in real-time.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time error detection before runtime",
                  "Root cause analysis with full stack traces",
                  "One-click AI-generated patches",
                  "Learn from fixes to prevent future bugs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "SOC 2 Compliant", description: "Enterprise-grade security. Your code never leaves your machine unless you want it to.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Open Source Core", description: "Built on open standards with a thriving community of contributors and plugin developers.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { title: "Trusted by 50K+ Devs", description: "Used by engineers at leading tech companies worldwide, from startups to Fortune 500.", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Up and Running in <span className="gradient-text">Minutes</span>
            </h2>
            <p className="text-lg text-muted">
              No complex setup. No steep learning curve. Just download and start coding with AI superpowers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-extrabold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Loved by <span className="gradient-text">Developers</span>
            </h2>
            <p className="text-lg text-muted">
              Join thousands of developers who ship faster with Antigravity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
                Start Building for Free
              </h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                No credit card required. Get 1,000 AI completions per month on the free tier. Upgrade anytime for unlimited power.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/products"
                  className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  Get Started Free
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Resources &amp; <span className="gradient-text">Guides</span>
            </h2>
            <p className="text-lg text-muted">
              Everything you need to get the most out of Antigravity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href="#"
                className="group bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={resource.icon} />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{resource.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{resource.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
