'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import ContactForm from './PopupForm';
import { FaWhatsapp } from 'react-icons/fa';

export default function ProductSlider() {
    const [open, setOpen] = useState(false);

    const products = [
        {
            title: 'MSS 75 - Oil-Injected Screw Compressor',
            image: '/products/MSS 75 - Oil-Injected Screw Compressor.jpg',
            href: '/mark-compressor/mss-75-oil-injected-screw-compressors',
        },
        {
            title: 'MSS 7.5 kW - 75 kW Variable Speed Screw Compressors',
            image: '/products/MSS 7.5 kW - 75 kW Variable Speed Screw Compressors.webp',
            href: '/mark-compressor/mss-variable-speed-screw-compressors',
        },
        {
            title: 'MDS 35 CFM - 1000 CFM Refrigerated Dryers',
            image: '/products/MDS 35 CFM - 1000 CFM Refrigerated Dryers.jpg',
            href: '/mark-compressor/mds-35-cfm-1000-cfm-refrigerated-dryers',
        },
        {
            title: 'Chicago Pneumatic CFM: 81 - 187, BAR: 7 - 12, PSI: 100 – 175',
            image: '/hero1.png',
            href: '/chicago-pneumatic/cfm-81-187',
        },
        {
            title: 'CFM: 455 - 650, BAR: 10.5 - 14, PSI: 100 – 200',
            image: '/products/CFM455650BAR10514PSI100200.webp',
            href: '/chicago-pneumatic/cfm-455-650',
        },
        {
            title: 'CFM: 1060 - 1200, BAR: 16 - 25, PSI: 232 – 355',
            image: '/products/CFM10601200BAR1625PSI232355.webp',
            href: '/chicago-pneumatic/cfm-1060-1200',
        },
    ];
    const products2 = [
        {
            title: 'G-C-V 45 CFM - 1500 CFM Compressed Air Filters',
            image: '/products/G-C-V 45 CFM - 1500 CFM Compressed Air Filters.jpg',
            href: '/mark-compressor/mss-75-oil-injected-screw-compressors',
        },
        {
            title: 'CFM: 370 - 475 (6 model)',
            image:  '/products/KW 5575PSI100175CFM370475.webp',
            href: '/mark-compressor/mss-variable-speed-screw-compressors',
        },
        {
            title: 'Hydraulic Power Packs',
            image:  '/products/Hydraulic Power Packs.webp',
            href: '/mark-compressor/mds-35-cfm-1000-cfm-refrigerated-dryers',
        },
        {
            title: 'KW: upto 45, PSI: 100, CFM: 300 (1 model)',
            image: '/products/KWupto45PSI100CFM300.webp',
            href: '/chicago-pneumatic/cfm-81-187',
        },
        {
            title: 'Hydraulic Core Drills',
            image: '/products/Hydraulic Core Drills.webp',
            href: '/chicago-pneumatic/cfm-455-650',
        },
        {
            title: 'CFM: 1060 - 1200, BAR: 16 - 25, PSI: 232 – 355',
            image: '/products/CFM10601200BAR1625PSI232355.webp',
            href: '/chicago-pneumatic/cfm-1060-1200',
        },
    ];

    return (
        <>
            <section className="bg-[#e6e7e8] py-6 md:py-16">
                <div id="products" className="mx-auto max-w-7xl px-1 md:px-0">
                    {/* Heading */}
                    <div className="mb-6 px-2 text-center md:mb-12">
                        <div className="mb-4 flex items-center justify-center gap-5">
                            <div className="h-[2px] w-16 rounded-full bg-blue-600" />
                            <h2 className="text-2xl font-bold uppercase lg:text-5xl">Industrial Screw Air Compressors & Air Solutions</h2>
                            <div className="h-[2px] w-16 rounded-full bg-blue-600" />
                        </div>

                        <p className="text-slate-600 md:text-lg">Reliable Industrial Screw Air Compressors for Efficient Compressed Air Supply</p>
                    </div>

                    {/* Slider */}
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={15}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className="px-2"
                    >
                        {products.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent Link navigation
                                        e.stopPropagation(); // Stop event bubbling
                                        setOpen(true);
                                    }}
                                >
                                    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-500 hover:scale-105">
                                        <div className="relative h-56 bg-white md:p-6">
                                            <Image src={item.image} alt={item.title} fill className="object-contain md:p-5" />
                                        </div>

                                        <div className="flex items-center justify-center px-6 pt-6 text-center">
                                            <h3 className="line-clamp-3 min-h-[64px] text-[12px] font-bold md:text-lg">{item.title}</h3>
                                        </div>

                                        <div className="p-3 pt-0 md:mt-2 md:p-6">
                                            <button className="w-full rounded-lg border-2 border-blue-600 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white md:text-base">
                                                REQUEST PRICE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        navigation
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        spaceBetween={15}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className="px-2 "
                    >
                        {products2.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent Link navigation
                                        e.stopPropagation(); // Stop event bubbling
                                        setOpen(true);
                                    }}
                                >
                                    <div className="group mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-500 hover:scale-105">
                                        <div className="relative h-56 bg-white md:p-6">
                                            <Image src={item.image} alt={item.title} fill className="object-contain md:p-5" />
                                        </div>

                                        <div className="flex items-center justify-center px-6 pt-6 text-center">
                                            <h3 className="line-clamp-3 min-h-[64px] text-[12px] font-bold md:text-lg">{item.title}</h3>
                                        </div>

                                        <div className="p-3 pt-0 md:mt-2 md:p-6">
                                            <button className="w-full rounded-lg border-2 border-blue-600 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white md:text-base">
                                                REQUEST PRICE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Button */}
                    <div className="mt-4 text-center md:mt-12">
                        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                            {/* View All Products */}
                            <Link
                                href="/mark-compressor"
                                className="flex w-auto items-center justify-center gap-3 rounded-xl bg-blue-600 px-3 py-4 font-semibold text-white transition hover:bg-blue-700 sm:w-auto md:px-8"
                            >
                                VIEW ALL PRODUCTS
                                <ArrowRight size={20} />
                            </Link>

                            {/* Call & WhatsApp */}
                            <div className="flex w-full flex-row items-center justify-center gap-4 sm:w-auto">
                                {/* Call */}
                                <a
                                    href="tel:+919717159766"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600"
                                >
                                    <Phone size={20} />
                                    Call Now
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.link/rntibs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:bg-[#1ebe5d]"
                                >
                                    <FaWhatsapp size={25} />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
        </>
    );
}
