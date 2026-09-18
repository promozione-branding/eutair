'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#081B2E] px-2 text-white">
            {/* CTA Strip */}
            <div className="hidden border-b border-white/10 md:block">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 lg:flex-row">
                    <div>
                        <h3 className="text-3xl font-bold">Need Industrial Air Solutions?</h3>
                        <p className="mt-2 text-slate-300">Talk to our experts and find the right compressed air solution for your business.</p>
                    </div>

                    <a href="tel:919717159766" className="rounded-full bg-cyan-600 px-8 py-4 font-semibold transition hover:bg-cyan-700">
                        Get Instant Price
                    </a>
                </div>
            </div>

            <div className="mx-auto max-w-[1400px] px-2 py-10">
                <div className="grid gap-7 lg:grid-cols-5">
                    {/* Company */}
                    <div>
                        <Image width={200} alt="Eutair" height={200} src="/logofooter-removebg-preview.png"></Image>

                        <p className="mt-8 leading-8 text-white">
                            Leading Manufacturer, Trader, Exporter & Importer of Air Compressors, Air Dryers, Air Line Filters, Drain Valves and Industrial
                            Filtration Solutions.
                        </p>
                        {/* Email Contacts */}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 text-xl font-semibold">Quick Links</h4>

                        <ul className="space-y-4 text-white">
                            <li className="hover:text-cyan-500">
                                <Link href="/">Home</Link>
                            </li>

                            <li className="hover:text-cyan-500">
                                <Link href="/about">About Us</Link>
                            </li>

                            <li className="hover:text-cyan-500">
                                <Link href="/mark-compressor">Mark Compressor</Link>
                            </li>

                            <li className="hover:text-cyan-500">
                                <Link href="/chicago-pneumatic">Chicago Pneumatic</Link>
                            </li>

                            <li className="hover:text-cyan-500">
                                <Link href="/our-blogs">Blogs</Link>
                            </li>

                            <li className="hover:text-cyan-500">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="mb-6 text-xl font-semibold">Our Services</h4>

                        <ul className="space-y-4 text-white">
                            <li>
                                <Link href="/amc-service" className="transition-colors duration-300 hover:text-cyan-500">
                                    AMC Service
                                </Link>
                            </li>

                            <li>
                                <Link href="/air-audit-service" className="transition-colors duration-300 hover:text-cyan-500">
                                    Air Audit Services
                                </Link>
                            </li>

                            <li>
                                <Link href="/engineering-consultancy" className="transition-colors duration-300 hover:text-cyan-500">
                                    Engineering Consultancy
                                </Link>
                            </li>

                            <li>
                                <Link href="/wastewater-engineering" className="transition-colors duration-300 hover:text-cyan-500">
                                    Wastewater Engineering
                                </Link>
                            </li>

                            <li>
                                <Link href="/turnkey-project" className="transition-colors duration-300 hover:text-cyan-500">
                                    Turnkey Project
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-5 text-xl font-semibold">Contact Information</h4>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Phone className="mt-1 shrink-0 text-cyan-500" size={20} />
                                <div>
                                    <p className="font-semibold text-white">Phone</p>
                                    <a href="tel:+919717159766" className="text-slate-300 transition-colors hover:text-cyan-400">
                                        +91 9717159766
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-4">
                                <FaWhatsapp className="mt-1 shrink-0 text-cyan-500" size={20} />
                                <div>
                                    <p className="font-semibold text-white">WhatsApp</p>
                                    <a href="https://wa.link/o8l7fy" className="text-slate-300 transition-colors hover:text-cyan-400">
                                        +91 958 2911766
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 flex items-start gap-4">
                            <Mail className="mt-1 shrink-0 text-cyan-500" size={20} />
                            <div>
                                <p className="mb-2 font-semibold text-white">Email Contacts</p>

                                <div className="space-y-1 text-slate-300">
                                    <a href="mailto:support@eutair.com" className="block transition-colors hover:text-cyan-400">
                                        support@eutair.com
                                    </a>

                                    <a href="mailto:sales@eutair.com" className="block transition-colors hover:text-cyan-400">
                                        sales@eutair.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Elite Certificate */}
                    <div className="relative overflow-hidden rounded-3xl">
                        {/* Background Glow */}

                        <div className="relative">
                            <h4 className="mb-3 ml-2 text-xl font-bold text-cyan-400">Trust Elite Certificate</h4>

                            <div className="flex justify-center">
                                <Image src="/TRUST-ELITE.webp" alt="Trust Elite Certificate" width={120} height={120} className="object-contain" />
                            </div>

                            <p className="ml-2 text-[14px] leading-6 text-slate-200">
                                We are proud to present the Trust Elite Certificate of Excellence to Eutair , recognizing their commitment to exceptional
                                customer service, outstanding business practices, and a dedication to building trust with their customers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-50/40"></div>

            {/* Registered Address */}

            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 md:flex-row lg:gap-12 lg:px-10">
                {/* Regd. Address */}
                <div className="flex w-full min-w-0 items-start gap-3">
                    <MapPin className="mt-1 shrink-0 text-cyan-500" size={20} />

                    <div className="min-w-0">
                        <p className="font-semibold text-white">Regd. Address</p>

                        <p className="leading-relaxed break-words text-slate-300">
                            37C, 2nd Floor, Gate No. 3, Opp. IDBI Bank, Chaudhary Balbir Singh Marg, <br />
                            A3 Block, Paschim Vihar, New Delhi - 110063
                        </p>
                    </div>
                </div>

                {/* Office Address */}
                <div className="flex w-full min-w-0 items-start gap-3">
                    <MapPin className="mt-1 shrink-0 text-cyan-500" size={20} />

                    <div className="min-w-0">
                        <p className="font-semibold text-white">Office Address</p>

                        <p className="leading-relaxed break-words text-slate-300">
                            T-3, Third Floor, Ansal Utility Tower, A2 Block, Paschim Vihar,
                            <br />
                            New Delhi, Delhi - 110063
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 py-5 text-sm text-slate-400 md:flex-row">
                    <p>© 2026 Eutair Equipments LLP. All Rights Reserved.</p>

                    <p>
                        Website Designed By Inquiry Bazaar Pvt. Ltd.{' '}
                        <a className="text-cyan-500 underline" href="https://inquirybazaar.com/">
                            B2B Marketplace
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
