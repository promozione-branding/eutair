'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { ArrowRight, Download, Zap, Shield, Volume2, Cog, BadgeCheck } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import ContactForm from "../Enquiry";
import { useState } from 'react';

const slides = [
    {
        bg: '/bghero1.webp',
        machine: '/hero1.webp',

        tagline: 'ELECTRIC/DIESEL HIGH PERFORMANCE',

        alt: 'Air Compressor',

        title: 'PORTABLE AIR\n COMPRESSOR',

        pdf: '/pdf/DiselEutair.pdf',

        description: 'Energy efficient, low maintenance and reliable air solutions for every industry.',

        features: [
            {
                icon: Cog,
                title: '5 HP - 500 HP',
                desc: 'Power Range',
            },
            {
                icon: Zap,
                title: 'Portable',
                desc: 'Available',
            },
            {
                icon: Shield,
                title: 'Energy Efficient',
                desc: 'Technology',
            },
            {
                icon: Volume2,
                title: 'Low Noise',
                desc: 'Operation',
            },
            {
                icon: BadgeCheck,
                title: 'Best-In-Class',
                desc: 'Service Support',
            },
        ],

        // benefits: [
        //   "Energy Efficient",
        //   "Low Maintenance",
        //   "Reliable Performance",
        //   "PAN India Service",
        //   "ISO Certified",
        // ],
    },

    {
        bg: '/herobg2.webp',
        machine: '/hero22.webp',

        tagline: 'INDUSTRIAL COMPRESSED AIR',

        alt: 'Mark Compressor',

        title: 'MARK COMPRESSORS',
        pdf: '/pdf/mark.pdf',

        description:
            'Designed for manufacturing, engineering, automotive, food processing, pharmaceuticals, textiles, and every industry that demands dependable compressed air solutions.',

        features: [
            {
                icon: Shield,
                title: 'Up To 35%',
                desc: 'Energy Savings',
            },
            {
                icon: BadgeCheck,
                title: 'Variable Speed',
                desc: 'Drive Technology',
            },
            {
                icon: Zap,
                title: 'High Air',
                desc: 'Efficiency',
            },
            {
                icon: Cog,
                title: 'Stable',
                desc: 'Air Pressure',
            },
            {
                icon: Volume2,
                title: 'Smart Touch',
                desc: 'Controller',
            },
        ],

        // benefits: [
        //   "Food Grade Air",
        //   "Pharma Approved",
        //   "Zero Contamination",
        //   "Long Service Life",
        //   "Energy Saving",
        // ],
    },

    {
        bg: '/bghero1.webp',
        machine: '/hero3.webp',

        tagline: 'CLEAN & DRY COMPRESSED AIR',

        title: 'AIR TREATMENT',

        alt: 'Air Treatment',

        pdf: '/pdf/airTreatment.pdf',

        description:
            'Designed to remove moisture, oil, and contaminants from compressed air systems, ensuring reliable operation, improved product quality, and longer equipment life.',

        features: [
            {
                icon: Zap,
                title: 'Pure Compressed',
                desc: 'Air',
            },
            {
                icon: Cog,
                title: 'Advanced Air',
                desc: 'Filtration',
            },
            {
                icon: Shield,
                title: 'High Moisture',
                desc: 'Removal',
            },
            {
                icon: BadgeCheck,
                title: 'Corrosion',
                desc: 'Protection',
            },
            {
                icon: Volume2,
                title: 'Low Operating',
                desc: 'Cost',
            },
        ],

        // benefits: [
        //   "Energy Savings",
        //   "Pressure Stability",
        //   "Smart Monitoring",
        //   "Reduced Wear",
        //   "Longer Life",
        // ],
    },
];

const ContactForm = dynamic(() => import('../Enquiry'), {
    ssr: false,
});
export default function HeroSlider() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative h-[800px] w-full overflow-hidden lg:h-[670px]">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    // delay: 4000,
                    disableOnInteraction: false,
                }}
                lazy={true}
                preloadImages={false}
                pagination={{
                    clickable: true,
                }}
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative min-h-[700px] lg:h-[680px]">
                            {/* Background */}
                            <Image
                                src={slide.bg}
                                alt="Eutair"
                                priority={index === 0}
                                height={100}
                                width={100}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Blue Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#001938]/90 via-[#001938]/55 to-transparent" />

                            {/* Content */}
                            <div className="relative z-10 mx-auto h-full w-full max-w-[1600px] px-4 sm:px-6 lg:px-12">
                                <div className="grid h-full items-center gap-8 pt-10 lg:grid-cols-2 lg:gap-6 lg:py-0 xl:grid-cols-[1fr_1fr_320px]">
                                    {/* LEFT */}
                                    <div
                                        initial={{ opacity: 0, x: -80 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="mx-auto max-w-[620px] text-center lg:mx-0 lg:text-left"
                                    >
                                        <span className="text-xs font-semibold tracking-[0.2em] text-white/90 uppercase sm:text-sm md:text-base lg:text-[18px]">
                                            {slide.tagline}
                                        </span>

                                        <h2 className="mt-4 text-[34px] leading-[1] font-black tracking-[-0.04em] whitespace-pre-line text-white uppercase drop-shadow-[0_10px_40px_rgba(255,255,255,.15)] sm:text-[44px] md:text-[58px] lg:text-[70px]">
                                            {slide.title}
                                        </h2>

                                        <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base md:text-lg lg:text-[20px]">{slide.description}</p>

                                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:justify-start">
                                            {/* Mark Compressors */}
                                            <div className="flex items-center justify-center rounded-full border border-white/60 bg-white/90 px-5 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]">
                                                <Image
                                                    src="/mark-compressors-logo.webp"
                                                    alt="Mark Compressors"
                                                    width={110}
                                                    height={60}
                                                    className="object-contain"
                                                />
                                            </div>

                                            {/* Chicago Pneumatic */}
                                            <div className="flex items-center justify-center rounded-full border border-white/60 bg-white/90 px-5 py-3 shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]">
                                                <Image
                                                    src="/chicago-pneumatic-logo.png"
                                                    alt="Chicago Pneumatic"
                                                    width={100}
                                                    height={60}
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                                            <button
                                                onClick={() => setOpen(true)}
                                                className="group relative mx-auto inline-flex min-h-[56px] w-full max-w-[320px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#0A63FF] to-[#1D8FFF] px-5 shadow-[0_15px_40px_rgba(10,99,255,.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(10,99,255,.5)] sm:w-auto md:h-[62px] md:px-8"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-2 text-center text-sm font-semibold text-white md:gap-3 md:text-base">
                                                    GET INSTANT QUOTE
                                                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                                                </span>
                                            </button>

                                            <a
                                                href={slide.pdf}
                                                download="Brochure.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Download Brochure"
                                                className="mt-1 hidden h-14 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-900 hover:shadow-lg md:inline-flex"
                                            >
                                                DOWNLOAD CATALOGUE
                                            </a>
                                        </div>
                                    </div>

                                    {/* CENTER PRODUCT */}
                                    <div
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        className="flex justify-center"
                                    >
                                        <Image
                                            src={slide.machine}
                                            alt={slide.alt}
                                            priority={index === 0}
                                            width={800}
                                            height={700}
                                            className="mx-auto h-auto w-[280px] drop-shadow-[0_40px_80px_rgba(0,0,0,.45)] sm:w-[380px] md:w-[500px] lg:w-[650px]"
                                        />
                                    </div>

                                    {/* RIGHT FEATURES */}
                                    <div
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8 }}
                                        className="relative hidden overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#0b2f6d]/95 to-[#071b42]/95 px-8 py-9 shadow-[0_25px_80px_rgba(0,0,0,.35)] backdrop-blur-xl md:block lg:hidden xl:block"
                                    >
                                        <div className="space-y-6">
                                            {slide.features.map((feature, index) => {
                                                const Icon = feature.icon;

                                                return (
                                                    <div
                                                        key={index}
                                                        initial={{ opacity: 0, x: 30 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{
                                                            delay: index * 0.1,
                                                        }}
                                                        className="group flex items-center gap-4 rounded-xl p-2 transition-all duration-500 hover:translate-x-2 hover:bg-white/5"
                                                    >
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all group-hover:border-blue-400 group-hover:bg-blue-500/10">
                                                            <Icon size={20} />
                                                        </div>

                                                        <div>
                                                            <p className="font-semibold text-white">{feature.title}</p>

                                                            <p className="text-sm text-white/70">{feature.desc}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
        </section>
    );
}

function Feature({ icon, text }) {
    return (
        <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white">{icon}</div>

            <span className="text-[17px] font-medium text-white">{text}</span>
        </div>
    );
}
