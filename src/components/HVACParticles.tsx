"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "cold" | "hot";
}

export default function HVACParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 35 floating particles to represent HVAC air circulation
    const generated = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      // Stagger animations
      delay: Math.random() * 5,
      // Random float duration between 12s and 25s
      duration: Math.random() * 13 + 12,
      // 70% blue/cyan (AC), 30% orange (Heating pump) 
      type: (Math.random() > 0.3 ? "cold" : "hot") as "cold" | "hot",
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Dynamic HVAC particles */}
      {particles.map((p) => {
        const isCold = p.type === "cold";
        return (
          <div
            key={p.id}
            className={`absolute rounded-full animate-particle-float ${
              isCold
                ? "bg-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                : "bg-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.3)]"
            }`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}

      {/* Subtle airflow grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Soft vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)' }} />
    </div>
  );
}
