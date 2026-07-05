import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-void/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-semibold tracking-wide text-mist">
          SR<span className="text-cyan">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-haze">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-cyan transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border border-cyan/40 text-cyan hover:bg-cyan/10 transition-colors"
        >
          Say hi
        </a>
      </div>
    </motion.nav>
  );
}
