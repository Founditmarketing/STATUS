"use client";

/**
 * MeshGradientHero — Premium animated mesh gradient background for mobile hero.
 * Inspired by Apple/Stripe/Linear aesthetic: large soft gradient orbs that
 * drift and morph slowly, creating an organic, premium atmosphere.
 * Pure CSS animations — no canvas, no particle physics, no jank.
 */

export default function HVACParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#060b18]" />

      {/* Mesh gradient orbs — each one drifts on its own path */}

      {/* Primary blue orb — large, top-left drift */}
      <div
        className="absolute w-[70vw] h-[70vw] rounded-full opacity-[0.35]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.8) 0%, rgba(0,68,204,0.4) 40%, transparent 70%)",
          top: "5%",
          left: "-10%",
          filter: "blur(60px)",
          animation: "meshDrift1 12s ease-in-out infinite alternate",
        }}
      />

      {/* Teal accent orb — mid-right, slower */}
      <div
        className="absolute w-[60vw] h-[60vw] rounded-full opacity-[0.3]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,170,0.7) 0%, rgba(0,184,148,0.3) 40%, transparent 70%)",
          top: "30%",
          right: "-15%",
          filter: "blur(70px)",
          animation: "meshDrift2 15s ease-in-out infinite alternate",
        }}
      />

      {/* Deep violet accent — bottom area, creates depth */}
      <div
        className="absolute w-[55vw] h-[55vw] rounded-full opacity-[0.2]"
        style={{
          background:
            "radial-gradient(circle, rgba(88,86,214,0.6) 0%, rgba(60,50,180,0.3) 40%, transparent 70%)",
          bottom: "5%",
          left: "15%",
          filter: "blur(65px)",
          animation: "meshDrift3 18s ease-in-out infinite alternate",
        }}
      />

      {/* Bright highlight — small, vivid, moves faster for visual interest */}
      <div
        className="absolute w-[35vw] h-[35vw] rounded-full opacity-[0.25]"
        style={{
          background:
            "radial-gradient(circle, rgba(77,148,255,0.9) 0%, rgba(0,102,255,0.4) 40%, transparent 70%)",
          top: "20%",
          left: "30%",
          filter: "blur(50px)",
          animation: "meshDrift4 10s ease-in-out infinite alternate",
        }}
      />

      {/* Cyan mist — wide, flat, atmospheric */}
      <div
        className="absolute w-[90vw] h-[30vw] rounded-full opacity-[0.15]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0,212,255,0.5) 0%, transparent 60%)",
          top: "55%",
          left: "5%",
          filter: "blur(80px)",
          animation: "meshDrift5 20s ease-in-out infinite alternate",
        }}
      />

      {/* Subtle grain overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      />

      {/* Top-to-bottom vignette for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,11,24,0.3) 0%, transparent 30%, transparent 60%, rgba(6,11,24,0.5) 100%)",
        }}
      />

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes meshDrift1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(15vw, 10vh) scale(1.15);
          }
        }
        @keyframes meshDrift2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-12vw, -8vh) scale(1.1);
          }
        }
        @keyframes meshDrift3 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(10vw, -12vh) scale(1.2);
          }
        }
        @keyframes meshDrift4 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-8vw, 15vh) scale(0.9);
          }
        }
        @keyframes meshDrift5 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(5vw, -5vh) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
