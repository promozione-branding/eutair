'use client';
import Enquiry from '@/components/Enquiry';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import details from '@/lib/Data';
import { FaWhatsapp, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
export default function ProductPageClientC() {
    const params = useParams();

    const [isOpen, setOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.phone) {
            return toast.error('Please fill required fields');
        }

        try {
            setLoading(true);

            const formData = {
                platform: 'Chicago Pneumatic Compressors Landing Page',
                supplierToken: '6a9fe072d936bdc2bb1d990f',

                platformEmail: 'rishi.raj@eutair.com',
                name: form.name,
                phone: form.phone,
                email: form.email || 'N/A',
                place: 'N/A',
                product: 'Chicago Pneumatic Compressors',
                message: form.requirement,
            };

            const { data } = await axios.post('https://brandbnalo.com/api/form/add', formData);

            if (data?.success) {
                toast.success('Request Submitted Successfully');

                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    requirement: '',
                });
            } else {
                toast.error('Failed to submit request');
            }
        } catch (error) {
            console.log(error);
            toast.error('Server Error');
        } finally {
            setLoading(false);
        }
    };

    const allProducts = Object.values(details[0].products).flat();

    const product = allProducts.find((item) => item.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            {/* HERO SECTION */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-9">
                <div className="relative z-10 mx-auto max-w-[1800px] px-5 md:px-14">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
                        <div className="rounded-[32px] border border-slate-200 bg-white p-2 shadow-[0_25px_80px_rgba(0,0,0,.08)]">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={800}
                                    height={800}
                                    className="h-auto w-full object-contain transition-all duration-700 hover:scale-110"
                                />
                            </div>
                        </div>

                        <div>
                            <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">Chicago Pneumatic</span>

                            <h2 className="mt-5 text-[26px] leading-tight font-black text-slate-900 xl:text-4xl">{product.title}</h2>

                            <div className="mt-4">
                                <div className="mt-4">
                                    <ul className="space-y-2">
                                        {product.shortDescription?.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-[17px] leading-6 text-slate-700 xl:leading-relaxed">
                                                <span className="mt-1 text-green-500">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* BADGES */}

                            <div className="mt-6 flex flex-wrap gap-3">
                                {product.badges?.map((badge, index) => (
                                    <span key={index} className="rounded-full bg-green-100 px-2 py-1 font-medium text-green-700 xl:px-4 xl:py-2">
                                        ✓ {badge}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}

                            <div className="mt-10 flex flex-wrap gap-2 xl:gap-4">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="group flex h-16 items-center gap-2 rounded-2xl border border-black bg-white px-3 font-semibold text-slate-800 xl:px-8"
                                >
                                    <span>Request a Qoute</span>
                                </button>
                                <a
                                    href="https://wa.link/o8l7fy"
                                    className="group flex h-16 items-center gap-1 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-3 font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,.35)] transition-all duration-300 hover:-translate-y-1 xl:px-8"
                                >
                                    <FaWhatsapp size={24} />
                                    <span>WhatsApp Now</span>
                                </a>

                                {product?.pdf && (
                                    <a
                                        download="Brochure.pdf"
                                        href={product.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Download Brochure"
                                        className="group hidden h-16 items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-3 font-semibold text-white md:flex xl:px-8"
                                    >
                                        <FaDownload size={18} />
                                        <span>Download Brochure</span>
                                    </a>
                                )}
                                <div className="ddflex mx-auto mt-2 flex w-full items-center justify-center md:hidden">
                                    {product?.pdf && (
                                        <a
                                            download="Brochure.pdf"
                                            href={product.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Download Brochure"
                                            className="group flex h-16 items-center gap-3 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-8 font-semibold text-white"
                                        >
                                            <FaDownload size={18} />
                                            <span>Download Brochure</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPECIFICATIONS + DESCRIPTION */}

            <section className="bg-slate-50 py-5 lg:py-7 xl:py-15">
                <div className="mx-auto w-full px-5 md:px-10">
                    <div className="grid items-start gap-8 lg:grid-cols-12">
                        {/* SPECIFICATIONS */}

                        <div className="lg:col-span-4">
                            <div className="sticky top-24 overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
                                <div className="bg-gradient-to-r from-sky-500 to-blue-400 px-8 py-3">
                                    <h2 className="text-2xl font-bold text-white">Specifications</h2>
                                </div>

                                {product.specifications?.map((spec, index) => (
                                    <div key={index} className="flex justify-between gap-4 border-b px-8 py-3 transition hover:bg-sky-50 xl:py-6">
                                        <span className="font-semibold text-slate-900">{spec.label}</span>

                                        <span className="text-right text-slate-600">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
                                <div className="bg-gradient-to-r from-sky-500 to-blue-300 px-8 py-3">
                                    <h2 className="text-2xl font-bold text-white md:text-4xl">Product Description</h2>
                                </div>

                                <div className="p-5 lg:p-6 xl:p-10">
                                    <h3 className="mb-6 text-3xl font-black text-slate-900 md:text-4xl">Why Choose Us</h3>

                                    <ul className="space-y-4">
                                        {product.description?.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-lg leading-6 text-slate-700 xl:leading-relaxed">
                                                <span className="mt-1 text-sky-500">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* FEATURES */}

                                    <div className="mt-10">
                                        <h4 className="mb-6 text-3xl font-bold text-slate-900">Key Features</h4>

                                        <div className="grid gap-5 md:grid-cols-2">
                                            {product.features?.map((feature, index) => (
                                                <div key={index} className="rounded-2xl border border-sky-100 bg-sky-50 p-3 md:p-5">
                                                    <h5 className="mb-2 text-lg font-bold text-slate-900">
                                                        {feature.icon} {feature.title}
                                                    </h5>

                                                    <p className="text-slate-600">{feature.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* APPLICATIONS */}

                                    <div className="mt-12">
                                        <h4 className="mb-5 text-3xl font-bold text-slate-900">Applications</h4>

                                        <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                                            {product.applications?.map((app, index) => (
                                                <li key={index} className="flex items-center gap-3 text-slate-700">
                                                    <span className="text-green-500">✓</span>
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA */}

                                    <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white">
                                        <h4 className="mb-3 text-2xl font-bold">{product.cta?.title}</h4>

                                        <p className="leading-relaxed text-white/90">{product.cta?.description}</p>

                                        <a href="tel:+919717159766">
                                            <button className="mt-5 h-16 animate-pulse rounded-2xl bg-black px-10 text-lg font-semibold text-white shadow-lg transition hover:scale-105">
                                                Get Best Price
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* form */}

            <section className="relative overflow-hidden py-4">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-sky-50" />

                <div className="absolute top-0 left-0 h-96 w-96 bg-sky-200/20 blur-[120px]" />
                <div className="absolute right-0 bottom-0 h-96 w-96 bg-cyan-200/20 blur-[120px]" />

                <div className="relative z-10 mx-auto w-full px-4 md:px-9">
                    <div className="rounded-[40px] border border-white bg-white/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,.08)] backdrop-blur-xl">
                        {/* Badge */}
                        <div className="flex justify-center">
                            <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">Get Expert Assistance</span>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-6 text-center text-3xl leading-tight font-black text-slate-900 md:text-5xl">
                            Power Your Operations with
                            <span className="block text-sky-600">Chicago Pneumatic Compressors</span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-6 max-w-5xl text-center text-lg leading-6 text-slate-600 md:text-xl md:leading-relaxed">
                            Looking for energy-efficient and high-performance compressed air solutions? We offer a complete range of Chicago Pneumatic Screw Air
                            Compressors engineered for reliability, productivity, and long-term industrial performance.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-9">
                            <div className="grid gap-5 xl:grid-cols-5">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="h-13 rounded-2xl border border-slate-500 bg-slate-50 px-6 text-slate-800 transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="h-13 rounded-2xl border border-slate-500 bg-slate-50 px-3 text-slate-800 transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16 md:px-6"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    maxLength={10}
                                    minLength={10}
                                    className="h-13 rounded-2xl border border-slate-500 bg-slate-50 px-3 text-slate-800 transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16 md:px-6"
                                />

                                <input
                                    type="text"
                                    name="requirement"
                                    value={form.requirement}
                                    onChange={handleChange}
                                    placeholder="Your Requirement"
                                    className="h-13 rounded-2xl border border-slate-500 bg-slate-50 px-3 text-slate-800 transition-all outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16 md:px-6"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="h-16 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-sky-300/40 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {loading ? 'Submitting...' : 'Request Quote →'}
                                </button>
                            </div>

                            {/* Trust Points */}
                            <div className="mt-8 flex flex-wrap justify-center gap-6">
                                <div className="flex items-center gap-2 text-slate-600">
                                    <span className="text-green-500">✓</span>
                                    Fast Response
                                </div>

                                <div className="flex items-center gap-2 text-slate-600">
                                    <span className="text-green-500">✓</span>
                                    Technical Consultation
                                </div>

                                <div className="flex items-center gap-2 text-slate-600">
                                    <span className="text-green-500">✓</span>
                                    Best Pricing
                                </div>

                                <div className="flex items-center gap-2 text-slate-600">
                                    <span className="text-green-500">✓</span>
                                    Genuine Products
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE */}

            <section className="bg-white py-12">
                <div className="mx-auto w-full px-5 md:px-15">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl font-black text-slate-900 md:text-4xl">Why Choose This Compressor</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {product.whyChoose?.slice(0, 4).map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-[30px] border border-slate-200 bg-white p-4 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl md:p-8"
                            >
                                <div className="mb-5 text-5xl">{item.icon}</div>

                                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>

                                <p className="mt-3 text-slate-800">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}
