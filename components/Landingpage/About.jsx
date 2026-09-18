import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';
import { Building2, Stethoscope, ShoppingCart, Store, Warehouse } from 'lucide-react';

const About = () => {
    // who we work with data

    const partners = [
        {
            title: 'Government Hospital Tenders Bidders & Project Contractors',
            icon: Building2,
        },
        {
            title: 'Private Hospital Purchase & Procurement Teams',
            icon: Stethoscope,
        },
        {
            title: 'GeM Portal Institutional Procurement Buyers',
            icon: ShoppingCart,
        },
        {
            title: 'Retailers & Wholesale Distributors',
            icon: Store,
        },
        {
            title: 'Municipal Corporations & Urban Local Bodies',
            icon: Warehouse,
        },

        {
            title: 'Facility Management & Waste Handling Companies',
            icon: Warehouse,
        },
    ];

    return (
        <div>
            {/* who we work with section*/}
            <Reveal>
                <section className="relative overflow-hidden bg-white py-3">
                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-50 opacity-70 blur-3xl"></div>
                    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-50 opacity-70 blur-3xl"></div>

                    <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-18">
                        <div className="grid items-center md:gap-10 lg:grid-cols-2">
                            {/* Left Content */}
                            <div>
                                <span className="text-center text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">
                                    About Eutair Equipments
                                </span>

                                <h2 className="mt-3 text-xl leading-tight font-bold text-slate-900 md:text-4xl">
                                    Compressed Air Experts for Industrial Engineering Solutions
                                </h2>

                                <div className="mt-3 mb-4 h-1 w-24 rounded-full bg-cyan-600"></div>

                                <h3 className="mb-4 text-xs leading-relaxed font-semibold text-slate-800 md:text-xl"></h3>

                                <p className="text-md leading-8 text-black md:text-lg">
                                    Eutair Equipment is a professionally managed engineering company based in New Delhi, India, specializing in{' '}
                                    <strong>
                                        {' '}
                                        <a href="/chicago-pneumatic" className="text-blue-600">
                                            compressed air systems
                                        </a>
                                    </strong>
                                    , including{' '}
                                    <strong>
                                        <a href="/mark-compressor" className="text-blue-600">
                                            Screw Air Compressors
                                        </a>
                                        , Air Dryers, Air Line Filters, Compressor Accessories
                                    </strong>
                                    , and{' '}
                                    <a href="/turnkey-project" className="font-bold text-blue-600">
                                        turnkey engineering solutions
                                    </a>
                                    .
                                </p>

                                <p className="text-lg leading-8 text-black">
                                    We provide end-to-end services from Concept to Commissioning on EP, EPC, and a turnkey basis, serving diverse industries
                                    across India, Africa, and the Indian Sub-continent with reliable after-sales services. We are committed to delivering
                                    efficient, high-performance, and cost-effective industrial solutions tailored to client requirements.
                                </p>
                            </div>

                            {/* Right Side */}
                            <div className="relative">
                                <div className="rounded-[32px] border border-slate-100 bg-white p-4 shadow-2xl lg:p-10">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="rounded-2xl bg-slate-50 p-6 text-center">
                                            <h4 className="font-bold text-cyan-600 md:text-3xl">100%</h4>
                                            <p className="mt-2 text-sm text-slate-600">Quality Focused Solutions</p>
                                        </div>

                                        <div className="rounded-2xl bg-slate-50 p-6 text-center">
                                            <h4 className="font-bold text-cyan-600 md:text-3xl">24/7</h4>
                                            <p className="mt-2 text-sm text-slate-600">Customer Support</p>
                                        </div>

                                        <div className="rounded-2xl bg-slate-50 p-6 text-center">
                                            <h4 className="font-bold text-cyan-600 md:text-3xl">Wide</h4>
                                            <p className="mt-2 text-sm text-slate-600">Product Portfolio</p>
                                        </div>

                                        <div className="rounded-2xl bg-slate-50 p-6 text-center">
                                            <h4 className="font-bold text-cyan-600 md:text-3xl">Trusted</h4>
                                            <p className="mt-2 text-sm text-slate-600">Industry Partner</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 p-6 text-white">
                                        <h4 className="mb-3 text-xl font-semibold">Compressed Air & Industrial Equipment Solutions</h4>
                                        <p className="leading-7 text-white/90">
                                            Delivering quality products, innovative technology, and reliable support to help industries achieve maximum
                                            productivity and operational efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Reveal>
        </div>
    );
};

export default About;
