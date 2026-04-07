"use client";

/**
 * MeshGradientHero — Premium gradient background for mobile hero.
 * Static gradients only — no animations, no SVG filters, no blur.
 * Maximum iOS Safari compatibility.
 */

export default function HVACParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#060b18]" />

      {/* Static gradient layers — no animation, no blur, no SVG filters */}
      <div
        className="absolute w-[80%] h-[80%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.25) 0%, transparent 60%)",
          top: "-10%",
          left: "-20%",
        }}
      />

      <div
        className="absolute w-[70%] h-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,170,0.2) 0%, transparent 60%)",
          top: "25%",
          right: "-25%",
        }}
      />

      <div
        className="absolute w-[60%] h-[60%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(88,86,214,0.15) 0%, transparent 60%)",
          bottom: "0%",
          left: "10%",
        }}
      />

      <div
        className="absolute w-[50%] h-[50%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(77,148,255,0.3) 0%, transparent 60%)",
          top: "15%",
          left: "25%",
        }}
      />

      {/* Vignette for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,11,24,0.4) 0%, transparent 40%, transparent 60%, rgba(6,11,24,0.6) 100%)",
        }}
      />
    </div>
  );
}
