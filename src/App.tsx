import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Cover from './components/Cover';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import { Language } from './types';
import { TRANSLATIONS } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('zh'); // Default to Chinese as user queried in Chinese
  const [activeSection, setActiveSection] = useState('home');
  const t = TRANSLATIONS[lang];

  // IntersectionObserver to dynamically track scroll position and highlight links in header
  useEffect(() => {
    const sections = [
      { id: 'works-section', name: 'works' },
      { id: 'about-section', name: 'about' },
      { id: 'contact-section', name: 'contact' },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for triggers

      // Check current section highlight
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.clientHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section.name;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#000000] text-[#ffffff] min-h-screen selection:bg-white selection:text-black antialiased font-sans flex flex-col justify-between">
      
      {/* Structural Framing Header Component */}
      <Header 
        lang={lang} 
        onLanguageChange={setLang} 
        activeSection={activeSection} 
      />

      {/* Main Structural Portfolio flow wrapper */}
      <main className="flex-grow">
        {/* Cover / Hero View */}
        <Cover lang={lang} />

        {/* Works Showcase View */}
        <Works lang={lang} />

        {/* About Bio Presentation */}
        <About lang={lang} />

        {/* Contact transmission hub */}
        <Contact lang={lang} />
      </main>

      {/* High-end Minimalist Swiss Aesthetic Footer */}
      <footer 
        id="app-main-footer" 
        className="bg-black border-t border-white/10 py-12 px-6 md:px-12 text-white/40"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-white/50 uppercase">
              <span className="inline-block w-1.5 h-1.5 bg-neutral-600"></span>
              VERTEX_DESIGN_PROTOCOLS
            </div>
            <p className="text-xs font-light text-neutral-400">
              {t.footerCopyright}
            </p>
          </div>

          <div className="font-mono text-[9px] tracking-widest leading-relaxed text-left md:text-right uppercase">
            <div>{t.footerMeta}</div>
            <div className="text-neutral-600 mt-1">LAT: 31.2304° N // LNG: 121.4737° E</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
