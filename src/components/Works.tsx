import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ArrowUpRight, LayoutGrid, Layers, Play, Pause } from 'lucide-react';
import { Project, Language } from '../types';
import { PROJECTS, TRANSLATIONS } from '../data';

interface WorksProps {
  lang: Language;
}

export default function Works({ lang }: WorksProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');
  const t = TRANSLATIONS[lang];

  const inspectVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isInspectPlaying, setIsInspectPlaying] = useState(false);

  useEffect(() => {
    if (activeProject && activeProject.videoUrl) {
      setIsInspectPlaying(true);
      // Let the modal open and frame mount, then trigger playback with original sound
      const timer = setTimeout(() => {
        if (inspectVideoRef.current) {
          inspectVideoRef.current.muted = false; // ensure original sound status
          inspectVideoRef.current.play().catch((err) => {
            console.log("Audible autoplay paused or blocked by system gesture restrictions, user can click play:", err);
            setIsInspectPlaying(false);
          });
        }
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setIsInspectPlaying(false);
    }
  }, [activeProject]);

  const toggleInspectPlay = () => {
    if (inspectVideoRef.current) {
      if (isInspectPlaying) {
        inspectVideoRef.current.pause();
        setIsInspectPlaying(false);
      } else {
        inspectVideoRef.current.play().catch((err) => {
          console.error("Video playback failed", err);
        });
        setIsInspectPlaying(true);
      }
    }
  };

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const categories = [
    { key: 'all', label: t.filterAll },
    { key: 'uiux', label: t.filterUiUx },
    { key: 'code', label: t.filterCode },
    { key: 'motion', label: t.filterMotion },
    { key: 'brand', label: t.filterBrand },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, projectId: string) => {
    const fallbacks: Record<string, string> = {
      'chronos': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'zenith-hologram': 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      'elysian-canvas': 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1200&auto=format&fit=crop',
      'nebula-dynamics': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
      'orion-spheres': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      'fractal-matrix': 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
    };
    const defaultUrl = fallbacks[projectId] || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop';
    if (e.currentTarget.src !== defaultUrl) {
      e.currentTarget.src = defaultUrl;
    }
  };

  return (
    <section 
      id="works-section" 
      className="bg-[#050505] text-white py-24 md:py-32 px-4 md:px-8 border-b border-white/10 relative"
    >
      {/* Decorative Technical Line Elements */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 pointer-events-none hidden md:block"></div>
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 block">MOD_01 // RESEARCH & WORK</span>
              <span className="text-[9px] font-mono border border-white/20 px-2 py-0.5 text-white/40">ARCHIVE_v2</span>
            </div>
            <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tighter uppercase leading-[0.85]">
              {t.navWorks} <span className="font-serif italic font-light lowercase text-zinc-500">({PROJECTS.length})</span>
            </h2>
          </div>

          {/* Sizing Controller Layout Toggle & Coordinates */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-mono text-[9px] text-white/30 lowercase">
              sys_mode: dynamic_canvas
            </span>
            <div className="flex border border-white/10 p-1 bg-black gap-1">
              <button 
                id="btn-layout-grid-toggle"
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 cursor-pointer transition-colors ${layoutMode === 'grid' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                title="Bento Grid"
              >
                <LayoutGrid size={14} />
              </button>
              <button 
                id="btn-layout-list-toggle"
                onClick={() => setLayoutMode('list')}
                className={`p-1.5 cursor-pointer transition-colors ${layoutMode === 'list' ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
                title="Minimalist List"
              >
                <Layers size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Categories filters - Minimal row */}
        <div id="works-category-filters" className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              id={`filter-button-${cat.key}`}
              onClick={() => setSelectedCategory(cat.key)}
              className={`font-mono text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-none border transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Works List / Grid container with micro-interactions */}
        {layoutMode === 'grid' ? (
          <div id="works-bento-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-grid-${project.id}`}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative bg-black/40 border border-white/10 hover:border-white transition-colors duration-500 overflow-hidden cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                {/* Image panel with zoom shader effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 border-b border-white/10">
                  {project.videoUrl ? (
                    <video
                      src={`${project.videoUrl}#t=0.01`}
                      id={`project-card-video-${project.id}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover md:grayscale grayscale-0 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                    />
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt={project.title[lang]}
                      id={`project-card-image-${project.id}`}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, project.id)}
                      className="w-full h-full object-cover md:grayscale grayscale-0 brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-65 pointer-events-none"></div>

                  {/* Top floating absolute HUD specs on grid cards */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[9px] bg-black/80 px-2.5 py-1 text-white/70 backdrop-blur-sm border border-white/10">
                      /{project.year}
                    </span>
                    <span className="font-mono text-[9px] bg-white text-black font-bold px-2.5 py-1">
                      {project.category === 'uiux' 
                        ? '3D' 
                        : project.category === 'code' 
                          ? 'Dynamic poster' 
                          : project.category === 'motion'
                            ? 'Video'
                            : project.category === 'brand'
                              ? 'AE'
                              : (project.category as string).toUpperCase()}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
                    <span className="font-mono text-[10px] text-white tracking-widest">{t.viewProject}</span>
                  </div>
                </div>

                {/* Info summary */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] tracking-wider text-white/30 text-xs">
                      {project.tag[lang]}
                    </span>
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-sans tracking-tight font-bold text-white transition-colors">
                    {project.title[lang]}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-neutral-400 leading-relaxed font-light line-clamp-2">
                    {project.overview[lang]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div id="works-list-container" className="flex flex-col border-t border-white/10">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={`project-card-list-${project.id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="group relative py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-white/[0.01] px-4 transition-colors"
                onClick={() => setActiveProject(project)}
              >
                <div className="flex items-start gap-6 md:w-2/5">
                  <span className="font-mono text-xs text-white/30 pt-1">0{idx + 1}</span>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-white/40 block mb-1">
                      {project.category === 'uiux' 
                        ? '3D' 
                        : project.category === 'code' 
                          ? 'Dynamic poster' 
                          : project.category === 'motion'
                            ? 'Video'
                            : project.category === 'brand'
                              ? 'AE'
                              : (project.category as string).toUpperCase()} // {project.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-sans text-white group-hover:translate-x-2 transition-transform duration-300">
                      {project.title[lang]}
                    </h3>
                  </div>
                </div>

                <div className="md:w-2/5 md:px-6">
                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    {project.overview[lang]}
                  </p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-12 md:w-1/5">
                  <span className="font-mono text-[10px] text-white/30 uppercase">
                    {project.client}
                  </span>
                  <div className="w-8 h-8 rounded-none border border-white/10 flex items-center justify-center bg-black group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Dynamic empty/no entries logic */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center border border-white/5 bg-black/20">
            <span className="font-mono text-xs text-white/30 tracking-widest block mb-2">NO_SENSORS_AVAILABLE</span>
            <p className="text-neutral-500 text-sm">No items matching this parameter in active registers.</p>
          </div>
        )}
      </div>

      {/* Full Immersive Core Details Inspect Modal Drawer */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            id="works-project-inspect-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-xl flex justify-end"
          >
            {/* Modal Drawer Layout */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="w-full lg:w-7/12 min-h-screen bg-[#0d0d0d] border-l border-white/10 py-12 px-6 md:px-12 relative flex flex-col justify-between"
            >
              {/* Close Button top corner */}
              <button
                id="btn-close-project-inspect"
                onClick={() => setActiveProject(null)}
                className="absolute top-8 right-8 z-50 text-white hover:text-neutral-300 cursor-pointer border border-white/10 bg-black p-2.5 hover:border-white transition-all flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase"
              >
                <span>{t.closeDetail}</span>
                <X size={14} />
              </button>

              {/* Central Content */}
              <div className="my-auto pt-10 pb-16">
                
                {/* Meta details header info */}
                <div className="flex flex-wrap gap-4 items-center font-mono text-[10px] text-white/40 tracking-wider mb-6 border-b border-white/5 pb-4">
                  <span className="text-white border border-white/20 px-2 py-0.5 bg-white/5">{activeProject.year}</span>
                  <span>CLIENT: {activeProject.client.toUpperCase()}</span>
                  <span>CATEGORY: {activeProject.category === 'uiux' 
                    ? '3D' 
                    : activeProject.category === 'code' 
                      ? 'Dynamic poster' 
                      : activeProject.category === 'motion'
                        ? 'Video'
                        : activeProject.category === 'brand'
                          ? 'AE'
                          : (activeProject.category as string).toUpperCase()}</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-sans text-white font-bold leading-tight uppercase tracking-tight">
                  {activeProject.title[lang]}
                </h1>

                <p className="mt-8 text-neutral-400 text-sm md:text-base leading-relaxed font-light border-l border-white/25 pl-6 italic">
                  {activeProject.overview[lang]}
                </p>

                {/* Big high-contrast preview frame */}
                <div className="mt-12 max-w-2xl bg-neutral-900 border border-white/10 overflow-hidden relative">
                  {activeProject.videoUrl ? (
                    <>
                      <video
                        ref={inspectVideoRef}
                        src={`${activeProject.videoUrl}#t=0.01`}
                        id={`project-inspect-video-${activeProject.id}`}
                        autoPlay
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-auto block brightness-95 ring-0 outline-none"
                      />
                      <button
                        id="btn-inspect-video-play-toggle"
                        onClick={toggleInspectPlay}
                        className="absolute bottom-6 left-6 z-30 bg-black/80 border border-white/20 hover:border-white hover:bg-black text-white px-4 py-2.5 flex items-center justify-center gap-2.5 transition-all text-xs font-mono tracking-wider cursor-pointer rounded-sm"
                        title={isInspectPlaying ? "Pause" : "Play"}
                      >
                        {isInspectPlaying ? (
                          <>
                            <Pause size={13} className="fill-white" />
                            <span>{lang === 'zh' ? '暂停 // PAUSE' : 'PAUSE'}</span>
                          </>
                        ) : (
                          <>
                            <Play size={13} className="fill-white ml-0.5" />
                            <span>{lang === 'zh' ? '播放 // PLAY' : 'PLAY'}</span>
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    <img
                      src={activeProject.imageUrl}
                      alt={activeProject.title[lang]}
                      id={`project-inspect-image-${activeProject.id}`}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, activeProject.id)}
                      className="w-full h-auto block md:grayscale grayscale-0 brightness-95"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                </div>

              </div>

              {/* Minimal footer diagnostics */}
              <div className="border-t border-white/5 pt-6 flex items-center justify-between font-mono text-[9px] text-white/30 tracking-widest">
                <span>SYSTEM DIAGNOSTIC: STABLE</span>
                <span>ID: {activeProject.id.toUpperCase()}_MEM_UNIT</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
