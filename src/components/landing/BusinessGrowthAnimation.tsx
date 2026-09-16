"use client";

import React, { useEffect, useRef } from "react";

export default function BusinessGrowthAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle system representing capital flow & scaling momentum
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, () => ({
      t: Math.random(), // position along curve (0 = seed, 1 = scale)
      speed: 0.0015 + Math.random() * 0.002,
      radius: 2 + Math.random() * 2.5,
      alpha: 0.3 + Math.random() * 0.6,
    }));

    // Ascending bars representing enterprise turnover
    const barCount = 14;
    const bars = Array.from({ length: barCount }, (_, i) => ({
      xRatio: 0.45 + (i / barCount) * 0.52,
      baseHeightRatio: 0.12 + Math.pow(i / barCount, 1.8) * 0.55,
      currentHeight: 0,
      targetHeightRatio: 0.12 + Math.pow(i / barCount, 1.8) * 0.55,
      phase: i * 0.35,
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle background grid for technical/financial precision feel
      ctx.save();
      ctx.strokeStyle = "rgba(199, 93, 62, 0.05)";
      ctx.lineWidth = 1;
      const step = 48;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Rising Enterprise Growth Bars (Micro enterprise -> Big hub)
      ctx.save();
      bars.forEach((bar) => {
        const x = width * bar.xRatio;
        const barWidth = (width / barCount) * 0.4;
        const oscillation = Math.sin(time + bar.phase) * 12;
        const targetH = height * bar.targetHeightRatio + oscillation;
        bar.currentHeight += (targetH - bar.currentHeight) * 0.05;

        const y = height - bar.currentHeight;

        // Gradient for bar: warm terracotta fading into transparent
        const gradient = ctx.createLinearGradient(0, y, 0, height);
        gradient.addColorStop(0, "rgba(199, 93, 62, 0.22)");
        gradient.addColorStop(0.7, "rgba(199, 93, 62, 0.08)");
        gradient.addColorStop(1, "rgba(199, 93, 62, 0.01)");

        ctx.fillStyle = gradient;
        ctx.fillRect(x - barWidth / 2, y, barWidth, bar.currentHeight);

        // Cap highlight line
        ctx.strokeStyle = "rgba(199, 93, 62, 0.45)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x - barWidth / 2, y);
        ctx.lineTo(x + barWidth / 2, y);
        ctx.stroke();
      });
      ctx.restore();

      // 3. Exponential Growth Trajectory Curve (Small Business Grows Big)
      // Path: Start at (0.08*w, 0.82*h) -> Mid (0.45*w, 0.65*h) -> End (0.92*w, 0.18*h)
      const p0 = { x: width * 0.08, y: height * 0.82 };
      const cp1 = { x: width * 0.42, y: height * 0.80 };
      const cp2 = { x: width * 0.60, y: height * 0.28 };
      const p1 = { x: width * 0.94, y: height * 0.18 };

      ctx.save();
      // Glow under curve
      ctx.strokeStyle = "rgba(199, 93, 62, 0.15)";
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p1.x, p1.y);
      ctx.stroke();

      // Sharp main curve line
      ctx.strokeStyle = "rgba(199, 93, 62, 0.65)";
      ctx.lineWidth = 2.5;
      ctx.setLineDash([6, 4]);
      ctx.lineDashOffset = -time * 15;
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p1.x, p1.y);
      ctx.stroke();
      ctx.setLineDash([]); // Reset
      ctx.restore();

      // 4. Milestone Nodes along the Growth Path
      const milestones = [
        { t: 0.0, label: "01. Seed", radius: 5 },
        { t: 0.38, label: "02. Catchment Scan", radius: 6 },
        { t: 0.72, label: "03. 35% Subsidy", radius: 7 },
        { t: 1.0, label: "04. Bank Scale", radius: 9 },
      ];

      // Helper function to calculate cubic bezier point at t
      const getBezierPoint = (t: number) => {
        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        const uuu = uu * u;
        const ttt = tt * t;

        const x = uuu * p0.x + 3 * uu * t * cp1.x + 3 * u * tt * cp2.x + ttt * p1.x;
        const y = uuu * p0.y + 3 * uu * t * cp1.y + 3 * u * tt * cp2.y + ttt * p1.y;
        return { x, y };
      };

      // Draw milestones
      milestones.forEach((m, idx) => {
        const pt = getBezierPoint(m.t);

        // Concentric pulse wave
        const pulse = (time * 1.5 + idx * 1.2) % 3;
        ctx.save();
        ctx.strokeStyle = `rgba(199, 93, 62, ${Math.max(0, 0.4 - pulse * 0.13)})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, m.radius + pulse * 14, 0, Math.PI * 2);
        ctx.stroke();

        // Solid Node Circle
        ctx.fillStyle = idx === milestones.length - 1 ? "#c75d3e" : "#1d1b18";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, m.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#c75d3e";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner pip
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Milestone Label Tag
        ctx.font = "bold 10px monospace";
        ctx.fillStyle = "#706c63";
        ctx.fillText(m.label, pt.x - 30, pt.y - m.radius - 8);
        ctx.restore();
      });

      // 5. Energy flow particles travelling from Village Seed -> Scaled Enterprise
      ctx.save();
      particles.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const pos = getBezierPoint(p.t);
        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.radius * 2);
        gradient.addColorStop(0, `rgba(199, 93, 62, ${p.alpha})`);
        gradient.addColorStop(1, "rgba(199, 93, 62, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, p.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full opacity-65" />
    </div>
  );
}
