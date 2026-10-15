'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Reveal from './Reveal';
import CircularCarousel from '../CircularCarousel';

const items = [
    { src: '/gallery/1.webp', title: 'Screw Air Compressor', category: 'Compressors' },
    { src: '/gallery/2.webp', title: 'Plant Room Installation', category: 'Installations' },
    { src: '/gallery/3.webp', title: 'On-site Servicing', category: 'Service' },
    { src: '/gallery/4.webp', title: 'Turnkey Project, Africa', category: 'Projects' },
    { src: '/gallery/5.webp', title: 'Oil-Free Compressor Unit', category: 'Compressors' },
    { src: '/gallery/6.webp', title: 'Air Line & Dryer Setup', category: 'Installations' },
    { src: '/gallery/7.webp', title: 'Industrial Utility Infrastructure', category: 'Projects' },
    { src: '/gallery/8.webp', title: 'Preventive Maintenance', category: 'Service' },
];
 
const categories = ['All', 'Compressors', 'Installations', 'Service', 'Projects'];
 
const MIN_RING = 10;
 
export default function Gallery() {
    const [activeCat, setActiveCat] = useState('All');
    const [active, setActive] = useState(0); // index of the card currently at the front of the ring
    const [lightbox, setLightbox] = useState(null);
 
    const filtered = useMemo(() => (activeCat === 'All' ? items : items.filter((i) => i.category === activeCat)), [activeCat]);
    const n = filtered.length;
 
    const ringItems = useMemo(() => {
        const repeats = Math.max(1, Math.ceil(MIN_RING / n));
        return Array.from({ length: n * repeats }, (_, i) => {
            const item = filtered[i % n];
            return { src: item.src, alt: item.title, title: item.title, subtitle: item.category };
        });
    }, [filtered, n]);
 
    const front = filtered[active % n] ?? filtered[0];
 
    const changeCategory = (cat) => {
        setActiveCat(cat);
        setActive(0);
    };
 
    const handleItemClick = useCallback(
        (_item, index) => {
            // Clicking a side card only rotates it to the front (handled by the carousel);
            // clicking the front card opens the lightbox.
            if (index === active) setLightbox(index % n);
        },
        [active, n]
    );
 
    // Lightbox helpers
    const close = useCallback(() => setLightbox(null), []);
    const lbNext = useCallback(() => setLightbox((i) => (i === null ? i : (i + 1) % n)), [n]);
    const lbPrev = useCallback(() => setLightbox((i) => (i === null ? i : (i - 1 + n) % n)), [n]);
 
    useEffect(() => {
        if (lightbox === null) return;
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') lbNext();
            if (e.key === 'ArrowLeft') lbPrev();
        };
        document.addEventListener('keydown', onKey);
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = original;
        };
    }, [lightbox, close, lbNext, lbPrev]);
 
    return (
        <Reveal>
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white py-8 md:py-14">
                <div className="mx-auto w-full px-2 sm:px-4 lg:px-6">
                    {/* Heading */}
                    <p className="mb-2 text-center text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">
                        Our Gallery
                    </p>
                    <h2 className="mx-auto mb-3 max-w-4xl text-center text-lg leading-tight font-bold text-blue-900 sm:text-4xl">
                        Engineering in Action
                    </h2>
                    <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-sky-600" />
                    <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-7 text-slate-600 md:text-base">
                        A look at our compressors, installations and projects delivered across India and abroad.
                    </p>
 
                    {/* Filter tabs */}
                    <div className="mb-4 flex flex-wrap justify-center gap-2 md:mb-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => changeCategory(cat)}
                                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                                    activeCat === cat
                                        ? 'border-blue-900 bg-blue-900 text-white shadow-md'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-sky-600 hover:text-sky-600'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative mx-auto h-[380px] w-full max-w-none sm:h-[460px] md:h-[560px]">
                        <CircularCarousel
                            key={activeCat}
                            items={ringItems}
                            preset="cylinder"
                            tilt={-1}
                            intro="rise"
                            cardWidth={280}
                            aspectRatio={4 / 5}
                            gap={60}
                            autoplay="step"
                            interval={3.5}
                            pauseOnHover
                            focusOnClick
                            fadeColor="#ffffff"
                            depthFade={0.6}
                            innerShade={0.5}
                            cornerRadius={16}
                            onChange={setActive}
                            onItemClick={handleItemClick}
                            style={{ width: '100%', height: '100%', position: 'relative' }}
                        />
                    </div>
 
                    {front && (
                        <div className="mx-auto mt-2 flex max-w-md flex-col items-center text-center">
                            <span className="mb-2 inline-block rounded-full bg-sky-600 px-3 py-0.5 text-[10px] font-semibold tracking-wider text-white uppercase">
                                {front.category}
                            </span>
                            <h3 className="text-base font-semibold text-blue-900 sm:text-lg">{front.title}</h3>
                            <p className="mt-1 text-xs text-slate-500">
                                {(active % n) + 1} / {n} · Drag to rotate, click the front card to enlarge
                            </p>
                        </div>
                    )}
                </div>
 
                {/* Lightbox */}
                {lightbox !== null && filtered[lightbox] && (
                    <div
                        className="fixed inset-0 z-[300] flex items-center justify-center bg-blue-950/95 p-4 backdrop-blur-sm"
                        onClick={close}
                        role="dialog"
                        aria-modal="true"
                    >
                        <button
                            onClick={close}
                            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-sky-600"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>
 
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                lbPrev();
                            }}
                            className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-sky-600 md:left-8"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={22} />
                        </button>
 
                        <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                            <div className="relative h-[60vh] w-full overflow-hidden rounded-xl bg-slate-900 sm:h-[70vh]">
                                <Image
                                    src={filtered[lightbox].src}
                                    alt={filtered[lightbox].title}
                                    fill
                                    sizes="(min-width: 1024px) 896px, 100vw"
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <div className="mt-3 flex items-center justify-between text-white">
                                <div>
                                    <p className="text-xs font-semibold tracking-widest text-sky-400 uppercase">{filtered[lightbox].category}</p>
                                    <h3 className="text-base font-semibold sm:text-lg">{filtered[lightbox].title}</h3>
                                </div>
                                <span className="text-sm text-slate-300">
                                    {lightbox + 1} / {n}
                                </span>
                            </div>
                        </div>
 
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                lbNext();
                            }}
                            className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-sky-600 md:right-8"
                            aria-label="Next image"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </div>
                )}
            </section>
        </Reveal>
    );
}