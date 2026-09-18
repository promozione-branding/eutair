'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import ContactForm from './PopupForm';

const testimonials = [
    {
        name: 'Rahul Sharma',
        company: 'Automobile Industries',
        image: '/products/MSS 75 - Oil-Injected Screw Compressor.jpg', // Rename image to avoid spaces
        review: 'Excellent product quality and very fast delivery. Their support team guided us perfectly in selecting the right air compressor.',
    },
    {
        name: 'Amit Verma',
        company: 'Metal Manufacturing',
        image: '/products/MDS 35 CFM - 1000 CFM Refrigerated Dryers.jpg',
        review: 'Professional team, genuine spare parts, and excellent after-sales support. Highly recommended.',
    },
    {
        name: 'Neha Gupta',
        company: 'Steel Works Ltd.',
        image: '/products/CFM10001350BAR19293PSI275425.webp',
        review: 'We use this driver for solar fencing and earthing projects. The build quality is exceptional.',
    },
];

export default function Testimonials() {
    const [open, setOpen] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <section className="overflow-hidden bg-slate-50 py-6 md:py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-block text-sm font-semibold tracking-[3px] text-blue-600 uppercase">Testimonials</span>

                            <h2 className="mt-3 text-3xl leading-tight font-bold text-slate-900 sm:text-4xl lg:text-5xl">What Clients Say</h2>

                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                loop
                                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                className="mt-4 md:mt-8"
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8">
                                            {/* Rating */}
                                            <div className="mb-5 flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={18} fill="#facc15" className="text-yellow-400" />
                                                ))}
                                            </div>

                                            {/* Review */}
                                            <p className="text-base text-slate-600 italic md:text-lg md:leading-8">"{item.review}"</p>

                                            {/* Client */}
                                            <div className="mt-8">
                                                <h4 className="text-xl font-bold text-slate-900">{item.name}</h4>

                                                <p className="mt-1 text-slate-500">{item.company}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Right Image */}
                        <div className="order-1 flex justify-center lg:order-2">
                            <div
                                onClick={() => {
                                    setOpen(true);
                                }}
                                className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[620px]"
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 scale-110 rounded-3xl bg-white blur-3xl"></div>

                                <Image
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                    fill
                                    priority
                                    className="relative rounded-3xl border-4 border-white object-contain shadow-2xl transition-all duration-500 md:border-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
        </>
    );
}
