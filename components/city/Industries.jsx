"use client";

import Image from "next/image";
import {
  Clock3,
  Gauge,
  Wallet,
  Zap,
  ShieldCheck,
  Wrench,
  Volume2,
  Factory,
  Box,
  BadgeCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "24/7 Continuous Operation",
    desc: "Designed for uninterrupted industrial production without frequent shutdowns.",
  },
  {
    icon: Gauge,
    title: "Stable Air Pressure",
    desc: "Consistent airflow and pressure ensure reliable machine performance.",
  },
  {
    icon: Wallet,
    title: "Lower Operating Costs",
    desc: "Reduce maintenance and operating expenses over the compressor's lifespan.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Consumes less electricity while delivering maximum compressed air output.",
  },
  {
    icon: ShieldCheck,
    title: "Long Service Life",
    desc: "Built with durable components for years of dependable industrial use.",
  },
  {
    icon: Wrench,
    title: "Minimal Downtime",
    desc: "Reliable performance keeps your production running smoothly.",
  },
  {
    icon: Volume2,
    title: "Low Noise Operation",
    desc: "Creates a quieter and more comfortable working environment.",
  },
  {
    icon: Factory,
    title: "Higher Productivity",
    desc: "Reliable compressed air improves overall manufacturing efficiency.",
  },
  {
    icon: Box,
    title: "Compact Design",
    desc: "Space-saving construction allows flexible installation in any facility.",
  },
  {
    icon: BadgeCheck,
    title: "Heavy-Duty Performance",
    desc: "Engineered for demanding industrial applications and continuous use.",
  },
];

export default function Industries() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Benefits
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
            Benefits of Installing a{" "}
            <span className="text-blue-600">Screw Air Compressor</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A screw air compressor is an ideal choice for businesses that need a
            continuous and dependable supply of compressed air. Built for
            demanding industrial applications, these compressors deliver
            superior performance, excellent energy efficiency, smoother
            operation, and lower operating costs compared to conventional
            compressors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 group-hover:bg-blue-600 transition">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
              <Image
                src="/compressor-benefits.jpg"
                alt="Benefits of Screw Air Compressor"
                width={700}
                height={700}
                className="w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-blue-600 px-6 py-5 text-white shadow-xl">
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-sm uppercase tracking-wide">
                Continuous Operation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}