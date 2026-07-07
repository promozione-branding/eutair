"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // install lucide-react if not already





export default function FAQ({city}) {

    const faqs = [
  {
    q: `What is a screw air compressor, and how does it work?`,
    a: "A screw air compressor uses two interlocking rotary screws to compress air continuously, making it ideal for industries that require a reliable and uninterrupted supply of compressed air. It is known for its energy efficiency, low noise levels, and consistent performance."
  },
  {
    q: `Why should I choose EutAir for a Screw Air Compressor in ${city}?`,
    a: "EutAir offers high-quality Screw Air Compressors in Delhi designed for superior performance, energy efficiency, and long service life. We also provide expert consultation, professional installation, genuine spare parts, and dependable after-sales support to ensure your compressor operates efficiently."
  },
  {
    q: " Which industries use screw air compressors?",
    a: "Screw air compressors are widely used in manufacturing, automotive, pharmaceuticals, food and beverage processing, textiles, packaging, printing, electronics, engineering, and other industries that require continuous compressed air for their operations."
  },
  {
    q: `How do I select the right Screw Air Compressor in ${city} for my business?`,
    a: "The ideal screw air compressor depends on factors such as your required airflow (CFM), operating pressure (Bar), application, and daily usage hours. EutAir's experts can help you choose the most suitable compressor based on your operational requirements and budget."
  },
  {
    q: "Are screw air compressors energy efficient?",
    a: "Yes, we understand that every industry has unique requirements. Our team assists customers in selecting the most suitable compressed air and filtration solutions based on their operational needs."
  },
  {
    q: ` Does EutAir provide installation and maintenance services in ${city}`,
    a: "Yes. EutAir offers complete installation, commissioning, preventive maintenance, repair services, Annual Maintenance Contracts (AMC), and genuine spare parts for Screw Air Compressors in Delhi, helping businesses maximize equipment performance and minimize downtime."
  }
];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-4 md:py-7 relative px-4 md:px-8 lg:px-12 bg-white">
      {/* Heading */}


      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-3 md:mb-12 text-[#07342A]">
        Frequently Asked Questions
      </h2>

      {/* FAQ Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-5 px-6 text-lg font-medium text-gray-900 hover:bg-cyan-600/30 transition"
            >
              <span className="flex-1 text-base md:text-xl text-left">
                {index + 1}. {faq.q}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-[#07342A] transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer with smooth animation */}
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 pb-4" : "max-h-0"

              }`}
            >
              <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
