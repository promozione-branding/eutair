'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // install lucide-react if not already
import Image from 'next/image';

const faqs = [
    {
        q: 'Are you a Screw Air Compressor Manufacturer?',
        a: 'Yes, Eutair Equipments LLP is a trusted Screw Air Compressor Manufacturer, offering high-performance and energy-efficient compressed air solutions for a wide range of industrial applications.',
    },
    {
        q: 'What products do you offer?',
        a: 'We offer a comprehensive range of products, including Screw Air Compressors, Diesel Air Compressors, Air Dryers, Air Line Filters, Drain Valves, MSS Series Screw Compressor Filters, and Ethanol Alcohol Based Hand Sanitizers.',
    },
    {
        q: 'Which industries do you serve?',
        a: 'Our products are widely used in industries such as Manufacturing, Automotive, Pharmaceutical, Food & Beverage Processing, Textile, Engineering, Chemical Processing, Packaging, and Healthcare.',
    },
    {
        q: 'Do you provide customized solutions for industrial requirements?',
        a: 'Yes, we understand that every industry has unique requirements. Our team assists customers in selecting the most suitable compressed air and filtration solutions based on their operational needs.',
    },
    {
        q: 'Do you supply products across India and international markets?',
        a: 'Yes, as a Manufacturer, Trader, Exporter, and Importer, we supply high-quality products to customers across India as well as international markets while ensuring timely delivery and reliable support.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-white px-4 py-4 md:px-8 lg:px-9 lg:py-10 xl:px-8 xl:py-16">
            {/* Heading */}

            <h2 className="mb-3 text-center text-2xl font-extrabold text-[#07342A] md:text-4xl lg:mb-9 xl:mb-12">Frequently Asked Questions</h2>

            {/* FAQ Container */}
            <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200">
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="flex w-full items-center justify-between px-6 py-5 text-lg font-medium text-gray-900 transition hover:bg-cyan-600/30"
                        >
                            <span className="flex-1 text-left text-base md:text-xl">
                                {index + 1}. {faq.q}
                            </span>
                            <ChevronDown
                                className={`h-6 w-6 transform text-[#07342A] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {/* Answer with smooth animation */}
                        <div className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                            <p className="text-sm leading-relaxed text-gray-700">{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
