"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
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
import Form from "./Form";
import ContactForm from "./PopupForm";
import { useState } from "react";

const slides = [
  {
    bg: "/bghero1.webp",
    machine: "/hero1.png",

    tagline: "PORTABLE HIGH PERFORMANCE",

    title: "CHICAGO PNEUMATIC",

    pdf: "/pdf/DiselEutair.pdf",

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
        title: "Portable",
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

    tagline: "INDUSTRIAL COMPRESSED AIR",

    title: "MARK COMPRESSORS",
    pdf: "/pdf/mark.pdf",

    description:
      "Designed for manufacturing, engineering, automotive, food processing, pharmaceuticals, textiles, and every industry that demands .",

    features: [
      {
        icon: Shield,
        title: "Up To 35%",
        desc: "Energy Savings",
      },
      {
        icon: BadgeCheck,
        title: "Variable Speed",
        desc: "Drive Technology",
      },
      {
        icon: Zap,
        title: "High Air",
        desc: "Efficiency",
      },
      {
        icon: Cog,
        title: "Stable",
        desc: "Air Pressure",
      },
      {
        icon: Volume2,
        title: "Smart Touch",
        desc: "Controller",
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

  //   {
  //     bg: "/bghero1.webp",
  //     machine: "/hero3.png",

  //     tagline: "CLEAN & DRY COMPRESSED AIR",

  //     title: "AIR TREATMENT",

  //     pdf:"/pdf/airTreatment.pdf",

  //     description:
  //       "Designed to remove moisture, oil, and contaminants from compressed air systems, ensuring reliable operation, improved product quality, and longer equipment life.",

  //     features: [
  //       {
  //         icon: Zap,
  //         title: "Pure Compressed",
  //         desc: "Air",
  //       },
  //       {
  //         icon: Cog,
  //         title: "Advanced Air",
  //         desc: "Filtration",
  //       },
  //       {
  //         icon: Shield,
  //         title: "High Moisture",
  //         desc: "Removal",
  //       },
  //       {
  //         icon: BadgeCheck,
  //         title: "Corrosion",
  //         desc: "Protection",
  //       },
  //       {
  //         icon: Volume2,
  //         title: "Low Operating",
  //         desc: "Cost",
  //       },
  //     ],

  //     benefits: [
  //       "Energy Savings",
  //       "Pressure Stability",
  //       "Smart Monitoring",
  //       "Reduced Wear",
  //       "Longer Life",
  //     ],
  //   },
];
export default function HeroSlider() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <section className="relative h-[600px] lg:h-[670px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
         
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative min-h-[700px] lg:h-[680px]">
                {/* Background */}
                <Image
                  src={slide.bg}
                  alt=""
                  fill
                  sizes="100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Blue Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001938]/90 via-[#001938]/55 to-transparent" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-[1600px] mx-auto h-full px-4 sm:px-6 lg:px-12">
                  <div
                    className="
    grid
    lg:grid-cols-2
    
    lg:gap-6
    items-center
    h-full
    pt-5
    md:pt-10
    lg:py-0
  "
                  >
                    {/* LEFT */}
                    <div
                      initial={{ opacity: 0, y: 100 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
                      className="
  max-w-[620px]
  text-center
  lg:text-left
  mx-auto
  lg:mx-0
"
                    >
                      <span
                        className="
  text-white/90
  text-xs
  sm:text-sm
  md:text-base
  lg:text-[18px]
  font-semibold
  tracking-[0.2em]
  uppercase
"
                      >
                        {slide.tagline}
                      </span>

                      <h1
                        className="
  mt-4
  text-white
  text-[34px]
  sm:text-[44px]
  md:text-[58px]
  lg:text-[70px]
  tracking-[-0.04em]
  leading-[1]
  font-black
  uppercase
  whitespace-pre-line
  drop-shadow-[0_10px_40px_rgba(255,255,255,.15)]
"
                      >
                        {slide.title}
                      </h1>

                      <p
                        className="
  mt-4
  text-white/80
  text-sm
  sm:text-base
  md:text-lg
  lg:text-[20px]
  leading-relaxed
"
                      >
                        {slide.description}
                      </p>

                      <div
                        className="
    flex
    flex-wrap
    justify-center
    lg:justify-start
    items-center
    gap-3
    sm:gap-5
    mt-6
  "
                      >
                        {/* Mark Compressors */}
                        <div
                          className="
      flex items-center justify-center
      px-5 py-3
      bg-white/90 backdrop-blur-md
      border border-white/60
      rounded-full
      shadow-[0_8px_25px_rgba(0,0,0,0.15)]
     
    "
                        >
                          <Image
                            src="/mark-compressors-logo.png"
                            alt="Mark Compressors"
                            width={110}
                            height={60}
                            className="object-contain"
                          />
                        </div>

                        {/* Chicago Pneumatic */}
                        <div
                          className="
      flex items-center justify-center
      px-5 py-3
      bg-white/90 backdrop-blur-md
      border border-white/60
      rounded-full
      shadow-[0_8px_25px_rgba(0,0,0,0.15)]
      
    "
                        >
                          <Image
                            src="/chicago-pneumatic-logo.png"
                            alt="Chicago Pneumatic"
                            width={100}
                            height={60}
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <div
                        className="
    flex
    flex-col
    sm:flex-row
    justify-center
    lg:justify-start
    gap-4
    mt-7
  "
                      >
                        <div className="hidden md:block">
                          <button
                            onClick={() => {
                              setOpen(true);
                            }}
                            className="text-center
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
                                className=""
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
        
      "
                            />
                          </button>
                        </div>

                        <a
                          href="https://wa.link/rntibs"
                          download="Brochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Download Brochure"
                          className="hidden md:inline-flex items-center justify-center mt-1 h-14 px-8 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-slate-900 hover:border-white hover:shadow-lg"
                        >
                          WhatsApp Now
                        </a>
                      </div>
                    </div>

                    {/* CENTER PRODUCT */}
                    <div
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="flex justify-center"
                    >
                      <Image
                        src={slide.machine}
                        alt=""
                        width={800}
                        height={700}
                        className="
w-[280px]
sm:w-[380px]
md:w-[500px]
lg:w-[650px]
h-60
md:h-auto
mx-auto

drop-shadow-[0_40px_80px_rgba(0,0,0,.45)]
"
                      />
                    </div>
                    <div className="flex justify-center items-center">
                          <button
                            onClick={() => {
                              setOpen(true);
                            }}
                            className="text-center
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
       
      "
                            />
                          </button>
                        </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
