"use client";

import Image from "next/image";
import {
  Filter,
  Droplets,
  Cog,
  Settings,
  Wrench,
  Cpu,
  Thermometer,
  Fan,
} from "lucide-react";

import Enquiry from "@/components/Enquiry";
import { CheckCircle2, Boxes, ArrowRight } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

export default function SpareConsumable() {
  const benefits = [
    "Genuine, OEM-Equivalent & Compatible Spare Parts",
    "Improves Compressor Performance & Efficiency",
    "Minimizes Downtime & Unexpected Breakdowns",
    "Extends Compressor Service Life",
    "Reduces Maintenance & Operating Costs",
    "Fast Availability with Technical Support",
    "Ideal for Preventive & Corrective Maintenance",
    "Suitable for Various Industrial Applications",
  ];

  const chooseUs = [
    "Genuine, OEM-Equivalent & Compatible Spare Parts",
    "Fast Product Availability & Technical Assistance",
    "Reliable Support for Preventive Maintenance",
    "High-Quality Components for Long Equipment Life",
  ];

  const brands = [
    { name: "Atlas Copco", logo: "/1.png" },
    { name: "Chicago Pneumatic", logo: "/2.webp" },
    { name: "Ingersoll Rand", logo: "/3.png" },
    { name: "Kaeser", logo: "/4.jpg" },
    { name: "ELGi", logo: "/5.jpg" },
    { name: "Kirloskar", logo: "6.jfif" },
    { name: "CompAir", logo: "/7.jfif" },
    { name: "Gardner Denver", logo: "/8.jfif" },
    { name: "Sullair", logo: "/9.png" },
    { name: "Hitachi", logo: "/10.png" },
    { name: "Doosan", logo: "/11.jfif" },
    { name: "Boge", logo: "/cp.jpeg" },
    { name: "FS Curtis", logo: "/mark.jpg" },
    { name: "ABAC", logo: "/client/23.png" },
  ];

  const products = [
    { title: "Air Filters", icon: Filter },
    { title: "Oil Filters", icon: Droplets },
    { title: "Oil Separators", icon: Filter },
    { title: "Line Filters & Filter Elements", icon: Cpu },
    { title: "Compressor Lubricants & Oils", icon: Droplets },
    { title: "Airend Spare Parts", icon: Cog },
    { title: "Valves & Control Components", icon: Settings },
    { title: "Service & Maintenance Kits", icon: Wrench },
    { title: "Sensors & Monitoring Devices", icon: Thermometer },

    { title: "Belts, Couplings & Hoses", icon: Cpu },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="bg-slate-50">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0B2B4F] to-[#144F8B]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)]"></div>

          <div className="relative mx-auto max-w-7xl px-6 py-7 lg:py-9 xl:py-20 lg:px-8">
            <div className="max-w-4xl">
              <span className="rounded-full border border-cyan-400/30 bg-gray-400/10 px-5 py-2 text-sm font-medium text-cyan-300">
                Spares & Consumables
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight text-white lg:text-6xl">
                Spares and Consumables
              </h2>

              <p className="mt-6 max-w-3xl md:text-lg md:leading-8 text-slate-200">
                Keep your compressed air system operating at peak efficiency
                with premium-quality Compressor Spares & Consumables from Eutair
                Equipments LLP. We supply genuine, OEM-equivalent, and
                high-performance replacement parts for a wide range of
                industrial screw air compressors, helping industries minimize
                downtime, improve equipment reliability, and maximize
                operational productivity.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="tel:+919717159766"
                  className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-600"
                >
                  Talk to Eutair
                </Link>

                <button
                  onClick={() => setOpen(true)}
                  href="/contact"
                  className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="mx-auto max-w-7xl px-6 py-6 md:py-10 lg:px-8">
          <div className="grid gap-7 md:gap-14 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
                Why Choose Us
              </span>

              <h2 className="mt-3 text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900">
                Why Choose Our Compressor Spares & Consumables?
              </h2>

              <p className="mt-6 md:text-lg leading-8 text-slate-600">
                At Eutair Equipments LLP, we understand that the performance of
                a compressed air system depends on the quality of its
                components. That's why we provide durable and reliable spares
                designed to maintain compressor efficiency, extend equipment
                life, and reduce unexpected breakdowns across industrial
                applications.
              </p>
            </div>

            <div className="grid gap-3  md:gap-5">
              {chooseUs.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border bg-white p-3 md:p-6 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 text-cyan-600" />
                  <p className="md:font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}

        <section className="bg-white py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
                Key Benefits
              </span>

              <h2 className="mt-3 text-4xl font-bold text-slate-900">
                Key Benefits
              </h2>

              <p className="mx-auto mt-3 md:mt-6 max-w-3xl md:text-lg text-slate-600">
                Using quality compressor spares and consumables helps maintain
                system performance while reducing maintenance costs and
                improving equipment reliability.
              </p>
            </div>

            <div className="mt-5 md:mt-14 grid gap-3 md:gap-6 grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-slate-50 p-3 md:p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <CheckCircle2 className="mb-5 h-10 w-10 text-cyan-600" />
                  <p className="text-sm md:text-base md:font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 md:py-10 px-5 bg-slate-50">
          <div className="container mx-auto px-3 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Spare Parts Portfolio
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                Our Product Range
              </h2>

              <p className="mt-4 leading-5 md:leading-6 text-slate-600">
                Comprehensive spare parts and maintenance components for
                industrial compressed air systems.
              </p>
            </div>

            <div className="mt-10  grid gap-4 grid-cols-2 lg:grid-cols-5">
              {products.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-3xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-2 text-sm md:text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-7 lg:py-9 xl:py-15">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need Compressor Spares & Consumables?
            </h2>

            <p className="mt-6 md:text-lg md:leading-8 text-cyan-100">
              Ensure uninterrupted performance with premium-quality compressor
              spares and consumables from Eutair Equipments LLP. Our team is
              ready to help you find the right replacement parts for your
              compressed air system.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-5">
              <Link
                href="tel:+919717159766"
                className="rounded-xl bg-white px-5 md:px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                Contact Us
              </Link>

              <button
                onClick={() => setOpen(true)}
                href="/contact"
                className="flex items-center gap-2 rounded-xl border border-white bg-transparent px-5 md:px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <section className="relative overflow-hidden py-6 md:py-10 px-5 md:px-10">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />

        {/* Decorative Blur */}
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="container relative z-10 mx-auto lg:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
              Trusted Partners
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 lg:text-5xl">
              Brands We Support
            </h2>

            <p className="mt-3 text-md     md:leading-8 text-slate-600">
              We provide genuine, OEM-equivalent, and compatible spare parts for
              leading compressor brands:
            </p>
          </div>

          {/* Logo Grid */}
          <div className="mt-5 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-5">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="group flex h-50 items-center justify-center rounded-3xl border border-white bg-white/80 p-8 shadow-lg shadow-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={200}
                  height={80}
                  className="h-full w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </div>
            ))}

            {/* Last Card */}
            <div className=" hidden md:flex h-40 items-center justify-center rounded-3xl border border-dashed border-sky-300 bg-white/60 p-8 text-center shadow-lg shadow-slate-100">
              <p className="font-semibold text-slate-700">
                And many other
                <br />
                leading brands
              </p>
            </div>
          </div>
        </div>
      </section>

      <Enquiry isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
