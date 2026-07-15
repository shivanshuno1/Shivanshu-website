import React from 'react';
import SectionReveal from './SectionReveal';
import Logo from './Logo';
import bioPhoto from './Icons/Screenshot 2026-07-04 162709.png';
import { profile, education } from '../data/resumeData';

export default function About() {
    return (
        <section
            id="about"
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28"
        >
            {/* Section Label */}
            <SectionReveal>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                    01 / About
                </span>
            </SectionReveal>

            {/* Summary */}
            <SectionReveal delay={0.1} className="mt-4 sm:mt-6">
                <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug sm:leading-snug text-mist max-w-3xl">
                    {profile.summary}
                </p>
            </SectionReveal>

            {/* Main Grid */}
            <SectionReveal
                delay={0.2}
                className="mt-10 sm:mt-12 lg:mt-14 grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1.5fr_1fr] border-t border-white/10 pt-8 sm:pt-10 lg:pt-12"
            >
                {/* Left Column */}
                <div className="space-y-6 sm:space-y-8">
                    {/* Education */}
                    <div className="flex items-start gap-4">
                        <Logo name={education.logoKey} size="md" className="mt-1 shrink-0" />
                        <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-haze mb-1.5 sm:mb-2">
                                Education
                            </p>
                            <p className="text-mist font-medium text-base sm:text-lg">
                                {education.degree}
                            </p>
                            <p className="text-haze text-sm sm:text-base mt-0.5 sm:mt-1">
                                {education.school}
                            </p>
                        </div>
                    </div>

                    {/* Snapshot Card */}
                    <div className="rounded-2xl sm:rounded-3xl border border-cyan/15 bg-ink/80 p-4 sm:p-6 shadow-[0_0_120px_rgba(79,243,208,0.06)] backdrop-blur-xl">
                        <div className="font-mono text-xs uppercase tracking-[0.35em] text-cyan mb-3 sm:mb-4">
                            Snapshot
                        </div>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-ink/40">
                            <img
                                src={bioPhoto}
                                alt="Shivanshu — product-minded engineer working on AI/ML systems"
                                className="h-[200px] sm:h-[260px] md:h-[300px] lg:h-[340px] w-full object-cover object-center"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-ink/95 to-transparent" />
                        </div>

                        {/* Snapshot Text */}
                        <div className="mt-3 sm:mt-4 grid gap-2 sm:gap-3 text-sm sm:text-base text-haze">
                            <p className="text-mist font-medium text-sm sm:text-base">
                                Live product mindset, clean interfaces, and scalable code.
                            </p>
                            <p className="text-xs sm:text-sm leading-relaxed">
                                Built for speed, reliability, and polished full-stack execution
                                across AI / ML workflows.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column — Details */}
                <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-panel/80 p-5 sm:p-6 shadow-glow-violet/20 backdrop-blur-xl h-fit">
                    <div className="flex flex-col gap-5 sm:gap-6">
                        {/* Location */}
                        <div className="space-y-1.5 sm:space-y-2">
                            <p className="font-mono text-xs uppercase tracking-widest text-haze">
                                Based in
                            </p>
                            <p className="text-mist font-medium text-base sm:text-lg">
                                {profile.location}
                            </p>
                        </div>

                        {/* Current Role */}
                        <div className="space-y-1.5 sm:space-y-2">
                            <p className="font-mono text-xs uppercase tracking-widest text-haze">
                                Current role
                            </p>
                            <p className="text-mist font-medium text-base sm:text-lg leading-snug">
                                Data Science Intern at CBRE Gurugram
                            </p>
                        </div>

                        {/* Focus Areas */}
                        <div className="space-y-2 sm:space-y-3">
                            <p className="font-mono text-xs uppercase tracking-widest text-haze">
                                Focus areas
                            </p>
                            <ul className="grid gap-1.5 sm:gap-2 text-sm sm:text-base text-haze">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-cyan text-lg leading-none mt-0.5">·</span>
                                    AI-powered data pipelines
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-cyan text-lg leading-none mt-0.5">·</span>
                                    Full-stack product delivery
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-cyan text-lg leading-none mt-0.5">·</span>
                                    Automation, analytics, and dashboarding
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SectionReveal>
        </section>
    );
}