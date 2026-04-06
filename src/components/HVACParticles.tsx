"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  length: number;
  delay: number;
  duration: number;
  type: "cold" | "hot";
}

export default function HVACParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate fast blowing "wind" streaks for the HVAC effect
    const generated = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      // Start randomly off-screen left and top
      x: (Math.random() * 120) - 40,
      y: (Math.random() * 60) - 50,
      // Wider, more cinematic streaks
      size: Math.random() * 3 + 2,
      // Longer trailing streaks
      length: Math.random() * 120 + 40,
      // Stagger animations
      delay: Math.random() * 8,
      // Significantly slower blowing duration (between 7s and 15s) for a majestic, beautiful look
      duration: Math.random() * 8 + 7,
      // 80% blue/cyan (AC), 20% orange (Heating pump) 
      type: (Math.random() > 0.2 ? "cold" : "hot") as "cold" | "hot",
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Dynamic HVAC blowing particles */}
      {particles.map((p) => {
        const isCold = p.type === "cold";
        return (
          <div
            key={p.id}
            className="absolute animate-particle-blow"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {/* The rotated wind streak */}
            <div
              className={`rounded-full blur-[2px] transform -rotate-[45deg] ${
                isCold
                  ? "bg-cyan-200/90 shadow-[0_0_35px_rgba(34,211,238,1)]"
                  : "bg-orange-300/90 shadow-[0_0_35px_rgba(249,115,22,1)]"
              }`}
              style={{
                width: `${p.size}px`,
                height: `${p.length}px`,
                background: isCold 
                  ? 'linear-gradient(to bottom, rgba(34,211,238,0) 0%, rgba(34,211,238,1) 50%, rgba(34,211,238,0) 100%)'
                  : 'linear-gradient(to bottom, rgba(249,115,22,0) 0%, rgba(249,115,22,1) 50%, rgba(249,115,22,0) 100%)'
              }}
            />
          </div>
        );
      })}

      {/* Aggressive airflow grid overlay to match fan concept */}
      <div 
        className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Soft vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)' }} />
    </div>
  );
}
