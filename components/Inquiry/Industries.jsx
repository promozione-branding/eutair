"use client";

import {
  Car,
  Pill,
  CupSoda,
  Package,
  Factory,
  Shirt,
  Cpu,
  HardHat,
} from "lucide-react";

const industries = [
  {
    icon: Car,
    title: "Automobile",
  },
  {
    icon: Pill,
    title: "Pharma",
  },
  {
    icon: CupSoda,
    title: "Beverage",
  },
  {
    icon: Package,
    title: "Packaging",
  },
  {
    icon: Factory,
    title: "Steel",
  },
  {
    icon: Shirt,
    title: "Textile",
  },
  {
    icon: Cpu,
    title: "Electronics",
  },
  {
    icon: HardHat,
    title: "Manufacturing",
  },
];

export default function Industries() {
  return (
    <section className="py-6 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-5 md:mb-10">
          <div className="w-12 md:w-20 h-1 bg-blue-600 rounded-full"></div>

          <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-center">
            Industries <span className="text-blue-600">We Serve</span>
          </h2>

          <div className="w-12 md:w-20 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Industries */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-12">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-17 h-17 rounded-full border border-blue-100 bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition">
                  <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition" />
                </div>

                <h3 className="mt-4 text-sm md:text-lg font-semibold text-gray-800 leading-5">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}