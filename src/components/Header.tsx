import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Cpu } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
}

export default function Header({ lang, onLanguageChange, activeSection }: HeaderProps) {
  const [timeStr, setTimeStr] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Smooth visual scroll
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-app-header" 
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Minimal Tech design */}
        <button 
          id="btn-logo-home"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-3 group cursor-pointer text-left"
        >
          <div className="w-8 h-8 rounded-none border border-white flex items-center justify-center relative overflow-hidden bg-black">
            <span className="font-mono text-xs font-bold text-white group-hover:scale-125 transition-transform duration-300">Kn</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 block">PORT_FOLIO_CORE</span>
            <span className="font-sans text-xs tracking-wider font-bold text-white group-hover:text-neutral-300 transition-colors">VERTEX.ENG.2026</span>
          </div>
        </button>

        {/* Global Nav - Desktop */}
        <nav id="desktop-navigation-links" className="hidden lg:flex items-center gap-12">
          <button 
            id="nav-link-works"
            onClick={() => scrollTo('works-section')} 
            className={`font-mono text-[11px] tracking-[0.2em] cursor-pointer transition-all duration-300 relative py-2 ${
              activeSection === 'works' ? 'text-white font-bold' : 'text-white/40 hover:text-white/85'
            }`}
          >
            {t.navWorks}
            {activeSection === 'works' && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
            )}
          </button>
          <button 
            id="nav-link-about"
            onClick={() => scrollTo('about-section')} 
            className={`font-mono text-[11px] tracking-[0.2em] cursor-pointer transition-all duration-300 relative py-2 ${
              activeSection === 'about' ? 'text-white font-bold' : 'text-white/40 hover:text-white/85'
            }`}
          >
            {t.navAbout}
            {activeSection === 'about' && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
            )}
          </button>
          <button 
            id="nav-link-contact"
            onClick={() => scrollTo('contact-section')} 
            className={`font-mono text-[11px] tracking-[0.2em] cursor-pointer transition-all duration-300 relative py-2 ${
              activeSection === 'contact' ? 'text-white font-bold' : 'text-white/40 hover:text-white/85'
            }`}
          >
            {t.navContact}
            {activeSection === 'contact' && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
            )}
          </button>
        </nav>

        {/* Technical HUD & Settings - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {/* Dynamic UTC Clock in Courier-style font */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-6 h-6">
            <Cpu size={11} className="text-white/40 animate-pulse" />
            <span id="header-utc-clock-display" className="font-mono text-[10px] tracking-wider text-white/40">
              {timeStr || 'SENSING SYS...'}
            </span>
          </div>

          {/* Multilingual Switcher Button */}
          <button 
            id="btn-language-switcher-desktop"
            onClick={() => onLanguageChange(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1.5 border border-white/20 hover:border-white px-3 py-1 font-mono text-[10px] tracking-wider text-white transition-all cursor-pointer bg-white/5 active:bg-white/20"
          >
            <Globe size={11} />
            <span>{lang === 'en' ? 'ZH_简体' : 'EN_CURATED'}</span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            id="btn-language-switcher-mobile"
            onClick={() => onLanguageChange(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1 border border-white/20 px-2 py-1 font-mono text-[10px] tracking-wider text-white bg-white/5"
            aria-label="Toggle language"
          >
            <span>{lang === 'en' ? 'ZH' : 'EN'}</span>
          </button>
          
          <button 
            id="btn-mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white cursor-pointer p-1 border border-white/10 bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div id="mobile-menu-overlay" className="lg:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 animate-fade-in-down py-6 px-6 flex flex-col gap-5">
          <button 
            id="btn-mobile-nav-works"
            onClick={() => scrollTo('works-section')}
            className="text-left font-mono text-xs tracking-[0.2em] text-white/70 hover:text-white py-2 border-b border-white/5"
          >
            {t.navWorks}
          </button>
          <button 
            id="btn-mobile-nav-about"
            onClick={() => scrollTo('about-section')}
            className="text-left font-mono text-xs tracking-[0.2em] text-white/70 hover:text-white py-2 border-b border-white/5"
          >
            {t.navAbout}
          </button>
          <button 
            id="btn-mobile-nav-contact"
            onClick={() => scrollTo('contact-section')}
            className="text-left font-mono text-xs tracking-[0.2em] text-white/70 hover:text-white py-2 border-b border-white/5"
          >
            {t.navContact}
          </button>
          
          {/* Metadata info */}
          <div className="pt-4 flex items-center justify-between font-mono text-[9px] text-white/30">
            <span>{t.heroLocation}</span>
            <span>2026 INTERNAL LAB</span>
          </div>
        </div>
      )}
    </header>
  );
}
