'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Wrench, ShieldCheck, Factory, ArrowRight } from 'lucide-react';
import Enquiry from '@/components/Enquiry';
export default function AMC() {
    const [isOpen, setOpen] = useState(false);

    const benefits = [
        'Planned maintenance for improved operational uptime',
        'Reduced risk of unexpected breakdowns and production interruptions',
        'Improved equipment efficiency and reliability',
        'Better lifecycle management of compressed air assets',
        'Predictable maintenance planning and support',
        'Lower long-term maintenance and repair costs',
    ];

    const industries = [
        'Manufacturing Plants',
        'Automotive & Auto Component Industries',
        'Engineering & Fabrication Facilities',
        'Food & Beverage Processing Units',
        'Pharmaceutical Manufacturing',
        'Textile & Packaging Industries',
        'Chemical & Process Industries',
        'Utility and Compressor Rooms',
        'Production Support Infrastructure',
    ];

    const applications = [
        'Production air systems',
        'Plant utility air networks',
        'Critical process air applications',
        'Multi-compressor installations',
        'Compressed air treatment systems',
        'Industrial maintenance programs',
    ];

    const features = [
        {
            title: 'Preventive Maintenance Programs',
            description: 'Scheduled inspections and servicing activities designed to identify potential issues before they impact operations.',
        },
        {
            title: 'Periodic System Health Checks',
            description: 'Regular evaluation of compressors, dryers, filters, piping systems, and related equipment to maintain reliable performance.',
        },
        {
            title: 'Performance Monitoring Support',
            description: 'Assessment of operating conditions to help ensure efficient compressed air generation and distribution.',
        },
        {
            title: 'Maintenance Planning',
            description: 'Service schedules aligned with equipment operating hours, production requirements, and plant conditions.',
        },
        {
            title: 'Priority Service Readiness',
            description: 'Improved response preparedness for critical maintenance requirements and operational support.',
        },
        {
            title: 'Spare Parts Recommendations',
            description: 'Guidance on consumables and replacement components to support uninterrupted system operation.',
        },
    ];

    const faqs = [
        {
            question: '1. What is included in AMC Services?',
            answer: 'AMC Services typically include scheduled preventive maintenance visits, equipment inspections, performance assessments, maintenance planning, and service support aimed at improving reliability and operational continuity.',
        },
        {
            question: '2. Who should consider AMC Services?',
            answer: 'Any industrial facility that depends on compressed air for production, automation, utilities, or critical processes can benefit from AMC Services to reduce downtime and maintain efficient operations.',
        },
        {
            question: '3. Can AMC Services be customized?',
            answer: 'Yes. Maintenance programs can be tailored according to equipment type, operating conditions, plant criticality, operating hours, and specific maintenance requirements.',
        },
        {
            question: '4. How do AMC Services improve equipment life?',
            answer: 'Regular inspections, preventive maintenance, timely servicing, and condition monitoring help reduce wear, identify issues early, and maintain equipment in optimal working condition.',
        },
        {
            question: '5. Why is preventive maintenance important for compressed air systems?',
            answer: 'Preventive maintenance helps identify potential issues before they lead to equipment failure, reducing unexpected downtime, improving system efficiency, and supporting consistent plant operations.',
        },
    ];

    return (
        <div className="bg-white">
            {/* Hero */}
            <section
                style={{ backgroundImage: 'url(/bghero1.webp)' }}
                className="relative overflow-hidden bg-cover bg-center text-white lg:h-[70vh] xl:h-[80vh]"
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative mx-auto max-w-7xl px-4 py-8 md:py-20">
                    <div className="max-w-4xl">
                        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">AMC Services</span>

                        <h1 className="mt-6 text-2xl leading-tight font-bold md:text-4xl">
                            Structured Maintenance Support for Reliable Compressed Air Operations
                        </h1>

                        <p className="mt-6 text-white md:text-lg md:leading-relaxed">
                            Maintain peak system performance, reduce unexpected downtime, and improve equipment reliability with structured Annual Maintenance
                            Contract (AMC) Services. Designed for industrial compressed air systems, AMC programs help ensure continuous operation through
                            planned inspections, preventive maintenance, and responsive service support.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button
                                onClick={() => setOpen(true)}
                                className="rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
                            >
                                Request Quote
                            </button>

                            <Link
                                href="tel:+919717159766"
                                className="rounded-xl border border-white px-7 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
                            >
                                Request AMC Discussion
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why AMC */}
            <section className="py-5 md:py-10">
                <div className="mx-auto flex max-w-7xl items-center justify-center px-4">
                    <div className="max-w-7xl text-center">
                        <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-4xl">Why AMC Services Matter</h2>

                        <p className="mb-6 text-slate-900 md:text-xl md:leading-relaxed">
                            Compressed air systems play a critical role in daily production and plant operations. Unplanned equipment failures, performance
                            losses, and reactive maintenance can result in costly downtime and reduced productivity.
                        </p>

                        <p className="text-slate-900 md:text-xl md:leading-relaxed">
                            AMC Services provides a proactive maintenance framework that helps improve system reliability, optimize performance, and extend
                            equipment life through scheduled service activities and preventive care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-slate-50 py-5 lg:py-8 xl:py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-6 text-center text-2xl font-bold text-slate-900 md:mb-10 md:text-4xl">Benefits</h2>

                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                        {benefits.map((item, i) => (
                            <div key={i} className="rounded-2xl border bg-white p-3 shadow-sm lg:p-5 xl:p-6">
                                <CheckCircle className="mb-4 h-8 w-8 text-green-600 lg:block" />
                                <p className="text-sm text-slate-700 md:text-base">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-5 lg:py-7 xl:py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-7 text-center text-3xl font-bold text-slate-900 md:mb-14 md:text-4xl">Key Features</h2>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="rounded-3xl border bg-white p-4 shadow-sm transition hover:shadow-lg lg:p-6 xl:p-8">
                                <Wrench className="mb-5 h-10 w-10 text-[#0B4A8B]" />
                                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                                <p className="text-slate-600 xl:leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="bg-slate-50 py-5 lg:py-7 xl:py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-6 text-center text-3xl font-bold text-slate-900 md:text-4xl">Industries & Use Cases</h2>

                    <p className="mx-auto mb-5 max-w-4xl text-center text-slate-600 md:mb-10">
                        AMC Services support reliable compressed air operations across a wide range of industrial environments, including:
                    </p>

                    <div className="grid gap-3 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
                        {industries.map((industry, i) => (
                            <div key={i} className="flex items-center gap-3 rounded-2xl border bg-white p-3 md:p-5">
                                <Factory className="h-5 w-5 text-[#0B4A8B]" />
                                <span>{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-5 lg:py-7 xl:py-10">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-5 text-center text-3xl font-bold text-slate-900 md:mb-10 md:text-4xl">Typical Applications</h2>

                    <div className="grid gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
                        {applications.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-3 md:p-6">
                                <ShieldCheck className="h-6 w-6 text-green-600" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-slate-50 py-5 md:py-10">
                <div className="mx-auto max-w-5xl px-4">
                    <h2 className="mb-5 text-center text-3xl font-bold text-slate-900 md:mb-10 md:text-4xl">Frequently Asked Question – AMC Services</h2>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="rounded-2xl border bg-white p-4 shadow-sm md:p-7">
                                <h3 className="mb-3 text-lg font-bold">{faq.question}</h3>
                                <p className="text-slate-600 md:leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="bg-gradient-to-r from-[#0B4A8B] to-slate-900 py-8 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <h2 className="mb-8 text-3xl font-bold md:text-5xl">Let's Discuss the Right Maintenance Strategy</h2>

                    <p className="mb-6 leading-relaxed text-slate-200 md:text-lg">
                        A well-planned maintenance program can significantly improve system reliability, efficiency, and long-term performance. AMC Services
                        help organizations establish a structured approach to maintenance while minimizing operational risks and unplanned downtime.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => {
                                setOpen(true);
                            }}
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900"
                        >
                            Request Quote <ArrowRight size={18} />
                        </button>

                        <Link href="tel:+919717159766" className="rounded-xl border border-white px-8 py-4 font-semibold">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />
        </div>
    );
}
