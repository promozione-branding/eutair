"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import ContactForm from "./PopupForm";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductSlider() {
  const [open, setOpen] = useState(false);

  const products = [
    {
      title: "MSS 75 - Oil-Injected Screw Compressor",
      image: "/products/MSS 75 - Oil-Injected Screw Compressor.jpg",
      href: "/mark-compressor/mss-75-oil-injected-screw-compressors",
    },
    {
      title: "MSS 7.5 kW - 75 kW Variable Speed Screw Compressors",
      image:
        "/products/MSS 7.5 kW - 75 kW Variable Speed Screw Compressors.webp",
      href: "/mark-compressor/mss-variable-speed-screw-compressors",
    },
    {
      title: "MDS 35 CFM - 1000 CFM Refrigerated Dryers",
      image: "/products/MDS 35 CFM - 1000 CFM Refrigerated Dryers.jpg",
      href: "/mark-compressor/mds-35-cfm-1000-cfm-refrigerated-dryers",
    },
    {
      title: "Chicago Pneumatic CFM: 81 - 187, BAR: 7 - 12, PSI: 100 – 175",
      image: "/hero1.png",
      href: "/chicago-pneumatic/cfm-81-187",
    },
    {
      title: "CFM: 455 - 650, BAR: 10.5 - 14, PSI: 100 – 200",
      image: "/products/CFM455650BAR10514PSI100200.webp",
      href: "/chicago-pneumatic/cfm-455-650",
    },
    {
      title: "CFM: 1060 - 1200, BAR: 16 - 25, PSI: 232 – 355",
      image: "/products/CFM10601200BAR1625PSI232355.webp",
      href: "/chicago-pneumatic/cfm-1060-1200",
    },
  ];

  return (
    <>
      <section className="py-6 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <div id="products" className="max-w-7xl mx-auto  px-1 md:px-0">
          {/* Heading */}
          <div className="text-center px-2 mb-6 md:mb-12">
            <div className="flex items-center justify-center gap-5 mb-4">
              <div className="h-[2px] w-16 bg-blue-600 rounded-full" />
              <h2 className="text-2xl lg:text-5xl font-bold uppercase">
                Industrial Screw Air Compressors &
  Air Solutions
              </h2>
              <div className="h-[2px] w-16 bg-blue-600 rounded-full" />
            </div>

            <p className="text-slate-600 md:text-lg">
              Reliable Industrial Screw Air Compressors for Efficient Compressed Air Supply
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
            spaceBetween={15}
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
            className="px-2"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                <div  onClick={(e) => {
                          e.preventDefault(); // Prevent Link navigation
                          e.stopPropagation(); // Stop event bubbling
                          setOpen(true);
                        }}>
                  <div className="group bg-white rounded-3xl border border-slate-200 overflow-hidden  hover:scale-105  transition duration-500">
                    <div className="relative h-56 bg-white md:p-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain md:p-5"
                      />
                    </div>

                    <div className="px-6 pt-6 flex justify-center items-center text-center">
                      <h3 className="font-bold line-clamp-3 text-[12px] md:text-lg min-h-[64px]">
                        {item.title}
                      </h3>
                    </div>

                    <div className="p-3 md:p-6 pt-0 md:mt-2">
                      <button
                       
                        className="w-full rounded-lg border-2 text-sm md:text-base border-blue-600 text-blue-600 font-semibold py-3 hover:bg-blue-600 hover:text-white transition"
                      >
                        REQUEST PRICE
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Button */}
        <div className="text-center mt-4 md:mt-12">
  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
    
    {/* View All Products */}
    <Link
      href="/mark-compressor"
      className="flex items-center justify-center gap-3 w-auto px-3  rounded-xl bg-blue-600 md:px-8 py-4 text-white font-semibold hover:bg-blue-700 transition  sm:w-auto"
    >
      VIEW ALL PRODUCTS
      <ArrowRight size={20} />
    </Link>

    {/* Call & WhatsApp */}
    <div className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto">
      
      {/* Call */}
      <a
       href="tel:+919717159766"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-white font-semibold hover:bg-red-600 transition"
      >
        <Phone size={20} />
        Call Now
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.link/rntibs"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-white font-semibold hover:bg-[#1ebe5d] transition"
      >
        <FaWhatsapp size={25} />
        WhatsApp
      </a>

    </div>
  </div>
</div>
        </div>
      </section>
      {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
