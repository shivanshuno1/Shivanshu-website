import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './components/Hero3D';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SakuraStorm from './components/SakuraStorm';
import { profile } from './data/resumeData';
import Resume from './components/Resume';

export default function App() {
  return (
    <div id="top" className="bg-void min-h-screen grid-overlay">
      <SakuraStorm />
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Hero3D />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 max-w-6xl mx-auto pointer-events-none">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-cyan mb-6"
          >
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display text-5xl sm:text-6xl md:text-8xl font-semibold text-mist leading-[1.02] max-w-4xl"
          >
            {profile.name.split(' ')[0]}
            <br />
            <span className="text-gradient">{profile.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-lg md:text-xl text-haze mt-6 max-w-xl"
          >
            {profile.title} — building full-stack products and exploring what AI makes possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex gap-4 mt-10 pointer-events-auto"
          >
            <a
              href="#projects"
              className="font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full bg-cyan text-void font-semibold hover:shadow-glow transition-shadow"
            >
              View work
            </a>
            <a
              href="#contact"
              className="font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full border border-white/15 text-mist hover:border-cyan/50 transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-haze"
        >
          Scroll
        </motion.div>
      </section>

      <About />
      <Experience />
      <Skills />
      <Resume />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
