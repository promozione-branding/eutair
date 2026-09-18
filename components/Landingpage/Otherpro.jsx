'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, RotateCw } from 'lucide-react';
const products = [
    {
        name: 'Screw Air Compressors',
        link: '/chicago-pneumatic',
        thumbnail: '/hero1.png',
        description: 'High performance industrial compressed air solutions engineered for maximum reliability.',
        frames: Array.from({ length: 7 }, (_, i) => `/3601/oil-injected/${i + 1}.png`),
    },

    {
        name: 'VFD Screw Compressors',
        link: '/mark-compressor',
        thumbnail: '/hero2.png',
        description: 'Variable frequency technology delivering superior energy savings.',
        frames: Array.from({ length: 10 }, (_, i) => `/3601/mark/${i + 1}.png`),
    },

    {
        name: 'Air Treatment Systems',
        link: '/air-treatment-service',
        thumbnail: '/hero3.png',
        description: 'Advanced air treatment solutions for clean and efficient compressed air.',
        frames: Array.from({ length: 10 }, (_, i) => `/3601/Product-3/${i + 1}.png`),
    },

    {
        name: 'Spares & Consumables',
        link: '/spares-and-consumables',
        thumbnail: '/pro3.png',
        description: 'Premium-quality genuine parts and consumables for peak performance.',
        frames: Array.from({ length: 10 }, (_, i) => `/3601/Product-4/${i + 1}.png`),
    },

    {
        name: 'Piping & Distribution Lines',
        link: '/piping-and-distribution-lines',
        thumbnail: '/pro4.jpeg',
        description: 'Efficient air distribution networks engineered for industrial applications.',
        frames: Array.from({ length: 10 }, (_, i) => `/3601/Product-5/${i + 1}.png`),
    },
];

export default function ProductRange() {
    const [activeProduct, setActiveProduct] = useState(products[0]);
    const [frameIndex, setFrameIndex] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setHasInteracted(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const delta = e.clientX - startX;

        if (Math.abs(delta) > 8) {
            if (delta > 0) {
                setFrameIndex((prev) => (prev === 0 ? activeProduct.frames.length - 1 : prev - 1));
            } else {
                setFrameIndex((prev) => (prev + 1) % activeProduct.frames.length);
            }

            setStartX(e.clientX);
        }
    };

    return (
        <section className="hidden bg-white py-6 md:block">
            <div className="mx-auto w-full px-6 lg:px-12">
                <div className="text-center">
                    <p className="mb-2 text-center text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">
                        Our Bestseller Portfolio
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-slate-900">Engineered For Every Industry</h2>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-12">
                    {/* LEFT PRODUCT VIEWER */}
                    <div
                        className={`relative min-h-[650px] overflow-hidden rounded-[40px] border border-slate-200 bg-blue-200/20 hover:border-blue-300 lg:col-span-7 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} `}

                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        {/* Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.04]" />
                        {/* Ambient Glow */}
                        <div className="absolute top-20 left-20 h-[300px] w-[300px] rounded-full bg-blue-300/20 blur-[120px]" />

                        <div className="absolute top-8 left-8 z-20">
                            <span className="rounded-full bg-black/10 px-5 py-2 text-xs tracking-[0.2em] text-black uppercase backdrop-blur-md">
                                Interactive Product View drag to see
                            </span>
                        </div>

                        <div className="flex h-[450px] items-center justify-center">
                            {!hasInteracted && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: [0.7, 1, 0.7],
                                        x: [-20, 20, -20],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    className="pointer-events-none absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="rounded-full bg-black/75 px-6 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-md">
                                        ← Drag to Rotate 360° →
                                    </div>
                                </motion.div>
                            )}

                            <AnimatePresence mode="wait">
                                <Image
                                    src={activeProduct.frames[frameIndex]}
                                    alt={activeProduct.name}
                                    draggable={false}
                                    width={1000}
                                    height={1000}
                                    className="pointer-events-none h-[620px] object-contain select-none"
                                />
                            </AnimatePresence>
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-8">
                            {/* Top Right Badge */}
                            <div className="flex justify-end">
                                <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg backdrop-blur-md">
                                    <RotateCw size={16} className="animate-spin" />
                                    360° Interactive View
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="pointer-events-auto max-w-[550px]">
                                <h3 className="text-4xl leading-tight font-black text-slate-900 lg:text-5xl">{activeProduct.name}</h3>

                                <p className="mt-4 text-base leading-relaxed text-slate-600">{activeProduct.description}</p>

                                <Link href={activeProduct.link}>
                                    <button className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(37,99,235,.35)] transition-all hover:scale-105">
                                        Explore Product
                                        <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PRODUCT LIST */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-2 gap-5">
                            {products.map((product) => (
                                <button
                                    key={product.name}
                                    onClick={() => {
                                        setActiveProduct(product);
                                        setFrameIndex(0);
                                    }}
                                    className={`group rounded-3xl border p-4 text-left transition-all duration-300 ${
                                        activeProduct.name === product.name
                                            ? 'border-blue-500 bg-blue-50 shadow-xl'
                                            : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'
                                    } `}
                                >
                                    <img
                                        alt={product.name}
                                        src={product.thumbnail}
                                        className="mx-auto h-35 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <h4 className="font-semibold text-slate-900">{product.name}</h4>

                                    <p className="mt-2 line-clamp-2 text-sm text-slate-500">{product.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
