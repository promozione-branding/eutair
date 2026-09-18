'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ArrowRight, Zap, Shield, Volume2, Cog, BadgeCheck } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';

import ContactForm from './PopupForm';

const slides = [
    {
        bg: '/bghero1.webp',
        machine: '/hero1.webp',

        tagline: 'PORTABLE HIGH PERFORMANCE',

        title: 'CHICAGO PNEUMATIC',

        description: 'Energy efficient, low maintenance and reliable air solutions for every industry.',

        logo: '/chicago-pneumatic-logo.png',
        logoAlt: 'Chicago Pneumatic',

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

        benefits: ['Energy Efficient', 'Low Maintenance', 'Reliable Performance', 'PAN India Service', 'ISO Certified'],
    },

    {
        bg: '/herobg2.webp',
        machine: '/hero22.webp',

        tagline: 'INDUSTRIAL COMPRESSED AIR',

        title: 'MARK COMPRESSORS',

        description:
            'Designed for manufacturing, engineering, automotive, food processing, pharmaceuticals, textiles, and every industry that demands reliable compressed air.',

        logo: '/mark-compressors-logo.png',
        logoAlt: 'Mark Compressors',

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

        benefits: ['Food Grade Air', 'Pharma Approved', 'Zero Contamination', 'Long Service Life', 'Energy Saving'],
    },
];

export default function HeroSlider() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="relative h-[550px] w-full overflow-hidden bg-[#001938] lg:h-[680px]">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{
                        crossFade: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    loop={true}
                    speed={700}
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={slide.title}>
                            <div className="relative h-full w-full">
                                {/* ================================================= */}
                                {/* BACKGROUND */}
                                {/* ================================================= */}

                                <Image
                                    src={slide.bg}
                                    alt=""
                                    fill
                                    priority={index === 0}
                                    quality={index === 0 ? 80 : 70}
                                    sizes="100vw"
                                    className="object-cover object-center"
                                />

                                {/* ================================================= */}
                                {/* BLUE OVERLAY */}
                                {/* ================================================= */}

                                <div className="absolute inset-0 bg-gradient-to-r from-[#001938]/95 via-[#001938]/65 to-[#001938]/10" />

                                {/* ================================================= */}
                                {/* MAIN CONTAINER */}
                                {/* ================================================= */}

                                <div className="relative z-10 mx-auto h-full w-full max-w-[1600px] px-4 sm:px-6 lg:px-12">
                                    <div className="grid h-full grid-rows-[35%_45%_20%] items-center lg:grid-cols-2 lg:grid-rows-none lg:gap-4">
                                        {/* ================================================= */}
                                        {/* LEFT CONTENT */}
                                        {/* ================================================= */}

                                        <div className="mx-auto flex h-full w-full max-w-[620px] flex-col justify-center pt-1 text-center lg:mx-0 lg:pt-0 lg:text-left">
                                            {/* TAGLINE */}

                                            <span className="text-xs font-semibold tracking-[0.18em] text-white/90 uppercase sm:text-sm md:text-base lg:text-[18px]">
                                                {slide.tagline}
                                            </span>

                                            {/* TITLE */}

                                            <h1 className="mt-2 text-[30px] leading-[0.98] font-black tracking-[-0.04em] text-white uppercase drop-shadow-[0_10px_40px_rgba(255,255,255,.15)] sm:text-[44px] md:text-[56px] lg:mt-4 lg:text-[70px]">
                                                {slide.title}
                                            </h1>

                                            {/* DESCRIPTION */}

                                            <p className="mx-auto mt-2 max-w-[600px] text-xs leading-relaxed text-white/80 sm:text-base md:text-lg lg:mx-0 lg:mt-4 lg:text-[19px]">
                                                {slide.description}
                                            </p>

                                            {/* ================================================= */}
                                            {/* BRAND LOGO */}
                                            {/* ================================================= */}

                                            <div className="mt-3 flex items-center justify-center sm:mt-5 lg:mt-6 lg:justify-start">
                                                <div className="flex items-center justify-center rounded-full border border-white/60 bg-white/90 px-4 py-2 shadow-[0_8px_25px_rgba(0,0,0,0.15)] backdrop-blur-md sm:px-5 sm:py-3">
                                                    <Image
                                                        src={slide.logo}
                                                        alt={slide.logoAlt}
                                                        width={110}
                                                        height={50}
                                                        sizes="110px"
                                                        className="object-contain"
                                                    />
                                                </div>
                                            </div>

                                            {/* ================================================= */}
                                            {/* DESKTOP CTA */}
                                            {/* ================================================= */}

                                            <div className="mt-7 hidden flex-wrap justify-center gap-4 md:flex lg:justify-start">
                                                {/* GET QUOTE */}

                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(true)}
                                                    className="group relative inline-flex h-[58px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#0A63FF] to-[#1D8FFF] px-7 font-semibold text-white shadow-[0_15px_40px_rgba(10,99,255,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(10,99,255,.5)]"
                                                >
                                                    <span className="relative z-10 flex items-center gap-3">
                                                        GET INSTANT QUOTE
                                                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                                    </span>

                                                    {/* Shine */}

                                                    <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                                </button>

                                                {/* WHATSAPP */}

                                                <a
                                                    href="https://wa.link/rntibs"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="WhatsApp Now"
                                                    className="inline-flex h-[58px] items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 font-semibold tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-900 hover:shadow-lg"
                                                >
                                                    WhatsApp Now
                                                </a>
                                            </div>
                                        </div>

                                        {/* ================================================= */}
                                        {/* RIGHT PRODUCT IMAGE */}
                                        {/* ================================================= */}

                                        <div className="mt-0 flex h-full w-full items-center justify-center lg:h-full">
                                            <Image
                                                src={slide.machine}
                                                alt={slide.title}
                                                width={800}
                                                height={700}
                                                priority={index === 0}
                                                quality={index === 0 ? 85 : 75}
                                                sizes="
                          (max-width: 640px) 90vw,
                          (max-width: 768px) 80vw,
                          (max-width: 1024px) 500px,
                          650px
                        "
                                                className="h-auto max-h-[100%] w-[280px] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,.45)] sm:w-[380px] md:w-[500px] lg:w-[650px]"
                                            />
                                        </div>

                                        {/* ================================================= */}
                                        {/* MOBILE CTA - DIRECTLY BELOW IMAGE */}
                                        {/* ================================================= */}

                                        <div className="flex h-full w-full items-start justify-center px-4 pt-0 md:hidden">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(true)}
                                                className="group relative inline-flex h-[50px] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#0A63FF] to-[#1D8FFF] px-7 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(10,99,255,.4)] transition active:scale-95"
                                            >
                                                <span className="relative z-10 flex items-center gap-3">
                                                    GET INSTANT QUOTE
                                                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                                                </span>

                                                {/* Shine */}

                                                <span className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* ================================================= */}
            {/* CONTACT POPUP */}
            {/* ================================================= */}

            {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
        </>
    );
}
