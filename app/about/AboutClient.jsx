"use client";

import Reveal from "@/components/Landingpage/Reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
   <section className="relative h-[450px] overflow-hidden">
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

      <h1 className="mt-6 text-5xl md:text-7xl font-black text-white max-w-4xl">
        About Eutair Equipments LLP
      </h1>

      <p className="mt-6 text-xl text-slate-200 max-w-3xl">
        Trusted Partner for Compressed Air & Industrial Solutions
      </p>

    </div>
  </div>
</section>

      {/* ABOUT CONTENT */}
  <section className="py-18 bg-white">
  <div className="w-full mx-auto px-20">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>

        <span className="text-sky-600 font-semibold">
          About Our Company
        </span>

        <h2 className="mt-4 text-5xl font-black text-slate-900">
          Trusted Partner for Compressed Air & Industrial Solutions
        </h2>

        <div className="mt-8 space-y-6 text-lg text-slate-800 leading-relaxed">

          <p>
            Eutair Equipments LLP is a leading name in the compressed air and industrial equipment industry, committed to delivering quality, reliability, and innovation.
          </p>

          <p>
            As a Trader, Exporter, and Importer of premium industrial products, we provide advanced compressed air solutions that help businesses improve efficiency, productivity, and operational performance.
          </p>

          <p>
            With a strong focus on customer satisfaction and technical excellence, we offer a comprehensive range of products including Screw Air Compressors, Diesel Air Compressors, Air Dryers, Air Line Filters, Drain Valves, MSS Series Screw Compressor Filters, MARK Compressors, and Ethanol Alcohol Based Hand Sanitizers.
          </p>

          <p>
            Our solutions are trusted by businesses across various industries for their performance, durability, and value.
          </p>

        </div>

      </div>

      <div className="relative">

        <div className="absolute -top-8 -right-8 w-64 h-64 bg-sky-200 blur-[120px] opacity-50" />

        <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.15)]">
          <Image
            src="/unnamed(2).webp"
            width={900}
            height={1000}
            alt="Industrial Solutions"
            className="w-full h-[550px] object-cover"
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
    py-14
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
    <div className="text-center mb-10">
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

      <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
        Trusted by Industries Across India
      </h2>

  
    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

      {[
        {
          number: "500+",
          label: "Projects Delivered",
       
        },
        {
          number: "100+",
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
            p-8
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
              text-5xl
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="grid lg:grid-cols-2 gap-8">

      <div className="rounded-[40px] p-10 bg-white border border-slate-200 shadow-xl">

        <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl">
          🎯
        </div>

        <h3 className="mt-6 text-4xl font-black text-slate-900">
          Our Mission
        </h3>

        <p className="mt-6 text-slate-600 leading-relaxed text-lg">
          To provide high-performance Screw Air Compressors, compressed air systems, and industrial solutions that help businesses improve productivity, enhance operational efficiency, and reduce operating costs.
        </p>

      </div>

      <div className="rounded-[40px] p-10 bg-white border border-slate-200 shadow-xl">

        <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center text-3xl">
          🚀
        </div>

        <h3 className="mt-6 text-4xl font-black text-slate-900">
          Our Vision
        </h3>

        <p className="mt-6 text-slate-600 leading-relaxed text-lg">
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
      p-12
      bg-gradient-to-r
      from-sky-500
      via-cyan-500
      to-blue-600
      text-center
      text-white
    "
    >
      <h2 className="text-5xl font-black">
        Ready to Optimize Your Operations?
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-xl text-white/90">
        Discover reliable Screw Air Compressors and industrial solutions from Eutair Equipments LLP designed to enhance efficiency, productivity, and performance.
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        <button className="px-8 h-14 rounded-2xl bg-white text-sky-600 font-bold">
          Request a Quote
        </button>

        <button className="px-8 h-14 rounded-2xl border border-white text-white font-bold">
          Contact Us
        </button>
      </div>

    </div>

  </div>

</section>

    </>
  );
}
