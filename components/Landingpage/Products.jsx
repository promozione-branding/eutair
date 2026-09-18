'use client';

import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import Reveal from './Reveal';
export default function ProductRange() {
    const products = [
        {
            title: 'Chicago Pneumatic',
            image: '/hero1.png',
            link: '/chicago-pneumatic',
            desc: 'Industry-proven compressed air systems delivering superior efficiency, durability, and productivity for modern industrial operations.',
        },
        {
            title: 'MARK Compressors',
            image: '/hero2.png',
            link: '/mark-compressor',
            desc: 'Innovative compressor solutions combining energy savings, operational reliability, and long-term performance excellence.',
        },
        {
            title: 'Air Treatment',
            image: '/hero3.png',
            link: '/air-treatment-service',
            desc: 'Comprehensive air purification solutions ensuring clean, dry, and contaminant-free compressed air for sensitive applications.',
        },
        {
            title: 'Spares and Consumables',
            image: '/pro3.png',
            link: '/spares-and-consumables',
            desc: 'Premium-quality genuine parts and consumables designed to maintain peak compressor performance and reduce downtime.',
        },
        {
            title: 'Piping and Distribution Lines',
            image: '/pro4.jpeg',
            link: '/piping-and-distribution-lines',
            desc: 'Customized air distribution networks engineered for maximum flow efficiency, reduced leakage, and optimal system performance.',
        },
    ];

    return (
        <Reveal>
            <section className="overflow-hidden bg-white md:py-6">
                <div className="mx-auto px-4 sm:px-6 lg:px-12">
                    {/* Heading */}
                    <h2 className="mb-2 text-center text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">Our Products</h2>

                    <div className="mb-8 text-center md:mb-12">
                        <h2 className="text-2xl leading-tight font-bold text-[#0B3A82] uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                            Our Screw Air Compressor Range
                        </h2>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 border border-cyan-400 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                className="group border-b border-cyan-400 p-4 transition-all duration-300 hover:bg-slate-50 lg:p-3 xl:border-r xl:p-5 xl:last:border-r-0"
                            >
                                {/* Image */}
                                <div className="mb-4 flex h-44 items-center justify-center overflow-hidden sm:h-52 md:h-56">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-base leading-snug font-bold text-[#0B3A82] uppercase sm:text-lg">{item.title}</h3>

                                {/* Description */}
                                <p className="mb-4 text-sm leading-6 text-gray-600 sm:text-[15px]">{item.desc}</p>

                                {/* Link */}

                                <Link href={item.link}>
                                    <button className="cursor-pointer text-sm font-semibold tracking-wide text-[#0B3A82] uppercase transition hover:text-cyan-600">
                                        View Product →
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
