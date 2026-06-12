"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Oil Injected Screw Compressors",
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
    thumbnail: "/hero2.png",
    description:
      "Variable frequency technology delivering superior energy savings.",

    frames: Array.from(
      { length: 36 },
      (_, i) => `/360/vfd/${i + 1}.webp`
    ),
  },

    {
    name: "VFD Screw Compressorsyhu",
    thumbnail: "/hero2.png",
    description:
      "Variable frequency technology delivering superior energy savings.",

    frames: Array.from(
      { length: 36 },
      (_, i) => `/360/vfd/${i + 1}.webp`
    ),
  },


    {
    name: "VFD Screw Compressorsyy",
    thumbnail: "/hero2.png",
    description:
      "Variable frequency technology delivering superior energy savings.",

    frames: Array.from(
      { length: 36 },
      (_, i) => `/360/vfd/${i + 1}.webp`
    ),
  },


    {
    name: "VFD Screw Compressorsfh",
    thumbnail: "/hero2.png",
    description:
      "Variable frequency technology delivering superior energy savings.",

    frames: Array.from(
      { length: 36 },
      (_, i) => `/360/vfd/${i + 1}.webp`
    ),
  },


    {
    name: "VFD Screw Compressorsfyh",
    thumbnail: "/hero2.png",
    description:
      "Variable frequency technology delivering superior energy savings.",

    frames: Array.from(
      { length: 36 },
      (_, i) => `/360/vfd/${i + 1}.webp`
    ),
  },
];

export default function ProductRange() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

const [frameIndex, setFrameIndex] = useState(0);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);

const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.clientX);
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
    <section className="py-15 bg-white">
      <div className="w-full mx-auto px-15">
        <div className="text-center">
          <p className="text-blue-600 uppercase tracking-[0.3em] text-sm font-medium">
            Our Bestseller Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Engineered For Every Industry
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 mt-16">

          {/* LEFT PRODUCT VIEWER */}
      <div
  className="
  lg:col-span-7
  relative
  overflow-hidden
  rounded-[40px]
  border
  border-slate-200 hover:border-blue-300
 
  min-h-[650px]
  bg-blue-200/20

"
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
                Interactive Product View
              </span>
            </div>

            <div className="flex items-center justify-center h-[520px]">
              <AnimatePresence mode="wait">
              <img
  src={activeProduct.frames[frameIndex]}
  alt={activeProduct.name}
  draggable={false}
  className="
    h-[420px]
    object-contain
    select-none
    pointer-events-none
    
  "
/>
            
            
       </AnimatePresence>
            </div>

          <div className="absolute bottom-20  left-10 right-10 z-20">
  <h3 className="text-5xl font-black text-black leading-snug">
    {activeProduct.name}
  </h3>

 

   <p className="text-sm mt-4 font-black text-black">
    {activeProduct.description}
  </p>


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
</div>
          </div>

          {/* RIGHT PRODUCT LIST */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-5">
              {products.map((product) => (
                <button
                  key={product.name}
                  onClick={() => setActiveProduct(product)}
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