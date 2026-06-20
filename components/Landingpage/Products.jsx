"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductRange() {



const products = [
  {
    title: "Chicago Pneumatic",
    image: "/hero1.png",
    desc: "Industry-proven compressed air systems delivering superior efficiency, durability, and productivity for modern industrial operations.",
  },
  {
    title: "MARK Compressors",
    image: "/hero2.png",
    desc: "Innovative compressor solutions combining energy savings, operational reliability, and long-term performance excellence.",
  },
  {
    title: "Air Treatment",
    image: "/hero3.png",
    desc: "Comprehensive air purification solutions ensuring clean, dry, and contaminant-free compressed air for sensitive applications.",
  },
  {
    title: "Spares and Consumables",
    image: "/pro3.png",
    desc: "Premium-quality genuine parts and consumables designed to maintain peak compressor performance and reduce downtime.",
  },
  {
    title: "Piping and Distribution Lines",
    image: "/pro4.jpeg",
    desc: "Customized air distribution networks engineered for maximum flow efficiency, reduced leakage, and optimal system performance.",
  },
];


  return (
  <section className=" md:py-16 bg-white overflow-hidden">
  <div className="mx-auto px-4 sm:px-6 lg:px-12">
    
    {/* Heading */}
    <h2 className="text-blue-600 font-bold text-xs sm:text-sm mb-4 text-center uppercase tracking-[0.25em]">
      Our Products
    </h2>

    <div className="text-center mb-8 md:mb-12">
      <h2
        className="
        text-[#0B3A82]
        font-bold
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        uppercase
        leading-tight
      "
      >
        Our Screw Air Compressor Range
      </h2>
    </div>

    {/* Products Grid */}
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-5
      border
      border-cyan-400
    "
    >
      {products.map((item, index) => (
        <div
          key={index}
          className="
          p-4
          md:p-5
          border-b
          border-cyan-400
          xl:border-r
          xl:last:border-r-0
          hover:bg-slate-50
          transition-all
          duration-300
          group
        "
        >
          {/* Image */}
          <div
            className="
            h-44
            sm:h-52
            md:h-56
            flex
            items-center
            justify-center
            mb-4
            overflow-hidden
          "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                object-contain
                h-full
                w-full
                transition-all
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          {/* Title */}
          <h3
            className="
            text-[#0B3A82]
            font-bold
            text-base
            sm:text-lg
            uppercase
            leading-snug
            mb-3
          "
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="
            text-gray-600
            text-sm
            sm:text-[15px]
            leading-6
            mb-4
          "
          >
            {item.desc}
          </p>

          {/* Link */}
          <button
            className="
            text-[#0B3A82]
            text-sm
            font-semibold
            uppercase
            tracking-wide
            hover:text-cyan-600
            transition
          "
          >
            View Product →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}