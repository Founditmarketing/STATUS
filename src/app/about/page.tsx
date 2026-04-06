import Link from "next/link";

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Former Google Brain researcher. Passionate about making AI accessible to every developer." },
  { name: "Jordan Kim", role: "CTO & Co-Founder", bio: "Built compiler infrastructure at Meta. Believes the future of coding is conversational." },
  { name: "Priya Patel", role: "VP of Engineering", bio: "Led developer tools at Stripe. Focused on building tools that developers actually love." },
  { name: "Sam Okafor", role: "Head of AI Research", bio: "PhD in ML from Stanford. Pioneering context-aware code generation models." },
];

const values = [
  {
    title: "Developer First",
    description: "Every decision starts with the question: does this make developers' lives better? We build tools we want to use ourselves.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Open by Default",
    description: "Open source core, open standards, open community. We believe the best tools are built in the open.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
  },
  {
    title: "Privacy Matters",
    description: "Your code is yours. We never train on your private repositories without explicit consent. Local-first by design.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Ship Fast, Stay Reliable",
    description: "We release weekly but never compromise on stability. Every feature ships with comprehensive testing and monitoring.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

const milestones = [
  { year: "2023", event: "Founded in San Francisco by AI researchers and developer tool veterans" },
  { year: "2023", event: "Raised $12M seed round led by Sequoia and a16z" },
  { year: "2024", event: "Launched public beta — 10,000 developers signed up in the first week" },
  { year: "2024", event: "Series A: $45M to accelerate AI model development and hiring" },
  { year: "2025", event: "Reached 50,000+ active developers across 120 countries" },
  { year: "2026", event: "Launched Team & Enterprise plans. Opened European HQ in London" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
              Building the Future of <span className="gradient-text">Development</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              We started Antigravity because we believe AI should amplify developers, not replace them. Our mission is to give every developer superpowers — making coding faster, more creative, and more fun.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-4xl font-extrabold tracking-tight mt-3 mb-6">
                Make Every Developer <span className="gradient-text">10x More Productive</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                The best developers aren&apos;t just fast typists — they&apos;re great thinkers. Antigravity handles the mechanical parts of coding so you can focus on architecture, creativity, and solving real problems.
              </p>
              <p className="text-muted leading-relaxed">
                We&apos;re building an AI that understands not just syntax, but intent. An IDE that&apos;s not just a text editor, but a true coding partner.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "50K+", label: "Active Developers" },
                { value: "120+", label: "Countries" },
                { value: "2M+", label: "AI Completions/Day" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface rounded-2xl p-6 text-center border border-border">
                  <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted">Built by developers, for developers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 rounded-full gradient-bg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-center mb-16">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-6">
                <div className="shrink-0">
                  <span className="inline-block bg-primary/10 text-primary font-bold text-sm px-3 py-1 rounded-full">
                    {milestone.year}
                  </span>
                </div>
                <p className="text-muted leading-relaxed pt-0.5">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-4xl font-extrabold mb-4">Join Our Team</h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                We&apos;re hiring engineers, researchers, and designers who want to shape the future of software development.
              </p>
              <Link
                href="#"
                className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                View Open Positions
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
