"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Antigravity?",
    answer:
      "Antigravity is an AI-powered integrated development environment (IDE) that combines traditional code editing with advanced AI capabilities. It helps you write, debug, test, and ship code faster using natural language prompts, intelligent code completion, and automated debugging.",
  },
  {
    question: "Is my code secure with Antigravity?",
    answer:
      "Absolutely. Antigravity is SOC 2 compliant and your code never leaves your local machine by default. AI processing can be configured to run locally or through our encrypted cloud — you're always in control of your data.",
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "Antigravity supports 50+ programming languages including TypeScript, JavaScript, Python, Rust, Go, Java, C++, Ruby, PHP, Swift, Kotlin, and many more. Our AI models are trained on production code across all major languages and frameworks.",
  },
  {
    question: "How does the free tier work?",
    answer:
      "The free tier gives you full access to the IDE with 1,000 AI completions per month, basic debugging, and community support. No credit card required. You can upgrade to Pro or Team plans anytime for unlimited AI completions and advanced features.",
  },
  {
    question: "Can I use Antigravity with my existing tools?",
    answer:
      "Yes! Antigravity integrates with Git, GitHub, GitLab, Bitbucket, Docker, Kubernetes, and hundreds of other tools through our extension marketplace. It also supports VS Code extensions for a seamless transition.",
  },
  {
    question: "How accurate is the AI code generation?",
    answer:
      "Our AI generates production-ready code with proper types, error handling, and tests. It learns your codebase's patterns and conventions to match your team's style. You always review and approve generated code before it's committed.",
  },
  {
    question: "Is there a team plan for organizations?",
    answer:
      "Yes, our Team and Enterprise plans include multiplayer editing, shared AI context, centralized billing, SSO/SAML authentication, admin controls, and priority support. Contact our sales team for custom enterprise pricing.",
  },
  {
    question: "How does Antigravity compare to GitHub Copilot or Cursor?",
    answer:
      "Antigravity goes beyond code completion. While Copilot focuses on inline suggestions and Cursor on AI chat, Antigravity provides a fully integrated experience — from natural language code generation to automated debugging, testing, and deployment. It's an entire AI-native IDE, not just a plugin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about Antigravity.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-surface/50 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
