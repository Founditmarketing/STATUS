import Link from "next/link";

const values = [
  {
    title: "Quality First",
    description: "We use the same components as top-tier HVAC brands. Every unit is factory-tested before shipping.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "DIY Empowerment",
    description: "We believe homeowners shouldn't need to pay thousands for installation. Our systems are built to install yourself.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    title: "Energy Efficiency",
    description: "Our systems help reduce energy consumption by up to 60% compared to traditional HVAC, saving money and the planet.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Customer Support",
    description: "Real HVAC experts available by phone during your installation and for the lifetime of your system.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
  },
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
              About <span className="gradient-text">STATUS</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              We started STATUS because we believed homeowners deserve professional-grade HVAC at fair prices. No more paying thousands in labor for something you can do yourself in a few hours.
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
                Make Comfort <span className="gradient-text">Affordable</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                The HVAC industry has been overcharging homeowners for decades. A system that costs $2,000 in parts shouldn&apos;t cost $8,000 installed. We engineered STATUS systems specifically for DIY installation — pre-charged linesets, quick-connect fittings, and comprehensive guides that make professional-quality installation accessible to anyone.
              </p>
              <p className="text-muted leading-relaxed">
                Every STATUS system is engineered and assembled in the USA using premium components. We stand behind every unit with a 7-year compressor warranty and live support from real HVAC experts.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10,000+", label: "Systems Installed" },
                { value: "49", label: "States Served" },
                { value: "$30M+", label: "Customer Savings" },
                { value: "4.8/5", label: "Customer Rating" },
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
              What We <span className="gradient-text">Stand For</span>
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

      {/* Warranty & Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Our <span className="gradient-text">Guarantees</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "7-Year Compressor Warranty", description: "Our compressors are built to last. If anything goes wrong in the first 7 years, we replace it free.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "45-Day Satisfaction Guarantee", description: "Not happy? Return your system within 45 days for a full refund. No questions asked.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Free 3-Day Shipping", description: "Every system ships free via expedited 3-day delivery anywhere in the continental US.", icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" },
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

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 sm:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-4xl font-extrabold mb-4">Ready to Save Thousands?</h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
                Join 10,000+ homeowners who&apos;ve installed STATUS mini-splits and saved an average of $3,000+.
              </p>
              <Link
                href="/products"
                className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center gap-2"
              >
                Shop Systems
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
