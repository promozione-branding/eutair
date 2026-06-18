"use client";

import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Page() {
  const [active, setActive] = useState("All Products");

  const categories = [
    "All Products",
    "Diesel and electric powered compressor",
    "Handheld Tools",
    "Genuine Parts & Service",
   
  ];

const productsData = {
  "Diesel and electric powered compressor": [
    {
      title: "Portable Diesel Air Compressor",
      image: "/hero1.png",
    },
    {
      title: "Electric Screw Air Compressor",
      image: "/products/electric-compressor.webp",
    },
    {
      title: "High Pressure Diesel Compressor",
      image: "/products/high-pressure-compressor.webp",
    },
    {
      title: "Industrial Electric Air Compressor",
      image: "/products/industrial-compressor.webp",
    },
  ],

  "Handheld Tools": [
    {
      title: "Pneumatic Impact Wrench",
      image: "/hero1.png",
    },
    {
      title: "Air Angle Grinder",
      image: "/products/angle-grinder.webp",
    },
    {
      title: "Pneumatic Drill Machine",
      image: "/products/pneumatic-drill.webp",
    },
    {
      title: "Air Blow Gun",
      image: "/products/air-blow-gun.webp",
    },
  ],

  "Genuine Parts & Service": [
    {
      title: "Compressor Air Filter",
      image: "/products/air-filter.webp",
    },
    {
      title: "Oil Separator Element",
      image: "/products/oil-separator.webp",
    },
    {
      title: "Compressor Service Kit",
      image: "/products/service-kit.webp",
    },
    {
      title: "Compressor Lubricant Oil",
      image: "/products/compressor-oil.webp",
    },
  ],
};

  const filteredProducts = useMemo(() => {
    if (active === "All Products") {
      return Object.values(productsData).flat();
    }

    return productsData[active] || [];
  }, [active]);



const applications = [
  {
    icon: "🧵",
    title: "Textile Industry",
    desc: "Textile manufacturers utilize compressed air for spinning, weaving, dyeing, and finishing processes. Chicago Pneumatic Compressors ensure consistent airflow to support smooth production operations."
  },
  {
    icon: "⚙️",
    title: "Engineering & Fabrication Units",
    desc: "Engineering workshops and fabrication facilities depend on compressed air to power pneumatic tools, machinery, and production equipment. Chicago Pneumatic Compressors provide reliable support for these demanding applications."
  },
  {
    icon: "🧪",
    title: "Chemical Industry",
    desc: "Built for durability and performance, Chicago Pneumatic Compressors are suitable for challenging industrial environments where reliability and efficiency are critical."
  },
  {
    icon: "📦",
    title: "Packaging Industry",
    desc: "Packaging operations require a dependable compressed air supply for automated systems, filling machines, labeling equipment, and production lines. Chicago Pneumatic Compressors help maximize productivity and operational efficiency."
  },
  {
    icon: "🚗",
    title: "Automotive Industry",
    desc: "From vehicle assembly and painting to maintenance and repair operations, Chicago Pneumatic Compressors provide the compressed air required for various automotive applications, improving efficiency and precision."
  },



  {
  icon: "🏭",
  title: "Manufacturing Industry",
  desc: "Chicago Pneumatic Compressors support production lines, automated machinery, and industrial equipment by providing a reliable compressed air supply that helps maintain efficiency and uninterrupted operations."
}
];




  
  return (


    <>


   <section className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: "url('/bghero1.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="px-10   text-center text-3xl md:text-7xl font-bold text-white z-10">
        
           Chicago Pneumatic 
          </h1>
        </div>
      </section>


<section className="relative overflow-hidden bg-white">
  <div className="container mx-auto px-6 lg:px-18 py-10 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div>
      

        <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-slate-900">
          Screw Air Compressors for Industrial Applications
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed text-justify">
          Eutair Equipments LLP offers a comprehensive range of Chicago
          Pneumatic Screw Air Compressors designed to deliver exceptional
          performance, energy efficiency, and long-term reliability.
          Renowned worldwide for their innovative engineering and robust
          construction, Chicago Pneumatic compressors are trusted by
          industries seeking dependable compressed air solutions for
          demanding applications.

          <br />
          <br />

          Whether you operate in manufacturing, automotive,
          pharmaceutical, engineering, food processing, or packaging
          industries, Chicago Pneumatic compressors provide a consistent
          compressed air supply that helps maximize productivity and
          operational efficiency.
        </p>

      
      </div>

      {/* Right Image */}
      <div className="flex justify-center lg:justify-end">
        <Image
          src="/hero1.png"
          alt="Screw Air Compressor"
          width={1000}
          height={1000}
          className="w-full max-w-lg h-auto object-cover"
          priority
        />
      </div>

    </div>
  </div>
</section>


   

<section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
  <div className="max-w-[1800px] mx-auto px-4">

    {/* Categories */}
    <div className="sticky top-4 z-20 flex justify-center mb-14">
      <div
        className="
          w-full
          max-w-5xl
          backdrop-blur-xl
          bg-white/80
          border
          border-slate-200
          rounded-3xl
          shadow-lg
          overflow-x-auto
        "
      >
        <div className="flex min-w-max p-2 justify-center">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                px-6 py-3
                mx-1
                rounded-2xl
                text-[18px]
                font-semibold
                whitespace-nowrap
                transition-all
                duration-300
                ${
                  active === item
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg"
                    : "text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Products */}
    <div
      key={active}
      className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8"
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              bg-white
              border
              border-slate-200
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              transition-all
              duration-500
              hover:-translate-y-2
            "
          >
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-cyan-500" />

            {/* Image */}
        <div className="h-[220px] bg-gradient-to-b from-sky-50 via-white to-slate-50 flex items-center justify-center p-8 overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="
      max-h-[220px]
      max-w-full
      object-contain
      transition-all
      duration-500
      group-hover:scale-110
      drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]
    "
    onError={(e) => {
      e.currentTarget.src = "/placeholder-product.png";
    }}
  />
</div>

            {/* Content */}
            <div className="p-7">
              <h3
                className="
                  text-[22px]
                  font-bold
                  text-slate-900
                  leading-snug
                  text-center
                  min-h-[70px]
                "
              >
                {item.title}
              </h3>

              <div className="mt-6 flex justify-center">
                <button
                  className="
                    px-6
                    py-3
                    rounded-xl
                    bg-sky-500
                    text-white
                    font-medium
                
                    transition-all
                    duration-300
                  "
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full">
          <div className="bg-white rounded-3xl p-20 text-center shadow-lg border border-slate-200">
            <p className="text-2xl text-slate-500">
              No products found.
            </p>
          </div>
        </div>
      )}
    </div>

  </div>
</section>













<section className="py-6 bg-white">
  <div className="container mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="text-center max-w-6xl mx-auto">
      <span className="inline-flex items-center px-5 py-2 rounded-full border border-sky-200 text-sky-700 font-medium bg-sky-50">
        Benefits of Chicago Pneumatic Compressors
      </span>

      <h2 className="mt-4 text-4xl  font-bold text-slate-900">
        Enhance Productivity with Reliable and Energy-Efficient Compressed Air Solutions
      </h2>

      <p className="mt-4 text-lg text-slate-600 leading-relaxed ">
        Chicago Pneumatic Compressors are designed to deliver exceptional
        performance, operational efficiency, and long-term reliability for a
        wide range of industrial applications. Known for their advanced
        engineering and durable construction, these compressors help
        businesses maintain consistent production while optimizing energy
        consumption and reducing operating costs.
      </p>
    </div>

    {/* Benefits Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

      {/* Card 1 */}
      <div className="group p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
          ⚡
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Enhanced Energy Efficiency
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Chicago Pneumatic Compressors are engineered to maximize air output
          while minimizing energy consumption. Their efficient design helps
          businesses lower electricity costs and improve overall system
          performance, making them a cost-effective solution for long-term
          industrial use.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
          🔄
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Consistent and Reliable Performance
        </h3>

        <p className="text-slate-600 leading-relaxed">
          A stable compressed air supply is essential for maintaining
          uninterrupted industrial operations. Chicago Pneumatic Compressors
          are built to deliver reliable performance even in demanding
          environments, helping businesses reduce downtime and maintain
          productivity.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
          🛠️
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Lower Maintenance Requirements
        </h3>

        <p className="text-slate-600 leading-relaxed">
          Manufactured using high-quality components and advanced engineering
          practices, these compressors are designed for durability and reduced
          maintenance. This helps minimize service interruptions and lowers
          overall maintenance expenses.
        </p>
      </div>

      {/* Card 4 */}
      <div className="group p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
          🏭
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Long Service Life
        </h3>

        <p className="text-slate-600 leading-relaxed">
          The robust construction and superior build quality of Chicago
          Pneumatic Compressors ensure long-lasting performance. Their
          durability allows businesses to achieve a higher return on
          investment while maintaining operational efficiency over time.
        </p>
      </div>

      {/* Card 5 */}
      <div className="group p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
          📈
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Improved Productivity
        </h3>

        <p className="text-slate-600 leading-relaxed">
          With dependable compressed air delivery and efficient operation,
          Chicago Pneumatic Compressors help businesses optimize workflows,
          improve production output, and support continuous operations.
        </p>
      </div>

      {/* Card 6 */}
      <div className="group p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
          💰
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Cost-Effective Operations
        </h3>

        <p className="text-slate-600 leading-relaxed">
          By combining energy efficiency, reliable performance, and low
          maintenance requirements, these compressors contribute to reduced
          operating costs and increased profitability for businesses.
        </p>
      </div>

    </div>
  </div>
</section>
    









<section className="py-10 bg-white">
  <div className="container mx-auto px-6">

    <div className="max-w-4xl mx-auto text-center mb-16">
      <span className="text-sky-600 font-semibold">
        Applications of Chicago Pneumatic Compressors
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        Reliable Compressed Air Solutions for Diverse Industrial Applications
      </h2>

      <p className="mt-6 text-slate-600 leading-relaxed">
        Chicago Pneumatic Compressors are widely recognized for their versatility, efficiency, and dependable performance across a broad range of industries. Designed to deliver a consistent compressed air supply, these compressors support critical operations and help businesses maintain productivity, quality, and operational efficiency.
      </p>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {applications.map((item, index) => (
        <div
          key={index}
          className="
            group
            bg-white
            border
            border-sky-100
            rounded-[24px]
            p-6
            shadow-[0_8px_30px_rgba(0,0,0,.05)]
            hover:shadow-[0_15px_40px_rgba(14,165,233,.12)]
            hover:border-sky-300
            transition-all
            duration-300
          "
        >
          <div className="flex items-start gap-4">

            <div
              className="
                w-14 h-14
                shrink-0
                rounded-2xl
                bg-sky-50
                text-sky-600
                flex
                items-center
                justify-center
                text-2xl
                group-hover:bg-sky-500
                group-hover:text-white
                transition-all
              "
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>

    </>
  
  );
}