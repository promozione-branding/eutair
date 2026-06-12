"use client"

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <section className="py-5">
      <div className="w-full mx-auto px-15">

        <p className="mb-4 text-blue-600 text-center">Why Choose Eutair Equipments LLP?</p>
          <h2 className="text-3xl md:text-4xl leading-snug text-center font-bold text-blue-900 mb-4">
          
           Trusted Screw Air Compressor Manufacturer <br /> Delivering Quality, Performance & Reliability
            </h2>
        <div className="grid lg:grid-cols-2 gap-10">

          <div>
        
            <Image
              src="/why.png"
          
              width={800}
              height={800}
              className="object-contain h-full w-full"
            />
          </div>

          <div>
          

  <div className="mt-8 space-y-4">
  {features.map((item, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <button
        onClick={() =>
          setOpenIndex(openIndex === index ? null : index)
        }
        className="flex w-full items-center justify-between p-3 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white font-bold">
            ✓
          </span>

          <h4 className="text-lg font-semibold text-[#1B365D]">
            {item.title}
          </h4>
        </div>

        <ChevronDown
          className={`h-5 w-5 text-cyan-600 transition-transform duration-300 ${
            openIndex === index ? "rotate-180" : ""
          }`}
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
          <p className="px-5 pb-5 pl-[76px] text-gray-600 leading-relaxed">
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
  );
}