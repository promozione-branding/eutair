'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import { FaDownload, FaWhatsapp } from 'react-icons/fa';

import markData from '@/lib/Data2';
import Enquiry from '@/components/Enquiry';

export default function ProductPage() {
    const params = useParams();

    const [isOpen, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: '',
    });

    const product = markData.products.find((item) => item.slug === params?.slug);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((previousForm) => ({
            ...previousForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name.trim() || !form.phone.trim()) {
            toast.error('Please fill required fields');
            return;
        }

        try {
            setLoading(true);

            const formData = {
                platform: 'VAYU Compressors Product Page',
                supplierToken: '6a9fe072d936bdc2bb1d990f',
                platformEmail: 'rishi.raj@eutair.com',
                name: form.name,
                phone: form.phone,
                email: form.email || 'N/A',
                place: 'N/A',
                product: product?.title || 'VAYU Compressor',
                message: form.requirement || 'Product enquiry',
            };

            const { data } = await axios.post('https://brandbnalo.com/api/form/add', formData);

            if (data?.success) {
                toast.success('Request submitted successfully');

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
            console.error(error);
            toast.error('Server error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!product) {
        return (
            <main className="flex min-h-[60vh] items-center justify-center px-5">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900">Product Not Found</h1>

                    <p className="mt-3 text-slate-600">The requested compressor could not be found.</p>
                </div>
            </main>
        );
    }

    return (
        <>
            {/* =========================================================
                HERO SECTION
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-8 md:py-16">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-sky-200/30 blur-[120px]" />
                    <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1800px] px-5 md:px-14">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                        {/* PRODUCT IMAGE */}
                        <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,.08)] md:p-8">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={900}
                                    height={900}
                                    priority
                                    className="h-[400px] w-full object-contain transition duration-700 hover:scale-105 md:h-[520px]"
                                />
                            </div>
                        </div>

                        {/* PRODUCT CONTENT */}
                        <div>
                            <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">VAYU SL Series</span>

                            <h1 className="mt-5 text-[28px] leading-tight font-black text-slate-900 md:text-4xl xl:text-5xl">{product.title}</h1>

                            {/* SHORT DESCRIPTION */}
                            <div className="mt-6 space-y-4">
                                {product.shortDescription?.map((item, index) => (
                                    <p key={index} className="text-lg leading-8 text-slate-600">
                                        {item}
                                    </p>
                                ))}
                            </div>

                            {/* BADGES */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {product.badges?.map((badge, index) => (
                                    <span key={index} className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
                                        ✓ {badge}
                                    </span>
                                ))}
                            </div>

                            {/* CTA BUTTONS */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    onClick={() => setOpen(true)}
                                    className="flex h-16 items-center gap-2 rounded-2xl border border-sky-200 bg-white px-6 font-semibold text-slate-800 transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    Request a Quote
                                </button>

                                <a
                                    href="https://wa.link/o8l7fy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-16 items-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,.35)] transition hover:-translate-y-1"
                                >
                                    <FaWhatsapp size={24} />
                                    WhatsApp Now
                                </a>

                                {product.pdf && (
                                    <a
                                        download="VAYU-SL-Series-Brochure.pdf"
                                        href={product.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-16 items-center gap-2 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-6 font-semibold text-white transition hover:-translate-y-1"
                                    >
                                        <FaDownload size={18} />
                                        Download Brochure
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                QUICK SPECIFICATIONS + DESCRIPTION
            ========================================================= */}

            <section className="bg-slate-50 py-8 lg:py-14">
                <div className="mx-auto w-full px-5 md:px-10">
                    <div className="grid items-start gap-8 lg:grid-cols-12">
                        {/* SPECIFICATIONS */}
                        <div className="lg:col-span-4">
                            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)] lg:sticky lg:top-24">
                                <div className="bg-gradient-to-r from-sky-500 to-blue-500 px-8 py-5">
                                    <h2 className="text-2xl font-bold text-white">Specifications</h2>
                                </div>

                                {product.specifications?.map((spec, index) => (
                                    <div key={index} className="flex justify-between gap-4 border-b border-slate-100 px-8 py-4 transition hover:bg-sky-50">
                                        <span className="font-semibold text-slate-900">{spec.label}</span>

                                        <span className="text-right text-slate-600">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="lg:col-span-8">
                            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
                                <div className="bg-gradient-to-r from-sky-500 to-blue-500 px-8 py-5">
                                    <h2 className="text-2xl font-bold text-white md:text-4xl">Product Description</h2>
                                </div>

                                <div className="p-5 lg:p-8 xl:p-10">
                                    <h3 className="mb-6 text-3xl font-black text-slate-900 md:text-4xl">{product.title}</h3>

                                    {product.description?.map((paragraph, index) => (
                                        <p key={index} className={`text-lg leading-8 text-slate-600 ${index !== 0 ? 'mt-6' : ''}`}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                TECHNICAL SPECIFICATION TABLE
            ========================================================= */}

            {product.productTable && (
                <section className="bg-white py-10 lg:py-16">
                    <div className="mx-auto w-full px-5 md:px-10">
                        <div className="mb-8">
                            <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">VAYU SL Series</span>

                            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">{product.productTable.title}</h2>

                            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                                Explore the available VAYU SL Series models, power ratings, pressure ranges, air delivery, noise levels, weight, outlet size,
                                and dimensions.
                            </p>
                        </div>

                        {/* TABLE */}
                        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[1200px] border-collapse text-center">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-sky-600 to-blue-600 text-center text-white">
                                            {product.productTable.columns.map((column) => (
                                                <th key={column.key} className="px-5 py-5 text-center text-sm font-bold whitespace-nowrap">
                                                    {column.label}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {product.productTable.rows.map((row, index) => (
                                            <tr
                                                key={row.model}
                                                className={`text-center transition hover:bg-sky-50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                                            >
                                                {product.productTable.columns.map((column) => (
                                                    <td
                                                        key={column.key}
                                                        className={`border-t border-slate-200 px-5 py-4 text-center text-sm ${
                                                            column.key === 'model' ? 'font-bold text-slate-900' : 'text-slate-600'
                                                        }`}
                                                    >
                                                        {row[column.key]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* TABLE NOTE */}
                        <div className="mt-5 rounded-2xl border border-sky-100 bg-sky-50 p-5">
                            <p className="text-sm leading-7 text-slate-600">
                                <strong className="text-slate-900">VAYU SL Series:</strong> Available in multiple power and pressure configurations to meet
                                different industrial compressed air requirements.
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* =========================================================
                KEY FEATURES
            ========================================================= */}

            <section className="bg-slate-50 py-10 lg:py-16">
                <div className="mx-auto w-full px-5 md:px-10">
                    <div className="mb-10">
                        <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">Product Features</span>

                        <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">Key Features of VAYU Screw Air Compressors</h2>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {product.features?.map((feature, index) => (
                            <div
                                key={index}
                                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="mb-5 text-4xl">{feature.icon}</div>

                                <h3 className="mb-3 text-xl font-bold text-slate-900">{feature.title}</h3>

                                <p className="leading-7 text-slate-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                APPLICATIONS
            ========================================================= */}

            <section className="bg-white py-10 lg:py-16">
                <div className="mx-auto w-full px-5 md:px-10">
                    <div className="grid items-start gap-10">
                        <div className="flex flex-col items-center justify-center">
                            <span className="inline-flex rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">Applications</span>

                            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">Applications of VAYU Air Compressors</h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                VAYU SL Series compressors are suitable for different industrial environments where dependable compressed air is required.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {product.applications?.map((application, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-200 hover:bg-sky-50"
                                >
                                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
                                        ✓
                                    </span>

                                    <span className="leading-7 text-slate-700">{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="bg-slate-50 py-10 lg:py-16">
                <div className="mx-auto w-full px-5 md:px-10">
                    <div className="rounded-[32px] bg-gradient-to-r from-sky-500 to-blue-600 p-7 text-center text-white md:p-10">
                        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">VAYU SL Series</span>

                        <h2 className="mt-5 text-3xl font-black md:text-5xl">{product.cta?.title}</h2>

                        <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-white/90">{product.cta?.description}</p>

                        <div className="mt-7 flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => setOpen(true)}
                                className="inline-flex h-14 items-center justify-center rounded-2xl bg-white px-8 font-bold text-slate-900 shadow-xl transition hover:scale-105"
                            >
                                Request a Quote
                            </button>

                            <a
                                href="tel:+919717159766"
                                className="inline-flex h-14 items-center justify-center rounded-2xl bg-black px-8 font-bold text-white shadow-xl transition hover:scale-105"
                            >
                                Get Best Price
                            </a>

                            <a
                                href="https://wa.link/o8l7fy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-green-500 px-8 font-bold text-white shadow-xl transition hover:scale-105"
                            >
                                <FaWhatsapp size={20} />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                ENQUIRY FORM
            ========================================================= */}

            {/* =========================================================
                WHY CHOOSE VAYU
            ========================================================= */}

            <section className="bg-white py-10 lg:py-20">
                <div className="mx-auto w-full px-5 md:px-10">
                    <div className="mb-10 text-center md:mb-14">
                        <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">Why VAYU SL Series?</span>

                        <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-5xl">Why Choose VAYU SL Series?</h2>

                        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                            Dependable engineering, practical ownership, stable air delivery, and multiple configurations for demanding industrial environments.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {product.whyChoose?.map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl md:p-8"
                            >
                                <div className="mb-5 text-5xl">{item.icon}</div>

                                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>

                                <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 py-10">
                <div className="relative z-10 mx-auto w-full px-5 md:px-9">
                    <div className="rounded-[40px] border border-white bg-white/90 p-5 text-center shadow-[0_30px_80px_rgba(0,0,0,.08)] backdrop-blur-xl md:p-8">
                        <div className="flex justify-center">
                            <span className="rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">Get Expert Assistance</span>
                        </div>

                        <h2 className="mt-6 text-center text-2xl leading-tight font-black text-slate-900 md:text-5xl">
                            Get the Right
                            <span className="block text-sky-600">VAYU SL Series Compressor</span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-5xl text-center text-lg leading-8 text-slate-600 md:text-xl">
                            Looking for a dependable fixed-speed screw air compressor? Contact our team for technical guidance, model details, applications, and
                            pricing.
                        </p>

                        <form onSubmit={handleSubmit} className="mx-auto mt-9 w-full">
                            <div className="mx-auto grid max-w-7xl gap-5 xl:grid-cols-5">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    required
                                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-6 text-center text-slate-800 transition outline-none placeholder:text-center focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-6 text-center text-slate-800 transition outline-none placeholder:text-center focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                    maxLength={10}
                                    minLength={10}
                                    pattern="[0-9]{10}"
                                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-6 text-center text-slate-800 transition outline-none placeholder:text-center focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16"
                                />

                                <input
                                    type="text"
                                    name="requirement"
                                    value={form.requirement}
                                    onChange={handleChange}
                                    placeholder="Your Requirement"
                                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-6 text-center text-slate-800 transition outline-none placeholder:text-center focus:border-sky-500 focus:ring-4 focus:ring-sky-100 md:h-16"
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mx-auto h-14 w-full rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 text-center text-lg font-bold text-white shadow-lg transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70 md:h-16"
                                >
                                    {loading ? 'Submitting...' : 'Request Quote →'}
                                </button>
                            </div>

                            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
                                {['Fast Response', 'Technical Consultation', 'Best Pricing', 'Genuine Products'].map((item) => (
                                    <div key={item} className="flex items-center justify-center gap-2 text-center text-slate-600">
                                        <span className="text-green-500">✓</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* ENQUIRY MODAL */}

            <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />
        </>
    );
}
