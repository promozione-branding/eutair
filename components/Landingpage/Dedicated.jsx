"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
export default function AirSystemSolution() {
  const [openIndex, setOpenIndex] = useState(0);

  const features = [
    {
      title: "Leading Screw Air Compressor Manufacturer",
      description:
        "As a reliable Screw Air Compressor Manufacturer, we provide advanced compressor solutions engineered for superior performance, energy efficiency, and extended service life, ensuring uninterrupted compressed air supply for demanding industrial applications.",
    },
    {
      title: "Comprehensive Product Portfolio",
      description:
        "We offer a complete range of compressed air system solutions, including Air Compressors, Air Dryers, Air Line Filters, Drain Valves, and MSS Series Screw Compressor Filters, all under one roof.",
    },
    {
      title: "Uncompromising Quality Standards",
      description:
        "Every product is manufactured and sourced with a strong commitment to quality, durability, and operational reliability. Our stringent quality control processes ensure exceptional performance and long-term value.",
    },
    {
      title: "Industry Expertise & Technical Support",
      description:
        "Our experienced team understands the unique requirements and challenges of different industries, providing expert consultation and technical support to help customers choose the right solutions.",
    },
    {
      title: "Productivity-Driven Solutions",
      description:
        "Our innovative compressed air systems are designed to improve productivity, optimize operational performance, and support efficient industrial processes across various sectors.",
    },
    {
      title: "Cost-Effective Operations",
      description:
        "By focusing on energy-efficient technologies and reliable equipment, we help businesses reduce operational costs while maximizing output and performance.",
    },
  ];

  return (

<Reveal>

 <section className="py-3 md:py-16 overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Heading */}
        <p
          className="
            mb-3
            text-blue-600
            text-center
            text-xs
            sm:text-sm
            uppercase
            tracking-[0.2em]
            font-semibold
          "
        >
          Why Choose Eutair Equipments LLP?
        </p>

        <h2
          className="
            text-center
            font-bold
            text-blue-900
            text-xl
            sm:text-4xl
            lg:text-5xl
            leading-tight
            mb-10
            lg:mb-14
          "
        >
          Trusted Screw Air Compressor Manufacturer
          <br className="hidden sm:block" />
          Delivering Quality, Performance & Reliability
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image */}
          <div className="order-1">
            <Image
              src="/why.png"
              alt="Why Choose Eutair"
              width={800}
              height={800}
              className="
                object-contain
                w-full
                h-auto
                max-w-[650px]
                mx-auto
              "
            />
          </div>

          {/* Accordion */}
          <div className="order-2">
            <div className="space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:shadow-md
                  "
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-3
                      p-4
                      sm:p-5
                      text-left
                    "
                  >
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <span
                        className="
                          flex
                          h-8
                          w-8
                          sm:h-10
                          sm:w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-cyan-600
                          text-white
                          font-bold
                          text-sm
                        "
                      >
                        ✓
                      </span>

                      <h4
                        className="
                          text-base
                          sm:text-lg
                          font-semibold
                          text-[#1B365D]
                          leading-snug
                        "
                      >
                        {item.title}
                      </h4>
                    </div>

                    <ChevronDown
                      className={`
                        h-5
                        w-5
                        shrink-0
                        text-cyan-600
                        transition-transform
                        duration-300
                        ${
                          openIndex === index
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      openIndex === index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          px-4
                          sm:px-5
                          pb-5
                          text-sm
                          sm:text-base
                          text-gray-600
                          leading-7
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

</Reveal>

   
  );
}