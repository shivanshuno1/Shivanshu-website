import React from 'react';
import SectionReveal from './SectionReveal';
import Logo from './Logo';
import { experience } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-28">
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">02 / Experience</span>
      </SectionReveal>
      <SectionReveal delay={0.1} className="mt-4 mb-14">
        <h2 className="font-display text-3xl md:text-5xl text-mist">Where I've been building.</h2>
      </SectionReveal>

      <div className="relative border-l border-white/10 ml-2">
        {experience.map((item, i) => (
          <SectionReveal key={item.org} delay={i * 0.08}>
            <div className="relative pl-8 pb-12 last:pb-0 group">
              <span
                className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                  item.current
                    ? 'bg-cyan border-cyan shadow-glow'
                    : 'bg-void border-haze group-hover:border-cyan transition-colors'
                }`}
              />
              <div className="flex items-start gap-4">
                <Logo name={item.org} size="md" className="mt-1 shrink-0" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="font-display text-xl text-mist">
                      {item.role} <span className="text-haze font-body text-base">@ {item.org}</span>
                    </h3>
                    <span className="font-mono text-xs text-cyan whitespace-nowrap">{item.duration}</span>
                  </div>
                  <p className="text-haze text-sm mt-1">{item.location}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
