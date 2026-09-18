'use client';

import Link from 'next/link';
import { Wind, ShieldCheck, Settings, Wrench, Droplets, Filter, Gauge, ArrowRight, Phone, CheckCircle2, Factory } from 'lucide-react';

import { useState } from 'react';
import Enquiry from '@/components/Enquiry';
const whyPoints = [
    'Delivers clean, dry, and contaminant-free compressed air',
    'Protects pneumatic equipment and industrial machinery',
    'Reduces maintenance costs and system downtime',
];

const benefits = [
    'Delivers Clean, Dry & High-Quality Compressed Air',
    'Effectively Removes Moisture, Oil Vapors & Solid Contaminants',
    'Protects Pneumatic Tools, Machinery & Downstream Equipment',
    'Minimizes Equipment Wear, Corrosion & Unexpected Downtime',
    'Improves Overall System Efficiency & Productivity',
    'Reduces Maintenance Costs & Increases Equipment Life',
    'Ensures Consistent Air Quality for Critical Industrial Processes',
    'Supports Reliable & Energy-Efficient Compressed Air Operations',
];

const solutions = [
    {
        icon: Droplets,
        title: 'Refrigerated Air Dryers',
        description: 'Efficiently remove moisture from compressed air, preventing corrosion, condensation, and damage to pneumatic systems.',
    },
    {
        icon: Wind,
        title: 'Heatless Desiccant Air Dryers',
        description: 'Provide ultra-dry compressed air for industries that require extremely low dew points and contamination-free air.',
    },
    {
        icon: Filter,
        title: 'Air Line Filters',
        description: 'Remove dust particles, oil aerosols, and other contaminants to improve compressed air quality and protect downstream equipment.',
    },
    {
        icon: Gauge,
        title: 'Automatic Drain Valves',
        description: 'Automatically discharge accumulated condensate from compressed air systems, ensuring efficient and uninterrupted operation.',
    },
    {
        icon: ShieldCheck,
        title: 'Moisture & Contaminant Removal Solutions',
        description: 'Designed to eliminate impurities that can affect equipment performance, product quality, and operational efficiency.',
    },
    {
        icon: Factory,
        title: 'Complete Compressed Air Treatment Systems',
        description:
            'Integrated air treatment solutions that combine drying, filtration, and condensate management to deliver clean, dry, and reliable compressed air for every industrial application.',
    },
];

export default function AirTreatment() {
    const [open, setOpen] = useState(false);
    return (
        <main className="bg-white">
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#071B2E] via-[#0B3155] to-[#124A79]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

                <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-6 md:py-16 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-blue-100 backdrop-blur sm:px-4 sm:text-sm">
                            <Wind size={16} />
                            Air Treatment Solutions
                        </div>

                        <h1 className="mt-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-6xl">Air Treatment Solutions</h1>

                        <p className="mt-5 text-[15px] leading-7 text-white sm:text-base sm:leading-8 lg:text-lg">
                            Protect your compressed air system with advanced Air Treatment Solutions designed to deliver clean, dry, and high-quality compressed
                            air. At Eutair Equipments, we offer reliable air treatment equipment, including Air Dryers, Air Line Filters, and Drain Valves, to
                            remove moisture, oil, and contaminants, ensuring improved system efficiency, equipment protection, and long-term performance across
                            industrial applications.
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
            <section className="py-7 lg:py-9 xl:py-15">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-5 md:gap-16 lg:grid-cols-2">
                        <div>
                            <span className="text-sm font-semibold tracking-widest text-sky-600 uppercase">Why Air Treatment Solutions Matter</span>

                            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Why Air Treatment Solutions Matter</h2>

                            <p className="mt-6 text-slate-600 md:text-lg md:leading-8">
                                Clean and dry compressed air is essential for maintaining equipment efficiency, reducing downtime, and ensuring consistent
                                production quality. Our air treatment solutions help improve system reliability while extending the lifespan of downstream
                                equipment.
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

                                    <p className="font-medium text-slate-700 md:mt-3">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-slate-50 py-7 md:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="font-semibold tracking-wider text-sky-600 uppercase">Key Benefits</span>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Key Benefits</h2>

                        <p className="mt-4 text-slate-600 md:text-lg md:leading-8">
                            Our Air Treatment Solutions are designed to improve compressed air quality, protect critical equipment, and enhance the overall
                            efficiency of your compressed air system. By removing moisture, oil, dust, and other contaminants, these solutions help industries
                            achieve reliable performance while reducing maintenance costs and extending equipment life.
                        </p>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-6 lg:grid-cols-4">
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-7"
                            >
                                <CheckCircle2 className="mb-5 text-sky-600" size={28} />

                                <p className="text-sm font-medium text-slate-700 md:text-base md:leading-7">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="font-semibold tracking-widest text-sky-600 uppercase">Our Air Treatment Solutions</span>

                        <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Air Treatment Solutions</h2>
                    </div>

                    <div className="mt-5 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {solutions.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl lg:p-5 xl:p-8"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="mt-3 text-xl font-bold text-slate-900 md:mt-6">{item.title}</h3>

                                    <p className="mt-4 text-slate-600 md:leading-8">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#071B2E] via-[#0B3155] to-[#124A79] py-6 md:py-10">
                <div className="mx-auto max-w-5xl px-6 text-center">
                    <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur md:mb-8">
                        <Settings className="text-white" size={38} />
                    </div>

                    <h2 className="text-2xl font-bold text-white md:text-4xl">Need Expert Air Treatment Solutions?</h2>

                    <p className="mt-3 text-blue-100 md:mt-6 md:text-lg md:leading-8">
                        Improve the efficiency and reliability of your compressed air system with high-performance Air Treatment Solutions from Eutair
                        Equipments. Our experts are ready to help you choose the right solution for your industrial application.
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
