'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const data = [
    {
        title: 'Plastic Disposable Garbage Bag',
        desc: 'Bags designed for segregation of household waste via optical colour sorting.',
        image: '/new/red garba.webp',
        href: '/categories/disposable-garbage-bags',
    },
    {
        title: 'Biodegradable Garbage Bags',
        desc: 'Bags designed for institutional use, easy to dispense one by one.',
        image: '/new/green.webp',
        href: '/categories/biodegradable-garbage-bags',
    },
    {
        title: 'Plastic Small Degradable Garbage Bag',
        desc: 'Eco friendly biodegradable garbage bags for sustainable waste disposal.',
        image: '/new/white (1).webp',
        href: '/categories/disposable-garbage-bags',
    },
    {
        title: 'Compostable Biodegradable garbage bags',
        desc: 'Heavy duty plastic garbage bags for construction and commercial use.',
        image: '/new/red (2).webp',
        href: '/categories/biomedical-garbage-bags',
    },
];

export default function ProductCards() {
    return (
        <section style={{ backgroundImage: 'url(/bag/aboutbg.webp)' }} className="relative w-full bg-[#F8F9F4] bg-contain bg-no-repeat py-7 md:py-12">
            {/* HEADER */}
            <div className="mx-auto mb-7 flex max-w-7xl flex-col items-start justify-between gap-3 px-4 sm:px-6 md:mb-14 md:flex-row md:items-center md:gap-6">
                <h2 className="text-3xl font-bold text-black md:text-[50px]">Our Products</h2>

                <Link
                    href="/products"
                    className="rounded-full border-2 bg-[#557C73] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[#557C73]"
                >
                    Explore All Products
                </Link>
            </div>

            {/* CARDS GRID */}
            <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-10">
                {data.map((item, i) => (
                    <motion.div key={i} className="group flex flex-col overflow-hidden rounded-[28px] shadow-sm sm:flex-row">
                        {/* LEFT IMAGE */}
                        <div className="relative min-h-[230px] w-full overflow-hidden bg-[#557C73] sm:w-[45%]">
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                                <Image src={item.image} alt={item.title} fill className="object-contain" />
                            </motion.div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="relative flex w-full flex-col justify-between px-6 py-6 sm:w-[55%] sm:px-10 md:py-8">
                            <div>
                                <h3 className="mb-3 text-xl font-semibold tracking-wide text-[#557C73] sm:mb-4 sm:text-[24px]">{item.title}</h3>

                                <p className="text-sm leading-relaxed text-black sm:text-[15px]">{item.desc}</p>

                                {/* Decorative Blob */}
                                <div className="pointer-events-none absolute top-3 right-2 h-20 w-20 opacity-40 sm:top-4 sm:right-1 sm:h-28 sm:w-28">
                                    <div className="absolute inset-0 rounded-full bg-[#557C73] p-5 mix-blend-multiply" />
                                    <Image src="/bag/blob.png" alt="blob" fill className="object-contain p-2" />
                                </div>
                            </div>

                            {/* CTA */}
                            <Link href={item.href} className="mt-6 flex items-center justify-between sm:mt-10">
                                <p className="sm:text-md border-2 p-2 text-sm font-medium tracking-wider text-[#557C73] capitalize">explore product</p>

                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A3C94C] sm:h-12 sm:w-12">
                                    <span className="material-symbols-outlined text-sm text-[#A3C94C] sm:text-base">east</span>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
