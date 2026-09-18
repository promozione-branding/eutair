'use client';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { Hospital } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Factory, Store, Hotel, Home, Leaf, Warehouse, Truck, Tags, Handshake } from 'lucide-react';
import ProductRange from '@/components/city/Products';
import TrustedBrands from '@/components/Landingpage/Clients';
import WhyChooseUs from '@/components/city/WhyChoose';
import Cta from '@/components/Landingpage/Cta';
import Otherproduct from '@/components/Landingpage/Otherpro';
import FAQ from '@/components/city/FAQ';

const Location = ({ city }) => {
    return (
        <>
            {/* Hero */}
            <div className="">
                <section
                    style={{
                        backgroundImage: "url('/bghero1.webp')",
                        backgroundSize: 'cover',
                        objectPosition: 'center',
                    }}
                    className="relative z-10 py-20"
                >
                    <div className="absolute inset-0 bg-gray-900/60" />

                    <h1 className="relative px-5 text-center font-serif text-2xl leading-snug font-bold text-white capitalize md:py-20 md:text-6xl">
                        Screw Air Compressor in <span className="capitalize">{city}</span>
                    </h1>
                </section>
            </div>

            <section className="bg-white py-3 md:py-13">
                <div className="mx-auto max-w-7xl px-5 lg:px-6">
                    {/* Heading */}
                    <div className="mb-5 text-center md:mb-10">
                        <h1 className="mt-4 text-3xl leading-tight font-bold text-slate-900 md:text-5xl">
                            Screw Air Compressor{' '}
                            <span className="text-blue-600">
                                in <span className="capitalize">{city}</span>
                            </span>
                        </h1>

                        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blue-600"></div>
                    </div>

                    {/* Content */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Left */}
                        <div>
                            <p className="mb-6 text-black md:text-lg">
                                Looking for a high-performance{' '}
                                <strong>
                                    Screw Air Compressor in <span className="capitalize">{city}</span>
                                </strong>
                                ? EutAir is a trusted supplier of premium-quality screw air compressors designed to deliver consistent airflow, energy
                                efficiency, and long-lasting performance for industrial applications.
                            </p>

                            <p className="mb-6 text-black md:text-lg">
                                Whether you operate a manufacturing unit, automotive workshop, pharmaceutical facility, food processing plant, or textile
                                factory, our screw air compressors are engineered to meet your day-to-day operational needs with maximum reliability. Enjoy
                                stable air pressure, reduced downtime, and uninterrupted productivity.
                            </p>

                            <p className="text-black md:text-lg">
                                With years of industry expertise, EutAir provides advanced screw air compressor systems that help businesses lower energy costs,
                                improve productivity, and minimize maintenance. Our commitment to superior quality, prompt service, and customer satisfaction
                                has made EutAir one of the preferred suppliers of screw air compressors across <span className="capitalize">{city}</span> and
                                surrounding regions.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                                <Image
                                    src="/citypgImg.webp"
                                    alt="Screw Air Compressor"
                                    width={700}
                                    height={650}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-13 -left-6 hidden rounded-2xl bg-blue-600 px-6 py-5 text-white shadow-xl md:absolute">
                                <h3 className="text-3xl font-bold">10+</h3>
                                <p className="text-sm">Years of Industry Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workstation  */}
            <ProductRange />

            <TrustedBrands />
            <WhyChooseUs city={city} />

            <Cta />

            <Otherproduct></Otherproduct>

            {/* Industries */}
            <section className="bg-gradient-to-b from-slate-50 to-white py-7 md:py-14">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    {/* Heading */}
                    <div className="mx-auto mb-6 max-w-3xl text-center md:*:mb-12">
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                            Benefits of Installing a <span className="text-blue-600">Screw Air Compressor</span>
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                        {/* Card */}
                        <div className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                                <Store className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
                            </div>

                            <h3 className="mb-3 font-bold text-slate-900">24/7 Operation</h3>

                            <p className="text-sm text-slate-600">Continuous operation ensures uninterrupted production without unexpected downtime.</p>
                        </div>

                        <div className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-600">
                                <Hotel className="h-8 w-8 text-green-600 transition group-hover:text-white" />
                            </div>

                            <h3 className="mb-3 font-bold text-slate-900">Stable Pressure</h3>

                            <p className="text-sm text-slate-600">Provides steady airflow with consistent pressure for reliable equipment performance.</p>
                        </div>

                        <div className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-600">
                                <Factory className="h-8 w-8 text-orange-600 transition group-hover:text-white" />
                            </div>

                            <h3 className="mb-3 font-bold text-slate-900">Lower Maintenance</h3>

                            <p className="text-sm text-slate-600">Reduced operating and maintenance costs help lower overall ownership expenses.</p>
                        </div>

                        <div className="group rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 transition group-hover:bg-purple-600">
                                <Hospital className="h-8 w-8 text-purple-600 transition group-hover:text-white" />
                            </div>

                            <h3 className="mb-3 font-bold text-slate-900">Energy Saving</h3>

                            <p className="text-sm text-slate-600">High efficiency design reduces electricity consumption and operating costs.</p>
                        </div>

                        <div className="group hidden rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:block">
                            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 transition group-hover:bg-indigo-600">
                                <Home className="h-8 w-8 text-indigo-600 transition group-hover:text-white" />
                            </div>

                            <h3 className="mb-3 font-bold text-slate-900">Quiet Operation</h3>

                            <p className="text-sm text-slate-600">Low-noise technology creates a safer and more comfortable working environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* about */}
            <section className="mx-auto px-5 py-8 lg:px-15">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="w-full">
                        <img src="/products/Hydraulic Power Packs.webp" alt="Chicago Pneumatic " className="h-102 w-full rounded-2xl object-cover" />
                    </div>

                    <div>
                        <h2 className="mb-5 text-3xl font-bold md:text-[42px]">
                            Why Industries in <span className="capitalize">{city} </span>Trust EutAir ?
                        </h2>

                        <p className="md: mb-6 text-lg text-black md:leading-relaxed">
                            <span className="capitalize">{city}</span> is one of India’s biggest industrial and commercial hubs, where steady compressed air
                            really matters in day-to-day production processes. At EutAir we support factories with reliable compressor systems, technical
                            know-how and a pretty fast customer service response . Our seasoned crew will help you figure out the best compressor for your
                            setup, based on airflow needs, required pressure, how many hours it runs, and also energy consumption goals.
                        </p>

                        <Link href={'/contact'} className="mx-auto rounded-md bg-[#1b68fe] px-4 py-3 text-lg text-white hover:scale-105">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <FAQ city={city} />
        </>
    );
};

export default Location;
