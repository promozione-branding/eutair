
"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const industries = [
  {
    image: "/industries/automobile.webp",
    title: "Automobile",
  },
  {
    image: "/industries/pharma.jpg",
    title: "Pharma",
  },
  {
    image: "/industries/bev.jpg",
    title: "Beverage",
  },
  {
    image: "/industries/packing.jpg",
    title: "Packaging",
  },
  {
    image: "/industries/steel.jpg",
    title: "Steel",
  },
  {
    image: "/industries/textile.jpg",
    title: "Textile",
  },
  {
    image: "/industries/electronic.jpg",
    title: "Electronics",
  },
  {
    image: "/industries/manu.webp",
    title: "Manufacturing",
  },
];

const IndustryCard = ({ item }) => {
  return (
    <div className="group flex flex-col items-center py-2 text-center">

      {/* Image */}
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-blue-100 bg-blue-50 transition-all duration-300 group-hover:scale-105 group-hover:border-blue-600 group-hover:bg-blue-600 md:h-24 md:w-24">

        <Image
          src={item.image}
          alt={`${item.title} industry`}
          width={96}
          height={96}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
        />

        {/* Blue Hover Overlay */}
        <div className="absolute inset-0 rounded-full bg-blue-600/0 transition-all duration-300 group-hover:bg-blue-600/20" />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-sm font-semibold leading-5 text-gray-800 transition-colors duration-300 group-hover:text-blue-600 md:text-lg">
        {item.title}
      </h3>
    </div>
  );
};

export default function Industries() {
  return (
    <section className="overflow-hidden bg-white py-6 md:py-12">
      <div className="mx-auto max-w-7xl px-4">

        {/* ================= HEADING ================= */}
        <div className="mb-5 flex items-center justify-center gap-4 md:mb-10">

          <div className="h-1 w-12 rounded-full bg-blue-600 md:w-20" />

          <h2 className="text-center text-2xl font-extrabold uppercase md:text-4xl">
            Industries{" "}
            <span className="text-blue-600">
              We Serve
            </span>
          </h2>

          <div className="h-1 w-12 rounded-full bg-blue-600 md:w-20" />

        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 3.5,
              },
              768: {
                slidesPerView: 4,
              },
            }}
           
            className="pb-10"
          >
            {industries.map((item, index) => (
              <SwiperSlide key={index}>
                <IndustryCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden grid-cols-8 gap-8 lg:grid">
          {industries.map((item, index) => (
            <IndustryCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

