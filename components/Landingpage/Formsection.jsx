'use client';

import { ShieldCheck, Handshake, CreditCard, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustedServiceProcessSection() {
    const features = [
        {
            icon: ShieldCheck,
            title: 'Premium Quality Products',
            desc: 'Manufactured using high-grade raw materials ensuring durability, hygiene standards, and long-term performance for hospitals, corporates, and institutions.',
        },
        {
            icon: Handshake,
            title: 'Transparent Dealings',
            desc: 'Clear communication at every stage — from quotation to dispatch — building long-term trusted partnerships with our clients.',
        },
        {
            icon: CreditCard,
            title: 'Flexible Payment Options',
            desc: 'Secure and convenient payment methods designed for bulk buyers, distributors, and institutional customers.',
        },
        {
            icon: Truck,
            title: 'Pan India Timely Delivery',
            desc: 'Strong logistics network ensuring fast, safe, and scheduled delivery across India without operational delays.',
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-b from-green-50 via-white to-white py-6 md:py-12">
            {/* Background Decorative Shapes */}
            <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-green-200 opacity-30 blur-3xl" />
            <div className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-emerald-300 opacity-20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-10 max-w-3xl text-center"
                >
                    <span className="mb-6 inline-block rounded-full border border-green-200 bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
                        Our Commitment to Excellence
                    </span>

                    <h2 className="text-3xl leading-tight font-bold text-gray-900">Trusted Manufacturing & Service Process</h2>

                    <p className="mt-6 text-lg leading-relaxed text-gray-600">
                        At <span className="font-semibold text-green-700">Sangam Plastic Industries Pvt. Ltd</span>, we follow a structured process ensuring
                        superior product quality, transparent operations, and dependable delivery for every client.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
                    {features.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl md:p-8"
                            >
                                {/* Hover Background Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 opacity-0 transition duration-500 group-hover:opacity-100" />

                                <div className="relative z-10 transition duration-500 group-hover:text-white">
                                    {/* Icon */}
                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition duration-500 group-hover:bg-white/20">
                                        <Icon className="h-7 w-7 text-green-700 transition duration-500 group-hover:text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100">{item.desc}</p>
                                </div>

                                {/* Decorative Corner Glow */}
                                <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-white opacity-10 blur-2xl" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
