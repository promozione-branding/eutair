"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "Automobile Industries",
    image: "/products/CFM 455 – 650, BAR 10.5 - 14, PSI 100 – 200.webp", // Rename image to avoid spaces
    review:
      "Excellent product quality and very fast delivery. Their support team guided us perfectly in selecting the right air compressor.",
  },
  {
    name: "Amit Verma",
    company: "Metal Manufacturing",
    image: "/products/MSS 75 - Oil-Injected Screw Compressor.jpg",
    review:
      "Professional team, genuine spare parts, and excellent after-sales support. Highly recommended.",
  },
  {
    name: "Neha Gupta",
    company: "Steel Works Ltd.",
    image: "/products/Post & Ground Rod Drivers.webp",
    review:
      "We use this driver for solar fencing and earthing projects. The build quality is exceptional.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-8 md:py-15 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-blue-600 font-semibold uppercase tracking-[3px] text-sm">
              Testimonials
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              What Clients Say
            </h2>

            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop
              onSlideChange={(swiper) =>
                setActiveIndex(swiper.realIndex)
              }
              className="mt-4 md:mt-8"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100">
                    {/* Rating */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="#facc15"
                          className="text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-base md:text-lg text-slate-600 leading-7 md:leading-8 italic">
                      "{item.review}"
                    </p>

                    {/* Client */}
                    <div className="mt-8">
                      <h4 className="font-bold text-xl text-slate-900">
                        {item.name}
                      </h4>

                      <p className="text-slate-500 mt-1">
                        {item.company}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[620px]  aspect-square">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-3xl bg-white blur-3xl scale-110"></div>

              <Image
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                fill
                priority
                className="relative object-contain rounded-3xl border-4 md:border-8 border-white shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}