
'use client';

import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import {
    ArrowRight,
    Download,
    Zap,
    Shield,
    Volume2,
    Cog,
    BadgeCheck,
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useEffect, useState } from 'react';

const slides = [
    {
        bg: '/banner1.jpeg',
        mobileBg: '/mbm.jpeg',

        machine: '/hero1.webp',

        tagline: 'ELECTRIC/DIESEL HIGH PERFORMANCE',

        alt: 'Air Compressor',

        title: 'PORTABLE AIR\nCOMPRESSOR',

        pdf: '/pdf/DiselEutair.pdf',

        description:
            'Energy efficient, low maintenance and reliable air solutions for every industry.',

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
    },
];

const ContactForm = dynamic(() => import('../Enquiry'), {
    ssr: false,
});

export default function HeroSlider() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative w-full overflow-hidden">
            

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    disableOnInteraction: false,
                }}
                lazy={true}
                preloadImages={false}

                pagination={{
                    clickable: true,
                }}
                speed={1000}
                loop
                className="w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
<div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />                        {/* =================================================
                            DESKTOP / MOBILE HERO
                        ================================================= */}
                        <div
                            className="
                                relative
                                min-h-[580px]
                                w-full
                                md:h-[580px]
                            "
                        >

                            {/* =================================================
                                DESKTOP BACKGROUND
                            ================================================= */}
                            <Image
                                src={slide.bg}
                                alt="Eutair"
                                priority={index === 0}
                                fill
                                sizes="100vw"
                                className="
                                    absolute
                                    inset-0
                                    hidden
                                    h-full
                                    w-full
                                    object-contain
                                    md:object-cover
                                    object-center
                                    md:block
                                "
                            />

                            {/* =================================================
                                MOBILE BACKGROUND
                            ================================================= */}
                            <Image
                                src={slide.mobileBg}
                                alt="Eutair"
                                priority={index === 0}
                                fill
                                sizes="100vw"
                                className="
                                    absolute
                                    inset-0
                                    block
                                    h-full
                                    w-full
                                    object-cover
                                    object-center
                                    md:hidden
                                "
                            />

                            {/* =================================================
                                MOBILE DARK OVERLAY
                            ================================================= */}
                            {/* <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-b
                                    from-black/65
                                    via-black/35
                                    to-black/65
                                    md:hidden
                                "
                            /> */}

                            {/* =================================================
                                DESKTOP OPTIONAL OVERLAY
                            ================================================= */}
                            {/*
                            <div
                                className="
                                    absolute
                                    inset-0
                                    hidden
                                    bg-gradient-to-r
                                    from-[#001938]/80
                                    via-[#001938]/40
                                    to-transparent
                                    md:block
                                "
                            />
                            */}

                            {/* =================================================
                                CONTENT WRAPPER
                            ================================================= */}
                            <div
                                className="
                                    relative
                                    z-30
                                    mx-auto
                                    h-full
                                    w-full
                                    max-w-[1800px]
                                    px-4
                                    sm:px-6
                                    md:px-8
                                    lg:px-12
                                    xl:px-16
                                "
                            >

                                <div
                                    className="
                                        grid
                                        h-full
                                        items-center
                                        gap-8
                                        py-7

                                        lg:grid-cols-2
                                        lg:gap-8
                                        lg:py-0

                                        xl:grid-cols-[1fr_1fr_280px]

                                        2xl:grid-cols-[1fr_1fr_320px]
                                    "
                                >

                                    {/* =================================================
                                        LEFT CONTENT
                                    ================================================= */}
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -80,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                        }}
                                        className="
                                            mx-auto
                                            w-full
                                            max-w-[620px]

                                            text-center

                                            lg:mx-0
                                            lg:text-left
                                        "
                                    >

                                        {/* =================================================
                                            TAGLINE
                                        ================================================= */}
                                        <span
                                            className="
                                                text-xs
                                                font-semibold
                                                uppercase
                                                tracking-[0.18em]
                                                text-white/90

                                                sm:text-sm

                                                md:text-sm

                                              

                                              
                                            "
                                        >
                                            {slide.tagline}
                                        </span>

                                        {/* =================================================
                                            TITLE
                                        ================================================= */}
                                        <TypewriterTitle
                                            title={slide.title}
                                        />

                                        {/* =================================================
                                            DESCRIPTION
                                        ================================================= */}
                                        <p
                                            className="
                                                mx-auto
                                                mt-4
                                                max-w-[600px]
                                                text-sm
                                                leading-relaxed
                                                text-white/90

                                                sm:text-base

                                                md:text-lg

                                               
                                            "
                                        >
                                            {slide.description}
                                        </p>

                                        {/* =================================================
                                            LOGO
                                        ================================================= */}
                                        <div
                                            className="
                                                mt-6
                                                flex
                                                flex-wrap
                                                items-center
                                                justify-center
                                                gap-3

                                                sm:gap-5

                                                lg:justify-start
                                            "
                                        >
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    border
                                                    border-white/60
                                                    bg-white/90
                                                    px-5
                                                    py-3
                                                    shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                                                    backdrop-blur-md
                                                "
                                            >
                                                <Image
                                                    src="/chicago-pneumatic-logo.png"
                                                    alt="Chicago Pneumatic"
                                                    width={100}
                                                    height={60}
                                                    className="
                                                        h-auto
                                                        w-[90px]
                                                        object-contain

                                                        sm:w-[100px]
                                                    "
                                                />
                                            </div>
                                        </div>

                                        {/* =================================================
                                            BUTTONS
                                        ================================================= */}
                                        <div
                                            className="
                                                mt-7
                                                flex
                                                flex-col
                                                justify-center
                                                gap-4

                                                sm:flex-row

                                                lg:justify-start
                                            "
                                        >

                                            {/* GET QUOTE */}
                                            <button
                                                onClick={() =>
                                                    setOpen(true)
                                                }
                                                className="
                                                    group
                                                    relative
                                                    mx-auto
                                                    inline-flex
                                                    min-h-[54px]
                                                    w-full
                                                    max-w-[320px]
                                                    items-center
                                                    justify-center
                                                    overflow-hidden
                                                    rounded-xl
                                                    bg-gradient-to-r
                                                    from-[#0A63FF]
                                                    to-[#1D8FFF]
                                                    px-5
                                                    shadow-[0_15px_40px_rgba(10,99,255,.35)]
                                                    transition-all
                                                    duration-500
                                                    hover:-translate-y-1
                                                    hover:shadow-[0_20px_60px_rgba(10,99,255,.5)]

                                                    sm:mx-0
                                                    sm:w-auto

                                                    md:min-h-[58px]
                                                    md:px-8
                                                "
                                            >
                                                <span
                                                    className="
                                                        relative
                                                        z-10
                                                        flex
                                                        items-center
                                                        justify-center
                                                        gap-2
                                                        text-center
                                                        text-sm
                                                        font-semibold
                                                        text-white

                                                        md:gap-3
                                                        md:text-base
                                                    "
                                                >
                                                    GET INSTANT QUOTE

                                                    <ArrowRight
                                                        size={18}
                                                        className="
                                                            transition-transform
                                                            duration-300
                                                            group-hover:translate-x-1
                                                        "
                                                    />
                                                </span>
                                            </button>

                                            {/* DOWNLOAD CATALOGUE */}
                                            <a
                                                href={slide.pdf}
                                                download="Brochure.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Download Brochure"
                                                className="
                                                    hidden
                                                    h-[58px]
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    border
                                                    border-white/30
                                                    bg-white/10
                                                    px-7
                                                    font-semibold
                                                    tracking-wide
                                                    text-white
                                                    backdrop-blur-md
                                                    transition-all
                                                    duration-300
                                                    hover:border-white
                                                    hover:bg-white
                                                    hover:text-slate-900
                                                    hover:shadow-lg

                                                    md:inline-flex
                                                "
                                            >
                                                <Download
                                                    size={17}
                                                    className="mr-2"
                                                />

                                                DOWNLOAD CATALOGUE
                                            </a>
                                        </div>
                                    </motion.div>

                                 
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 100,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 1,
                                        }}
                                        className="
                                            hidden
                                            items-center
                                            justify-center

                                            md:flex
                                        "
                                    >
                                        
                                    </motion.div>

                                    {/* =================================================
                                        RIGHT FEATURES
                                    ================================================= */}
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: 100,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                        }}
                                        className="
                                            relative
                                            hidden
                                            overflow-hidden
                                            rounded-[28px]
                                            px-6
                                            py-8

                                            xl:block

                                            xl:px-7
                                        "
                                    >
                                        <div className="space-y-5">

                                           
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            {/* =================================================
                CONTACT FORM
            ================================================= */}
            {open && (
                <ContactForm
                    isOpen={open}
                    onClose={() => setOpen(false)}
                />
            )}
        </section>
    );
}


/* =========================================================
   TYPEWRITER TITLE
========================================================= */

function TypewriterTitle({ title }) {
    const { isActive } = useSwiperSlide();

    const [visibleTitle, setVisibleTitle] = useState('');

    useEffect(() => {
        if (!isActive) {
            setVisibleTitle('');
            return;
        }

        let characterIndex = 0;

        setVisibleTitle('');

        const interval = window.setInterval(() => {
            characterIndex += 1;

            setVisibleTitle(
                title.slice(
                    0,
                    characterIndex
                )
            );

            if (
                characterIndex >=
                title.length
            ) {
                window.clearInterval(
                    interval
                );
            }
        }, 45);

        return () =>
            window.clearInterval(
                interval
            );
    }, [isActive, title]);

    return (
        <h2
            aria-label={title}
            className="
                mt-4
                whitespace-pre-line
                text-[36px]
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                text-white
                uppercase
                drop-shadow-[0_10px_40px_rgba(255,255,255,.15)]

                sm:text-[44px]

                md:text-[56px]

               
            "
        >
            {visibleTitle}
        </h2>
    );
}

