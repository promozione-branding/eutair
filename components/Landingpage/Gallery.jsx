'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import Reveal from './Reveal';


const items = [
    { src: '/gallery/1.webp', title: 'Screw Air Compressor', category: 'Compressors', ratio: 4 / 3 },
    { src: '/gallery/2.webp', title: 'Tech Event 2025', category: 'Event', ratio: 4 / 3 },
    { src: '/gallery/8.webp', title: 'Tech Event 2026', category: 'Event', ratio: 4 / 3 },
    { src: '/gallery/4.webp', title: 'On-site Servicing', category: 'Service', ratio: 4 / 3 },
    { src: '/gallery/5.webp', title: 'Oil-Free Compressor Unit', category: 'Compressors', ratio: 4 / 3 },
    { src: '/gallery/6.webp', title: 'First AirComprssor Setup', category: 'Installations', ratio: 4 / 3 },
    { src: '/gallery/3.webp', title: 'Plant Room Installation', category: 'Projects', ratio: 4 / 3 },
];

const categories = ['All', 'Compressors', 'Installations', 'Service', 'Projects'];

export default function Gallery() {
    const [active, setActive] = useState('All');
    const [lightbox, setLightbox] = useState(null);
    const [ratios, setRatios] = useState({});

    const filtered = useMemo(() => (active === 'All' ? items : items.filter((i) => i.category === active)), [active]);

    const getRatio = (item) => ratios[item.src] || item.ratio;

    const handleLoad = (src, e) => {
        const { naturalWidth, naturalHeight } = e.currentTarget;
        if (!naturalWidth || !naturalHeight) return;
        const r = naturalWidth / naturalHeight;
        setRatios((prev) => (Math.abs((prev[src] || 0) - r) < 0.001 ? prev : { ...prev, [src]: r }));
    };

    const close = useCallback(() => setLightbox(null), []);
    const next = useCallback(() => setLightbox((i) => (i === null ? i : (i + 1) % filtered.length)), [filtered.length]);
    const prev = useCallback(() => setLightbox((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)), [filtered.length]);

    useEffect(() => {
        if (lightbox === null) return;
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        document.addEventListener('keydown', onKey);
        const original = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = original;
        };
    }, [lightbox, close, next, prev]);

    return (
        <Reveal>
            <section className="overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white py-8 md:py-14">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16">
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
                    <div className="mb-8 flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                                    active === cat
                                        ? 'border-blue-900 bg-blue-900 text-white shadow-md'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-sky-600 hover:text-sky-600'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Justified rows: equal row height, each tile's width follows its image ratio,
                        and tiles grow to fill the row, so there are never empty gaps. */}
                    <div className="flex flex-wrap gap-3 [--h:150px] sm:[--h:200px] md:gap-4 lg:[--h:250px] xl:[--h:280px]">
                        {filtered.map((item, index) => {
                            const ratio = getRatio(item);
                            return (
                                <button
                                    key={item.src}
                                    onClick={() => setLightbox(index)}
                                    style={{ flex: `${ratio} ${ratio} calc(var(--h) * ${ratio})` }}
                                    className="group relative h-[var(--h)] min-w-0 overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-sky-500"
                                    aria-label={`View ${item.title}`}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        sizes="(min-width: 100%) 50vw, 100vw"
                                        onLoad={(e) => handleLoad(item.src, e)}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                                    {/* Expand icon */}
                                    <span className="absolute top-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white/90 text-blue-900 opacity-0 shadow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <Expand size={16} />
                                    </span>

                                    {/* Caption */}
                                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                        <span className="mb-1 inline-block rounded-full bg-sky-600 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-white uppercase">
                                            {item.category}
                                        </span>
                                        <h3 className="text-sm leading-snug font-semibold text-white sm:text-base">{item.title}</h3>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Lightbox */}
                {lightbox !== null && filtered[lightbox] && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/95 p-4 backdrop-blur-sm"
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
                                prev();
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
                                    {lightbox + 1} / {filtered.length}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
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