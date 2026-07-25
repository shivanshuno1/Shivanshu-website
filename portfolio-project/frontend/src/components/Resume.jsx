// components/Resume.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { Download, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionReveal from './SectionReveal';
import resumeFile from '../assets/Shivanshu_Rawat_Resume_OnePage (2).pdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const RESUME_PATH = resumeFile;
const RESUME_FILENAME = 'Shivanshu_Rawat_Resume.pdf';

export default function Resume() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section
                id="resume"
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28"
            >
                <SectionReveal>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                        07 / Resume
                    </span>
                </SectionReveal>

                <SectionReveal delay={0.1} className="mt-4 sm:mt-6">
                    <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug text-mist max-w-3xl">
                        Take a closer look at my resume — view it inline or grab a copy.
                    </p>
                </SectionReveal>

                <SectionReveal delay={0.2} className="mt-8 sm:mt-10 flex flex-wrap gap-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="group inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full bg-cyan text-void font-semibold hover:shadow-glow transition-shadow"
                    >
                        <Eye size={16} className="transition-transform group-hover:scale-110" />
                        View Resume
                    </button>

                    <a
                        href={RESUME_PATH}
                        download={RESUME_FILENAME}
                        className="group inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full border border-white/15 text-mist hover:border-cyan/50 transition-colors"
                    >
                        <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
                        Download Resume
                    </a>
                </SectionReveal>
            </section>

            <AnimatePresence>
                {isOpen && <ResumeFlipbookModal onClose={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
}

function ResumeFlipbookModal({ onClose }) {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageIndex, setPageIndex] = useState(0);
    const flipBookRef = useRef(null);

    useEffect(() => {
        let cancelled = false;

        async function renderPdf() {
            try {
                const pdf = await pdfjsLib.getDocument({ url: RESUME_PATH }).promise;
                const rendered = [];

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 2 });

                    const canvas = document.createElement('canvas');
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    const ctx = canvas.getContext('2d');

                    await page.render({ canvasContext: ctx, viewport }).promise;
                    rendered.push(canvas.toDataURL('image/png'));

                    if (cancelled) return;
                }

                if (!cancelled) {
                    setPages(rendered);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Failed to render resume PDF', err);
                if (!cancelled) {
                    setError('Could not load the resume preview.');
                    setLoading(false);
                }
            }
        }

        renderPdf();
        return () => {
            cancelled = true;
        };
    }, []);

    const goPrev = useCallback(() => {
        flipBookRef.current?.pageFlip()?.flipPrev();
    }, []);

    const goNext = useCallback(() => {
        flipBookRef.current?.pageFlip()?.flipNext();
    }, []);

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') goPrev();
            if (e.key === 'ArrowRight') goNext();
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [onClose, goPrev, goNext]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/90 backdrop-blur-xl px-4 py-8"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 24 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close resume preview"
                    className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-panel border border-white/15 text-mist hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                    <X size={18} />
                </button>

                <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-panel/90 backdrop-blur-xl p-4 sm:p-8 shadow-[0_0_120px_rgba(79,243,208,0.08)]">
                    {loading && (
                        <div className="flex flex-col items-center justify-center gap-3 py-24">
                            <div className="h-8 w-8 rounded-full border-2 border-cyan/30 border-t-cyan animate-spin" />
                            <p className="font-mono text-xs uppercase tracking-widest text-haze">
                                Loading resume…
                            </p>
                        </div>
                    )}

                    {error && (
                        <div className="flex flex-col items-center justify-center gap-3 py-24">
                            <p className="text-mist">{error}</p>
                            <a
                                href={RESUME_PATH}
                                download={RESUME_FILENAME}
                                className="font-mono text-xs uppercase tracking-widest px-5 py-2.5 rounded-full bg-cyan text-void font-semibold"
                            >
                                Download instead
                            </a>
                        </div>
                    )}

                    {!loading && !error && pages.length > 0 && (
                        <>
                            <div className="flex justify-center">
                                <HTMLFlipBook
                                    ref={flipBookRef}
                                    width={480}
                                    height={640}
                                    size="stretch"
                                    minWidth={280}
                                    maxWidth={640}
                                    minHeight={380}
                                    maxHeight={860}
                                    maxShadowOpacity={0.5}
                                    showCover={false}
                                    mobileScrollSupport={true}
                                    onFlip={(e) => setPageIndex(e.data)}
                                    className="resume-flipbook"
                                    style={{ borderRadius: '12px', overflow: 'hidden' }}
                                >
                                    {pages.map((src, i) => (
                                        <div
                                            key={i}
                                            className="bg-white flex items-center justify-center"
                                        >
                                            <img
                                                src={src}
                                                alt={`Resume page ${i + 1}`}
                                                className="h-full w-full object-contain select-none"
                                                draggable={false}
                                            />
                                        </div>
                                    ))}
                                </HTMLFlipBook>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-6">
                                <button
                                    onClick={goPrev}
                                    disabled={pageIndex === 0}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist hover:border-cyan/50 hover:text-cyan disabled:opacity-30 transition-colors"
                                    aria-label="Previous page"
                                >
                                    <ChevronLeft size={16} />
                                </button>

                                <span className="font-mono text-xs uppercase tracking-widest text-haze">
                                    Page {pageIndex + 1} / {pages.length}
                                </span>

                                <button
                                    onClick={goNext}
                                    disabled={pageIndex === pages.length - 1}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-mist hover:border-cyan/50 hover:text-cyan disabled:opacity-30 transition-colors"
                                    aria-label="Next page"
                                >
                                    <ChevronRight size={16} />
                                </button>

                                <a
                                    href={RESUME_PATH}
                                    download={RESUME_FILENAME}
                                    className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-cyan/10 text-cyan border border-cyan/30 hover:bg-cyan/20 transition-colors"
                                >
                                    Download
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}