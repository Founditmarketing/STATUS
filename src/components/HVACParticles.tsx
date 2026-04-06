"use client";

import { useEffect, useRef } from "react";

export default function HVACParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }> = [];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
    }
    resize();
    window.addEventListener("resize", resize);

    // Spawn a new cold-air particle from the top-right area (like a wall-mounted unit blowing)
    function spawnParticle() {
      if (!canvas) return;
      const w = canvas.width;
      const h = canvas.height;

      // Spawn from the top-right quadrant (where a mini-split would be mounted)
      const spawnX = w * (0.6 + Math.random() * 0.4);
      const spawnY = h * (0.05 + Math.random() * 0.15);

      // Blow downward and to the left (like cold air falling and spreading)
      const angle = Math.PI * (0.55 + Math.random() * 0.35); // ~100° to ~160°
      const speed = 0.4 + Math.random() * 0.8;

      // Pick a frosty blue/white color
      const colors = [
        "rgba(147, 220, 255,",  // light ice blue
        "rgba(96, 200, 255,",   // medium cyan
        "rgba(200, 235, 255,",  // frost white
        "rgba(56, 182, 255,",   // vivid blue
        "rgba(180, 230, 250,",  // pale frost
        "rgba(220, 245, 255,",  // near-white cold
      ];

      particles.push({
        x: spawnX,
        y: spawnY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 1.5 + Math.random() * 3.5,
        opacity: 0.5 + Math.random() * 0.5,
        fadeSpeed: 0.001 + Math.random() * 0.003,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn 2-3 particles per frame for a dense, continuous airflow
      for (let i = 0; i < 3; i++) {
        if (particles.length < 200) spawnParticle();
      }

      // Update and draw each particle
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Drift with slight turbulence (simulates air mixing)
        p.x += p.vx + (Math.random() - 0.5) * 0.3;
        p.y += p.vy + (Math.random() - 0.5) * 0.2;

        // Gravity: cold air sinks slowly
        p.vy += 0.005;

        // Slow down over time (air losing momentum)
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Fade out
        p.opacity -= p.fadeSpeed;

        // Remove dead particles
        if (p.opacity <= 0 || p.x < -20 || p.y > canvas.height + 20) {
          particles.splice(i, 1);
          continue;
        }

        // Draw the particle with a soft glow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.radius * 3
        );
        gradient.addColorStop(0, `${p.color}${p.opacity})`);
        gradient.addColorStop(0.4, `${p.color}${p.opacity * 0.6})`);
        gradient.addColorStop(1, `${p.color}0)`);
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.fillStyle = `${p.color}${Math.min(p.opacity * 1.2, 1)})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none md:hidden">
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#081020]" />
      
      {/* Canvas for particle rendering */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.85 }}
      />

      {/* Subtle cold-mist radial glow from the "unit" location */}
      <div 
        className="absolute top-0 right-0 w-[60%] h-[40%] opacity-30"
        style={{
          background: "radial-gradient(ellipse at 80% 10%, rgba(56,182,255,0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
