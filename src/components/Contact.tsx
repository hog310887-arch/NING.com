import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Send, Check, ShieldCheck, ArrowRight, Github, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang];
  const emailAddress = 'curator@vertex.design';
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    setStatus('sending');
    // Simulate highly precise telemetry dispatch network packet transmission
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
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

        {/* Dynamic Split block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Direct channels & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase leading-snug mb-4">
                {t.contactTitle}
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
                {t.contactSub}
              </p>

              {/* Instant Clipboard Copy interactive widget */}
              <div className="border border-white/10 bg-black p-6 space-y-4">
                <span className="font-mono text-[9px] tracking-widest text-white/40 block">
                  // DEPLOY_DIRECT_COMMUNICATION_STREAM:
                </span>
                
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
              </div>
            </div>

            {/* Social Coordinates Grid */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="font-mono text-[9px] text-white/40 tracking-widest uppercase block mb-4">
                SYNCHRONIZATION FEEDS
              </span>
              <div className="flex flex-wrap gap-4">
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

          {/* Right Column: Interactive Digital Contact Form */}
          <div className="lg:col-span-7">
            <form 
              id="portfolio-contact-transmission-form"
              onSubmit={handleSubmit} 
              className="border border-white/10 bg-black/40 p-8 space-y-6 relative"
            >
              {/* Form header diagnostics */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-2">
                <span className="font-mono text-[9px] tracking-widest text-white/50">
                  SYS_INPUT_PACKET_TRANS_0
                </span>
                <span className="font-mono text-[9px] text-white/30">
                  ENCRYPTION: SH_256
                </span>
              </div>

              {/* Status notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    id="form-success-alert"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 border border-emerald-500/30 bg-emerald-950/20 p-4 text-emerald-400 font-mono text-xs tracking-wider"
                  >
                    <ShieldCheck size={16} />
                    <span>{t.formSuccess}</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    id="form-error-alert"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-3 border border-red-500/30 bg-red-950/20 p-4 text-red-400 font-mono text-xs tracking-wider"
                  >
                    <span>{t.formError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name (Identification) */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                  {t.formName} *
                </label>
                <input
                  type="text"
                  id="input-form-sender-name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-black/80 border border-white/10 focus:border-white p-3.5 font-sans text-sm text-white focus:outline-none focus:ring-0 rounded-none transition-colors"
                />
              </div>

              {/* Email (Communication Interface) */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                  {t.formEmail} *
                </label>
                <input
                  type="email"
                  id="input-form-sender-email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-black/80 border border-white/10 focus:border-white p-3.5 font-sans text-sm text-white focus:outline-none focus:ring-0 rounded-none transition-colors"
                />
              </div>

              {/* Subject (Topic Category) */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                  {t.formSubject}
                </label>
                <select
                  id="select-form-topic"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-black/80 border border-white/10 focus:border-white p-3.5 font-sans text-sm text-white focus:outline-none focus:ring-0 rounded-none cursor-pointer transition-colors"
                >
                  <option value="" disabled className="text-neutral-500">{t.formSubjectPlaceholder}</option>
                  <option value="Product UIUX Design" className="bg-black text-white">Product UI/UX Design</option>
                  <option value="Generative Coding" className="bg-black text-white">Generative / Creative Code</option>
                  <option value="Brand Identity System" className="bg-black text-white">Brand Identity System</option>
                  <option value="Consultation Inquiry" className="bg-black text-white">General Consultation</option>
                </select>
              </div>

              {/* Message (Project Context) */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                  {t.formMessage} *
                </label>
                <textarea
                  id="textarea-form-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-black/80 border border-white/10 focus:border-white p-3.5 font-sans text-sm text-white focus:outline-none focus:ring-0 rounded-none transition-colors resize-none"
                />
              </div>

              {/* Execute / Dispatch Button */}
              <button
                type="submit"
                id="btn-submit-transmission-packet"
                disabled={status === 'sending'}
                className="w-full relative overflow-hidden bg-white hover:bg-neutral-200 border border-white text-black font-mono text-[11px] tracking-[0.25em] py-4 uppercase transition-all duration-300 disabled:opacity-50 font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{status === 'sending' ? t.formSending : t.formSubmit}</span>
                {status !== 'sending' && <Send size={12} />}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
