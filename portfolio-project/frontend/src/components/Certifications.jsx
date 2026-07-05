import React from 'react';
import SectionReveal from './SectionReveal';
import Logo from './Logo';
import { certifications } from '../data/resumeData';

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-28">
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">05 / Certifications</span>
      </SectionReveal>
      <SectionReveal delay={0.1} className="mt-4 mb-14">
        <h2 className="font-display text-3xl md:text-5xl text-mist">Always learning.</h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
        {certifications.map((cert, i) => (
          <SectionReveal key={cert.name} delay={i * 0.05}>
            <div className="bg-void p-6 h-full hover:bg-panel/60 transition-colors flex items-start gap-4">
              <Logo name={cert.issuer} size="md" className="shrink-0" />
              <div>
                <p className="text-mist font-medium">{cert.name}</p>
                <p className="text-haze text-sm font-mono mt-1">{cert.issuer}</p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
