import Link from "next/link";

const tools = [
  {
    title: "System Requirements Calculator",
    description: "Find out if your machine can run Antigravity and which AI models will work best for your setup.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    cta: "Check Requirements",
  },
  {
    title: "Language & Framework Finder",
    description: "See exactly which languages, frameworks, and tools Antigravity supports — and how deep the AI integration goes.",
    icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
    cta: "Browse Languages",
  },
  {
    title: "IDE Comparison Tool",
    description: "Compare Antigravity against VS Code, Cursor, JetBrains, and other popular IDEs feature by feature.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    cta: "Compare IDEs",
  },
  {
    title: "ROI Calculator",
    description: "Estimate how much time and money your team could save by switching to Antigravity.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    cta: "Calculate Savings",
  },
];

const extensions = [
  { name: "React DevTools", downloads: "125K", category: "Frontend" },
  { name: "Python Debugger", downloads: "98K", category: "Backend" },
  { name: "Docker Manager", downloads: "87K", category: "DevOps" },
  { name: "GraphQL Explorer", downloads: "64K", category: "API" },
  { name: "Tailwind IntelliSense", downloads: "112K", category: "Frontend" },
  { name: "Git Lens Enhanced", downloads: "156K", category: "Tools" },
  { name: "Rust Analyzer", downloads: "73K", category: "Backend" },
  { name: "Kubernetes Dashboard", downloads: "51K", category: "DevOps" },
];

const shortcuts = [
  { keys: "Ctrl + K", action: "Open AI Chat" },
  { keys: "Ctrl + Shift + G", action: "Generate Code from Prompt" },
  { keys: "Ctrl + Shift + D", action: "AI Debug Current File" },
  { keys: "Ctrl + Shift + T", action: "Auto-Generate Tests" },
  { keys: "Ctrl + Shift + R", action: "AI Refactor Selection" },
  { keys: "Ctrl + .", action: "Quick AI Fix" },
];

export default function Tools() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg-subtle" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Tools &amp; <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Calculators, comparisons, extensions, and everything you need to get the most out of Antigravity.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Interactive <span className="gradient-text">Tools</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.title}
                className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-muted leading-relaxed mb-6">{tool.description}</p>
                <Link href="#" className="gradient-bg text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  {tool.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            AI <span className="gradient-text">Keyboard Shortcuts</span>
          </h2>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            {shortcuts.map((shortcut, i) => (
              <div
                key={shortcut.keys}
                className={`flex items-center justify-between p-4 ${
                  i !== shortcuts.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-sm text-muted">{shortcut.action}</span>
                <kbd className="bg-surface border border-border rounded-lg px-3 py-1.5 text-xs font-mono font-semibold">
                  {shortcut.keys}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensions Marketplace Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-4">
              Popular <span className="gradient-text">Extensions</span>
            </h2>
            <p className="text-muted">Extend Antigravity with community-built plugins.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extensions.map((ext) => (
              <div
                key={ext.name}
                className="bg-surface rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{ext.name[0]}</span>
                  </div>
                  <span className="text-xs text-muted bg-white px-2 py-1 rounded-full border border-border">
                    {ext.category}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{ext.name}</h3>
                <p className="text-xs text-muted">{ext.downloads} installs</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="text-primary font-semibold hover:underline">
              Browse all extensions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-bg rounded-3xl p-12 sm:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold mb-4">Download Antigravity</h2>
                <p className="text-white/80 mb-8">
                  Available for macOS, Windows, and Linux. Or use it entirely in your browser — no download required.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["macOS", "Windows", "Linux"].map((os) => (
                    <Link
                      key={os}
                      href="#"
                      className="bg-white/20 backdrop-blur text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors"
                    >
                      Download for {os}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-2">Or try it in your browser</p>
                <Link
                  href="#"
                  className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center gap-2"
                >
                  Launch Web IDE
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
