'use client';

import React from 'react';
import Link from 'next/link';
import markData from '@/lib/Data2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import Enquiry from '@/components/Enquiry';

const MarkClient = () => {
    const [isOpen, setOpen] = useState(false);

    const products = markData.products || [];
    const heroImages = ['/hero2.png', '/Other/mark2.webp', '/unnamed (1).png'];

    const features = [
        {
            title: 'High Energy Efficiency',
            desc: 'Our MARK Compressors are designed to optimize energy usage, making them a cost-effective choice for industries seeking reliable compressed air solutions from a trusted Screw Air Compressors Supplier.',
        },
        {
            title: 'Reliable Continuous Operation',
            desc: 'Built for demanding industrial environments, MARK Compressors ensure uninterrupted compressed air supply, helping businesses maintain smooth and efficient operations.',
        },
        {
            title: 'Advanced Compressor Technology',
            desc: 'As an experienced Screw Air Compressors Trader, we offer MARK Compressors equipped with innovative technology that enhances performance, control, and operational efficiency.',
        },
        {
            title: 'Low Maintenance Requirements',
            desc: 'The robust construction and quality components of MARK Compressors help reduce maintenance needs and operational downtime.',
        },
        {
            title: 'Durable & Long-Lasting Performance',
            desc: 'Designed to withstand challenging industrial conditions, MARK Compressors provide long service life and dependable performance.',
        },

        {
            title: 'Consistent Air Quality',
            desc: 'MARK Compressors deliver a stable and reliable compressed air supply, ensuring consistent performance across industrial applications while supporting operational efficiency and product quality.',
        },
    ];

    const benefits = [
        {
            title: 'Enhanced Energy Efficiency',
            desc: 'MARK Compressors are engineered to consume less power while delivering consistent compressed air output, helping reduce energy expenses.',
        },
        {
            title: 'Improved Operational Productivity',
            desc: 'A continuous and reliable air supply ensures smooth production processes and minimizes workflow interruptions.',
        },
        {
            title: 'Lower Maintenance Costs',
            desc: 'Built with high-quality components, MARK Compressors require less frequent maintenance, reducing downtime and service expenses.',
        },
        {
            title: 'Long Service Life',
            desc: 'Robust construction and advanced engineering ensure durability and dependable performance for years of operation.',
        },
        {
            title: 'Reduced Downtime',
            desc: 'Reliable compressor performance helps prevent unexpected breakdowns and keeps industrial operations running efficiently.',
        },
    ];

    const applications = [
        {
            title: 'Manufacturing Industry',
            image: '/indus1.jpg',
            desc: 'Providing dependable compressed air for production lines, machinery, automation systems, and industrial processes.',
        },
        {
            title: 'Automotive Industry',
            image: '/indus2.jpg',
            desc: 'Supporting vehicle assembly, painting, maintenance, and pneumatic tool operations with reliable compressed air solutions.',
        },
        {
            title: 'Pharmaceutical Industry',
            image: '/indus3.jpg',
            desc: 'Ensuring clean and consistent compressed air for manufacturing processes and quality-controlled environments.',
        },
        {
            title: 'Food & Beverage Industry',
            image: '/indus4.jpg',
            desc: 'Helping maintain operational efficiency and product quality in food processing and packaging applications.',
        },
        {
            title: 'Textile Industry',
            image: '/indus5.jpg',
            desc: 'Supporting spinning, weaving, dyeing, and finishing processes with uninterrupted compressed air supply.',
        },
        {
            title: 'Engineering & Fabrication Units',
            image: '/indus6.jpg',
            desc: 'Powering pneumatic equipment, industrial tools, and manufacturing machinery for improved productivity.',
        },
        {
            title: 'Chemical Industry',
            image: '/indus7.jpg',
            desc: 'Providing reliable compressed air solutions for demanding processing and production environments.',
        },
        {
            title: 'Packaging Industry',
            image: '/indus7.jfif',
            desc: 'Enhancing efficiency in automated packaging systems, filling machines, and production lines.',
        },
    ];

    return (
        <div>
            <section className="relative flex h-[250px] w-full items-center justify-center overflow-hidden md:h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bghero1.webp')" }}>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <h1 className="z-10 px-10 text-center text-3xl font-bold text-white md:text-7xl">Mark Compressor</h1>
                </div>
            </section>

            <section className="relative overflow-x-hidden bg-white">
                <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-6 lg:py-9 xl:px-8 xl:py-14">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
                        {/* Left Content */}
                        <div className="w-full">
                            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
                                Trusted Screw Air Compressors Supplier
                            </span>

                            <h2 className="mt-5 text-2xl leading-tight font-bold break-words text-slate-900 sm:text-4xl lg:text-4xl xl:text-5xl">
                                Screw Air Compressors &<span className="block text-sky-600">MARK Compressors Supplier</span>
                            </h2>

                            <p className="mt-5 text-base leading-6 break-words text-slate-700 md:leading-7 xl:text-lg">
                                Eutair Equipments LLP is a trusted Screw Air Compressors Supplier of high-performance MARK Compressors for industrial
                                applications. We offer advanced compressed air solutions designed to deliver superior efficiency, reliability, and long-lasting
                                performance. Our MARK Compressor range is engineered to meet the compressed air requirements of manufacturing units, automotive
                                facilities, pharmaceutical companies, engineering workshops, textile industries, and other industrial sectors.
                            </p>

                            <div className="mt-8">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="w-full rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 transition-all duration-300 hover:bg-sky-600 sm:w-auto"
                                >
                                    Get a Free Quote Today
                                </button>
                            </div>
                        </div>

                        {/* Right Image Slider */}
                        <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
                            {/* Background Glow */}
                            <div className="absolute inset-0 rounded-full bg-sky-300/20 blur-3xl"></div>

                            {/* Image Card */}
                            <div className="relative z-10 overflow-hidden rounded-[30px] border border-sky-100 bg-white/80 p-3 shadow-[0_20px_60px_rgba(14,165,233,.12)] backdrop-blur-xl md:rounded-[40px] md:p-5">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    loop={true}
                                    className="heroSwiper"
                                >
                                    {heroImages.map((img, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="flex items-center justify-center">
                                                <img
                                                    src={img}
                                                    alt={`Compressor ${index + 1}`}
                                                    className="mx-auto h-[240px] w-full max-w-full object-contain sm:h-[300px] md:h-[420px] md:max-w-[500px]"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Floating Efficiency Card */}
                            <div className="absolute top-12 -left-8 z-20 hidden rounded-2xl border border-sky-100 bg-white px-6 py-4 shadow-xl lg:flex">
                                <div>
                                    <h4 className="text-2xl font-bold text-sky-600">99%</h4>
                                    <p className="text-sm text-slate-500">Efficiency</p>
                                </div>
                            </div>

                            {/* Floating Brand Card */}
                            <div className="absolute -right-6 bottom-10 z-20 hidden rounded-2xl border border-sky-100 bg-white px-6 py-4 shadow-xl lg:flex">
                                <div>
                                    <h4 className="text-xl font-bold text-sky-600">MARK COMPRESSORS</h4>
                                    <p className="text-sm text-slate-500">Industrial Solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 px-6 py-5 md:py-12">
                <div className="container mx-auto md:px-6">
                    <div className="mb-5 text-center lg:mb-8 xl:mb-16">
                        <h2 className="text-3xl font-bold md:text-4xl">Our MARK Compressor Range</h2>
                    </div>

                    <div className="mt-5 grid gap-8 md:grid-cols-2 lg:mt-8 lg:grid-cols-4 xl:mt-12 xl:grid-cols-4">
                        {products.map((item, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_40px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(14,165,233,.15)]"
                            >
                                <div className="flex h-[270px] items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 to-white p-8 lg:p-6 xl:p-8">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-h-[280px] object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-3 text-center">
                                    <h3 className="min-h-15 text-xl leading-snug font-bold text-slate-900 lg:text-base xl:text-lg">{item.title}</h3>

                                    <div className="mt-auto">
                                        <Link
                                            href={`/mark-compressor/${item.slug}`}
                                            className="mt-5 inline-block rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 font-semibold text-white transition-all hover:scale-105"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-5 md:py-12">
                <div className="container mx-auto px-5 md:px-10">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">Why Choose MARK Compressors?</h2>

                        <p className="my-4 text-base leading-6 text-cyan-800 md:text-lg">
                            MARK Compressors are recognized worldwide for delivering dependable compressed air solutions that combine advanced technology,
                            energy efficiency, and long-term reliability. Designed to meet the demanding requirements of modern industries, MARK Compressors
                            help businesses achieve consistent performance while reducing energy consumption and operating costs.
                        </p>
                    </div>

                    <div className="grid gap-3 md:gap-6 lg:grid-cols-3">
                        {features.map((item, index) => (
                            <div key={index} className="rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 p-5 text-white lg:p-6 xl:p-8">
                                <h3 className="mb-4 text-xl font-bold">{item.title}</h3>

                                <p className="text-white">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f8fbff] py-5 lg:py-7 xl:py-12">
                <div className="container mx-auto px-6">
                    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 p-6 text-white shadow-[0_20px_60px_rgba(14,165,233,.25)] md:p-10">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Improve Your Compressed Air Efficiency?</h2>

                            <p className="text-lg text-white/90">
                                Partner with Eutair Equipments LLP, a trusted Screw Air Compressors Supplier, and discover high-performance MARK Compressors
                                engineered for reliability, efficiency, and long-term value.
                            </p>

                            <a
                                href="tel:919717159766

"
                            >
                                <button className="mt-7 rounded-2xl bg-white px-10 py-4 font-semibold text-sky-600 transition-all hover:scale-105">
                                    Get a Free Quote Today
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-white to-sky-50 py-6 md:py-13">
                <div className="container mx-auto px-6">
                    <div className="mx-auto mb-20 max-w-4xl text-center">
                        <span className="font-semibold text-sky-600">Benefits of MARK Compressors</span>

                        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">Maximize Efficiency, Productivity & Cost Savings</h2>

                        <p className="mt-5 leading-relaxed text-slate-600">
                            As a trusted Screw Air Compressors Trader, Eutair Equipments LLP offers MARK Compressors that are designed to deliver exceptional
                            performance, energy efficiency, and operational reliability. These compressors help businesses optimize their compressed air systems
                            while reducing overall operating costs.
                        </p>
                    </div>

                    <div className="grid gap-8 md:gap-16 lg:grid-cols-2">
                        <div className="relative">
                            <div className="sticky top-54">
                                <div className="absolute inset-0 rounded-full bg-sky-200/30 blur-3xl"></div>

                                <div className="relative overflow-hidden rounded-[36px] border border-sky-100 bg-white shadow-[0_20px_60px_rgba(14,165,233,.12)]">
                                    <img src="/Screw.png" alt="Screw " className="relative z-10 w-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {benefits.map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(14,165,233,.08)] transition-all hover:-translate-y-1 md:p-8"
                                >
                                    <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>

                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white px-8 py-5">
                <div className="container mx-auto md:px-6">
                    <div className="mx-auto mb-7 max-w-4xl text-center">
                        <span className="font-semibold text-sky-600">Applications of MARK Compressors</span>

                        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
                            Reliable Compressed Air Solutions for Diverse Industrial Applications
                        </h2>

                        <p className="mt-6 leading-6 text-slate-600 md:leading-relaxed">
                            As a trusted Screw Air Compressors Supplier, Eutair Equipments LLP supplies MARK Compressors that are designed to support a wide
                            range of industrial operations. Their efficiency, durability, and reliable performance make them suitable for industries where a
                            consistent compressed air supply is critical.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {applications.map((item, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-[32px] border border-sky-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,.12)]"
                            >
                                {/* Image */}
                                <div className="relative h-46 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                                    <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 font-bold text-sky-600 shadow-lg backdrop-blur-sm">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-3">
                                    <h3 className="mb-1 text-xl font-bold text-slate-900">{item.title}</h3>

                                    <p className="leading-relaxed text-slate-600 lg:leading-5 xl:leading-6">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />
        </div>
    );
};

export default MarkClient;
