import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Antigravity</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              The AI-powered IDE that elevates your code. Build faster, debug
              smarter, ship with confidence.
            </p>
            <div className="flex items-center gap-4">
              {["twitter", "github", "discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="text-xs uppercase font-bold">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Product",
              links: [
                "Features",
                "Pricing",
                "Extensions",
                "Changelog",
                "Roadmap",
              ],
            },
            {
              title: "Resources",
              links: [
                "Documentation",
                "Tutorials",
                "Blog",
                "Community",
                "API Reference",
              ],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Press", "Contact", "Legal"],
            },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 Antigravity. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-white/40 text-sm hover:text-white/60 transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
