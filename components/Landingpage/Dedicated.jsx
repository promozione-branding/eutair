'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
export default function AirSystemSolution() {
    const [openIndex, setOpenIndex] = useState(0);

    const features = [
        {
            title: 'Leading Screw Air Compressor Manufacturer',
            description:
                'As a reliable Screw Air Compressor Manufacturer, we provide advanced compressor solutions engineered for superior performance, energy efficiency, and extended service life, ensuring uninterrupted compressed air supply for demanding industrial applications.',
        },
        {
            title: 'Comprehensive Product Portfolio',
            description:
                'We offer a complete range of compressed air system solutions, including Air Compressors, Air Dryers, Air Line Filters, Drain Valves, and MSS Series Screw Compressor Filters, all under one roof.',
        },
        {
            title: 'Uncompromising Quality Standards',
            description:
                'Every product is manufactured and sourced with a strong commitment to quality, durability, and operational reliability. Our stringent quality control processes ensure exceptional performance and long-term value.',
        },
        {
            title: 'Industry Expertise & Technical Support',
            description:
                'Our experienced team understands the unique requirements and challenges of different industries, providing expert consultation and technical support to help customers choose the right solutions.',
        },
        {
            title: 'Productivity-Driven Solutions',
            description:
                'Our innovative compressed air systems are designed to improve productivity, optimize operational performance, and support efficient industrial processes across various sectors.',
        },
        {
            title: 'Cost-Effective Operations',
            description:
                'By focusing on energy-efficient technologies and reliable equipment, we help businesses reduce operational costs while maximizing output and performance.',
        },
    ];

    return (
        <Reveal>
            <section className="overflow-hidden py-3 md:py-6">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-16">
                    {/* Heading */}
                    <p className="mb-2 text-center text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">
                        Our Specialization
                    </p>

                    <h1 className="mx-auto mb-6 max-w-4xl text-center text-lg leading-tight font-bold text-blue-900 sm:text-4xl lg:mb-3 lg:text-5xl xl:mb-5">
                        Complete Screw Air Compressors & Industrial Solutions
                    </h1>

                    <div className="grid items-center md:gap-12 lg:grid-cols-2">
                        {/* Image */}
                        <div className="">
                            <Image
                                src="/why.jpeg"
                                alt="Mark Compressor & Chicago Pneumatic Supplier"
                                width={800}
                                height={800}
                                className="mx-auto h-auto w-full max-w-[650px] object-contain"
                            />
                        </div>

                        {/* Accordion */}
                        <div>
                            <h3 className="mb-4 text-xs leading-relaxed font-semibold text-slate-800 md:text-xl"></h3>

                            <p className="text-sm leading-8 text-black md:text-lg lg:leading-6 xl:leading-8">
                                Eutair Equipments is a professionally managed engineering and industrial equipment company based at New Delhi, India. We have
                                over the years accepted industry challenges, and these very challenges made us what we are today:{' '}
                                <strong> 'Compressed Air Experts'. </strong>
                                Eutair is a leading Engineering Company, engaged in the engineering, sales and services of capital equipment to various
                                industrial sectors. Eutair is associated with renowned capital manufacturing companies offering industrial equipment from
                                Concept to Commissioning on EP, EPC, turnkey basis. The company specializes in compressed air systems, gas-based power
                                generation equipment, utility infrastructure, water & effluent treatment solutions, and export facilitation. We have executed
                                projects in India and abroad. We also undertake after sales services for these projects. Execution of projects in Africa & India
                                Sub-continent has brought us on to global map. We are <strong> "Expanding by Compression". </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}
