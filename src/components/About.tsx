import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Milestone, Award, CircleDot, Database, Binary, Codepen, Camera, Upload, Trash2, Image } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, EXPERIENCE, SKILL_GROUPS } from '../data';

// Static image imports for production build optimization
import photo1 from '../assets/images/regenerated_image_1780840174651.jpg';
import photo2 from '../assets/images/regenerated_image_1780841019807.jpg';
import photo3 from '../assets/images/regenerated_image_1780841070137.jpg';
import photo4 from '../assets/images/regenerated_image_1780841404407.jpg';
import photo5 from '../assets/images/regenerated_image_1780842418427.jpg';
import photo6 from '../assets/images/regenerated_image_1780844634932.jpg';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);
  // Storage of uploaded multiple photo base64 strings
  const [photoUrls] = useState<string[]>([
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6
  ]);

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [zoomedPhotoIndex, setZoomedPhotoIndex] = useState<number | null>(null);

  // Automatically cycle to the next photo every 4 seconds, matching the single-sweep cycle of the scanning line.
  useEffect(() => {
    if (photoUrls.length <= 1 || zoomedPhotoIndex !== null) return;
    
    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % photoUrls.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photoUrls.length, zoomedPhotoIndex]);

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

        {/* Refined Simplified Layout - Bio & Photo Matrix side by side on desktop */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start max-w-4xl mx-auto">
          
          {/* Photo Section // 照片板块 */}
          <div className="w-full md:w-auto flex-shrink-0 mx-auto md:mx-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border transition-all duration-300 bg-white/[0.01] p-4 relative overflow-hidden w-[240px] border-white/10 hover:border-white/20"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-600"></div>

              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold">
                  <span className={`w-1.5 h-1.5 rounded-full ${photoUrls.length > 0 ? 'bg-emerald-500' : 'bg-red-500/30 animate-pulse'}`}></span>
                  SYS_ID: PHOTO_MATRIX // {lang === 'zh' ? '个人影像档案' : 'MY PORTRAIT'}
                </span>
                <span className="font-mono text-[8px] text-neutral-500 font-light">
                  {photoUrls.length > 1 ? `[ SCAN: ${activePhotoIndex + 1}/${photoUrls.length} ]` : photoUrls.length === 1 ? '[ ACTIVE_VISUAL ]' : '[ SYS_STANDBY ]'}
                </span>
              </div>

              <div 
                onClick={() => {
                  if (photoUrls.length > 0) {
                    setZoomedPhotoIndex(activePhotoIndex);
                  }
                }}
                className={`relative aspect-[4/5] bg-zinc-950/80 border border-white/5 overflow-hidden group/photo flex flex-col items-center justify-center ${photoUrls.length > 0 ? 'cursor-zoom-in' : 'cursor-default'}`}
              >
                {photoUrls.length > 0 ? (
                  <>
                    {/* Click to zoom indicator */}
                    <div className="absolute top-2 right-2 bg-black/75 border border-white/10 px-2 py-0.5 rounded opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                      <span className="font-mono text-[7px] text-white/70 block uppercase">
                        {lang === 'zh' ? '点击放大' : 'CLICK TO ZOOM'}
                      </span>
                    </div>

                    {/* Images with transition */}
                    <div className="relative w-full h-full overflow-hidden">
                      <AnimatePresence mode="popLayout">
                        <motion.img
                          key={activePhotoIndex}
                          src={photoUrls[activePhotoIndex]}
                          alt="Profile Matrix Frame"
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="absolute inset-0 w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Scanning Bar (framer motion loop) */}
                    <motion.div 
                      className="absolute left-0 w-full h-[1px] bg-white/20 shadow-[0_0_6px_rgba(255,255,255,0.3)] pointer-events-none"
                      initial={{ top: '0%' }}
                      animate={{ top: '100%' }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-zinc-950/95 text-center select-none overflow-hidden font-mono">
                    {/* Grid background backplane */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                    
                    {/* Camera focal corners */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-neutral-700/40"></div>
                    <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-neutral-700/40"></div>
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-neutral-700/40"></div>
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-neutral-700/40"></div>

                    {/* Center circular scope alignment */}
                    <div className="relative w-24 h-24 rounded-full border border-dashed border-neutral-800/60 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-neutral-900 scale-75"></div>
                      <div className="absolute w-3 h-[1px] bg-neutral-700/80"></div>
                      <div className="absolute h-3 w-[1px] bg-neutral-700/80"></div>
                      <Camera size={18} className="text-neutral-500 z-10" />
                    </div>

                    {/* Technical camera parameters */}
                    <div className="absolute top-3.5 left-8 text-[6px] text-neutral-600 text-left">
                      <div>REC [STANDBY]</div>
                      <div>F3.2 1/125s</div>
                    </div>
                    
                    <div className="absolute top-3.5 right-8 text-[6px] text-neutral-600 text-right">
                      <div>ISO 400</div>
                      <div>RAW 4:5</div>
                    </div>

                    {/* Blueprint info typography */}
                    <div className="space-y-1 z-10 mt-3 px-2">
                      <span className="font-mono text-[9px] text-zinc-400 block tracking-[0.25em] uppercase font-bold">
                        {lang === 'zh' ? '影像占位模版' : 'IMAGE TEMPLATE'}
                      </span>
                      <div className="h-[1px] w-12 bg-neutral-800/80 mx-auto my-1"></div>
                      <span className="font-mono text-[7px] text-neutral-600 block leading-normal uppercase tracking-wider max-w-[170px] mx-auto">
                        {lang === 'zh' ? 'SYS_02 // 等待上载影像信号' : 'SYS_02 // READY TO BIND SOURCE'}
                      </span>
                    </div>

                    {/* Custom coordinates and channel status */}
                    <div className="absolute bottom-3.5 inset-x-8 flex justify-between text-[6px] text-neutral-700">
                      <span>[ 0.00 EV ]</span>
                      <span>[ CH: 1 // 2 ]</span>
                    </div>

                    {/* Interactive sweep/scanning line */}
                    <motion.div 
                      className="absolute left-0 w-full h-[1px] bg-neutral-800/60 shadow-[0_0_4px_rgba(255,255,255,0.1)] pointer-events-none"
                      initial={{ top: '0%' }}
                      animate={{ top: '100%' }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Photo indicator selection dots */}
              {photoUrls.length > 1 && (
                <div className="mt-2.5 flex items-center justify-center gap-1.5 py-1 bg-white/[0.02] border border-white/5">
                  {photoUrls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhotoIndex(idx);
                      }}
                      className={`relative h-1.5 transition-all duration-300 ${
                        idx === activePhotoIndex 
                          ? 'w-6 bg-white' 
                          : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
                      }`}
                      title={`Go to photo ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Decorative scan metadata banner */}
              <div className="mt-3 flex justify-between font-mono text-[8px] text-neutral-500">
                <span>FORMAT: {photoUrls.length > 0 ? 'MULTI_BITMAP' : 'EMPTY_REFS'}</span>
                <span>STATUS: {photoUrls.length > 0 ? 'INDEXED' : 'STANDBY_MODE'}</span>
              </div>
            </motion.div>
          </div>
          
          {/* Biography Profile Text */}
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase leading-snug">
              {t.aboutTitle}
            </h3>

            <div className="space-y-6 text-sm text-neutral-400 font-light leading-relaxed">
              {t.aboutBio1 && <p>{t.aboutBio1}</p>}
              {t.aboutBio2 && <p>{t.aboutBio2}</p>}
              {t.aboutBio3 && <p>{t.aboutBio3}</p>}
              {t.aboutBio4 && <p>{t.aboutBio4}</p>}
            </div>
          </div>

        </div>

      </div>

      {/* Photo Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomedPhotoIndex !== null && photoUrls[zoomedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setZoomedPhotoIndex(null)}
          >
            {/* Header / Info bar inside the fullscreen modal */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                SYS_ZOOM: ACTIVE_MATRIX_FRAME // {zoomedPhotoIndex + 1} OF {photoUrls.length}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedPhotoIndex(null);
                }}
                className="pointer-events-auto font-mono text-[10px] text-white hover:text-neutral-300 px-3 py-1.5 border border-white/10 hover:border-white/30 bg-white/[0.02] cursor-pointer"
              >
                {lang === 'zh' ? '[ 关闭 ]' : '[ CLOSE ]'}
              </button>
            </div>

            {/* Main content container with corner brackets */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-2xl w-full max-h-[80vh] border border-white/10 p-2 bg-zinc-950 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30"></div>

              <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <img
                  src={photoUrls[zoomedPhotoIndex]}
                  alt="Zoomed Portrait View"
                  className="max-w-full max-h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Navigation overlays inside modal if multiple images */}
              {photoUrls.length > 1 && (
                <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedPhotoIndex((prev) => (prev! - 1 + photoUrls.length) % photoUrls.length);
                    }}
                    className="pointer-events-auto w-10 h-10 rounded-full border border-white/15 bg-black/60 hover:bg-black text-white flex items-center justify-center font-mono text-xs cursor-pointer hover:border-white/40 transition-colors"
                    title="Previous"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomedPhotoIndex((prev) => (prev! + 1) % photoUrls.length);
                    }}
                    className="pointer-events-auto w-10 h-10 rounded-full border border-white/15 bg-black/60 hover:bg-black text-white flex items-center justify-center font-mono text-xs cursor-pointer hover:border-white/40 transition-colors"
                    title="Next"
                  >
                    &gt;
                  </button>
                </div>
              )}
            </motion.div>

            {/* Bottom info banner */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[8px] text-neutral-500 pointer-events-none">
              <span>SCAN_RESOLUTION: TRUE_HIGH_RES</span>
              <span>INDEX: {zoomedPhotoIndex + 1} // {photoUrls.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
