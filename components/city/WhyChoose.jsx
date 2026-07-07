"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Zap,
  Volume2,
  Box,
  Wrench,
  Settings,
  Headset,
  IndianRupee,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Industrial-grade screw air compressors built for continuous operation and maximum reliability.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Reduce electricity consumption with advanced energy-saving compressor technology.",
  },
  {
    icon: Volume2,
    title: "Low Noise Operation",
    desc: "Designed with low-noise and low-vibration technology for a better working environment.",
  },
  {
    icon: Box,
    title: "Compact Design",
    desc: "Space-saving compressors that fit easily into modern industrial facilities.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    desc: "Complete installation, commissioning, and setup by experienced engineers.",
  },
  {
    icon: Settings,
    title: "Genuine Spare Parts",
    desc: "Original spare parts with scheduled preventive maintenance support.",
  },
//   {
//     icon: Headset,
//     title: "Quick Technical Support",
//     desc: "Fast after-sales service and technical assistance across Delhi.",
//   },
//   {
//     icon: IndianRupee,
//     title: "Best Value Pricing",
//     desc: "Competitive pricing with excellent long-term return on your investment.",
//   },
];

export default function WhyChooseUs({city}) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-7 md:pt-8">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Why Choose EutAir
          </span>

          <h2 className="mt-5 text-2xl md:text-5xl font-bold text-slate-900">
            Why Choose{" "}
            <span className="text-blue-600">
              EutAir for Screw Air Compressors in <span className="capitalize">{city}</span>?
            </span>
          </h2>

          <p className="mt-6 text-lg md:leading-8 text-slate-600">
            At <strong>EutAir</strong>, we understand that every industry has
            unique compressed air requirements. That's why we provide customized
            compressor solutions, expert technical guidance, and dependable
            after-sales support to keep your operations running efficiently.
          </p>
        </div>

        {/* Content */}
        <div className="mt-6 md:mt-16 grid grid-cols-2 gap-4 md:gap-7 lg:grid-cols-3 items-center">
          {/* Left Image */}
         

          {/* Right Features */}
         
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition group-hover:bg-blue-600">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm md:leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
       
      </div>
    </section>
  );
}