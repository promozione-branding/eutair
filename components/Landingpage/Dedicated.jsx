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
         className=" text-center mb-2
                text-sky-600
                font-semibold
                uppercase
                tracking-[2px]
                md:tracking-[3px]
                text-xs
                sm:text-sm
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
              src="/why.jpeg"
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

        <p className="text-black leading-8 text-md md:text-lg  ">
     Eutair Equipments is a professionally managed engineering and industrial equipment company based at New Delhi, India. We have over the years accepted industry challenges, and these very challenges made us what we are today: <strong> 'Compressed Air Experts'. </strong> 
Eutair is a leading Engineering Company, engaged in the engineering, sales and services of capital equipment to various industrial sectors. Eutair is associated with renowned capital manufacturing companies offering industrial equipment from Concept to Commissioning on EP, EPC, turnkey basis.
The company specializes in compressed air systems, gas-based power generation equipment, utility infrastructure, water & effluent treatment solutions, and export facilitation. We have executed projects in India and abroad. We also undertake after sales services for these projects. Execution of projects in Africa & India Sub-continent has brought us on to global map.

We are <strong> "Expanding by Compression". </strong> 
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