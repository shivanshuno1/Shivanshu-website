import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import Logo from './Logo';
import { skills } from '../data/resumeData';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-28">
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">03 / Skills</span>
      </SectionReveal>
      <SectionReveal delay={0.1} className="mt-4 mb-14">
        <h2 className="font-display text-3xl md:text-5xl text-mist">Tools of the trade.</h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items], catIdx) => (
          <SectionReveal key={category} delay={catIdx * 0.1}>
            <p className="font-mono text-xs uppercase tracking-widest text-haze mb-4">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, borderColor: '#4FF3D0' }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full border border-white/10 bg-panel/60 text-sm text-mist font-mono"
                >
                  <Logo name={skill} size="sm" className="!w-5 !h-5" />
                  {skill}
                </motion.span>
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
