"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Enquiry from "@/components/Enquiry";
export default function AboutPage() {

const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* HERO */}
   <section className="relative h-[300px] md:h-[450px] overflow-hidden">
  <Image
    src="/bghero1.webp"
    fill
    alt="About Eutair"
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-900/75 to-sky-900/70" />

  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto px-4">

      <span className="inline-flex px-5 py-2 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200">
        Trusted Industrial Partner
      </span>

      <h1 className="mt-6 text-4xl md:text-7xl font-black text-white max-w-4xl">
        About Eutair Equipments LLP
      </h1>

      <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl">
        Trusted Partner for Compressed Air & Industrial Solutions
      </p>

    </div>
  </div>
</section>

      {/* ABOUT CONTENT */}
  <section className="py-7 lg:py-11 xl:py-18 bg-white">
  <div className="w-full mx-auto px-5 md:px-20">

    <div className="grid lg:grid-cols-2 gap-5 md:gap-20 items-center">

      <div>

        <span className=" text-center mb-2
                text-sky-600
                font-semibold
                uppercase
                tracking-[2px]
                md:tracking-[3px]
                text-xs
                sm:text-sm
              ">
          About Our Company
        </span>

        <h2 className="mt-4 text-2xl lg:text-4xl xl:text-5xl font-black text-slate-900">
          Trusted Partner for Compressed Air & Industrial Solutions
        </h2>

        <div className="mt-8 lg:mt-5 xl:mt-8 space-y-6 text-lg text-slate-800 lg:leading-6 xl:leading-relaxed">

          <p>
            Eutair Equipments LLP is a leading name in the compressed air and industrial equipment industry, committed to delivering quality, reliability, and innovation.
          </p>

          <p>
            As a Trader, Exporter, and Importer of premium industrial products, we provide advanced compressed air solutions that help businesses improve efficiency, productivity, and operational performance.
          </p>

          <p>
            With a strong focus on customer satisfaction and technical excellence, we offer a comprehensive range of products including Screw Air Compressors, Diesel Air Compressors, Air Dryers, Air Line Filters, Drain Valves, MSS Series Screw Compressor Filters, MARK Compressors, and Ethanol Alcohol Based Hand Sanitizers.
          </p>

          <p className="block lg:hidden xl:block">
            Our solutions are trusted by businesses across various industries for their performance, durability, and value.
          </p>

        </div>

      </div>

      <div className="relative">

        <div className="absolute -top-8 -right-8 w-64 h-64 bg-sky-200 blur-[120px] opacity-50" />

        <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.15)]">
          <Image
            src="/mark-compressor.webp"
            width={900}
            height={1000}
            alt="Industrial Solutions"
            className="w-full h-[300px] md:h-[550px] object-fill "
          />
        </div>

      </div>

    </div>

  </div>
</section>




<section
  style={{ backgroundImage: "url(/stats.png)" }}
  className="
    relative
    py-7
    lg:py-10
    xl:py-14
    bg-cover
    bg-center
    bg-fixed
    overflow-hidden
  "
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/50 to-sky-950/60" />



  <div className="relative z-10 max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-10 lg:mb-5 xl:mb-9">
      <span
        className="
          inline-flex
          px-5
          py-2
          rounded-full
          bg-sky-500/10
          border
          border-sky-400/20
          text-sky-300
          font-medium
        "
      >
        Our Achievements
      </span>

      <h2 className="mt-6 text-3xl md:text-6xl font-black text-white">
        Trusted by Industries Across India
      </h2>

  
    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">

      {[
        {
          number: "500+",
          label: "Projects Delivered",
       
        },
        {
          number: "300+",
          label: "Industrial Clients",
        
        },
        {
          number: "20+",
          label: "Product Categories",
      
        },
        {
          number: "24/7",
          label: "Customer Support",
        
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            p-5
            md:p-8
            text-center
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-sky-400/40
            hover:bg-white/10
          "
        >
          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />

       

          {/* Number */}
          <h3
            className="
              text-4xl
              md:text-6xl
              font-black
              bg-gradient-to-r
              from-sky-300
              via-cyan-300
              to-white
              bg-clip-text
              text-transparent
            "
          >
            {item.number}
          </h3>

          {/* Label */}
          <p className="mt-4 text-lg text-slate-300 font-medium">
            {item.label}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


      {/* VISION */}
    <section className="py-7 lg:py-10 xl:py-17 bg-gradient-to-b from-slate-50 to-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="grid lg:grid-cols-2 gap-4 md:gap-8">

      <div className="rounded-[40px] p-5 lg:p-7 xl:p-10 bg-white border border-slate-200 shadow-xl">

        <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl">
          🎯
        </div>

        <h3 className="mt-3 lg:mt-4 xl:mt-6 text-3xl md:text-4xl font-black text-slate-900">
          Our Mission
        </h3>

        <p className="mt-3 lg:mt-4 xl:mt-6 text-slate-600 md:leading-relaxed text-lg">
          To provide high-performance Screw Air Compressors, compressed air systems, and industrial solutions that help businesses improve productivity, enhance operational efficiency, and reduce operating costs.
        </p>

      </div>

      <div className="rounded-[40px] p-5 md:p-10 bg-white border border-slate-200 shadow-xl">

        <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl">
          🚀
        </div>

        <h3 className="mt-3 lg:mt-4 xl:mt-6 text-4xl font-black text-slate-900">
          Our Vision
        </h3>

        <p className="mt-3 lg:mt-4 xl:mt-6 text-slate-600 md:leading-relaxed md:text-lg">
          To be a trusted name in the compressed air industry by delivering advanced Screw Air Compressors and industrial solutions that set benchmarks for quality, reliability, and customer satisfaction.
        </p>

      </div>

    </div>

  </div>

</section>

 <section className="py-2">

  <div className="w-full mx-auto px-4">

    <div
      className="
      rounded-[40px]
      p-5 lg:p-8 xl:p-12
      bg-gradient-to-r
      from-sky-500
      via-cyan-500
      to-blue-600
      text-center
      text-white
    "
    >
      <h2 className="text-3xl md:text-5xl font-black">
        Ready to Optimize Your Operations?
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl text-white/90">
        Discover reliable Screw Air Compressors and industrial solutions from Eutair Equipments LLP designed to enhance efficiency, productivity, and performance.
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-10 lg:mt-5 xl:mt-9">
        <button onClick={() => setOpen(true)} className="px-5 md:px-8 h-14 rounded-2xl bg-white text-sky-600 font-bold">
          Request a Quote
        </button>


<Link href="/contact">
        <button className="px-5 md:px-8 h-14 rounded-2xl border border-white text-white font-bold">
          Contact Us
        </button>

        </Link>
      </div>

    </div>

  </div>

</section>

     <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />



<section className="relative overflow-hidden bg-white py-8 lg:py-9 xl:py-8">
  {/* Background Decorations */}


  <div className="relative mx-auto max-w-7xl ">
    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">
      <span className=" text-center mb-2
                text-sky-600
                font-semibold
                uppercase
                tracking-[2px]
                md:tracking-[3px]
                text-xs
                sm:text-sm
              ">
        Business Excellence
      </span>

      <h2 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 ">
        Technical & Commercial Capabilities
      </h2>

      <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-600 to-sky-500" />
    </div>

    {/* Cards */}
    <div className="mt-7 px-3 grid gap-8 lg:gap-6 xl:gap-8 grid-cols-2 lg:grid-cols-3">
      {[
        "Pre-sales application engineering and system sizing",
        "Energy-efficient system design and optimization",
        "Turnkey project execution (EPC-style approach)",
        "Installation, testing & commissioning",
        "Export procurement, PDI, and logistics coordination",
        "Service coordination, spares management & lifecycle support",
     
      ].map((item, index) => (
        <div
          key={index}
          className="group relative rounded-3xl border border-gray-200 bg-white p-3 lg:p-3 xl:p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
        >
          {/* Number */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-lg font-bold text-white shadow-md">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Content */}
          <p className="text-sm md:text-lg font-medium  xl:leading-8 text-gray-700">
            {item}
          </p>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-8 right-8 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />
        </div>
      ))}
    </div>
  </div>
</section>

      
    </>
  );
}
