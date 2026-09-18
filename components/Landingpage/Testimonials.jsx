'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            company: 'Ganesh Foundry',
            quote: 'The installation quality and technical support were excellent, and the team stayed responsive throughout the project.',
            certificate: '/cert2.png',
        },
        {
            company: 'Kaleido Chemie',
            quote: 'We appreciate the engineering support, reliable delivery, and continued service experience with Eutair.',
            certificate: '/cert3.png',
        },
        {
            company: 'Metal Manufacturing',
            quote: 'Eutair delivered dependable execution with strong service support, and we are happy to recommend their solutions.',
            certificate: '/cert4.png',
        },
    ];

    const [start, setStart] = useState(0);

    const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;

    const itemsPerView = isDesktop ? 2 : 1;

    const next = () => {
        setStart((prev) => (prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView));
    };

    const prev = () => {
        setStart((prev) => (prev - itemsPerView < 0 ? Math.max(testimonials.length - itemsPerView, 0) : prev - itemsPerView));
    };

    const visible = testimonials.slice(start, start + itemsPerView);

    useEffect(() => {
        const interval = setInterval(() => {
            setStart((prev) => (prev + itemsPerView >= testimonials.length ? 0 : prev + itemsPerView));
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [itemsPerView, testimonials.length]);

    return (
        <section className="bg-[#f6f8fa] py-14 sm:py-16 lg:py-15 xl:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10">
                <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                        <span className="text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm sm:tracking-[3px]">
                            Customer Success Stories
                        </span>

                        <h2 className="mt-3 text-3xl leading-tight font-bold text-[#0d4976] sm:text-4xl lg:text-5xl">Letters of Appreciation</h2>

                        <p className="mt-4 text-sm text-slate-500 sm:text-base">
                            Trusted by manufacturing plants, engineering companies, automotive facilities and industrial organizations across India.
                        </p>
                    </div>

                    <div className="flex justify-center gap-3 lg:justify-end">
                        <button
                            onClick={prev}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white transition hover:bg-slate-50 sm:h-12 sm:w-12"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={next}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white hover:bg-slate-50"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                    {visible.map((item, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl lg:rounded-[32px]"
                        >
                            {/* Certificate */}
                            <div className="relative bg-slate-50 p-3 sm:p-4">
                                <div className="relative h-[280px] overflow-hidden rounded-xl border border-slate-200 sm:h-[380px] lg:h-[500px] lg:rounded-2xl">
                                    <Image
                                        src={item.certificate}
                                        alt={item.company}
                                        fill
                                        className="bg-white object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                                    />
                                </div>

                                <div className="absolute top-8 left-8">
                                    <span className="rounded-full bg-[#176BB0] px-4 py-2 text-xs font-medium text-white">Verified Client</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-8">
                                <h3 className="text-3xl font-bold text-[#0d4976]">{item.company}</h3>

                                <div className="mt-5 flex gap-3">
                                    <div className="text-6xl leading-none text-[#176BB0]/20">"</div>

                                    <p className="leading-7 text-slate-600 italic">{item.quote}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
