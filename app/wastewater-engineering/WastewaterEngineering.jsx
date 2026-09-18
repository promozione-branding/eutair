'use client';

import Enquiry from '@/components/Enquiry';
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
const benefits = [
    'Supports effective wastewater treatment planning',
    'Improves opportunities for water reuse and recovery',
    'Helps align systems with discharge requirements',
    'Supports long-term operational efficiency',
    'Reduces risks associated with under-designed systems',
    'Improves scalability for future plant expansion',
];

const engineeringSolutions = [
    {
        title: 'Effluent Treatment Plants (ETP)',
        description: 'Solutions designed for the treatment of industrial wastewater generated from manufacturing and process operations.',
        items: [
            'Effluent Treatment Plant (ETP)',
            'Packaged Effluent Treatment Plant',
            'Prefabricated Effluent Treatment Plant',
            'Containerized Effluent Treatment Systems',
        ],
    },
    {
        title: 'Zero Liquid Discharge (ZLD) Systems',
        description: 'Advanced treatment solutions designed to maximize water recovery and minimize wastewater discharge.',
        items: ['Zero Liquid Discharge Plants', 'Water Recovery Systems', 'Concentrate Management Solutions'],
    },
    {
        title: 'Sewage Treatment Plants (STP)',
        description: 'Treatment systems designed for domestic and sanitary wastewater generated within industrial and commercial facilities.',
        items: [
            'Sewage Treatment Plant (STP)',
            'Compact Sewage Treatment Plant',
            'Package Sewage Treatment Plant',
            'Containerized Sewage Treatment Plant',
            'Prefabricated Sewage Treatment Plant',
        ],
    },
    {
        title: 'Water Treatment & Reuse Systems',
        description: 'Solutions focused on improving water quality and supporting reuse applications.',
        items: [
            'Grey Water Treatment Systems',
            'Water Treatment Plants',
            'Membrane Filtration Systems',
            'Media Filtration Systems',
            'UV Disinfection Systems',
            'MGF + ACF Filtration Systems',
            'Nano Filtration Systems',
        ],
    },
    {
        title: 'Process Equipment & Auxiliary Systems',
        description: 'Supporting equipment used within wastewater treatment and water management applications.',
        items: ['Screw Pumps', 'Filter Press Systems', 'Sludge Handling Solutions', 'Chemical Dosing Systems'],
    },
];

const industries = [
    'Manufacturing Plants',
    'Food & Beverage Industries',
    'Pharmaceutical Facilities',
    'Chemical & Process Industries',
    'Textile & Dyeing Units',
    'Automotive Manufacturing',
    'Engineering & Fabrication Facilities',
    'Commercial Complexes',
    'Institutional & Infrastructure Projects',
];

const applications = [
    'Industrial wastewater treatment',
    'Water recycling and reuse projects',
    'Zero liquid discharge initiatives',
    'Sewage treatment infrastructure',
    'Utility optimization programs',
    'Environmental compliance projects',
    'Plant expansion and modernization',
    'Sustainable water management strategies',
];

const faqs = [
    {
        question: 'What is included in Wastewater Engineering Services?',
        answer: 'Wastewater Engineering Services typically include requirement assessment, process evaluation, technology selection, system planning, engineering support, and guidance for wastewater treatment, reuse, and discharge management.',
    },
    {
        question: 'Who should consider Wastewater Engineering Services?',
        answer: 'Industrial facilities, commercial developments, infrastructure projects, and organizations seeking wastewater treatment, water reuse, or environmental compliance solutions can benefit from wastewater engineering support.',
    },
    {
        question: 'What factors influence wastewater treatment system design?',
        answer: 'Key factors include wastewater characteristics, flow rates, discharge requirements, reuse objectives, available space, operational requirements, and future expansion plans.',
    },
    {
        question: 'Can wastewater treatment systems support water reuse?',
        answer: 'Yes. Many treatment systems are designed to improve water quality for reuse applications, helping reduce freshwater consumption and support sustainability objectives.',
    },
    {
        question: 'What is the benefit of a Zero Liquid Discharge (ZLD) approach?',
        answer: 'ZLD systems help maximize water recovery, minimize wastewater discharge, support environmental compliance, and reduce dependency on freshwater resources.',
    },
];

export default function WastewaterEngineering() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-slate-900 py-8 text-white md:py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <h1 className="mb-6 text-4xl font-bold md:text-5xl">Wastewater Engineering</h1>

                    <h2 className="mb-6 text-lg font-medium text-cyan-300 md:text-2xl">
                        Practical Engineering Support for Treatment, Reuse, Discharge, and Water Recovery Projects
                    </h2>

                    <p className="max-w-4xl text-lg text-slate-300 md:leading-relaxed">
                        Industrial wastewater management requires more than treatment equipment alone. Effective wastewater engineering involves understanding
                        process requirements, discharge norms, water reuse opportunities, operational objectives, and long-term sustainability goals.
                    </p>

                    <p className="mt-4 max-w-4xl text-lg text-slate-300 md:leading-relaxed">
                        Wastewater Engineering Services support industries in planning, designing, optimizing, and implementing treatment solutions for effluent
                        management, sewage treatment, water recycling, and utility integration.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button onClick={() => setOpen(true)} className="rounded-lg bg-cyan-600 px-6 py-3 font-medium transition hover:bg-cyan-700">
                            Request Quote
                        </button>

                        <Link href="tel:+919717159766">
                            <button className="rounded-lg border border-white px-6 py-3 font-medium transition hover:bg-white hover:text-slate-900">
                                Discuss Wastewater Requirement
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Wastewater Engineering Matters */}
            <section className="py-8 lg:py-10 xl:py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <h2 className="mb-4 text-2xl font-bold md:mb-8 md:text-3xl">Why Wastewater Engineering Matters</h2>

                    <div className="space-y-6 text-gray-700 md:leading-relaxed">
                        <p>
                            Industrial facilities face increasing pressure to manage wastewater responsibly while maintaining operational efficiency and
                            regulatory compliance. Improper treatment planning can lead to higher operating costs, environmental risks, compliance challenges,
                            and limitations on future expansion.
                        </p>

                        <p>
                            A structured engineering approach helps organizations select appropriate treatment technologies, improve water recovery, optimize
                            operating costs, and support sustainable utility management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="bg-gray-50 py-8 lg:py-12 xl:py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <h2 className="mb-5 text-3xl font-bold md:mb-10">Benefits</h2>

                    <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="rounded-xl border bg-white p-3 shadow-sm lg:p-4 xl:p-5">
                                {benefit}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Solutions */}
            <section className="py-7 lg:py-13 xl:py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <h2 className="mb-10 text-2xl font-bold md:text-3xl lg:mb-6 xl:mb-10">Engineering Solutions & System Options</h2>

                    <div className="space-y-8">
                        {engineeringSolutions.map((solution, index) => (
                            <div key={index} className="rounded-xl border p-4 transition hover:shadow-lg lg:p-6 xl:p-8">
                                <h3 className="mb-3 text-xl font-semibold md:text-2xl">{solution.title}</h3>

                                <p className="mb-5 leading-5 text-gray-600 md:leading-6">{solution.description}</p>

                                <ul className="space-y-1 md:space-y-2">
                                    {solution.items.map((item, idx) => (
                                        <li key={idx} className="text-gray-700">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Applications */}
            <section className="bg-slate-50 py-8 lg:py-12 xl:py-20">
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold md:mb-8 md:text-3xl">Industries & Use Cases</h2>

                            <p className="mb-3 text-gray-700 md:mb-6">Wastewater Engineering Services support a wide range of industries, including:</p>

                            <ul className="space-y-2 md:space-y-3">
                                {industries.map((industry, index) => (
                                    <li key={index} className="text-gray-700">
                                        • {industry}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-4 text-2xl font-bold md:mb-8 md:text-3xl">Typical Applications</h2>

                            <ul className="space-y-3">
                                {applications.map((application, index) => (
                                    <li key={index} className="text-gray-700">
                                        • {application}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-8 lg:py-12 xl:py-20">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="mb-8 text-2xl font-bold md:mb-10 md:text-3xl">Frequently Asked Question - Wastewater Engineering</h2>

                    <div className="space-y-3 md:space-y-5">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-xl border bg-white p-4 md:p-6">
                                <h3 className="mb-3 text-lg font-semibold">
                                    {index + 1}. {faq.question}
                                </h3>

                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />
        </div>
    );
}
