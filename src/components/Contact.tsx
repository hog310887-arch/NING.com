import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Github, Linkedin, Phone, QrCode, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang];
  const emailAddress = '1623984718@qq.com';
  const [copied, setCopied] = useState(false);

  // WeChat QR code base64 storage, and Phone persistence
  const [weChatQr, setWeChatQr] = useState<string | null>(() => {
    try {
      return localStorage.getItem('contact-wechat-qr');
    } catch {
      return null;
    }
  });

  const [phoneNumber, setPhoneNumber] = useState<string>(() => {
    try {
      return localStorage.getItem('contact-phone-number') || '138-0000-0000';
    } catch {
      return '138-0000-0000';
    }
  });

  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phoneInput, setPhoneInput] = useState(phoneNumber);
  const [isWeChatQrZoomed, setIsWeChatQrZoomed] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
              {lang === 'zh' ? '期待您的联系。' : 'Looking forward to hearing from you.'}
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-white/40" />
                    <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                      {lang === 'zh' ? '电话联系' : 'PHONE CONTACT'}
                    </span>
                  </div>
                  {!isEditingPhone ? (
                    <button
                      onClick={() => {
                        setPhoneInput(phoneNumber);
                        setIsEditingPhone(true);
                      }}
                      className="font-mono text-[9px] text-neutral-400 hover:text-white px-2 py-0.5 border border-white/15 bg-white/[0.02] cursor-pointer"
                    >
                      {lang === 'zh' ? '修改' : 'EDIT'}
                    </button>
                  ) : (
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          setPhoneNumber(phoneInput);
                          try {
                            localStorage.setItem('contact-phone-number', phoneInput);
                          } catch (e) {
                            console.error(e);
                          }
                          setIsEditingPhone(false);
                        }}
                        className="font-mono text-[9px] text-emerald-400 border border-emerald-500/30 px-2 py-0.5 bg-emerald-950/10 cursor-pointer font-bold"
                      >
                        {lang === 'zh' ? '保存' : 'SAVE'}
                      </button>
                      <button
                        onClick={() => setIsEditingPhone(false)}
                        className="font-mono text-[9px] text-neutral-400 border border-white/10 px-2 py-0.5 bg-neutral-900 cursor-pointer"
                      >
                        {lang === 'zh' ? '取消' : 'CANCEL'}
                      </button>
                    </div>
                  )}
                </div>

                {isEditingPhone ? (
                  <input
                    type="text"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full bg-black/80 border border-white/20 p-2 font-mono text-sm text-white focus:outline-none focus:border-white rounded-none"
                    placeholder="e.g. +86 138-0000-0000"
                  />
                ) : (
                  <span className="font-mono text-sm tracking-wide text-white pl-7 select-all">
                    {phoneNumber}
                  </span>
                )}
              </div>

              {/* WeChat QR Channel */}
              <div className="border border-white/10 p-4 bg-white/[0.01] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare size={16} className="text-white/40" />
                    <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
                      {lang === 'zh' ? '微信联系' : 'WECHAT CONTACT'}
                    </span>
                  </div>
                  {weChatQr && (
                    <button
                      onClick={() => {
                        setWeChatQr(null);
                        try {
                          localStorage.removeItem('contact-wechat-qr');
                        } catch (e) {
                          console.error(e);
                        }
                      }}
                      className="font-mono text-[9px] text-red-500 hover:text-red-400 border border-red-950/20 px-2 py-0.5 bg-red-950/10 hover:bg-red-950/30 cursor-pointer"
                    >
                      {lang === 'zh' ? '删除' : 'DEL'}
                    </button>
                  )}
                </div>

                <div 
                  onClick={() => {
                    if (weChatQr) {
                      setIsWeChatQrZoomed(true);
                    }
                  }}
                  className={`relative aspect-square w-32 mx-auto bg-zinc-950 border border-white/5 overflow-hidden group/wechat flex items-center justify-center mt-1 ${weChatQr ? 'cursor-zoom-in' : ''}`}
                >
                  {weChatQr ? (
                    <>
                      <img
                        src={weChatQr}
                        alt="WeChat QR Code"
                        className="w-full h-full object-cover p-1"
                        referrerPolicy="no-referrer"
                      />
                      {/* Click to zoom indicator overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/wechat:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="font-mono text-[8px] text-white bg-black/80 px-2 py-0.5 border border-white/10 tracking-widest uppercase rounded">
                          {lang === 'zh' ? '点击放大' : 'ZOOM IN'}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-3 text-center relative group-hover/wechat:bg-white/[0.02]">
                      <QrCode className="w-5 h-5 text-neutral-600 group-hover/wechat:text-neutral-400 transition-colors mb-1" />
                      <span className="font-mono text-[7px] text-neutral-400 block tracking-wider uppercase">
                        {lang === 'zh' ? '点击或拖拽' : 'CLICK OR DRAG'}
                      </span>
                      <span className="font-mono text-[6px] text-neutral-600 block leading-tight">
                        {lang === 'zh' ? '上传微信二维码' : 'UPLOAD WECHAT QR'}
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              const base64String = reader.result as string;
                              setWeChatQr(base64String);
                              try {
                                localStorage.setItem('contact-wechat-qr', base64String);
                              } catch (err) {
                                console.error("Storage error:", err);
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                      />
                    </div>
                  )}
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
