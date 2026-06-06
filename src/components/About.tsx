import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Milestone, Award, CircleDot, Database, Binary, Codepen } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, EXPERIENCE, SKILL_GROUPS } from '../data';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);

  return (
    <section 
      id="about-section" 
      className="bg-black text-white py-24 md:py-32 px-4 md:px-8 border-b border-white/10 relative overflow-hidden"
    >
      {/* Structural abstract framing lines */}
      <div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Module Header */}
        <div className="border-b border-white/10 pb-10 mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 block">MOD_02 // KNOWLEDGE & CORE</span>
            <span className="text-[9px] font-mono border border-white/20 px-2 py-0.5 text-white/40">SYS_INTEL_08</span>
          </div>
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tighter uppercase leading-[0.85]">
            {t.navAbout} <span className="font-serif italic font-light lowercase text-zinc-500">// bio</span>
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Column A: Left Column - Philosophy & Abstract blueprint diagram */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase leading-snug">
              {t.aboutTitle}
            </h3>
            
            <div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed">
              <p>{t.aboutBio1}</p>
              <p>{t.aboutBio2}</p>
            </div>

            {/* Premium stylistic blueprint-graphic box */}
            <div className="border border-white/10 bg-white/[0.02] p-6 font-mono text-[10px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 border-b border-l border-white/5 pointer-events-none"></div>
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <span className="text-white/60 flex items-center gap-1.5 font-bold uppercase">
                  <Binary size={11} className="text-white/50 animate-pulse" />
                  DESIGNER_CORE_MATRIX
                </span>
                <span className="text-white/30 value-stream">0xEB49910D</span>
              </div>

              <div className="space-y-3 font-mono text-[10px] text-white/40">
                <div className="flex justify-between">
                  <span>INTERFACE RATIONALITY:</span>
                  <span className="text-white font-semibold text-right">99.82% / EXTREME</span>
                </div>
                <div className="flex justify-between">
                  <span>SWISS COGNITIVE TYPOGRAPHY:</span>
                  <span className="text-white font-semibold text-right">OPTIMAL</span>
                </div>
                <div className="flex justify-between">
                  <span>MINIMALIST FRICTION INDEX:</span>
                  <span className="text-white font-semibold text-right">0.024 Hz</span>
                </div>
                <div className="flex justify-between">
                  <span>HUMAN-SYSTEM AGENCY RATE:</span>
                  <span className="text-white font-semibold text-right">100% SECURE</span>
                </div>
              </div>

              {/* Decorative dynamic wireframe coordinate representation */}
              <div className="mt-6 h-16 border-t border-dashed border-white/10 flex items-center justify-center relative bg-black/40">
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10"></div>
                <div className="absolute left-0 top-1/2 w-full h-[1px] bg-white/10"></div>
                <span className="text-[8px] text-white/30 bg-black px-2 relative z-10 font-mono tracking-widest uppercase">
                  [ PARAMETRIC GRID v2 ]
                </span>
              </div>
            </div>
          </div>

          {/* Column B: Right Column - Experience & Skills */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Experience Progression list */}
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase mb-8 flex items-center gap-2">
                <Briefcase size={12} />
                {t.expTitle}
              </h4>

              <div id="experience-timeline" className="space-y-4">
                {EXPERIENCE.map((exp) => (
                  <div
                    key={exp.id}
                    id={`experience-entry-${exp.id}`}
                    onMouseEnter={() => setHoveredExp(exp.id)}
                    onMouseLeave={() => setHoveredExp(null)}
                    className={`p-6 border transition-all duration-300 relative ${
                      hoveredExp === exp.id 
                        ? 'bg-white/[0.02] border-white/30' 
                        : 'bg-transparent border-white/5'
                    }`}
                  >
                    {/* Tiny geometric dot indicator */}
                    <div className="absolute top-6 left-0 -translate-x-1/2 hidden md:block">
                      <CircleDot 
                        size={12} 
                        className={`transition-colors duration-300 ${hoveredExp === exp.id ? 'text-white' : 'text-white/20'}`} 
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3 mb-4">
                      <div>
                        <span className="font-mono text-[9px] text-white/30 tracking-wider block uppercase mb-1">
                          {exp.period}
                        </span>
                        <h5 className="font-sans text-base font-semibold text-white tracking-tight uppercase">
                          {exp.company}
                        </h5>
                      </div>
                      <span className="font-mono text-[10px] bg-white/5 border border-white/20 px-3 py-1 font-bold tracking-wider text-white select-none whitespace-nowrap self-start sm:self-center">
                        {exp.role[lang]}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                      {exp.description[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Skills blueprint groups */}
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase mb-8 flex items-center gap-2">
                <Award size={12} />
                {t.skillsTitle}
              </h4>

              <div id="skills-catalog-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILL_GROUPS.map((group, gIdx) => (
                  <div 
                    key={gIdx} 
                    id={`skill-group-column-${gIdx}`}
                    className="border border-white/10 p-6 bg-black/40"
                  >
                    <span className="font-mono text-[9px] tracking-widest text-[#888888] uppercase block mb-4 border-b border-white/10 pb-3 font-semibold">
                      // {group.category[lang]}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[9px] tracking-wider border border-white/5 bg-white/[0.02] hover:bg-white hover:text-black hover:border-white transition-colors py-2 px-3 text-neutral-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
