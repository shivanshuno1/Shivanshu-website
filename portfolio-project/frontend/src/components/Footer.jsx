import React from 'react';
import { profile } from '../data/resumeData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-haze">
          © {new Date().getFullYear()} {profile.name}. Built with React & Three.js.
        </p>
        <div className="flex gap-6">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-haze hover:text-cyan transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
