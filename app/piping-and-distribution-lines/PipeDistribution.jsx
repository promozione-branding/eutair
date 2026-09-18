'use client';

import Link from 'next/link';
import { Wind, ShieldCheck, Settings, Wrench, Droplets, Filter, Gauge, ArrowRight, Phone, CheckCircle2, Factory } from 'lucide-react';

import { Network, Pipe, Workflow } from 'lucide-react';

import { useState } from 'react';
import Enquiry from '@/components/Enquiry';

const whyPoints = [
    'Ensures Efficient Compressed Air Distribution Across the Facility',
    '	Minimizes Pressure Drop and Energy Loss',
    'Supports Reliable System Performance and Productivity',
];

const products = [
    {
        title: 'Compressed Air Piping Systems',
        description: 'Engineered piping networks that deliver compressed air efficiently from the compressor to every point of use.',
        icon: Network,
    },
    {
        title: 'Aluminum Piping Systems',
        description: 'Lightweight, corrosion-resistant piping solutions that provide excellent airflow and simplified installation.',
        icon: Pipe,
    },
    {
        title: 'Air Distribution Networks',
        description: 'Professionally designed distribution systems that ensure balanced airflow and consistent pressure throughout industrial facilities.',
        icon: Workflow,
    },
    {
        title: 'Pipe Fittings & Accessories',
        description: 'A complete range of connectors, valves, brackets, and accessories for secure and reliable piping installations.',
        icon: Wrench,
    },

    {
        title: 'Plant Expansion & System Upgrades',
        description: 'Customized piping solutions that support facility expansion, increased production capacity, and changing operational requirements.',
        icon: Factory,
    },

    {
        title: 'Turnkey Piping Installation',
        description: 'End-to-end design, supply, installation, and commissioning of compressed air piping systems tailored to your industrial needs.',
        icon: Settings,
    },
];

const benefits = [
    'Efficient Compressed Air Delivery Across the Plant',
    'Reduced Pressure Loss and Energy Consumption',
    'Improved System Performance and Reliability',
    'Supports Plant Expansion and Future Upgrades',
    'Durable, Corrosion-Resistant Piping Solutions',
    'Optimized Airflow for Maximum Productivity',
    'Easy Integration with Existing Compressed Air Systems',
    'Cost-Effective and Low-Maintenance Infrastructure',
];

const solutions = [
    {
        icon: Droplets,
        title: 'Compressed Air Piping Systems',
        description: 'Engineered piping networks that deliver compressed air efficiently from the compressor to every point of use.',
    },
    {
        icon: Wind,
        title: 'Aluminum Piping Systems',
        description: 'Lightweight, corrosion-resistant piping solutions that provide excellent airflow and simplified installation.',
    },
    {
        icon: Filter,
        title: 'Air Distribution Networks',
        description: 'Professionally designed distribution systems that ensure balanced airflow and consistent pressure throughout industrial facilities.',
    },
    {
        icon: Gauge,
        title: 'Pipe Fittings & Accessories',
        description: 'A complete range of connectors, valves, brackets, and accessories for secure and reliable piping installations.',
    },
    {
        icon: ShieldCheck,
        title: 'Plant Expansion & System Upgrades',
        description: 'Customized piping solutions that support facility expansion, increased production capacity, and changing operational requirements.',
    },
    {
        icon: Factory,
        title: 'Turnkey Piping Installation',
        description: 'End-to-end design, supply, installation, and commissioning of compressed air piping systems tailored to your industrial needs.',
    },
];

export default function PipeDistribution() {
    const [open, setOpen] = useState(false);
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#071B2E] via-[#0B3155] to-[#124A79]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

                <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-6 md:py-16 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="mt-6 text-3xl leading-tight font-bold text-white md:text-5xl">Piping & Distribution Lines</h1>

                        <p className="mt-5 text-[15px] text-white sm:text-base md:leading-7 lg:text-lg">
                            Ensure efficient and reliable compressed air delivery with high-quality Piping & Distribution Line Solutions from Eutair Equipments
                            LLP. We provide expertly designed piping systems that transport compressed air from the compressor to every point of use with
                            minimal pressure loss, ensuring maximum system efficiency and consistent performance.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="tel:+919717159766"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00AEEF] px-6 py-4 font-semibold text-white transition hover:bg-cyan-500 sm:w-auto"
                            >
                                Talk to Eutair
                                <Phone size={18} />
                            </Link>

                            <button
                                onClick={() => setOpen(true)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/20 sm:w-auto"
                            >
                                Request a Quote
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why */}
            <section className="py-5 md:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-5 md:gap-16 lg:grid-cols-2">
                        <div>
                            <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-4xl">Why Piping & Distribution Lines Matter</h2>

                            <p className="mt-3 text-slate-600 md:mt-6 md:text-lg md:leading-8">
                                A well-designed compressed air piping network is essential for maintaining consistent air pressure, minimizing energy losses,
                                and ensuring efficient air distribution throughout your facility. Proper system design not only improves equipment performance
                                but also reduces maintenance requirements and operating costs.
                            </p>
                        </div>

                        <div className="grid gap-3 md:gap-5">
                            {whyPoints.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:shadow-lg md:p-6"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                                        <CheckCircle2 />
                                    </div>

                                    <p className="text-sm font-medium text-slate-700 md:mt-3 md:text-base">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-slate-50 py-5 md:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="font-semibold tracking-wider text-sky-600 uppercase">Key Benefits</span>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Key Benefits</h2>

                        <p className="mt-4 text-slate-600 md:text-lg md:leading-8">
                            Our piping and distribution line solutions are designed to improve compressed air system performance while ensuring long-term
                            operational efficiency.
                        </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-7"
                            >
                                <CheckCircle2 className="mb-3 text-sky-600 md:mb-5" size={28} />

                                <p className="text-sm font-medium text-slate-700 md:text-base md:leading-7">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-5 md:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Piping & Distribution Solutions</h2>
                    </div>

                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
                        {solutions.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl lg:p-6 xl:p-8"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="mt-3 text-lg font-bold text-slate-900 md:mt-6 md:text-xl">{item.title}</h3>

                                    <p className="mt-2 text-slate-600 md:mt-4 xl:leading-8">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#071B2E] via-[#0B3155] to-[#124A79] py-5 md:py-10">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur md:mb-8">
                        <Settings className="text-white" size={38} />
                    </div>

                    <h2 className="text-2xl font-bold text-white md:text-4xl">Need Expert Piping & Distribution Solutions?</h2>

                    <p className="mt-6 text-blue-100 md:text-lg md:leading-8">
                        Improve the performance of your compressed air system with professionally engineered Piping & Distribution Line Solutions from Eutair
                        Equipments LLP. Our experts are ready to help you design, install, and optimize a piping network that delivers maximum efficiency and
                        long-term reliability.
                    </p>

                    <div className="mt-10">
                        <button
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="inline-flex items-center gap-2 rounded-xl bg-[#00AEEF] px-8 py-4 font-semibold text-white transition hover:bg-cyan-500"
                        >
                            Enquire Now
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            <Enquiry isOpen={open} onClose={() => setOpen(false)} />
        </main>
    );
}
