"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function TrustedBrands() {
  const brands = [
  { image: "/client/24.png", alt: "Adani" },
  { image: "/client/20.png", alt: "Daikin" },
  { image: "/client/19.png", alt: "Tata" },
  { image: "/client/21.png", alt: "Maruti Suzuki" },
  { image: "/client/22.png", alt: "Mahindra" },
  { image: "/client/23.png", alt: "Hitachi" },
  { image: "/client/1.png", alt: "Posh" },
  { image: "/client/2.png", alt: "Ying Tong" },
  { image: "/client/3.png", alt: "Boyd" },
  { image: "/client/4.png", alt: "Ganesh" },
  { image: "/client/5.jpeg", alt: "Intech Foundation" },
  { image: "/client/6.jpeg", alt: "Star Plus Battery" },
  { image: "/client/7.png", alt: "Tixo" },
  { image: "/client/8.jpeg", alt: "Aashirdvad Agro Industries" },
  { image: "/client/9.png", alt: "Kirloskar" },
  { image: "/client/10.png", alt: "Sullair" },
  { image: "/client/11.jpeg", alt: "MV Electrosystem pvt ltd" },
  { image: "/client/12.png", alt: "Progress Rail" },
  { image: "/client/13.png", alt: "Titagarh" },
  { image: "/client/14.png", alt: "Estilo Sports" },
  { image: "/client/15.jpeg", alt: "Indian Oil" },
  { image: "/client/16.png", alt: "Shubham Pack" },
  { image: "/client/17.png", alt: "Alutech" },
  { image: "/client/18.png", alt: "Construction" },
];

  return (
    <section
      id="industries"
      className="relative py-6 md:py-10 bg-white border-y border-cyan-200 overflow-hidden"
    >
      <div className="w-full px-10 mx-auto ">
        <h3 className="text-center text-blue-950 font-bold tracking-[0.25em] text-sm mb-5 md:mb-10">
          TRUSTED BY LEADING INDUSTRIES
        </h3>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {brands.map((logo, index) => (
            <SwiperSlide key={index}>
              <div
                className="
      h-24
      rounded-2xl
      border
      border-slate-200
      bg-white
      flex
      items-center
      justify-center
      px-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
              >
                <Image
                  src={logo.image}
                  alt={logo.alt}
                  width={200}
                  height={180}
                  className="
    h-23
    w-auto
    object-contain
 
    transition-all
    duration-500
 
  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
