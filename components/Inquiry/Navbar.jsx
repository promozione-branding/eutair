'use client';
import Link from 'next/link';
import { Phone, Mail, Building2, MapPin, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import ContactForm from './PopupForm';

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-xl">
                {/* Top Info Bar */}

                <div className="hidden border-b border-slate-100 bg-slate-50/50 md:block">
                    <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                        <div className="flex h-11 items-center justify-between">
                            {/* Left Side */}
                            <div className="flex items-center gap-6 text-[14px] text-slate-600">
                                <div className="flex items-center gap-2">
                                    <Building2 className="h-4 w-4 text-blue-600" />
                                    <span>GSTIN: 07AAGFE0760M2ZB</span>
                                </div>

                                <div className="h-4 w-px bg-slate-200" />
                                <div className="flex items-start gap-2">
                                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                                    <span>Paschim Vihar, New Delhi-110063</span>
                                </div>

                                <div className="h-4 w-px bg-slate-200" />

                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-blue-600" />
                                    <a href="tel:+919582911766" className="transition-colors hover:text-blue-600">
                                        Phone +91 9582911766
                                    </a>
                                </div>

                                <div className="h-4 w-px bg-slate-200" />

                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-blue-600" />
                                    <a href="mailto:sales@eutair.com" className="transition-colors hover:text-blue-600">
                                        sales@eutair.com
                                    </a>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="flex items-center gap-3">
                                <a
                                    href=""
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>

                                <a
                                    href=""
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Facebook className="h-4 w-4" />
                                </a>

                                <a href="" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp
                                        size={10}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-green-600 p-1 text-green-600 transition-all duration-300 hover:-translate-y-0.5"
                                    />
                                </a>

                                <a
                                    href=""
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-500 text-pink-500 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>

                                <a
                                    href=""
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500 text-red-500 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Youtube className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="mx-auto w-full px-5 md:px-25 lg:px-15">
                    <div className="flex h-16 items-center justify-between sm:h-20 lg:h-19">
                        {/* Logo */}
                        <Link href="" className="group">
                            <Image
                                height={100}
                                width={100}
                                src="/logo.png"
                                alt="EutAir"
                                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] lg:h-16"
                            />
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-12 lg:gap-15">
                                <li>
                                    <Link href="" className="text-[17px] font-medium tracking-[0.12em] text-slate-700 hover:text-blue-600 lg:text-[16px]">
                                        ABOUT US
                                    </Link>
                                </li>

                                {/* Products Dropdown */}
                                <li className="group relative">
                                    <Link
                                        href="#products"
                                        className="flex items-center gap-2 text-[17px] font-medium tracking-[0.12em] text-slate-700 transition-all hover:text-blue-600 lg:text-[16px]"
                                    >
                                        OUR PRODUCTS
                                    </Link>
                                </li>

                                <li className="group relative">
                                    <Link
                                        href="#industries"
                                        className="flex items-center gap-2 text-[17px] font-medium tracking-[0.12em] text-slate-700 transition-all hover:text-blue-600 lg:text-[16px]"
                                    >
                                        OUR INDUSTRIES
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="#contact"
                                        className="text-[17px] font-medium tracking-[0.12em] text-slate-700 hover:text-blue-600 lg:text-[16px]"
                                    >
                                        CONTACT US
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-3 lg:hidden">
                            <a
                                href="https://wa.link/rntibs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-3 py-3 text-white shadow-lg transition-all hover:bg-green-700"
                            >
                                <FaWhatsapp className="h-6 w-6" /> WhatsApp
                            </a>

                           
                        </div>

                        {/* CTA */}
                        {/* Call & WhatsApp */}
                        <div className="hidden items-center gap-4 lg:flex">
                            <a href="tel:+919717159766" className="group flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-105">
                                    <Phone className="h-5 w-5" />
                                </div>

                                <div className="leading-tight">
                                    <p className="text-xs tracking-wider text-slate-500 uppercase">Call Us</p>
                                    <p className="text-[15px] font-semibold text-slate-800 transition group-hover:text-blue-600">+91 9582911766</p>
                                </div>
                            </a>

                            <a
                                href="https://wa.link/rntibs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center rounded-full bg-green-600 px-3 py-3 text-white shadow-lg transition-all hover:bg-green-700"
                            >
                                <FaWhatsapp className="h-6 w-6" /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {mobileMenu && (
                    <div className="border-t bg-white lg:hidden">
                        <div className="px-4 py-5">
                            <div className="flex flex-col gap-4">
                                <Link href="/inquiry" onClick={() => setMobileMenu(false)} className="font-medium text-slate-700">
                                    ABOUT US
                                </Link>

                                {/* Products Accordion */}
                                <div>
                                    <Link
                                        href="#products"
                                        onClick={() => setMobileMenu(false)}
                                        className="flex w-full items-center justify-between font-medium text-slate-700"
                                    >
                                        OUR PRODUCTS
                                    </Link>
                                </div>

                                {/* <Link
                  href="/our-blogs"
                  onClick={() => setMobileMenu(false)}
                  className="font-medium text-slate-700"
                >
                  BLOGS
                </Link> */}

                                <div>
                                    <Link
                                        onClick={() => setMobileMenu(false)}
                                        href="#industries"
                                        className="flex w-full items-center justify-between font-medium text-slate-700"
                                    >
                                        INDUSTRIES
                                    </Link>
                                </div>

                                <Link
                                    onClick={() => setMobileMenu(false)}
                                    href="#contact"

                                    className="font-medium text-slate-700"
                                >
                                    CONTACT US
                                </Link>

                                <button
                                    onClick={() => {
                                        setOpen(true);
                                        // setMobileMenu(false);
                                        // setopen(true)
                                    }}
                                    className="mt-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white"
                                >
                                    GET A QUOTE
                                </button>

                                {/* Social Icons */}
                                <div className="flex gap-3 border-t pt-4">
                                    <a href="https://www.linkedin.com/company/eutairequipments/">
                                        <Linkedin className="h-5 w-5 text-blue-600" />
                                    </a>
                                    <a href="https://www.facebook.com/eutairequipmentsllp?mibextid=wwXIfr&rdid=CXzIuIs5Eeyc0JDi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CSypmAiQR%2F%3Fmibextid%3DwwXIfr#">
                                        <Facebook className="h-5 w-5 text-blue-600" />
                                    </a>
                                    <a
                                        href="https://wa.link/rntibs
"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaWhatsapp className="h-5 w-5 text-green-600" />
                                    </a>
                                    <a href="">
                                        {' '}
                                        <Instagram className="h-5 w-5 text-pink-500" />
                                    </a>
                                    <a href="">
                                        <Youtube className="h-6 w-6 text-red-500" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
        </>
    );
}
