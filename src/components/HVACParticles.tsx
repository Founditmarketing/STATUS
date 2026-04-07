"use client";

/**
 * MeshGradientHero — Premium animated mesh gradient background for mobile hero.
 * Pure CSS animations, no styled-jsx (iOS Safari compatibility).
 */

export default function HVACParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#060b18]" />

      {/* Mesh gradient orbs */}
      <div
        className="absolute w-[70vw] h-[70vw] rounded-full opacity-[0.35] animate-[meshA_12s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.8) 0%, rgba(0,68,204,0.4) 40%, transparent 70%)",
          top: "5%",
          left: "-10%",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute w-[60vw] h-[60vw] rounded-full opacity-[0.3] animate-[meshB_15s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,170,0.7) 0%, rgba(0,184,148,0.3) 40%, transparent 70%)",
          top: "30%",
          right: "-15%",
          filter: "blur(70px)",
        }}
      />

      <div
        className="absolute w-[55vw] h-[55vw] rounded-full opacity-[0.2] animate-[meshC_18s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(circle, rgba(88,86,214,0.6) 0%, rgba(60,50,180,0.3) 40%, transparent 70%)",
          bottom: "5%",
          left: "15%",
          filter: "blur(65px)",
        }}
      />

      <div
        className="absolute w-[35vw] h-[35vw] rounded-full opacity-[0.25] animate-[meshD_10s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(circle, rgba(77,148,255,0.9) 0%, rgba(0,102,255,0.4) 40%, transparent 70%)",
          top: "20%",
          left: "30%",
          filter: "blur(50px)",
        }}
      />

      <div
        className="absolute w-[90vw] h-[30vw] rounded-full opacity-[0.15] animate-[meshE_20s_ease-in-out_infinite_alternate]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.5) 0%, transparent 60%)",
          top: "55%",
          left: "5%",
          filter: "blur(80px)",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,11,24,0.3) 0%, transparent 30%, transparent 60%, rgba(6,11,24,0.5) 100%)",
        }}
      />
    </div>
  );
}
