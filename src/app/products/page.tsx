import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individual developers exploring AI-powered coding.",
    features: [
      "1,000 AI completions/month",
      "Basic code generation",
      "Syntax highlighting for 50+ languages",
      "Community support",
      "VS Code extension compatibility",
      "Git integration",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For professional developers who want unlimited AI power.",
    features: [
      "Unlimited AI completions",
      "Advanced code generation & refactoring",
      "Real-time AI debugger",
      "Natural language to code",
      "Auto-generated tests",
      "Priority support",
      "Custom AI model selection",
      "Local AI processing option",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/user/month",
    description: "For teams that want to collaborate with AI superpowers.",
    features: [
      "Everything in Pro",
      "Multiplayer editing",
      "AI-mediated code reviews",
      "Shared AI context across team",
      "Centralized billing & admin",
      "SSO/SAML authentication",
      "Custom AI training on your codebase",
      "Dedicated support engineer",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const comparison = [
  { feature: "AI Code Completion", free: "1K/month", pro: "Unlimited", team: "Unlimited" },
  { feature: "Languages Supported", free: "50+", pro: "50+", team: "50+" },
  { feature: "Natural Language to Code", free: "Basic", pro: "Advanced", team: "Advanced" },
  { feature: "AI Debugger", free: "—", pro: "Full", team: "Full" },
  { feature: "Auto-Generated Tests", free: "—", pro: "Full", team: "Full" },
  { feature: "Multiplayer Editing", free: "—", pro: "—", team: "Full" },
  { feature: "AI Code Reviews", free: "—", pro: "Basic", team: "Full" },
  { feature: "Custom AI Models", free: "—", pro: "Full", team: "Full" },
  { feature: "Local Processing", free: "—", pro: "Full", team: "Full" },
  { feature: "SSO/SAML", free: "—", pro: "—", team: "Full" },
  { feature: "Support", free: "Community", pro: "Priority", team: "Dedicated" },
];

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Start free, upgrade when you need more power. No hidden fees, no surprise charges.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10 relative"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="gradient-bg text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
                <p className="text-muted text-sm mb-8">{plan.description}</p>

                <Link
                  href="#"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? "gradient-bg text-white hover:opacity-90"
                      : "bg-surface border border-border text-foreground hover:border-primary/30"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Compare <span className="gradient-text">Plans</span>
          </h2>

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold">Feature</th>
                  <th className="text-center p-4 text-sm font-semibold">Free</th>
                  <th className="text-center p-4 text-sm font-semibold text-primary">Pro</th>
                  <th className="text-center p-4 text-sm font-semibold">Team</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-surface/50" : ""}>
                    <td className="p-4 text-sm">{row.feature}</td>
                    <td className="p-4 text-sm text-center text-muted">{row.free}</td>
                    <td className="p-4 text-sm text-center font-medium">{row.pro}</td>
                    <td className="p-4 text-sm text-center text-muted">{row.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-4xl font-extrabold mb-4">Need Enterprise?</h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                Custom deployment, dedicated infrastructure, SLA guarantees, and hands-on onboarding for large organizations.
              </p>
              <Link
                href="/support"
                className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                Talk to Sales
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
