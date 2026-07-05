import React, { useEffect, useMemo, useRef, useState } from 'react';

const PETAL_COUNT = 100;

function randomPetals() {
  return Array.from({ length: PETAL_COUNT }, (_, index) => {
    const isWhite = Math.random() > 0.72;
    const direction = Math.random() > 0.5 ? 1 : -1;
    const size = 14 + Math.random() * 18;
    return {
      id: index,
      startLeft: direction === 1 ? -18 : 118,
      top: 36 + Math.random() * 24,
      delay: parseFloat((Math.random() * -18).toFixed(2)),
      duration: 6 + Math.random() * 7,
      size,
      opacity: 0.55 + Math.random() * 0.35,
      rotate: Math.floor(Math.random() * 360),
      drift: 160 + Math.random() * 140,
      vert: -10 + Math.random() * 20,
      depth: 0.85 + Math.random() * 1.15,
      direction,
      color: isWhite ? 'rgba(255,255,255,0.98)' : 'rgba(255,123,185,0.95)',
      highlight: isWhite ? 'rgba(255,255,255,0.98)' : 'rgba(255,224,245,0.98)',
      glowDuration: 2.2 + Math.random() * 3.4,
      glowDelay: Math.random() * 10,
    };
  });
}

export default function SakuraStorm() {
  const petals = useMemo(randomPetals, []);
  const [windBoost, setWindBoost] = useState(false);
  const [windBurst, setWindBurst] = useState(false);
  const triggeredSection = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const sectionIds = ['experience', 'skills', 'projects', 'certifications', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    let ticking = false;

    const updateWind = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const isScrollingDown = scrollY > lastScrollY.current;
      lastScrollY.current = scrollY;

      const boost = sections.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < vh * 1.3 && rect.top > vh * 0.1;
      });
      setWindBoost(boost && isScrollingDown);

      const nextSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < vh * 0.9 && rect.top > vh * 0.2;
      });

      if (nextSection && triggeredSection.current !== nextSection.id) {
        triggeredSection.current = nextSection.id;
        setWindBurst(true);
        window.setTimeout(() => setWindBurst(false), 1100);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateWind);
      }
    };

    updateWind();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const activeBoost = windBurst ? 2.8 : windBoost ? 2 : 1;
  const driftBoost = windBurst ? 2.8 : windBoost ? 2.1 : 1;
  const swayBoost = windBurst ? 2.2 : windBoost ? 1.8 : 1;

  return (
    <div className="sakura-storm pointer-events-none" data-wind={windBurst ? 'burst' : windBoost ? '1' : '0'}>
      {petals.map((petal) => {
        const alpha = Math.min(1, petal.opacity + (windBurst ? 0.2 : windBoost ? 0.12 : 0));

        return (
          <span
            key={petal.id}
            className="sakura-petal"
            style={{
              left: `${petal.startLeft}%`,
              top: `${petal.top}vh`,
              width: `${petal.size}px`,
              height: `${petal.size * 0.75}px`,
              animationDuration: `${petal.duration / activeBoost}s`,
              animationDelay: `${petal.delay}s`,
              opacity: alpha,
              transform: `rotate(${petal.rotate}deg) scale(${petal.depth})`,
              '--sway': `${petal.sway * swayBoost}px`,
              '--drift': `${petal.drift * petal.direction * driftBoost}px`,
              '--vert': `${petal.vert}px`,
              '--dir': petal.direction,
              '--scale': `${petal.depth}`,
              '--petal-color': petal.color,
              '--petal-highlight': petal.highlight,
              '--glow-duration': `${petal.glowDuration}s`,
              '--glow-delay': `${petal.glowDelay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
