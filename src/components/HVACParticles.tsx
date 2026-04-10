"use client";

/**
 * HVACParticles — Cinematic animated mesh-gradient orbs for the hero section.
 *
 * Five large, blurred gradient spheres drift slowly across the dark hero
 * background using pure CSS keyframe animations (no JS timers, no canvas).
 * Each orb has a unique size, color, speed, and movement path.
 *
 * The `will-change: transform` hint and percentage-based transforms
 * keep everything GPU-composited and smooth on mobile Safari / iOS.
 */

const orbs = [
  {
    // Large blue — drifts top-left to center
    size: "110%",
    color: "rgba(0,102,255,0.30)",
    x: "-25%",
    y: "-20%",
    animation: "orbDrift1 18s ease-in-out infinite alternate",
  },
  {
    // Teal accent — drifts from right edge
    size: "80%",
    color: "rgba(0,212,170,0.22)",
    x: "45%",
    y: "15%",
    animation: "orbDrift2 22s ease-in-out infinite alternate",
  },
  {
    // Deep indigo — bottom left, slow
    size: "90%",
    color: "rgba(88,86,214,0.18)",
    x: "-10%",
    y: "35%",
    animation: "orbDrift3 25s ease-in-out infinite alternate",
  },
  {
    // Bright cyan — center glow
    size: "65%",
    color: "rgba(77,200,255,0.25)",
    x: "20%",
    y: "5%",
    animation: "orbDrift4 15s ease-in-out infinite alternate",
  },
  {
    // Electric blue core — subtle, tight orbit
    size: "50%",
    color: "rgba(0,102,255,0.20)",
    x: "35%",
    y: "30%",
    animation: "orbDrift5 20s ease-in-out infinite alternate",
  },
];

export default function HVACParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none sm:hidden">
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

      {/* Vignette overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,11,24,0.35) 0%, transparent 35%, transparent 65%, rgba(6,11,24,0.5) 100%)",
        }}
      />
    </div>
  );
}
