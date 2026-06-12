"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductRange() {



const products = [
  {
    title: "OIL INJECTED SCREW COMPRESSORS",
    image: "/hero1.png",
    desc: "Advanced screw air compressors designed for continuous industrial applications.",
  },
  {
    title: "VFD SCREW COMPRESSORS",
    image: "/hero2.png",
    desc: "Energy-efficient compressors with variable frequency drive technology.",
  },
  {
    title: "PM SCREW COMPRESSORS",
    image: "/hero3.png",
    desc: "Permanent magnet compressors delivering maximum performance.",
  },
  {
    title: "OIL FREE COMPRESSORS",
    image: "/pro3.png",
    desc: "Contamination-free compressed air for critical industries.",
  },
  {
    title: "AIR DRYERS",
    image: "/pro4.jpeg",
    desc: "Reliable air treatment solutions for moisture removal.",
  },
 
];


  return (
   <section className="py-8 bg-white">
  <div className=" mx-auto px-4 md:px-12">
    {/* Heading */}


    <h2 className="text-blue-600  font-bold text-xs mb-5 text-center uppercase tracking-widest">
    Our Products
      </h2>
    <div className="text-center mb-12">
      <h2 className="text-[#0B3A82] font-bold text-3xl md:text-5xl uppercase tracking-wider">
    Our Screw Air Compressor Range
      </h2>
    </div>

    {/* Products */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-cyan-400">
      {products.map((item, index) => (
        <div
          key={index}
          className="p-5 border-r border-b border-cyan-400 last:border-r-0 hover:bg-gray-100 transition-all duration-300 group"
        >
          {/* Image */}
          <div className="h-52   flex items-center justify-center mb-4">
            <img
              src={item.image}
              alt={item.title}
              className=" object-cover h-full w-full transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Title */}
          <h3 className="text-[#0B3A82] font-bold text-lg uppercase leading-5 min-h-[48px]">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-md mt-2 leading-5 min-h-[70px]">
            {item.desc}
          </p>

          {/* Link */}
          <button className="mt-3 text-[#0B3A82] text-sm font-semibold uppercase tracking-wide hover:text-cyan-600">
            View Product →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}