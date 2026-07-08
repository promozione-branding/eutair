"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, RotateCw } from "lucide-react";
const products = [
  {
    name: "Screw Air Compressors",
    link: "/chicago-pneumatic",
    thumbnail: "/hero1.png",
    description:
      "High performance industrial compressed air solutions engineered for maximum reliability.",
    frames: Array.from(
      { length: 7 },
      (_, i) => `/3601/oil-injected/${i + 1}.png`
    ),
  },

  {
    name: "VFD Screw Compressors",
    link: "/mark-compressor",
    thumbnail: "/hero2.png",
    description:
      "Variable frequency technology delivering superior energy savings.",
    frames: Array.from(
      { length: 10 },
      (_, i) => `/3601/mark/${i + 1}.png`
    ),
  },

  {
    name: "Air Treatment Systems",
    link: "/air-treatment-service",
    thumbnail: "/hero3.png",
    description:
      "Advanced air treatment solutions for clean and efficient compressed air.",
    frames: Array.from(
      { length: 10 },
      (_, i) => `/3601/Product-3/${i + 1}.png`
    ),
  },

  {
    name: "Spares & Consumables",
    link: "/spares-and-consumables",
    thumbnail: "/pro3.png",
    description:
      "Premium-quality genuine parts and consumables for peak performance.",
    frames: Array.from(
      { length: 10 },
      (_, i) => `/3601/Product-4/${i + 1}.png`
    ),
  },

  {
    name: "Piping & Distribution Lines",
    link: "/piping-and-distribution-lines",
    thumbnail: "/pro4.jpeg",
    description:
      "Efficient air distribution networks engineered for industrial applications.",
    frames: Array.from(
      { length: 10 },
      (_, i) => `/3601/Product-5/${i + 1}.png`
    ),
  },
];

export default function ProductRange() {
const [activeProduct, setActiveProduct] = useState(products[0]);
const [frameIndex, setFrameIndex] = useState(0);
const [hasInteracted, setHasInteracted] = useState(false);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);

const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.clientX);
  setHasInteracted(true);
};

const handleMouseUp = () => {
  setIsDragging(false);
};

const handleMouseMove = (e) => {
  if (!isDragging) return;

  const delta = e.clientX - startX;

  if (Math.abs(delta) > 8) {
    if (delta > 0) {
      setFrameIndex((prev) =>
        prev === 0
          ? activeProduct.frames.length - 1
          : prev - 1
      );
    } else {
      setFrameIndex((prev) =>
        (prev + 1) % activeProduct.frames.length
      );
    }

    setStartX(e.clientX);
  }
};



  return (
    <section className="py-6 hidden md:block bg-white">
  <div className="w-full mx-auto px-6 lg:px-12">
        <div className="text-center">
          <p className=" text-center mb-2
                text-sky-600
                font-semibold
                uppercase
                tracking-[2px]
                md:tracking-[3px]
                text-xs
                sm:text-sm
              ">
            Our Bestseller Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Engineered For Every Industry
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-16">

          {/* LEFT PRODUCT VIEWER */}
      <div
  className={`
      lg:col-span-7
    relative
    overflow-hidden
    rounded-[40px]
    border
    border-slate-200
    hover:border-blue-300
    min-h-[650px]
    bg-blue-200/20
    ${isDragging ? "cursor-grabbing" : "cursor-grab"}
  `}


  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseUp}
>





{/* Grid */}
<div
  className="
  absolute
  inset-0
  opacity-[0.04]
  bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
  bg-[size:50px_50px]
"
/>
            {/* Ambient Glow */}
            <div className="absolute left-20 top-20 h-[300px] w-[300px] rounded-full bg-blue-300/20 blur-[120px]" />


            <div className="absolute left-8 top-8 z-20">
              <span
                className="
                rounded-full
                bg-black/10
                backdrop-blur-md
                px-5
                py-2
                text-xs
                tracking-[0.2em]
                uppercase
                text-black
              "
              >
                Interactive Product View drag to see 
              </span>
            </div>

            <div className="flex items-center justify-center h-[450px]">

{!hasInteracted && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.7, 1, 0.7],
      x: [-20, 20, -20],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      left-1/2
      top-1/2
      z-30
      -translate-x-1/2
      -translate-y-1/2
      pointer-events-none
    "
  >
    <div
      className="
        rounded-full
        bg-black/75
        backdrop-blur-md
        px-6
        py-3
        text-sm
        font-medium
        text-white
        shadow-2xl
      "
    >
      ← Drag to Rotate 360° →
    </div>
  </motion.div>
)}

              <AnimatePresence mode="wait">
              <Image
  src={activeProduct.frames[frameIndex]}
  alt={activeProduct.name}
  draggable={false}
  width={1000}
  height={1000}
  className="
    h-[620px]
    object-contain
    select-none
    pointer-events-none
    
  "
/>
            
            
       </AnimatePresence>
            </div>
<div
  className="
    absolute
    inset-0
    z-20
    flex
    flex-col
    justify-between
    pointer-events-none
    p-8
  "
>
  {/* Top Right Badge */}
  <div className="flex justify-end">
    <div
      className="
        flex
        items-center
        gap-2
        rounded-full
        bg-white/80
        backdrop-blur-md
        px-4
        py-2
        text-sm
        font-semibold
        text-slate-800
        shadow-lg
      "
    >
      <RotateCw size={16} className="animate-spin" />
      360° Interactive View
    </div>
  </div>

  {/* Bottom Content */}
  <div className="max-w-[550px] pointer-events-auto">
    <h3
      className="
        text-4xl
        lg:text-5xl
        font-black
        text-slate-900
        leading-tight
      "
    >
      {activeProduct.name}
    </h3>

    <p
      className="
        mt-4
        text-base
        text-slate-600
        leading-relaxed
      "
    >
      {activeProduct.description}
    </p>


<Link href={activeProduct.link}>
  <button
    className="
      group
      mt-8
      inline-flex
      items-center
      gap-3
      rounded-full
      bg-gradient-to-r
      from-blue-600
      to-cyan-500
      px-7
      py-4
      font-semibold
      text-white
      shadow-[0_20px_50px_rgba(37,99,235,.35)]
      hover:scale-105
      transition-all
    "
  >
    Explore Product

    <ArrowRight
      size={18}
      className="group-hover:translate-x-1 transition"
    />
  </button>
</Link>





  </div>
</div>
          </div>

          {/* RIGHT PRODUCT LIST */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-5">
              {products.map((product) => (
                <button
                  key={product.name}
               onClick={() => {
  setActiveProduct(product);
  setFrameIndex(0);
}}
                  className={`
                    group
                    rounded-3xl
                    border
                    p-4
                    text-left
                    transition-all
                    duration-300

                    ${
                      activeProduct.name === product.name
                        ? "border-blue-500 bg-blue-50 shadow-xl"
                        : "border-slate-200 hover:border-blue-300 hover:shadow-lg"
                    }
                  `}
                >
              <img
  src={product.thumbnail}
  className="
    h-35
    mx-auto
    object-cover
    transition-transform
    duration-500
    group-hover:scale-110
  "
/>

                  <h4 className=" font-semibold text-slate-900">
                    {product.name}
                  </h4>

                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                    {product.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}