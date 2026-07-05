import React from 'react';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPython, SiJavascript, SiTypescript,
  SiVercel, SiRender, SiGit, SiGithub, SiPostman, SiNextdotjs, SiTailwindcss,
  SiCplusplus, SiGooglecloud, SiSelenium, SiPandas, SiNumpy, SiCisco, SiMeta,
  SiUdemy, SiCoursera,
} from 'react-icons/si';
import { FaFileExcel, FaUniversity, FaBuilding, FaPlane, FaBrain, FaCode } from 'react-icons/fa';
import cbreLogo from './Icons/CBRE.jpg';
import cultureLogo from './Icons/Culture-holidays.png';
import ggsipuLogo from './Icons/GGSIP.png';

// Any name not backed by a real brand icon still gets a clean lettermark
// badge so the visual language stays consistent across the whole site.
function Lettermark({ label, tone = 'cyan' }) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  const toneClasses = {
    cyan: 'text-cyan border-cyan/30 bg-cyan/5',
    violet: 'text-violet border-violet/30 bg-violet/5',
    ember: 'text-ember border-ember/30 bg-ember/5',
  }[tone];

  return (
    <span className={`flex items-center justify-center rounded-lg border font-display font-semibold text-[11px] ${toneClasses}`}>
      {initials}
    </span>
  );
}

const IMAGE_LOGOS = {
  cbre: cbreLogo,
  'culture holidays': cultureLogo,
  'culture holidays pvt ltd': cultureLogo,
  'culture holidays pvt. ltd.': cultureLogo,
  ggsipu: ggsipuLogo,
  'bhagwan parshuram institute of technology': ggsipuLogo,
  'b.tech in information technology': ggsipuLogo,
};

// Real brand icons for recognizable companies / tools.
const ICONS = {
  react: SiReact,
  'react.js': SiReact,
  node: SiNodedotjs,
  'node.js': SiNodedotjs,
  express: SiExpress,
  'express.js': SiExpress,
  mongodb: SiMongodb,
  python: SiPython,
  javascript: SiJavascript,
  typescript: SiTypescript,
  vercel: SiVercel,
  render: SiRender,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  'next.js': SiNextdotjs,
  nextjs: SiNextdotjs,
  'tailwind css': SiTailwindcss,
  tailwind: SiTailwindcss,
  'c++': SiCplusplus,
  selenium: SiSelenium,
  pandas: SiPandas,
  numpy: SiNumpy,
  meta: SiMeta,
  udemy: SiUdemy,
  excel: FaFileExcel,
  cisco: SiCisco,
  'google cloud': SiGooglecloud,
  google: SiGooglecloud,
};

// Institutions / employers without an official public brand icon get a
// styled lettermark instead, keeping the grid visually uniform.
const LETTERMARKS = {
  'ggsipu': { label: 'GGSIPU', tone: 'violet' },
  'bhagwan parshuram institute of technology': { label: 'BPIT', tone: 'violet' },
  cbre: { label: 'CBRE', tone: 'cyan' },
  'culture holidays': { label: 'Culture Holidays', tone: 'ember' },
  'culture holidays pvt ltd': { label: 'Culture Holidays', tone: 'ember' },
  'coding nijas': { label: 'Coding Nijas', tone: 'cyan' },
  wayspire: { label: 'Wayspire', tone: 'violet' },
  'wayspire pvt. ltd.': { label: 'Wayspire', tone: 'violet' },
  'airports authority of india': { label: 'AAI', tone: 'cyan' },
  'tech radiance': { label: 'Tech Radiance', tone: 'ember' },
  'electronics & ict academy, iit guwahati': { label: 'IIT Guwahati', tone: 'violet' },
  'iit guwahati': { label: 'IIT Guwahati', tone: 'violet' },
  'great learning': { label: 'Great Learning', tone: 'cyan' },
  'openpyxl': { label: 'OpenPyXL', tone: 'cyan' },
  easyocr: { label: 'EasyOCR', tone: 'cyan' },
  tqdm: { label: 'tqdm', tone: 'cyan' },
  'llm fundamentals': { label: 'LLM', tone: 'violet' },
  'machine learning': { label: 'ML', tone: 'violet' },
  'rest apis': { label: 'REST', tone: 'ember' },
};

export default function Logo({ name, size = 'md', className = '' }) {
  const key = name.trim().toLowerCase();
  const imageSrc = IMAGE_LOGOS[key];
  const Icon = ICONS[key];
  const sizeClasses = { sm: 'w-7 h-7 text-sm', md: 'w-9 h-9 text-base', lg: 'w-12 h-12 text-lg' }[size];

  if (imageSrc) {
    return (
      <span
        title={name}
        className={`flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-panel/60 ${sizeClasses} ${className}`}
      >
        <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
      </span>
    );
  }

  if (Icon) {
    return (
      <span
        title={name}
        className={`flex items-center justify-center rounded-lg border border-white/10 bg-panel/60 text-mist ${sizeClasses} ${className}`}
      >
        <Icon className="w-1/2 h-1/2" />
      </span>
    );
  }

  const mark = LETTERMARKS[key];
  if (mark) {
    return (
      <span title={name} className={`${sizeClasses} ${className}`}>
        <Lettermark label={mark.label} tone={mark.tone} />
      </span>
    );
  }

  // Generic fallback for anything unmapped.
  return (
    <span title={name} className={`${sizeClasses} ${className}`}>
      <Lettermark label={name} />
    </span>
  );
}

export { FaUniversity, FaBuilding, FaPlane, FaBrain, FaCode };
