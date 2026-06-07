import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Github, Linkedin, Phone, QrCode, MessageSquare, Upload, Trash2, Camera, Image } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

import defaultWeChatQr from '../assets/images/regenerated_image_1780739726126.png';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang];
  const emailAddress = '1623984718@qq.com';
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // WeChat QR code base64 storage, and Phone persistence
  const [weChatQr, setWeChatQr] = useState<string>(() => {
    try {
      return localStorage.getItem('contact-wechat-qr') || defaultWeChatQr;
    } catch {
      return defaultWeChatQr;
    }
  });

  const [phoneNumber] = useState<string>('15365802003/18061281297');
  const [isWeChatQrZoomed, setIsWeChatQrZoomed] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      if (base64String) {
        setWeChatQr(base64String);
        try {
          localStorage.setItem('contact-wechat-qr', base64String);
        } catch (err) {
          console.error('Failed to save QR code to localStorage:', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
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
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleResetQr = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultQr = defaultWeChatQr;
    setWeChatQr(defaultQr);
    try {
      localStorage.removeItem('contact-wechat-qr');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section 
      id="contact-section" 
      className="bg-[#050505] text-white py-24 md:py-32 px-4 md:px-8 relative"
    >
      {/* Decorative vertical blueprint coordinate line */}
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/5 pointer-events-none hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Module Header */}
        <div className="border-b border-white/10 pb-10 mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white/50 block">MOD_03 // ROUTING TERMINAL</span>
            <span className="text-[9px] font-mono border border-white/20 px-2 py-0.5 text-white/40">SYS_PORT_80</span>
          </div>
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tighter uppercase leading-[0.85]">
            {t.navContact} <span className="font-serif italic font-light lowercase text-zinc-500">// stream</span>
          </h2>
        </div>

        {/* Dynamic Centered Single Column Block */}
        <div className="max-w-2xl mx-auto w-full py-2">
          
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase leading-snug mb-8 text-center">
              {lang === 'zh' ? '期待您的联系' : 'Looking forward to hearing from you.'}
            </h3>

            {/* Instant Clipboard Copy interactive widget */}
            <div className="border border-white/10 bg-black p-6 space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-white/40 flex items-center gap-1.5 uppercase">
                <MessageSquare size={11} className="text-white/40" />
                <span>{lang === 'zh' ? '联系方式' : 'CONTACT INFORMATION'}</span>
              </span>
              
              {/* Email Channel */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-white/10 p-4 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-white/40" />
                  <span className="font-mono text-sm tracking-wide text-white">{emailAddress}</span>
                </div>
                
                <button
                  id="btn-copy-email-clipboard"
                  onClick={handleCopy}
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black py-2 px-4 font-mono text-[10px] tracking-wider transition-all cursor-pointer bg-transparent uppercase"
                >
                  {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                  <span>{copied ? t.emailCopied : t.copyEmail}</span>
                </button>
              </div>

              {/* Phone Channel */}
              <div className="border border-white/10 p-4 bg-white/[0.01] flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-white/40" />
                  <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                    {lang === 'zh' ? '电话联系' : 'PHONE CONTACT'}
                  </span>
                </div>
                <span className="font-mono text-sm tracking-wide text-white pl-7 select-all">
                  {phoneNumber}
                </span>
              </div>

              {/* WeChat QR Channel - Photo Plate Aesthetic Block */}
              <div 
                className={`border border-white/10 p-5 bg-white/[0.01] flex flex-col gap-4 relative transition-colors duration-200 ${
                  isDragging ? 'border-dashed border-white/50 bg-white/[0.04]' : ''
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <QrCode size={16} className="text-white/40" />
                    <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                      {lang === 'zh' ? '微信联系：15365802003 或微信扫码' : 'WeChat Contact: 15365802003 or Scan'}
                    </span>
                  </div>
                  
                  {/* High tech action panel */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-1 border border-white/10 hover:border-white/30 bg-black hover:bg-zinc-900 text-white p-1 px-2 font-mono text-[8px] tracking-widest transition-colors uppercase cursor-pointer"
                      title={lang === 'zh' ? '上传专属二维码' : 'Upload QR Code'}
                    >
                      <Upload size={10} />
                      <span>{lang === 'zh' ? '更换二维码' : 'CHANGE QR'}</span>
                    </button>
                    {weChatQr !== defaultWeChatQr && (
                      <button
                        type="button"
                        onClick={handleResetQr}
                        className="flex items-center gap-1 border border-red-950/40 hover:border-red-500/30 hover:bg-red-950/20 text-red-400 p-1 px-1.5 font-mono text-[8px] tracking-widest transition-colors uppercase cursor-pointer"
                        title={lang === 'zh' ? '恢复默认二维码' : 'Reset'}
                      >
                        <Trash2 size={10} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Hidden input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />

                {/* Highly-crafted Photo Plate Grid Frame */}
                <div className="border border-white/5 bg-zinc-950 p-4 relative overflow-hidden flex flex-col items-center">
                  {/* Camera corner brackets */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-600"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-600"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-600"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-600"></div>

                  <div className="flex items-center justify-between w-full border-b border-white/5 pb-1.5 mb-3">
                    <span className="font-mono text-[7px] tracking-widest text-neutral-400 uppercase flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                      SYS_QR: DETECTED_FEED
                    </span>
                    <span className="font-mono text-[7px] text-neutral-500">
                      [ SCAN_ACTIVE ]
                    </span>
                  </div>

                  {/* Interactive QR frame */}
                  <div 
                    onClick={() => setIsWeChatQrZoomed(true)}
                    className="relative aspect-square w-32 border border-white/5 overflow-hidden group/wechat flex items-center justify-center mt-1 cursor-zoom-in bg-zinc-900"
                  >
                    <img
                      src={weChatQr}
                      alt="WeChat QR Code"
                      className="w-full h-full object-cover p-1.5"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Active photo overlays */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/wechat:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="font-mono text-[7px] text-white bg-black/80 px-2 py-0.5 border border-white/10 tracking-widest uppercase rounded">
                        {lang === 'zh' ? '点击放大' : 'ZOOM IN'}
                      </span>
                    </div>

                    {/* Scanning indicator thin line */}
                    <motion.div 
                      className="absolute left-0 w-full h-[1px] bg-emerald-500/30 shadow-[0_0_4px_rgba(16,185,129,0.5)] pointer-events-none"
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

                  {/* Support drag-and-drop info text */}
                  <div className="mt-3 text-center pointer-events-none select-none">
                    <p className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest leading-normal">
                      {lang === 'zh' ? '拖拽可在本板块直接添加或更新专属二维码图片' : 'DRAG & DROP TO DIRECTLY ATTACH OR UPDATE CURRENT QR CODE'}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Social Coordinates Grid */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
            <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase block mb-4">
              SYNCHRONIZATION FEEDS
            </span>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                id="social-link-github"
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 border border-white/5 hover:border-white/30 bg-black p-3 font-mono text-[10px] tracking-widest text-neutral-300 hover:text-white transition-colors uppercase cursor-pointer"
              >
                <Github size={12} />
                <span>GITHUB_NET</span>
              </a>
              <a 
                id="social-link-linkedin"
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                referrerPolicy="no-referrer"
                className="flex items-center gap-2 border border-white/5 hover:border-white/30 bg-black p-3 font-mono text-[10px] tracking-widest text-neutral-300 hover:text-white transition-colors uppercase cursor-pointer"
              >
                <Linkedin size={12} />
                <span>LINKEDIN_NET</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* WeChat QR Zoom Modal */}
      <AnimatePresence>
        {isWeChatQrZoomed && weChatQr && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setIsWeChatQrZoomed(false)}
          >
            {/* Header / Info bar inside the fullscreen modal */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                SYS_ZOOM: WECHAT_QR_ACTIVE
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsWeChatQrZoomed(false);
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
              className="relative max-w-sm w-full border border-white/10 p-6 bg-zinc-950 flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative brackets */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30"></div>

              <div className="relative aspect-square w-full bg-white p-4">
                <img
                  src={weChatQr}
                  alt="Zoomed WeChat QR Code"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="font-mono text-[10px] text-neutral-400 text-center uppercase tracking-wider">
                {lang === 'zh' ? '使用微信扫一扫添加联系方式' : 'SCAN VIA WECHAT TO CONNECT'}
              </p>
            </motion.div>

            {/* Bottom info banner */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[8px] text-neutral-500 pointer-events-none">
              <span>SCAN_RESOLUTION: 2D_BARCODE_DECODED</span>
              <span>STATE: ACTIVE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
