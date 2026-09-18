"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import {
  ArrowRight,
  Zap,
  Shield,
  Volume2,
  Cog,
  BadgeCheck,
} from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

import ContactForm from "./PopupForm";

const slides = [
  {
    bg: "/bghero1.webp",
    machine: "/hero1.png",

    tagline: "PORTABLE HIGH PERFORMANCE",

    title: "CHICAGO PNEUMATIC",

    description:
      "Energy efficient, low maintenance and reliable air solutions for every industry.",

    logo: "/chicago-pneumatic-logo.png",
    logoAlt: "Chicago Pneumatic",

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

    description:
      "Designed for manufacturing, engineering, automotive, food processing, pharmaceuticals, textiles, and every industry that demands reliable compressed air.",

    logo: "/mark-compressors-logo.png",
    logoAlt: "Mark Compressors",

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
];

export default function HeroSlider() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="
          relative
          w-full
          h-[550px]
          lg:h-[680px]
          overflow-hidden
          bg-[#001938]
        "
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={700}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <div className="relative h-full w-full">
                {/* ================================================= */}
                {/* BACKGROUND */}
                {/* ================================================= */}

                <Image
                  src={slide.bg}
                  alt=""
                  fill
                  priority={index === 0}
                  quality={index === 0 ? 80 : 70}
                  sizes="100vw"
                  className="object-cover object-center"
                />

                {/* ================================================= */}
                {/* BLUE OVERLAY */}
                {/* ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#001938]/95
                    via-[#001938]/65
                    to-[#001938]/10
                  "
                />

                {/* ================================================= */}
                {/* MAIN CONTAINER */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    h-full
                    w-full
                    max-w-[1600px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-12
                  "
                >
                  <div
                    className="
                      grid
                      h-full
                      grid-rows-[35%_45%_20%]
                      lg:grid-rows-none
                      lg:grid-cols-2
                      lg:gap-4
                      items-center
                    "
                  >
                    {/* ================================================= */}
                    {/* LEFT CONTENT */}
                    {/* ================================================= */}

                    <div
                      className="
                        max-w-[620px]
                        w-full
                        h-full
                        flex
                        flex-col
                        justify-center
                        text-center
                        lg:text-left
                        mx-auto
                        lg:mx-0
                        pt-1
                        lg:pt-0
                      "
                    >
                      {/* TAGLINE */}

                      <span
                        className="
                          text-white/90
                          text-xs
                          sm:text-sm
                          md:text-base
                          lg:text-[18px]
                          font-semibold
                          tracking-[0.18em]
                          uppercase
                        "
                      >
                        {slide.tagline}
                      </span>

                      {/* TITLE */}

                      <h1
                        className="
                          mt-2
                          lg:mt-4
                          text-white
                          text-[30px]
                          sm:text-[44px]
                          md:text-[56px]
                          lg:text-[70px]
                          tracking-[-0.04em]
                          leading-[0.98]
                          font-black
                          uppercase
                          drop-shadow-[0_10px_40px_rgba(255,255,255,.15)]
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-2
                          lg:mt-4
                          text-white/80
                          text-xs
                          sm:text-base
                          md:text-lg
                          lg:text-[19px]
                          leading-relaxed
                          max-w-[600px]
                          mx-auto
                          lg:mx-0
                        "
                      >
                        {slide.description}
                      </p>

                      {/* ================================================= */}
                      {/* BRAND LOGO */}
                      {/* ================================================= */}

                      <div
                        className="
                          flex
                          justify-center
                          lg:justify-start
                          items-center
                          mt-3
                          sm:mt-5
                          lg:mt-6
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            justify-center
                            px-4
                            py-2
                            sm:px-5
                            sm:py-3
                            bg-white/90
                            backdrop-blur-md
                            border
                            border-white/60
                            rounded-full
                            shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                          "
                        >
                          <Image
                            src={slide.logo}
                            alt={slide.logoAlt}
                            width={110}
                            height={50}
                            sizes="110px"
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* ================================================= */}
                      {/* DESKTOP CTA */}
                      {/* ================================================= */}

                      <div
                        className="
                          hidden
                          md:flex
                          flex-wrap
                          justify-center
                          lg:justify-start
                          gap-4
                          mt-7
                        "
                      >
                        {/* GET QUOTE */}

                        <button
                          type="button"
                          onClick={() => setOpen(true)}
                          className="
                            group
                            relative
                            overflow-hidden
                            inline-flex
                            items-center
                            justify-center
                            h-[58px]
                            px-7
                            rounded-xl
                            bg-gradient-to-r
                            from-[#0A63FF]
                            to-[#1D8FFF]
                            text-white
                            font-semibold
                            shadow-[0_15px_40px_rgba(10,99,255,.35)]
                            hover:shadow-[0_20px_60px_rgba(10,99,255,.5)]
                            hover:-translate-y-1
                            transition-all
                            duration-300
                          "
                        >
                          <span
                            className="
                              relative
                              z-10
                              flex
                              items-center
                              gap-3
                            "
                          >
                            GET INSTANT QUOTE

                            <ArrowRight
                              size={18}
                              className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                              "
                            />
                          </span>

                          {/* Shine */}

                          <span
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-r
                              from-transparent
                              via-white/20
                              to-transparent
                              -skew-x-12
                              -translate-x-full
                              group-hover:translate-x-full
                              transition-transform
                              duration-700
                            "
                          />
                        </button>

                        {/* WHATSAPP */}

                        <a
                          href="https://wa.link/rntibs"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="WhatsApp Now"
                          className="
                            inline-flex
                            items-center
                            justify-center
                            h-[58px]
                            px-7
                            rounded-xl
                            border
                            border-white/30
                            bg-white/10
                            backdrop-blur-md
                            text-white
                            font-semibold
                            tracking-wide
                            transition-all
                            duration-300
                            hover:bg-white
                            hover:text-slate-900
                            hover:border-white
                            hover:shadow-lg
                          "
                        >
                          WhatsApp Now
                        </a>
                      </div>
                    </div>

                    {/* ================================================= */}
                    {/* RIGHT PRODUCT IMAGE */}
                    {/* ================================================= */}

                    <div
                      className="
                        flex
                        w-full
                        h-full
                        justify-center
                        items-center
                        lg:h-full
                        mt-0
                      "
                    >
                      <Image
                        src={slide.machine}
                        alt={slide.title}
                        width={800}
                        height={700}
                        priority={index === 0}
                        quality={index === 0 ? 85 : 75}
                        sizes="
                          (max-width: 640px) 90vw,
                          (max-width: 768px) 80vw,
                          (max-width: 1024px) 500px,
                          650px
                        "
                        className="
                          w-[280px]
                          sm:w-[380px]
                          md:w-[500px]
                          lg:w-[650px]
                          h-auto
                          max-h-[100%]
                          object-contain
                          drop-shadow-[0_40px_80px_rgba(0,0,0,.45)]
                        "
                      />
                    </div>

                    {/* ================================================= */}
                    {/* MOBILE CTA - DIRECTLY BELOW IMAGE */}
                    {/* ================================================= */}

                    <div
                      className="
                        md:hidden
                        flex
                        items-start
                        justify-center
                        w-full
                        h-full
                        pt-0
                        px-4
                      "
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(true)}
                        className="
                          group
                          relative
                          overflow-hidden
                          inline-flex
                          items-center
                          justify-center
                          h-[50px]
                          px-7
                          rounded-xl
                          bg-gradient-to-r
                          from-[#0A63FF]
                          to-[#1D8FFF]
                          text-white
                          text-sm
                          font-semibold
                          shadow-[0_15px_40px_rgba(10,99,255,.4)]
                          active:scale-95
                          transition
                        "
                      >
                        <span
                          className="
                            relative
                            z-10
                            flex
                            items-center
                            gap-3
                          "
                        >
                          GET INSTANT QUOTE

                          <ArrowRight
                            size={18}
                            className="
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          />
                        </span>

                        {/* Shine */}

                        <span
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-transparent
                            via-white/20
                            to-transparent
                            -skew-x-12
                            -translate-x-full
                            group-hover:translate-x-full
                            transition-transform
                            duration-700
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

      {/* ================================================= */}
      {/* CONTACT POPUP */}
      {/* ================================================= */}

      {open && (
        <ContactForm
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}