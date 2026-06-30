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

 <section className="py-3 md:py-6 overflow-hidden">











  
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
          Our Specialization
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
            mb-6
           
            max-w-4xl
            mx-auto
          "
        >
       
        Complete Screw Air Compressors & Industrial Solutions
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">






    
          {/* Image */}
          <div className="">
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
           <div>
     

      

       

      <h3 className="text-xs  md:text-xl font-semibold text-slate-800 leading-relaxed mb-4">
      
        </h3>

        <p className="text-black leading-8 text-md md:text-lg  text-justify">
       At Eutair Equipments LLP, we specialize in delivering high-performance Screw Air Compressors, compressed air systems, gas-based power generation equipment, utility infrastructure, water & effluent treatment solutions, and export-oriented industrial supplies. Our solutions are designed to enhance operational efficiency, improve productivity, and meet the evolving needs of diverse industries.

With successful project execution across India and international markets, including Africa, we provide end-to-end solutions—from equipment selection and system design to installation, commissioning, and after-sales support. Backed by technical expertise and a commitment to quality, we help businesses achieve reliable and efficient industrial operations.

Expanding by Compression reflects our commitment to delivering innovative Screw Air Compressors and industrial solutions that power business growth and long-term success.
        </p>

        <p className="text-black leading-8 text-lg text-justify">
        
Expanding by Compression reflects our commitment to delivering innovative industrial solutions that drive business growth.
        </p>
      </div>













          
      
      

        </div>
      </div>
    </section>

</Reveal>

   
  );
}