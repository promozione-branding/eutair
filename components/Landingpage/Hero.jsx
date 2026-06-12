"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Zap,
  Shield,
  Volume2,
  Cog,
  BadgeCheck,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    bg: "/bghero1.webp",
    machine: "/hero1.png",

    tagline: "HIGH PERFORMANCE",

    title: "SCREW AIR\nCOMPRESSORS",

    subtitle:
      "BUILT FOR RELIABILITY.\nDESIGNED FOR EFFICIENCY.",

    description:
      "Energy efficient, low maintenance and reliable air solutions for every industry.",

    features: [
      {
        icon: Cog,
        title: "5 HP - 500 HP",
        desc: "Power Range",
      },
      {
        icon: Zap,
        title: "VFD Models",
        desc: "Available",
      },
      {
        icon: Shield,
        title: "Energy Efficient",
        desc: "Technology",
      },
      {
        icon: Volume2,
        title: "Low Noise",
        desc: "Operation",
      },
      {
        icon: BadgeCheck,
        title: "Best-In-Class",
        desc: "Service Support",
      },
    ],

    benefits: [
      "Energy Efficient",
      "Low Maintenance",
      "Reliable Performance",
      "PAN India Service",
      "ISO Certified",
    ],
  },

  {
    bg: "/herobg2.webp",
    machine: "/hero2.png",

    tagline: "100% PURE AIR",

    title: "OIL FREE\nCOMPRESSORS",

    subtitle:
      "ZERO CONTAMINATION.\nMAXIMUM RELIABILITY.",

    description:
      "Designed for pharmaceutical, food processing and critical manufacturing industries.",

    features: [
      {
        icon: Shield,
        title: "100% Oil Free",
        desc: "Compressed Air",
      },
      {
        icon: BadgeCheck,
        title: "ISO 8573-1",
        desc: "Class 0",
      },
      {
        icon: Zap,
        title: "Lower Energy",
        desc: "Consumption",
      },
      {
        icon: Cog,
        title: "Minimal",
        desc: "Maintenance",
      },
      {
        icon: Volume2,
        title: "Quiet",
        desc: "Operation",
      },
    ],

    benefits: [
      "Food Grade Air",
      "Pharma Approved",
      "Zero Contamination",
      "Long Service Life",
      "Energy Saving",
    ],
  },

  {
    bg: "/bghero1.webp",
    machine: "/hero3.png",

    tagline: "SMART CONTROL",

    title: "VFD AIR\nCOMPRESSORS",

    subtitle:
      "LOWER ENERGY COSTS.\nHIGHER EFFICIENCY.",

    description:
      "Advanced Variable Frequency Drive technology for intelligent air management.",

    features: [
      {
        icon: Zap,
        title: "Up To 35%",
        desc: "Energy Savings",
      },
      {
        icon: Cog,
        title: "Variable Speed",
        desc: "Drive System",
      },
      {
        icon: Shield,
        title: "Stable",
        desc: "Air Pressure",
      },
      {
        icon: BadgeCheck,
        title: "Smart",
        desc: "Controller",
      },
      {
        icon: Volume2,
        title: "Reduced",
        desc: "Operating Noise",
      },
    ],

    benefits: [
      "Energy Savings",
      "Pressure Stability",
      "Smart Monitoring",
      "Reduced Wear",
      "Longer Life",
    ],
  },
];
export default function HeroSlider() {
  return (
    <section className="relative h-[720px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[720px]">
              {/* Background */}
              <img
                src={slide.bg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />

      

              {/* Blue Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#001938]/90 via-[#001938]/55 to-transparent" />

              {/* Content */}
              <div className="relative z-10 max-w-[1400px] mx-auto h-full px-8">
                <div className="grid grid-cols-[1.1fr_1fr_320px] items-center h-full">

                  {/* LEFT */}
  <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-[620px]"
>
  <span className="text-white/90 text-[18px] font-semibold tracking-[0.25em] uppercase">
    {slide.tagline}
  </span>

  <h1
    className="
      mt-5
      text-white
      text-[76px]
      xl:text-[88px]
      tracking-[-0.04em]
      leading-[0.9]
      font-black
      uppercase
      whitespace-pre-line
      drop-shadow-[0_10px_40px_rgba(255,255,255,.15)]
    "
  >
    {slide.title}
  </h1>

  <h2 className="mt-6 text-[#1d8fff] text-[34px] font-bold uppercase leading-tight whitespace-pre-line">
    {slide.subtitle}
  </h2>

  <p className="mt-7 text-white/80 text-[20px] leading-relaxed">
    {slide.description}
  </p>

  <div className="flex gap-5 mt-10">
    <button
      className="
      group
      relative
      overflow-hidden
      h-[62px]
      px-8
      rounded-xl
      bg-gradient-to-r
      from-[#0A63FF]
      to-[#1D8FFF]
      shadow-[0_15px_40px_rgba(10,99,255,.35)]
      hover:shadow-[0_20px_60px_rgba(10,99,255,.5)]
      transition-all
      duration-500
      hover:-translate-y-1
    "
    >
      <span className="relative z-10 flex items-center gap-3 text-white font-semibold">
        GET INSTANT QUOTE

        <ArrowRight
          size={18}
          className="group-hover:translate-x-1 transition"
        />
      </span>

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-transparent
        via-white/20
        to-transparent
        -skew-x-12
        translate-x-[-150%]
        group-hover:translate-x-[150%]
        transition-transform
        duration-1000
      "
      />
    </button>

    <button className="h-[62px] px-8 rounded-xl border border-white/30 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition">
      DOWNLOAD CATALOGUE
    </button>
  </div>
</motion.div>

                  {/* CENTER PRODUCT */}
                <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex justify-center"
>
  <Image
    src={slide.machine}
    alt=""
    width={600}
    height={700}
    className="
      
      object-cover
      drop-shadow-[0_40px_80px_rgba(0,0,0,.45)]
    
    "
  />
</motion.div>

                  {/* RIGHT FEATURES */}
                <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="
    relative
    overflow-hidden
    rounded-[28px]
    border
    border-white/10
    bg-gradient-to-b
    from-[#0b2f6d]/95
    to-[#071b42]/95
    backdrop-blur-xl
    px-8
    py-9
    shadow-[0_25px_80px_rgba(0,0,0,.35)]
  "
>
  <div className="space-y-6">
    {slide.features.map((feature, index) => {
      const Icon = feature.icon;

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.1,
          }}
          className="
            group
            flex
            items-center
            gap-4
            rounded-xl
            p-2
            transition-all
            duration-500
            hover:bg-white/5
            hover:translate-x-2
          "
        >
          <div
            className="
              h-12
              w-12
              rounded-full
              border
              border-white/20
              flex
              items-center
              justify-center
              text-white
              group-hover:border-blue-400
              group-hover:bg-blue-500/10
              transition-all
            "
          >
            <Icon size={20} />
          </div>

          <div>
            <p className="text-white font-semibold">
              {feature.title}
            </p>

            <p className="text-white/70 text-sm">
              {feature.desc}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.div>

                </div>

                {/* Bottom Benefits */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex flex-wrap gap-12 text-white">
                    <Benefit title="Energy Efficient" />
                    <Benefit title="Low Maintenance" />
                    <Benefit title="Reliable Performance" />
                    <Benefit title="PAN India Service Network" />
                    <Benefit title="ISO Certified Company" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Feature({
  icon,
  text,
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white">
        {icon}
      </div>

      <span className="text-white text-[17px] font-medium">
        {text}
      </span>
    </div>
  );
}

function Benefit({ title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-full border border-white/30 flex items-center justify-center">
        <BadgeCheck
          size={18}
          className="text-[#1d8fff]"
        />
      </div>

      <span className="text-[16px] font-medium">
        {title}
      </span>
    </div>
  );
}