"use client";

import {
  BadgeCheck,
  UserCheck,
  ShieldCheck,
  Wrench,
  Truck,
  Leaf,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Form from "./Form";

const features = [
  {
    icon: BadgeCheck,
    title: "Authorized Distributor",
  },
  {
    icon: UserCheck,
    title: "Expert & Trained Engineers",
  },
  {
    icon: ShieldCheck,
    title: "AMC & After Sales Support",
  },
  {
    icon: Wrench,
    title: "Genuine Spare Parts",
  },
  {
    icon: Truck,
    title: "Quick Delivery Pan India",
  },
  {
    icon: Leaf,
    title: "Energy Efficient Solutions",
  },
];

const FeatureCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 p-5 md:p-7 flex flex-col items-center justify-center text-center h-full">
      <div className="h-20 w-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition">
        <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition" />
      </div>

      <h3 className="font-bold text-base md:text-lg md:leading-7 text-slate-800">
        {item.title}
      </h3>
    </div>
  );
};

export default function WhyChoose() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
      <div>
        <div className="mb-5 md:mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
            WHY CHOOSE <span className="text-blue-600">EUTAIR?</span>
          </h2>

          <div className="mt-3 h-1 w-24 rounded-full bg-blue-600 mx-auto" />
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={16}
            centeredSlides={false}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
            }}
            className="pb-10"
          >
            {features.map((item, index) => (
              <SwiperSlide key={index}>
                <FeatureCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {features.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>

      <div>
        <Form />
      </div>
    </div>
  );
}