import React from 'react';
import SectionReveal from './SectionReveal';
import Logo from './Logo';
import bioPhoto from './Icons/Screenshot 2026-07-04 162709.png';
import { profile, education } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-28">
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">01 / About</span>
      </SectionReveal>
      <SectionReveal delay={0.1} className="mt-6">
        <p className="font-display text-2xl md:text-4xl leading-snug text-mist max-w-3xl">
          {profile.summary}
        </p>
      </SectionReveal>
      <SectionReveal delay={0.2} className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr] border-t border-white/10 pt-8">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Logo name={education.logoKey} size="md" className="mt-1 shrink-0" />
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-haze mb-2">Education</p>
              <p className="text-mist font-medium">{education.degree}</p>
              <p className="text-haze text-sm mt-1">{education.school}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-cyan/15 bg-ink/80 p-6 shadow-[0_0_120px_rgba(79,243,208,0.06)] backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-[0.35em] text-cyan mb-4">Snapshot</div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src={bioPhoto} alt="Shivanshu screenshot" className="h-[340px] w-full object-cover" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/95 to-transparent" />
            </div>
            <div className="mt-4 grid gap-3 text-sm text-haze">
              <p className="text-mist font-medium">Live product mindset, clean interfaces, and scalable code.</p>
              <p>Built for speed, reliability, and polished full-stack execution across AI / ML workflows.</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-panel/80 p-6 shadow-glow-violet/20 backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-haze">Based in</p>
              <p className="text-mist font-medium">{profile.location}</p>
            </div>
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-haze">Current role</p>
              <p className="text-mist font-medium">Data Science Intern at CBRE Gurugram</p>
            </div>
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-haze">Focus areas</p>
              <ul className="grid gap-2 text-sm text-haze">
                <li>AI-powered data pipelines</li>
                <li>Full-stack product delivery</li>
                <li>Automation, analytics, and dashboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
