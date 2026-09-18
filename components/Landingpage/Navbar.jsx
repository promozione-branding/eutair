import Link from 'next/link';
import { Phone, Mail, Building2, Linkedin, Facebook, Instagram, Youtube, MapPin } from 'lucide-react';
import Image from 'next/image';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import Enquiry from '@/components/Enquiry';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const [productMenu, setProductMenu] = useState(false);
    const [servicesMenu, setServicesMenu] = useState(false);

    const [desktopProductOpen, setDesktopProductOpen] = useState(false);
    const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
    const services = [
        {
            title: 'AMC Service',
            href: '/amc-service',
        },
        {
            title: 'Air Audit Services',
            href: '/air-audit-service',
        },
        {
            title: 'Engineering Consultancy',
            href: '/engineering-consultancy',
        },
        {
            title: 'Wastewater Engineering',
            href: '/wastewater-engineering',
        },
        {
            title: 'Turnkey Project',
            href: '/turnkey-project',
        },
    ];

    const [open, setOpen] = useState(false);

    const products = [
        {
            title: 'Mark Compressors',
            href: '/mark-compressor',
        },
        {
            title: 'Chicago Pneumatic',
            href: '/chicago-pneumatic',
        },
        {
            title: 'Air Treatment',
            href: '/air-treatment-service',
        },
        {
            title: 'Spares and Consumables',
            href: '/spares-and-consumables',
        },
        {
            title: 'Piping and Distribution Lines',
            href: '/piping-and-distribution-lines',
        },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/95 backdrop-blur-xl">
                {/* Top Info Bar */}

                <div className="hidden border-b border-slate-100 bg-slate-50/50 md:block">
                    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-20">
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
                                    <a href="tel:+919717159766" className="transition-colors hover:text-blue-600">
                                        Phone +91 9717159766
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
                                    href="https://www.linkedin.com/company/eutairequipments/"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>

                                <a
                                    href="https://www.facebook.com/eutairequipmentsllp?mibextid=wwXIfr&rdid=CXzIuIs5Eeyc0JDi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CSypmAiQR%2F%3Fmibextid%3DwwXIfr#"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-600 text-blue-600 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Facebook className="h-4 w-4" />
                                </a>

                                <a
                                    href="https://wa.link/o8l7fy
"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp
                                        size={10}
                                        className="flex h-8 w-8 items-center justify-center rounded-full border border-green-600 p-1 text-green-600 transition-all duration-300 hover:-translate-y-0.5"
                                    />
                                </a>

                                <a
                                    href="https://www.instagram.com/eutairequipments"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-pink-500 text-pink-500 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>

                                <a
                                    href="https://www.youtube.com/@eutairequipments1359"
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-red-500 text-red-500 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Youtube className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="mx-auto w-full px-5 md:px-25 lg:px-10 xl:px-14">
                    <div className="flex h-16 items-center justify-between sm:h-20 lg:h-19">
                        {/* Logo */}
                        <Link href="/" className="group">
                            <img
                                src="/logo.png"
                                alt="EutAir"
                                className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] lg:h-16"
                            />
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex items-center gap-12 lg:gap-5 xl:gap-15">
                                <li className="mr-3">
                                    <Link
                                        href="/about"
                                        className="text-[17px] font-medium text-slate-700 hover:text-blue-600 lg:text-[16px] xl:tracking-[0.12em]"
                                    >
                                        ABOUT US
                                    </Link>
                                </li>

                                {/* Products Dropdown */}
                                <li
                                    className="relative mr-3"
                                    onClick={() => setDesktopProductOpen(!desktopProductOpen)}
                                    onMouseEnter={() => {
                                        if (window.innerWidth >= 1024) setDesktopProductOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        if (window.innerWidth >= 1024) setDesktopProductOpen(false);
                                    }}
                                >
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 text-[17px] font-medium tracking-[0.12em] text-slate-700 transition-all hover:text-blue-600 lg:text-[16px]"
                                    >
                                        OUR PRODUCTS
                                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${desktopProductOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <div
                                        className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-6 transition-all duration-300 ${
                                            desktopProductOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
                                        }`}
                                    >
                                        <div className="w-[700px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                            <div className="grid grid-cols-2">
                                                {/* Left */}
                                                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white">
                                                    <h3 className="mb-4 text-2xl font-bold">Air Solutions</h3>

                                                    <p className="leading-relaxed text-white/90">
                                                        Explore our complete range of industrial air compressors, dryers, filtration systems and accessories
                                                        engineered for maximum efficiency.
                                                    </p>

                                                    <div className="mt-6 flex gap-5">
                                                        <div className="flex items-center justify-center rounded-full bg-white px-5 py-3">
                                                            <Image src="/mark-compressors-logo.png" alt="Mark Compressors" width={110} height={60} />
                                                        </div>

                                                        <div className="flex items-center justify-center rounded-full bg-white px-5 py-3">
                                                            <Image src="/chicago-pneumatic-logo.png" alt="Chicago Pneumatic" width={100} height={60} />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right */}
                                                <div className="p-8">
                                                    <div className="grid gap-2">
                                                        {products.map((product) => (
                                                            <Link
                                                                key={product.title}
                                                                href={product.href}
                                                                className="group flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:bg-blue-50 hover:text-blue-600"
                                                            >
                                                                <span>{product.title}</span>

                                                                <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="mr-3">
                                    <Link
                                        href="/our-blogs"
                                        className="text-[17px] font-medium tracking-[0.12em] text-slate-700 hover:text-blue-600 lg:text-[16px]"
                                    >
                                        BLOGS
                                    </Link>
                                </li>

                                <li
                                    onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                                    className="relative mr-3"
                                    onMouseEnter={() => {
                                        if (window.innerWidth >= 1024) {
                                            setDesktopServicesOpen(true);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (window.innerWidth >= 1024) {
                                            setDesktopServicesOpen(false);
                                        }
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setDesktopServicesOpen((prev) => !prev)}
                                        className="flex items-center gap-2 text-[17px] font-medium tracking-[0.12em] text-slate-700 transition-all hover:text-blue-600 lg:text-[16px]"
                                    >
                                        OUR SERVICES
                                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${desktopServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <div
                                        className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-6 transition-all duration-300 ${
                                            desktopServicesOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
                                        }`}
                                    >
                                        <div className="w-[650px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                                            <div className="grid grid-cols-2">
                                                {/* Left */}
                                                <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-8 text-white">
                                                    <h3 className="mb-4 text-2xl font-bold">Our Services</h3>

                                                    <p className="leading-relaxed text-white/90">
                                                        Professional compressed air system services, maintenance, audits and installation support for maximum
                                                        efficiency and reliability.
                                                    </p>
                                                </div>

                                                {/* Right */}
                                                <div className="p-8">
                                                    <div className="grid gap-2">
                                                        {services.map((service) => (
                                                            <Link
                                                                key={service.title}
                                                                href={service.href}
                                                                className="group flex items-center justify-between rounded-xl px-4 py-3 text-black transition-all hover:bg-cyan-50 hover:text-cyan-600"
                                                            >
                                                                <span>{service.title}</span>

                                                                <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <Link
                                        href="/contact"
                                        className="text-[17px] font-medium tracking-[0.12em] text-slate-700 hover:text-blue-600 lg:text-[16px]"
                                    >
                                        CONTACT US
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-3 lg:ml-2 lg:hidden xl:ml-0">
                            <button onClick={() => setOpen(true)} className="rounded-full bg-blue-600 px-4 py-2 text-base font-semibold text-white">
                                Get a Quote
                            </button>

                            <button onClick={() => setMobileMenu(!mobileMenu)} className="p-2">
                                {mobileMenu ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                            </button>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={() => setOpen(true)}
                            className="relative hidden overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] lg:block"
                        >
                            GET A QUOTE
                        </button>
                    </div>
                </div>

                {mobileMenu && (
                    <div className="border-t bg-white lg:hidden">
                        <div className="px-4 py-5">
                            <div className="flex flex-col gap-4">
                                <Link href="/about" onClick={() => setMobileMenu(false)} className="font-medium text-slate-700">
                                    ABOUT US
                                </Link>

                                {/* Products Accordion */}
                                <div>
                                    <button
                                        onClick={() => setProductMenu(!productMenu)}
                                        className="flex w-full items-center justify-between font-medium text-slate-700"
                                    >
                                        OUR PRODUCTS
                                        <ChevronDown className={`h-4 w-4 transition ${productMenu ? 'rotate-180' : ''}`} />
                                    </button>

                                    {productMenu && (
                                        <div className="mt-3 flex flex-col gap-3 border-l pl-4">
                                            {products.map((item) => (
                                                <Link key={item.title} href={item.href} onClick={() => setMobileMenu(false)} className="text-slate-600">
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href="/our-blogs" onClick={() => setMobileMenu(false)} className="font-medium text-slate-700">
                                    BLOGS
                                </Link>

                                <div>
                                    <button
                                        onClick={() => setServicesMenu(!servicesMenu)}
                                        className="flex w-full items-center justify-between font-medium text-slate-700"
                                    >
                                        SERVICES
                                        <ChevronDown className={`h-4 w-4 transition ${servicesMenu ? 'rotate-180' : ''}`} />
                                    </button>

                                    {servicesMenu && (
                                        <div className="mt-3 flex flex-col gap-3 border-l pl-4">
                                            {services.map((item) => (
                                                <Link key={item.title} href={item.href} onClick={() => setMobileMenu(false)} className="text-slate-600">
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link href="/contact" onClick={() => setMobileMenu(false)} className="font-medium text-slate-700">
                                    CONTACT US
                                </Link>

                                <button
                                    onClick={() => {
                                        setOpen(true);
                                        setMobileMenu(false);
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
                                        href="https://wa.me/919582911766
"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaWhatsapp className="h-5 w-5 text-green-600" />
                                    </a>
                                    <a href="https://www.instagram.com/eutairequipments">
                                        {' '}
                                        <Instagram className="h-5 w-5 text-pink-500" />
                                    </a>
                                    <a href="https://www.youtube.com/@eutairequipments1359">
                                        <Youtube className="h-6 w-6 text-red-500" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            <Enquiry isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}
