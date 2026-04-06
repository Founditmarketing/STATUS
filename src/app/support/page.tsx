import Link from "next/link";

const supportOptions = [
  {
    title: "Installation Guides",
    description: "Step-by-step video and written guides for every system type. Watch before, during, or after your install.",
    icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z",
    cta: "Watch Guides",
  },
  {
    title: "Live Phone Support",
    description: "Talk to a real HVAC expert. Available Monday-Friday, 9am-5pm MST. We'll walk you through your install.",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    cta: "Call (800) 123-4567",
  },
  {
    title: "Warranty Registration",
    description: "Register your system to activate your 7-year compressor warranty and 5-year parts warranty.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    cta: "Register Warranty",
  },
  {
    title: "Email Support",
    description: "Send us a detailed question or issue and we'll respond within 24 hours with a solution.",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    cta: "Email Us",
  },
];

const troubleshooting = [
  { title: "System won't turn on", description: "Check breaker, verify power connections at disconnect, confirm indoor/outdoor wiring." },
  { title: "Flashing error codes", description: "Look up your specific error code in your manual or contact us for diagnostic help." },
  { title: "Not cooling/heating enough", description: "Verify correct sizing for your space. Check filters, airflow, and outdoor unit clearance." },
  { title: "Water leaking from indoor unit", description: "Inspect condensate drain line for clogs. Ensure proper installation angle for drainage." },
  { title: "Unusual noise from outdoor unit", description: "Check for debris around the unit. Verify mounting bracket is secure and level." },
  { title: "WiFi module not connecting", description: "Reset the module, ensure your router is on 2.4GHz, and re-pair through the app." },
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
          <p className="text-lg text-muted max-w-2xl mx-auto mb-4">
            Real HVAC experts ready to help you size, install, and maintain your STATUS system.
          </p>
          <p className="text-primary font-semibold">
            Available Mon-Fri, 9am-5pm MST &mdash; (800) 123-4567
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section id="guides" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option) => (
              <div key={option.title} className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all">
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

      {/* Troubleshooting */}
      <section id="troubleshooting" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Common <span className="gradient-text">Troubleshooting</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {troubleshooting.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              Send Us a <span className="gradient-text">Message</span>
            </h2>
            <p className="text-muted">
              Can&apos;t find what you need? We&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="you@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-muted">
                <option>Pre-Purchase Question</option>
                <option>Installation Help</option>
                <option>Troubleshooting</option>
                <option>Warranty Claim</option>
                <option>Return / Exchange</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Order Number (optional)</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="e.g. STATUS-12345" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Tell us how we can help..." />
            </div>
            <button type="submit" className="w-full gradient-bg text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
