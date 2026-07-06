"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import ContactForm from "./PopupForm";

export default function ProductSlider() {
  const [open, setOpen] = useState(false);

  const products = [
    {
      title: "MSS 75 - Oil-Injected Screw Compressor",
      image: "/products/MSS 75 - Oil-Injected Screw Compressor.jpg",
      href: "/products/screw-air-compressors",
    },
    {
      title: "MSS 7.5 kW - 75 kW Variable Speed Screw Compressors",
      image:
        "/products/MSS 7.5 kW - 75 kW Variable Speed Screw Compressors.webp",
      href: "/products/MSS 7.5 kW - 75 kW Variable Speed Screw Compressors.webp",
    },
    {
      title: "MDS 35 CFM - 1000 CFM Refrigerated Dryers",
      image: "/products/MDS 35 CFM - 1000 CFM Refrigerated Dryers.jpg",
      href: "/products/air-dryers",
    },
    {
      title: "Chicago Pneumatic CFM: 81 - 187, BAR: 7 - 12, PSI: 100 – 175",
      image: "/hero1.png",
      href: "/products/air-filters",
    },
    {
      title: "CFM: 455 - 650, BAR: 10.5 - 14, PSI: 100 – 200",
      image: "/products/CFM 455 – 650, BAR 10.5 - 14, PSI 100 – 200.webp",
      href: "/products/air-receivers",
    },
    {
      title: "CFM: 1060 - 1200, BAR: 16 - 25, PSI: 232 – 355",
      image: "/products/CFM 1060 – 1200, BAR 16 - 25, PSI 232 – 355.webp",
      href: "/products/compressor-spares",
    },
  ];

  return (
    <>
      <section className="py-6 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto  px-1 md:px-0">
          {/* Heading */}
          <div className="text-center px-2 mb-6 md:mb-12">
            <div className="flex items-center justify-center gap-5 mb-4">
              <div className="h-[2px] w-16 bg-blue-600 rounded-full" />
              <h2 className="text-3xl lg:text-5xl font-bold uppercase">
                Our <span className="text-blue-600">Premium</span> Products
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
                <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden  hover:scale-105  transition duration-500">
                  <Link href={item.href}>
                    <div className="relative h-56 bg-white p-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-5"
                      />
                    </div>

                    <div className="px-6 pt-6 text-center">
                      <h3 className="font-bold line-clamp-3 text-base md:text-lg min-h-[64px]">
                        {item.title}
                      </h3>
                    </div>
                  </Link>

                  <div className="p-6 pt-0 mt-2">
                    <button
                      onClick={() => setOpen(true)}
                      className="w-full rounded-lg border-2 border-blue-600 text-blue-600 font-semibold py-3 hover:bg-blue-600 hover:text-white transition"
                    >
                      REQUEST PRICE
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Button */}
          <div className="text-center mt-4 md:mt-12">
            <Link
              href="https://wa.link/rntibs"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
            >
              VIEW ALL PRODUCTS
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
