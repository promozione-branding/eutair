"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const certificates = [
  {
    image: "/cert2.png",
    title: "ISO 9001:2015",
  },
  {
    image: "/cert3.png",
    title: "CE Certified",
  },
  {
    image: "/cert4.png",
    title: "MSME Certificate",
  },
];

export default function Certificates() {
  return (
    <section className="py-3 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-4 md:mb-12">
         

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Our Certificates
          </h2>

          
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {certificates.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl  hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100">

                <div className="relative h-60 md:h-110">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover p-2 md:p-6"
                  />
                </div>

                

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}