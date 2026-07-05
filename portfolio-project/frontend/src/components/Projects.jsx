import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import Logo from './Logo';
import { projects } from '../data/resumeData';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <SectionReveal delay={index * 0.06}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full rounded-2xl border border-white/10 bg-panel/60 p-6 transition-transform duration-200 ease-out will-change-transform hover:border-cyan/40 hover:shadow-glow"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg text-mist leading-snug">{project.name}</h3>
          <span className="font-mono text-[11px] text-cyan whitespace-nowrap mt-1">{project.duration}</span>
        </div>
        <p className="text-haze text-sm mt-3 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1.5 text-[11px] font-mono pl-1 pr-2 py-1 rounded-md bg-white/5 text-mist/80 border border-white/5"
            >
              <Logo name={tech} size="sm" className="!w-4 !h-4" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-28">
      <SectionReveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">04 / Projects</span>
      </SectionReveal>
      <SectionReveal delay={0.1} className="mt-4 mb-14">
        <h2 className="font-display text-3xl md:text-5xl text-mist">Things I've shipped.</h2>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
