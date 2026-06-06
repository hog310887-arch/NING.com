import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface CoverProps {
  lang: Language;
}

export default function Cover({ lang }: CoverProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [relativePos, setRelativePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const t = TRANSLATIONS[lang];

  // Mouse coordinate tracking for tech-aesthetic feedback
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const rx = Number(((e.clientX - rect.left) / rect.width).toFixed(3));
        const ry = Number(((e.clientY - rect.top) / rect.height).toFixed(3));
        setRelativePos({ x: rx, y: ry });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generative dynamic background vector stream on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes mapping soundwave-style parameters
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Instantiate limited sleek particles to retain minimal vibe
    for (let i = 0; i < 22; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Fine precision grid layout with subtle coordinates
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 80;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw faint circular ripples in grid center
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 240, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 480, 0, Math.PI * 2);
      ctx.stroke();

      // Render aesthetic crosshairs (+) at intersection grids
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      const crossIntersects = [
        { x: gridSize * 2, y: gridSize * 3 },
        { x: width - gridSize * 2, y: gridSize * 5 },
        { x: gridSize * 4, y: height - gridSize * 2 },
      ];
      crossIntersects.forEach((pt) => {
        ctx.beginPath();
        // horizontal line
        ctx.moveTo(pt.x - 6, pt.y);
        ctx.lineTo(pt.x + 6, pt.y);
        // vertical line
        ctx.moveTo(pt.x, pt.y - 6);
        ctx.lineTo(pt.x, pt.y + 6);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.stroke();
      });

      // Animate delicate node networks
      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nodes strictly with surrounding neighbours within radius limit
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.05;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const triggerScroll = () => {
    const el = document.getElementById('works-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      id="root-cover-hero-container" 
      ref={heroRef}
      className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden border-b border-white/10 select-none pt-20"
    >
      {/* Dynamic generative SVG canvas backdrop */}
      <canvas 
        id="bg-generative-vector-canvas"
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Decorative Grid Overlay - Swiss brutalist framing lines */}
      <div className="absolute top-0 left-0 w-12 h-full border-r border-white/5 hidden md:block"></div>
      <div className="absolute top-0 right-0 w-12 h-full border-l border-white/5 hidden md:block"></div>
      <div className="absolute bottom-12 left-0 w-full h-12 border-t border-white/5 hidden md:block flex items-center justify-between px-16">
        <span className="font-mono text-[9px] text-white/30 tracking-widest">
          SYSTEM_NODE: ACTIVE_0x4F1F79
        </span>
        <span className="font-mono text-[9px] text-white/30 tracking-widest">
          INTEGRITY_INDEX: 1.0000
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-16 lg:px-24 py-16 relative z-10 flex flex-col justify-between h-full min-h-[calc(100vh-140px)]">
        {/* Technical HUD metadata header - Minimal blueprint aesthetics */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-white animate-ping"></span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase">
              {t.heroStatus}
            </span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] text-white/40 tracking-wider">
            <span>{t.heroLocation}</span>
            <span className="hidden sm:inline">COGNITION: GRID_BOUNDS</span>
            <span id="numeric-coordinate-hud-stream" className="font-mono text-white/75 bg-white/5 border border-white/10 px-2 py-0.5">
              COORD: [{relativePos.x.toFixed(2)}, {relativePos.y.toFixed(2)}]
            </span>
          </div>
        </div>

        {/* Dynamic Stylistic Cover Text block */}
        <div className="my-auto py-12 md:py-20">

          <motion.h1 
            id="hero-massive-kinetic-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-[100px] lg:text-[130px] font-extrabold leading-[0.85] tracking-tighter uppercase mb-6"
          >
            {lang === 'en' ? (
              <>
                PORT<br />
                <span className="font-serif italic font-light lowercase text-zinc-400 mr-4">folio</span>
              </>
            ) : (
              <>
                PORT<br />
                <span className="font-serif italic font-light lowercase text-zinc-400 mr-4">folio.作品集</span>
              </>
            )}
          </motion.h1>

          <div className="flex items-center space-x-4 mb-8">
            <div className="h-[1px] w-24 bg-white"></div>
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              {t.heroRole}
            </p>
          </div>

          <motion.p 
            id="hero-subtext-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 max-w-xl text-sm md:text-base text-neutral-400 font-sans tracking-wide leading-relaxed font-light"
          >
            {t.heroSub}
          </motion.p>

          <div className="mt-12 flex flex-wrap gap-4">
            <button 
              id="hero-primary-cta"
              onClick={triggerScroll}
              className="group flex items-center gap-3 bg-white border border-white text-black font-mono text-[11px] tracking-[0.25em] py-4 px-8 uppercase transition-all duration-500 hover:bg-transparent hover:text-white cursor-pointer"
            >
              <span>{t.navWorks}</span>
              <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              id="hero-secondary-cta"
              onClick={() => {
                const cSection = document.getElementById('about-section');
                if (cSection) cSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 border border-white/20 hover:border-white hover:bg-white/5 text-white font-mono text-[11px] tracking-[0.25em] py-4 px-8 uppercase transition-all duration-300 cursor-pointer"
            >
              <span>{t.navAbout}</span>
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}
