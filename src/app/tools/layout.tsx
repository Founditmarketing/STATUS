import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BTU Calculator, Sizing Guide & Brand Comparison | STATUS",
  description: "Free mini-split sizing tools: BTU calculator, room sizing guide, brand comparison (STATUS vs MrCool vs Pioneer vs Senville), and rebate/tax credit information. Find the perfect DIY ductless system.",
};

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
