"use client";

export default function FinancingBadge({ price }: { price: number }) {
  const monthly = Math.ceil(price / 24);

  return (
    <div className="flex items-center gap-2 text-sm">
      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
      <span className="text-muted">
        As low as <span className="font-bold text-foreground">${monthly}/mo</span> with financing
      </span>
    </div>
  );
}
