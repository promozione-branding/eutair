'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ContactForm from './PopupForm';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Category() {
    const [open, setOpen] = useState(false);

    const products = [
        {
            title: 'Chicago Pneumatic',
            image: '/hero1.webp',
            link: '/chicago-pneumatic',
            desc: 'Industry-proven compressed air systems delivering superior efficiency, durability, and productivity for modern industrial operations.',
        },
        {
            title: 'MARK Compressors',
            image: '/hero22.webp',
            link: '/mark-compressor',
            desc: 'Innovative compressor solutions combining energy savings, operational reliability, and long-term performance excellence.',
        },
        {
            title: 'Air Treatment',
            image: '/hero3.webp',
            link: '/inquiry',
            desc: 'Comprehensive air purification solutions ensuring clean, dry, and contaminant-free compressed air for sensitive applications.',
        },
        {
            title: 'Spares and Consumables',
            image: '/pro33.webp',
            link: '/inquiry',
            desc: 'Premium-quality genuine parts and consumables designed to maintain peak compressor performance and reduce downtime.',
        },
        {
            title: 'Piping and Distribution Lines',
            image: '/pro4.jpeg',
            link: '/inquiry',
            desc: 'Customized air distribution networks engineered for maximum flow efficiency, reduced leakage, and optimal system performance.',
        },
    ];

    return (
        <>
            <section className="bg-gradient-to-b from-white to-slate-50 py-6 md:py-12">
                <div className="mx-auto max-w-7xl px-1 md:px-0">
                    {/* Heading */}
                    <div className="mb-6 px-2 text-center md:mb-12">
                        <div className="mb-4 flex items-center justify-center gap-5">
                            <div className="h-[2px] w-16 rounded-full bg-blue-600" />
                            <h2 className="text-3xl font-bold uppercase lg:text-5xl">
                                Our <span className="text-blue-600">Category</span>
                            </h2>
                            <div className="h-[2px] w-16 rounded-full bg-blue-600" />
                        </div>

                        <p className="text-lg text-slate-600">High-quality compressed air solutions for every industry.</p>
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
                    >
                        {products.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-500 hover:scale-105">
                                    <div onClick={() => setOpen(true)}>
                                        <div className="relative flex h-56 items-center justify-center bg-white p-4 md:p-6">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain px-2 transition duration-500 group-hover:scale-105 md:p-5"
                                            />
                                        </div>

                                        <div className="items-center justify-center px-3 pt-3 text-center md:px-6 md:pt-6">
                                            <h3 className="line-clamp-2 min-h-[54px] text-sm font-bold text-slate-800 md:text-lg">{item.title}</h3>
                                        </div>
                                    </div>

                                    <div className="p-3 pt-0 md:p-6">
                                        <button
                                            onClick={() => setOpen(true)}
                                            className="w-full rounded-lg border-2 border-blue-600 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white md:text-base"
                                        >
                                            REQUEST QUOTE
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Button */}
                    <div className="mt-12 text-center">
                        <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
                            {/* Call */}
                            <a
                                href="tel:+919717159766"
                                aria-label="Call Now"
                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-500 text-white transition hover:bg-red-600 sm:h-14 sm:w-14"
                            >
                                <Phone size={24} />
                            </a>

                            {/* Get A Quote */}
                            <button
                                onClick={() => setOpen(true)}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold whitespace-nowrap text-white transition hover:bg-blue-700 sm:gap-3 sm:px-8 sm:py-4"
                            >
                                GET A QUOTE
                                <ArrowRight size={20} />
                            </button>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.link/rntibs"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:bg-[#1ebe5d] sm:h-14 sm:w-14"
                            >
                                <FaWhatsapp size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
        </>
    );
}
