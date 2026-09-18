import Image from 'next/image';

import { FaWhatsapp, FaPhoneAlt, FaDownload } from 'react-icons/fa';
export default function ProductPage() {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-16">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 h-96 w-96 bg-sky-200/30 blur-[120px]" />
                    <div className="absolute right-0 bottom-0 h-96 w-96 bg-cyan-200/30 blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1800] px-14">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Product Image */}
                        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,.08)]">
                            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white">
                                <Image
                                    src="/hero1.png"
                                    alt="Chicago Pneumatic Compressor"
                                    width={800}
                                    height={800}
                                    className="h-auto w-full object-contain transition-all duration-700 hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Product Content */}
                        <div>
                            <span className="inline-flex rounded-full bg-sky-100 px-5 py-2 font-semibold text-sky-700">Chicago Pneumatic</span>

                            <h2 className="mt-5 text-5xl leading-tight font-black text-slate-900">CFM: 81 - 187, BAR: 7 - 12, PSI: 100 – 175</h2>

                            <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                High-performance industrial air compressor engineered for continuous-duty operation, energy efficiency and reliable compressed
                                air delivery.
                            </p>

                            {/* Badges */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">✓ Energy Efficient</span>

                                <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700">✓ Industrial Grade</span>

                                <span className="rounded-full bg-orange-100 px-4 py-2 font-medium text-orange-700">✓ Low Maintenance</span>
                            </div>

                            {/* CTA */}
                            <div className="mt-10 flex flex-wrap gap-4">
                                {/* WhatsApp */}
                                <button className="group flex h-16 items-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 font-semibold text-white shadow-[0_10px_30px_rgba(34,197,94,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(34,197,94,.45)]">
                                    <FaWhatsapp size={24} className="transition group-hover:scale-110" />
                                    <span>WhatsApp Now</span>
                                </button>

                                {/* Call */}
                                <button className="group flex h-16 items-center gap-3 rounded-2xl border border-sky-200 bg-white px-8 font-semibold text-slate-800 shadow-[0_10px_30px_rgba(0,0,0,.06)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-500 hover:text-sky-600 hover:shadow-[0_20px_40px_rgba(14,165,233,.15)]">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100">
                                        <FaPhoneAlt size={14} />
                                    </div>

                                    <span>Call Now</span>
                                </button>

                                {/* Brochure */}
                                <button className="group flex h-16 items-center gap-3 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 px-8 font-semibold text-white shadow-[0_10px_30px_rgba(15,23,42,.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,.35)]">
                                    <FaDownload size={18} className="transition group-hover:-translate-y-1" />

                                    <span>Download Brochure</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-15">
                <div className="mx-auto w-full px-10">
                    <div className="grid items-start gap-8 lg:grid-cols-12">
                        {/* Specifications */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-24 overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
                                <div className="bg-gradient-to-r from-sky-500 to-blue-400 px-8 py-3">
                                    <h2 className="text-2xl font-bold text-white">Specifications</h2>
                                </div>

                                {[
                                    ['CFM', '81 - 187'],
                                    ['Pressure', '7 - 12 Bar'],
                                    ['PSI', '100 - 175'],
                                    ['Cooling Type', 'Air Cooled'],
                                    ['Application', 'Industrial'],
                                    ['PSI', '100 - 175'],
                                    ['Cooling Type', 'Air Cooled'],
                                    ['Application', 'Industrial'],
                                    ['PSI', '100 - 175'],
                                    ['Cooling Type', 'Air Cooled'],
                                    ['Application', 'Industrial'],
                                ].map((item, index) => (
                                    <div key={index} className="flex justify-between gap-4 border-b px-8 py-6 transition hover:bg-sky-50">
                                        <span className="font-semibold text-slate-900">{item[0]}</span>

                                        <span className="text-right text-slate-600">{item[1]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className="lg:col-span-8">
                            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)]">
                                <div className="bg-gradient-to-r from-sky-500 to-blue-300 px-8 py-3">
                                    <h2 className="text-3xl font-bold text-white md:text-4xl">Product Description</h2>
                                </div>

                                <div className="p-8 md:p-10">
                                    <h3 className="mb-6 text-4xl font-black text-slate-900">Chicago Pneumatic Screw Air Compressor</h3>

                                    <p className="text-lg leading-relaxed text-slate-600">
                                        Chicago Pneumatic Screw Air Compressors are engineered to provide dependable, energy-efficient, and continuous
                                        compressed air solutions for a wide range of industrial applications. Designed using advanced rotary screw technology,
                                        these compressors deliver consistent airflow, reduced operating costs, and long-term reliability even under demanding
                                        working conditions.
                                    </p>

                                    <p className="mt-6 text-lg leading-relaxed text-slate-600">
                                        Widely used across manufacturing plants, engineering workshops, automotive facilities, packaging units, pharmaceutical
                                        industries, textile mills, and fabrication industries, Chicago Pneumatic compressors help businesses improve
                                        productivity while maintaining optimum energy efficiency.
                                    </p>

                                    {/* Features */}
                                    <div className="mt-10">
                                        <h4 className="mb-6 text-3xl font-bold text-slate-900">Key Features</h4>

                                        <div className="grid gap-5 md:grid-cols-2">
                                            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                                                <h5 className="mb-2 text-lg font-bold text-slate-900">⚡ Energy Efficient Operation</h5>
                                                <p className="text-slate-600">Optimized design helps reduce power consumption and operating expenses.</p>
                                            </div>

                                            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                                                <h5 className="mb-2 text-lg font-bold text-slate-900">🔄 Continuous Air Supply</h5>
                                                <p className="text-slate-600">Delivers stable compressed air for uninterrupted production.</p>
                                            </div>

                                            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                                                <h5 className="mb-2 text-lg font-bold text-slate-900">🛠 Low Maintenance</h5>
                                                <p className="text-slate-600">Premium components ensure reliability and reduced servicing requirements.</p>
                                            </div>

                                            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-5">
                                                <h5 className="mb-2 text-lg font-bold text-slate-900">🏭 Industrial Grade Construction</h5>
                                                <p className="text-slate-600">Built to perform efficiently in demanding industrial environments.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Applications */}
                                    <div className="mt-12">
                                        <h4 className="mb-5 text-3xl font-bold text-slate-900">Applications</h4>

                                        <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
                                            <li className="flex items-center gap-3 text-slate-700">
                                                <span className="text-green-500">✓</span>
                                                Manufacturing Industry
                                            </li>

                                            <li className="flex items-center gap-3 text-slate-700">
                                                <span className="text-green-500">✓</span>
                                                Automotive Industry
                                            </li>

                                            <li className="flex items-center gap-3 text-slate-700">
                                                <span className="text-green-500">✓</span>
                                                Textile Industry
                                            </li>

                                            <li className="flex items-center gap-3 text-slate-700">
                                                <span className="text-green-500">✓</span>
                                                Packaging Industry
                                            </li>

                                            <li className="flex items-center gap-3 text-slate-700">
                                                <span className="text-green-500">✓</span>
                                                Chemical Industry
                                            </li>

                                            <li className="flex items-center gap-3 text-slate-700">
                                                <span className="text-green-500">✓</span>
                                                Engineering & Fabrication Units
                                            </li>
                                        </ul>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white">
                                        <h4 className="mb-3 text-2xl font-bold">Looking for the Right Compressor Solution?</h4>

                                        <p className="leading-relaxed text-white/90">
                                            Contact our experts today for product recommendations, technical guidance, pricing information, and customized
                                            compressed air solutions tailored to your industrial requirements.
                                        </p>

                                        <button className="mt-5 h-16 animate-pulse rounded-2xl bg-black px-10 text-lg font-semibold text-white shadow-lg transition hover:scale-105">
                                            Get Best Price
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto w-full px-15">
                    <div className="mb-14 text-center">
                        <h2 className="text-5xl font-black text-slate-900">Why Choose This Compressor</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {[
                            {
                                icon: '⚡',
                                title: 'Energy Efficient',
                                desc: 'Reduced power consumption.',
                            },
                            {
                                icon: '🔧',
                                title: 'Low Maintenance',
                                desc: 'Long service intervals.',
                            },
                            {
                                icon: '🏭',
                                title: 'Industrial Grade',
                                desc: 'Built for harsh environments.',
                            },
                            {
                                icon: '📈',
                                title: 'Maximum Output',
                                desc: 'Consistent compressed air flow.',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="mb-5 text-5xl">{item.icon}</div>

                                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>

                                <p className="mt-3 text-slate-800">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
