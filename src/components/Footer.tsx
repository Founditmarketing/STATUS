import Link from "next/link";

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "Wall Mounted Systems", href: "/products#wall-mounted" },
      { label: "Ceiling Cassettes", href: "/products#ceiling-cassette" },
      { label: "Concealed Ducted", href: "/products#concealed-ducted" },
      { label: "Bundles & Line Sets", href: "/products#accessories" },
      { label: "Accessories", href: "/products#accessories" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sizing Guide", href: "/tools#sizing" },
      { label: "Installation Guide", href: "/support#guides" },
      { label: "BTU Calculator", href: "/tools#calculator" },
      { label: "Blog & Guides", href: "/support" },
      { label: "FAQ", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/support#contact" },
      { label: "Warranty Info", href: "/about#guarantees" },
      { label: "Rebates & Incentives", href: "/tools#rebates" },
      { label: "Shipping Policy", href: "/support" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "/about" },
  { label: "Terms of Service", href: "/about" },
  { label: "Return Policy", href: "/support" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold uppercase">Status</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional HVAC. DIY Prices. Engineered and assembled in the USA. Save thousands with our pre-charged, easy-install mini-split systems.
            </p>
            <a href="tel:+18001234567" className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (800) 123-4567
            </a>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/60 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; 2026 STATUS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {bottomLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-white/40 text-sm hover:text-white/60 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
