"use client";

import {
  Car,
  Pill,
  CupSoda,
  Package,
  Factory,
  Shirt,
  Cpu,
  HardHat,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const industries = [
  {
    icon: Car,
    title: "Automobile",
  },
  {
    icon: Pill,
    title: "Pharma",
  },
  {
    icon: CupSoda,
    title: "Beverage",
  },
  {
    icon: Package,
    title: "Packaging",
  },
  {
    icon: Factory,
    title: "Steel",
  },
  {
    icon: Shirt,
    title: "Textile",
  },
  {
    icon: Cpu,
    title: "Electronics",
  },
  {
    icon: HardHat,
    title: "Manufacturing",
  },
];

const IndustryCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group flex flex-col items-center text-center py-2">
      <div className="w-20 h-20 rounded-full border border-blue-100 bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600">
        <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="mt-4 text-sm md:text-lg font-semibold text-gray-800 leading-5">
        {item.title}
      </h3>
    </div>
  );
};

export default function Industries() {
  return (
    <section className="py-6 md:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-5 md:mb-10">
          <div className="w-12 md:w-20 h-1 bg-blue-600 rounded-full"></div>

          <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-center">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>

          <div className="w-12 md:w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2.2}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
              slidesPerView: 2,
            },
              480: {
                slidesPerView: 2,
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

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-8 gap-8">
          {industries.map((item, index) => (
            <IndustryCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}