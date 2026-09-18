'use client';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Reveal from './Reveal';
import Link from 'next/link';

export default function HighQualityCTA() {
    return (
        <section className="relative mx-auto w-full overflow-hidden rounded-md">
            <Reveal>
                <div className="grid grid-cols-1 items-stretch md:grid-cols-[420px_1fr]">
                    {/* LEFT IMAGE */}
                    <div className="relative h-[220px] w-full sm:h-[260px] md:h-auto">
                        <Image src="/bag/bg2.webp" alt="Garbage Bags Manufacturing" fill priority className="object-cover" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="relative flex items-center bg-[#118B6C]">
                        {/* Dot Pattern Overlay */}
                        <div
                            className="pointer-events-none absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'radial-gradient(circle at 20px 20px, white 2px, transparent 2px)',
                                backgroundSize: '40px 40px',
                            }}
                        />

                        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-6 py-8 sm:px-10 md:flex-row md:items-center md:px-16 md:py-10">
                            {/* TEXT */}
                            <div className="max-w-2xl">
                                <h2 className="mb-4 text-[28px] leading-tight font-bold text-white md:text-4xl lg:text-5xl">Leak Proof. No Infection.</h2>

                                <p className="text-sm leading-relaxed text-white sm:text-base md:text-lg">
                                    At Sangam Plastic Industries Pvt. Ltd, we are a trusted Garbage Bag Manufacturer, specializing in durable disposable bio
                                    dustbin bags, hospital garbage bags, and waste management solutions built to last.
                                </p>
                            </div>

                            {/* BUTTON */}
                            <Link href="/products">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-yellow-500 px-6 py-3 font-medium text-white sm:py-4 md:w-auto md:justify-start"
                                >
                                    <span className="relative z-10">Explore Our Range</span>
                                    <ArrowRight size={18} />

                                    {/* Shine Effect */}
                                    <motion.div
                                        animate={{ x: ['-100%', '200%'] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            ease: 'linear',
                                        }}
                                        className="absolute top-0 left-0 h-full w-1/2 skew-x-12 bg-white/40"
                                    />
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
