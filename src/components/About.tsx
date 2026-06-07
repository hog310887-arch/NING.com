import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Milestone, Award, CircleDot, Database, Binary, Codepen, Camera, Upload, Trash2, Image } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, EXPERIENCE, SKILL_GROUPS } from '../data';

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Storage of uploaded multiple photo base64 strings
  const [photoUrls, setPhotoUrls] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('profile-photos-array');
      if (stored) {
        return JSON.parse(stored);
      }
      const old = localStorage.getItem('profile-photo-url');
      return old ? [old] : [];
    } catch {
      return [];
    }
  });

  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
  const [zoomedPhotoIndex, setZoomedPhotoIndex] = useState<number | null>(null);

  // Automatic one-time cleanup to delete the 5th and last photo from user's list if they exist
  useEffect(() => {
    try {
      const hasCleaned = localStorage.getItem('init-cleaned-5th-and-last');
      if (!hasCleaned && photoUrls.length > 0) {
        const originalLength = photoUrls.length;
        const fifthIndex = 4;
        const lastIndex = originalLength - 1;

        const updated = photoUrls.filter((_, idx) => {
          if (originalLength >= 5) {
            return idx !== fifthIndex && idx !== lastIndex;
          } else {
            return idx !== lastIndex;
          }
        });

        if (updated.length !== originalLength) {
          setPhotoUrls(updated);
          setActivePhotoIndex(0);
          localStorage.setItem('profile-photos-array', JSON.stringify(updated));
        }
        localStorage.setItem('init-cleaned-5th-and-last', 'true');
      }
    } catch (err) {
      console.error("Error executing initial photo cleanup:", err);
    }
  }, [photoUrls]);

  // Automatically cycle to the next photo every 4 seconds, matching the single-sweep cycle of the scanning line.
  useEffect(() => {
    if (photoUrls.length <= 1 || isConfirmingDelete || zoomedPhotoIndex !== null) return;
    
    const interval = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % photoUrls.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photoUrls.length, isConfirmingDelete, zoomedPhotoIndex]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const readFiles: string[] = [];
      let loadedCount = 0;
      const fileArray = Array.from(files) as File[];

      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          readFiles.push(base64String);
          loadedCount++;

          if (loadedCount === fileArray.length) {
            const updated = [...photoUrls, ...readFiles];
            setPhotoUrls(updated);
            setActivePhotoIndex(updated.length - readFiles.length); // switch to the first newly added photo
            try {
              localStorage.setItem('profile-photos-array', JSON.stringify(updated));
            } catch (err) {
              console.error("Storage write error or local storage limit hit", err);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const readFiles: string[] = [];
      let loadedCount = 0;
      const imageFiles = (Array.from(files) as File[]).filter(f => f.type.startsWith('image/'));

      if (imageFiles.length === 0) return;

      imageFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          readFiles.push(base64String);
          loadedCount++;

          if (loadedCount === imageFiles.length) {
            const updated = [...photoUrls, ...readFiles];
            setPhotoUrls(updated);
            setActivePhotoIndex(updated.length - readFiles.length);
            try {
              localStorage.setItem('profile-photos-array', JSON.stringify(updated));
            } catch (err) {
              console.error("Storage savings failed", err);
            }
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemovePhoto = (indexToRemove: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const updated = photoUrls.filter((_, idx) => idx !== indexToRemove);
    setPhotoUrls(updated);
    setIsConfirmingDelete(false);
    setActivePhotoIndex((prev) => {
      if (updated.length === 0) return 0;
      if (prev >= updated.length) return updated.length - 1;
      return prev;
    });
    try {
      localStorage.setItem('profile-photos-array', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  const handleClearAllPhotos = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setPhotoUrls([]);
    setActivePhotoIndex(0);
    try {
      localStorage.removeItem('profile-photos-array');
      localStorage.removeItem('profile-photo-url');
    } catch (err) {
      console.error(err);
    }
  };

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
              className={`border transition-all duration-300 bg-white/[0.01] p-4 relative overflow-hidden w-[240px] ${
                isDragging ? 'border-white bg-white/[0.05] scale-[1.01]' : 'border-white/10 hover:border-white/20'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-600"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-600"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-600"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-600"></div>

              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold">
                  <span className={`w-1.5 h-1.5 rounded-full ${photoUrls.length > 0 ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                  SYS_ID: PHOTO_MATRIX // {lang === 'zh' ? '个人影像档案' : 'MY PORTRAIT'}
                </span>
                <span className="font-mono text-[8px] text-neutral-500 font-light">
                  {photoUrls.length > 1 ? `[ SCAN: ${activePhotoIndex + 1}/${photoUrls.length} ]` : '[ ACTIVE_VISUAL ]'}
                </span>
              </div>

              <div 
                onClick={() => {
                  if (photoUrls.length > 0) {
                    setZoomedPhotoIndex(activePhotoIndex);
                  }
                }}
                className={`relative aspect-[4/5] bg-zinc-950/80 border border-white/5 overflow-hidden group/photo flex items-center justify-center ${photoUrls.length > 0 ? "cursor-zoom-in" : "cursor-pointer"}`}
              >
                {/* Click to zoom indicator */}
                {photoUrls.length > 0 && (
                  <div className="absolute top-2 right-2 bg-black/75 border border-white/10 px-2 py-0.5 rounded opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <span className="font-mono text-[7px] text-white/70 block uppercase">
                      {lang === 'zh' ? '点击放大' : 'CLICK TO ZOOM'}
                    </span>
                  </div>
                )}

                {/* Images with transition */}
                {photoUrls.length > 0 ? (
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
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/30 relative p-6 text-center">
                    {/* Retro Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                    <div className="border border-dashed border-white/10 p-6 rounded-full group-hover/photo:scale-105 group-hover/photo:border-white/20 transition-all duration-300">
                      <Camera className="w-8 h-8 text-neutral-600 group-hover/photo:text-neutral-300 transition-colors" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 mt-4 tracking-wider uppercase group-hover/photo:text-white transition-colors">
                      {lang === 'zh' ? '点击或拖拽上传个人多张照片' : 'CLICK OR DRAG TO UPLOAD PORTRAITS'}
                    </span>
                    <span className="font-mono text-[8px] text-neutral-600 mt-1 uppercase">
                      supports PNG, JPG, WEBP, GIF
                    </span>
                  </div>
                )}

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

                {/* Overlay on hover when photo exists */}
                {photoUrls.length > 0 && (
                  <div className="absolute inset-x-0 bottom-0 bg-black/90 backdrop-blur-sm border-t border-white/5 p-3 flex flex-col gap-2 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 z-10">
                    {isConfirmingDelete ? (
                      <div className="flex flex-col gap-2 w-full text-center">
                        <span className="font-mono text-[9px] text-amber-500 font-bold uppercase block tracking-wider animate-pulse">
                          {lang === 'zh' ? '确定删除当前这张照片吗？' : 'CONFIRM DELETE THIS PHOTO?'}
                        </span>
                        <div className="flex gap-2 justify-center mt-1">
                          <button 
                            onClick={(e) => handleRemovePhoto(activePhotoIndex, e)}
                            className="font-mono text-[9px] text-white bg-red-600 hover:bg-red-500 transition-colors px-2 py-1 font-bold rounded cursor-pointer"
                          >
                            {lang === 'zh' ? '确定' : 'YES'}
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setIsConfirmingDelete(false);
                            }}
                            className="font-mono text-[9px] text-neutral-400 bg-neutral-800 hover:text-white transition-colors px-2 py-1 font-bold rounded cursor-pointer"
                          >
                            {lang === 'zh' ? '取消' : 'NO'}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <label 
                          htmlFor="about-photo-uploader-input"
                          className="font-mono text-[9px] text-neutral-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                        >
                          <Upload size={10} className="text-emerald-400 font-bold" />
                          {lang === 'zh' ? '添加更多' : 'ADD MORE'}
                        </label>
                        <div className="flex gap-1.5">
                          {photoUrls.length > 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setIsConfirmingDelete(false);
                                setActivePhotoIndex((prev) => (prev - 1 + photoUrls.length) % photoUrls.length);
                              }}
                              className="font-mono text-[8px] text-neutral-400 hover:text-white px-1.5 py-0.5 border border-white/10 hover:border-white/30 bg-white/[0.02]"
                            >
                              PREV
                            </button>
                          )}
                          {photoUrls.length > 1 && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setIsConfirmingDelete(false);
                                setActivePhotoIndex((prev) => (prev + 1) % photoUrls.length);
                              }}
                              className="font-mono text-[8px] text-neutral-400 hover:text-white px-1.5 py-0.5 border border-white/10 hover:border-white/30 bg-white/[0.02]"
                            >
                              NEXT
                            </button>
                          )}
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setIsConfirmingDelete(true);
                            }}
                            className="font-mono text-[9px] text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors px-1.5 py-0.5 bg-red-950/10 rounded border border-red-900/20 cursor-pointer"
                            title={lang === 'zh' ? '删除当前张' : 'Delete Current'}
                          >
                            <Trash2 size={9} />
                            {lang === 'zh' ? '删除' : 'DEL'}
                          </button>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              if (window.confirm(lang === 'zh' ? '确定清空所有照片吗？' : 'Are you sure you want to clear all photos?')) {
                                handleClearAllPhotos(e);
                              }
                            }}
                            className="font-mono text-[9px] text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors px-1.5 py-0.5 bg-neutral-900 rounded border border-white/5 cursor-pointer"
                            title={lang === 'zh' ? '清空全部' : 'Clear All'}
                          >
                            {lang === 'zh' ? '清空' : 'CLEAR'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
 
                {/* Hidden File Input (supports multiple uploads) */}
                <input 
                  type="file" 
                  id="about-photo-uploader-input"
                  multiple
                  accept="image/*" 
                  onChange={handlePhotoUpload} 
                  className={photoUrls.length > 0 ? "hidden" : "absolute inset-0 opacity-0 cursor-pointer z-20"}
                  title={lang === 'zh' ? '上传多张照片' : 'Upload multiple photos'}
                />
              </div>

              {/* Photo indicator selection dots */}
              {photoUrls.length > 1 && (
                <div className="mt-2.5 flex items-center justify-center gap-1.5 py-1 bg-white/[0.02] border border-white/5">
                  {photoUrls.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsConfirmingDelete(false);
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
                <span>FORMAT: MULTI_BITMAP</span>
                <span>STATUS: {photoUrls.length > 0 ? 'INDEXED' : 'AWAIT_DATA'}</span>
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
