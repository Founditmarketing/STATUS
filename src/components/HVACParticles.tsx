"use client";

/**
 * HVACParticles — Cinematic animated mesh-gradient orbs for the hero.
 *
 * All viewports. Uses vw units so orbs naturally scale with viewport width.
 * On wider screens the orbs spread out; on narrow screens they overlap more
 * for that dense, saturated look.
 */

const orbs = [
  {
    // Large electric blue — sweeps across the top-left
    size: "clamp(300px, 50vw, 700px)",
    color: "rgba(0,102,255,0.45)",
    x: "-8%",
    y: "-20%",
    animation: "orbDrift1 8s ease-in-out infinite alternate",
  },
  {
    // Vibrant teal — right side
    size: "clamp(250px, 42vw, 600px)",
    color: "rgba(0,212,170,0.35)",
    x: "55%",
    y: "-5%",
    animation: "orbDrift2 10s ease-in-out infinite alternate",
  },
  {
    // Deep indigo/purple — bottom-left
    size: "clamp(280px, 45vw, 650px)",
    color: "rgba(100,80,240,0.30)",
    x: "2%",
    y: "40%",
    animation: "orbDrift3 12s ease-in-out infinite alternate",
  },
  {
    // Bright cyan — center, fast mover
    size: "clamp(200px, 32vw, 500px)",
    color: "rgba(0,200,255,0.35)",
    x: "30%",
    y: "10%",
    animation: "orbDrift4 7s ease-in-out infinite alternate",
  },
  {
    // Hot magenta accent — bottom-right
    size: "clamp(180px, 28vw, 420px)",
    color: "rgba(180,60,255,0.22)",
    x: "60%",
    y: "45%",
    animation: "orbDrift5 9s ease-in-out infinite alternate",
  },
  {
    // Warm blue — far right, slow, adds depth on wider viewports
    size: "clamp(160px, 35vw, 550px)",
    color: "rgba(30,120,255,0.25)",
    x: "78%",
    y: "15%",
    animation: "orbDrift1 14s ease-in-out infinite alternate-reverse",
  },
];

export default function HVACParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#060b18]" />

      {/* Animated gradient orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle at center, ${orb.color} 0%, transparent 65%)`,
            filter: "blur(40px)",
            animation: orb.animation,
            willChange: "transform",
          }}
        />
      ))}

      {/* Subtle noise texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Vignette overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,11,24,0.3) 0%, transparent 30%, transparent 70%, rgba(6,11,24,0.45) 100%)",
        }}
      />
    </div>
  );
}
