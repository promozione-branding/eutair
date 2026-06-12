"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "We purchased a Screw Air Compressor from Eutair Equipments LLP and have been extremely satisfied with its performance. The product is energy-efficient, reliable, and has significantly improved our operational efficiency. Their support team was professional throughout the process.",
    name: "Operations Manager",
    designation: "Manufacturing Industry",
  },
  {
    text: "Eutair Equipments LLP provided us with high-quality Air Dryers and Air Line Filters that perfectly matched our requirements. The product quality and timely delivery exceeded our expectations. We highly recommend them for industrial compressed air solutions.",
    name: "Purchase Head",
    designation: "Engineering Company",
  },
  {
    text: "As a trusted Screw Air Compressor Manufacturer, Eutair Equipments LLP delivers exactly what they promise. The compressor performance has been excellent, and their technical guidance helped us choose the right solution for our facility.",
    name: "Plant Manager",
    designation: "Automotive Sector",
  },
  {
    text: "We have been sourcing industrial filtration products from Eutair Equipments LLP for several years. Their product quality, competitive pricing, and customer service make them a reliable business partner for our operations.",
    name: "Procurement Manager",
    designation: "Pharmaceutical Industry",
  },
  {
    text: "The team at Eutair Equipments LLP was responsive, knowledgeable, and committed to meeting our requirements. From product selection to delivery, the entire experience was seamless. We look forward to continuing our business relationship with them.",
    name: "Director",
    designation: "Food Processing Company",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const current = testimonials[index];

  return (

    <>
    
    <section className="relative h-full w-full  bg-[url('/TESTIMONIAL.avif')] bg-cover bg-fixed  bg-center py-8 md:py-16 text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08372C]/50"></div>

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-white">Our Testimonials</span>
        
        </h2>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="italic text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              {current.text}
            </p>

            {/* Profile */}
            <div className="flex flex-col items-center">
           
              <h4 className="text-lg font-semibold">{current.name}</h4>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-blue-500" />
          </button>
        </div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-blue-500" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-[#176BB0]" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>


    </>
  );
}
