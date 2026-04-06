import Link from "next/link";

const supportOptions = [
  {
    title: "Documentation",
    description: "Comprehensive guides, API references, and tutorials to help you get the most out of Antigravity.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    cta: "Browse Docs",
  },
  {
    title: "Community Discord",
    description: "Join 10,000+ developers sharing tips, getting help, and building together.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    cta: "Join Discord",
  },
  {
    title: "GitHub Issues",
    description: "Report bugs, request features, and contribute to Antigravity's open-source core.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    cta: "Open Issue",
  },
  {
    title: "Email Support",
    description: "Pro and Team subscribers get priority email support with guaranteed response times.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    cta: "Contact Support",
  },
];

const guides = [
  { title: "Getting Started", description: "Install and configure Antigravity in under 5 minutes." },
  { title: "AI Code Completion", description: "Master context-aware suggestions and boost your productivity." },
  { title: "Natural Language Coding", description: "Learn to describe features in English and let AI build them." },
  { title: "Debugging with AI", description: "Use the AI debugger to find and fix bugs automatically." },
  { title: "Team Collaboration", description: "Set up multiplayer editing and AI-powered code reviews." },
  { title: "Extensions & Plugins", description: "Extend Antigravity with custom integrations and tools." },
];

export default function Support() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            How Can We <span className="gradient-text">Help?</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Get the support you need to build amazing things with Antigravity.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search docs, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={option.icon} />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">{option.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{option.description}</p>
                <Link href="#" className="text-primary text-sm font-semibold hover:underline">
                  {option.cta} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Popular <span className="gradient-text">Guides</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href="#"
                className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{guide.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted">
              Can&apos;t find what you need? Send us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-muted">
                <option>General Question</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Enterprise Inquiry</option>
                <option>Partnership</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-bg text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Status */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            All Systems Operational
          </div>
          <p className="text-muted text-sm">
            99.9% uptime over the last 90 days. Check our{" "}
            <Link href="#" className="text-primary hover:underline">
              status page
            </Link>{" "}
            for real-time updates.
          </p>
        </div>
      </section>
    </>
  );
}
