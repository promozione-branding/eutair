"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContactForm from "./PopupForm";
import { useState } from "react";

export default function Category() {

      const [open, setOpen] = useState(false);


  const products = [
  {
    title: "Chicago Pneumatic",
    image: "/hero1.png",
    link: "/chicago-pneumatic",
    desc: "Industry-proven compressed air systems delivering superior efficiency, durability, and productivity for modern industrial operations.",
  },
  {
    title: "MARK Compressors",
    image: "/hero2.png",
    link: "/mark-compressor",
    desc: "Innovative compressor solutions combining energy savings, operational reliability, and long-term performance excellence.",
  },
  {
    title: "Air Treatment",
    image: "/hero3.png",
    link: "/products/air-treatment",
    desc: "Comprehensive air purification solutions ensuring clean, dry, and contaminant-free compressed air for sensitive applications.",
  },
  {
    title: "Spares and Consumables",
    image: "/pro3.png",
    link: "/spares-and-consumables",
    desc: "Premium-quality genuine parts and consumables designed to maintain peak compressor performance and reduce downtime.",
  },
  {
    title: "Piping and Distribution Lines",
    image: "/pro4.jpeg",
    link: "/products/piping-and-distribution-lines",
    desc: "Customized air distribution networks engineered for maximum flow efficiency, reduced leakage, and optimal system performance.",
  },
];

  return (

    <>
    <section className="py-6 md:py-12 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto  px-1 md:px-0">
        {/* Heading */}
        <div className="text-center px-2 mb-6 md:mb-12">
          <div className="flex items-center justify-center gap-5 mb-4">
            <div className="h-[2px] w-16 bg-blue-600 rounded-full" />
            <h2 className="text-3xl lg:text-5xl font-bold uppercase">
              Our <span className="text-blue-600">Category</span> Range
            </h2>
            <div className="h-[2px] w-16 bg-blue-600 rounded-full" />
          </div>

          <p className="text-slate-600 text-lg">
            High-quality compressed air solutions for every industry.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden  hover:scale-105 transition duration-500">
  <Link href="https://wa.link/rntibs" >
    <div className="relative h-56 flex items-center justify-center bg-white p-4 md:p-6">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-contain p-3 md:p-5 transition duration-500 group-hover:scale-105"
      />
    </div>

    <div className="px-3 md:px-6 pt-3 md:pt-6 text-center">
      <h3 className="font-bold line-clamp-2 text-base md:text-lg text-slate-800 min-h-[64px]">
        {item.title}
      </h3>
    </div>
  </Link>

  <div className="p-3 md:p-6 pt-0">
    <button
      onClick={() => setOpen(true)}
      className="w-full rounded-lg border-2 border-blue-600 text-blue-600 font-semibold py-3 hover:bg-blue-600 hover:text-white transition"
    >
      REQUEST QUOTE
    </button>
  </div>
</div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="https://wa.link/rntibs"
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
          >
            VIEW ALL CATEGORIES
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>

          {open && <ContactForm isOpen={open} onClose={() => setOpen(false)}/>}

    </>
  );
}
