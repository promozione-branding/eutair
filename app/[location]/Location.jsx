"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Hospital } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  Store,
  Hotel,
  Home,
  Leaf,
  Warehouse,
  Truck,
  Tags,
  Handshake,
} from "lucide-react";
import ProductRange from "@/components/city/Products";
import TrustedBrands from "@/components/Landingpage/Clients";
import WhyChooseUs from "@/components/city/WhyChoose";
import Cta from "@/components/Landingpage/Cta";
import Otherproduct from "@/components/Landingpage/Otherpro";
import FAQ from "@/components/city/FAQ";

const Location = ({city}) => {
  // const params = useParams();

  // const city = params?.location?.includes("-in-")
  //   ? params.location
  //       .split("-in-")[1]
  //       .split("-")
  //       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //       .join(" ")
  //   : "India";

  const data = [
    {
      title: "High-Quality Waste Disposal Bags",
      desc: "Our garbage bags are manufactured using premium-grade plastic materials that offer high strength, durability, and resistance to leakage and tearing.",
      icon: Warehouse,
      img: "/bag/product/10L Biohazard Garbage Bag.webp",
    },
    {
      title: "Multiple Size Options",
      desc: "We provide garbage bags in a variety of sizes, thicknesses, and colors to meet the needs of households, offices, hospitals, hotels, and industrial facilities.",
      icon: Leaf,
      img: "/bag/product/20 x 24 inch Disposable Garbage Bags.webp",
    },
    {
      title: "Manufacturer Direct Supply",
      desc: `As a direct Garbage Bag Manufacturer in ${city}, Sangam Plastic Industries offers competitive pricing and consistent supply for bulk orders and distributors.`,
      icon: Truck,
      img: "/bag/pro1.png",
    },
    {
      title: "Strong & Leak-Proof Design",
      desc: "Our garbage bags are designed to handle wet and dry waste efficiently while preventing spills, leaks, and unpleasant odors.",
      icon: Tags,
      img: "/bag/pro2.png",
    },
    {
      title: "Trusted by Multiple Industries",
      desc: `Our garbage bags are widely used by municipal corporations, hospitals, offices, hotels, restaurants, and waste management companies across ${city}.`,
      icon: Handshake,
      img: "/bag/pro3.png",
    },
  ];

  return (
    <>
      {/* Hero */}
      <div className="">
        <section
          style={{
            backgroundImage: "url('/bghero1.webp')",
            backgroundSize: "cover",
            objectPosition: "center",
          }}
          className="py-20 relative z-10"
        >
          <div className="absolute inset-0 bg-gray-900/60" />

          <h1 className="text-center font-serif leading-snug relative font-bold text-white text-2xl px-5 md:py-20 capitalize md:text-6xl">
            Screw Air Compressor in {city}
          </h1>
        </section>
      </div>

      <section className="bg-white py-3 md:py-13">
        <div className="max-w-7xl mx-auto px-5 lg:px-6">
          {/* Heading */}
          <div className="text-center mb-5 md:mb-10">
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Screw Air Compressor{" "}
              <span className="text-blue-600">in {city}</span>
            </h1>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-blue-600"></div>
          </div>

          {/* Content */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="md:text-lg  text-black mb-6">
                Looking for a high-performance{" "}
                <strong>Screw Air Compressor in {city}</strong>? EutAir is a
                trusted supplier of premium-quality screw air compressors
                designed to deliver consistent airflow, energy efficiency, and
                long-lasting performance for industrial applications.
              </p>

              <p className="md:text-lg  text-black mb-6">
                Whether you operate a manufacturing unit, automotive workshop,
                pharmaceutical facility, food processing plant, or textile
                factory, our screw air compressors are engineered to meet your
                day-to-day operational needs with maximum reliability. Enjoy
                stable air pressure, reduced downtime, and uninterrupted
                productivity.
              </p>

              <p className="md:text-lg  text-black">
                With years of industry expertise, EutAir provides advanced screw
                air compressor systems that help businesses lower energy costs,
                improve productivity, and minimize maintenance. Our commitment
                to superior quality, prompt service, and customer satisfaction
                has made EutAir one of the preferred suppliers of screw air
                compressors across {city} and surrounding regions.
              </p>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <Image
                  src="/products/KW upto 45, PSI 100, CFM 300 (1 model).webp"
                  alt="Screw Air Compressor"
                  width={700}
                  height={650}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-13 hidden md:absolute -left-6 rounded-2xl bg-blue-600 px-6 py-5 text-white shadow-xl">
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm">Years of Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workstation  */}
      <ProductRange />

      <TrustedBrands />
      <WhyChooseUs />

      <Cta />

      <Otherproduct></Otherproduct>

      {/* Industries */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-7 md:py-14">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-6 md:*:mb-12">
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">
              Benefits of Installing a{" "}
              <span className="text-blue-600">Screw Air Compressor</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Card */}
            <div className="group rounded-2xl bg-white p-4 text-center border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 group-hover:bg-blue-600 transition">
                <Store className="h-8 w-8 text-blue-600 group-hover:text-white transition" />
              </div>

              <h3 className="font-bold text-slate-900 mb-3">24/7 Operation</h3>

              <p className="text-sm  text-slate-600">
                Continuous operation ensures uninterrupted production without
                unexpected downtime.
              </p>
            </div>

            <div className="group rounded-2xl bg-white p-4 text-center border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 group-hover:bg-green-600 transition">
                <Hotel className="h-8 w-8 text-green-600 group-hover:text-white transition" />
              </div>

              <h3 className="font-bold text-slate-900 mb-3">Stable Pressure</h3>

              <p className="text-sm  text-slate-600">
                Provides steady airflow with consistent pressure for reliable
                equipment performance.
              </p>
            </div>

            <div className="group rounded-2xl bg-white p-4 text-center border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 group-hover:bg-orange-600 transition">
                <Factory className="h-8 w-8 text-orange-600 group-hover:text-white transition" />
              </div>

              <h3 className="font-bold text-slate-900 mb-3">
                Lower Maintenance
              </h3>

              <p className="text-sm  text-slate-600">
                Reduced operating and maintenance costs help lower overall
                ownership expenses.
              </p>
            </div>

            <div className="group rounded-2xl bg-white p-4 text-center border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 group-hover:bg-purple-600 transition">
                <Hospital className="h-8 w-8 text-purple-600 group-hover:text-white transition" />
              </div>

              <h3 className="font-bold text-slate-900 mb-3">Energy Saving</h3>

              <p className="text-sm  text-slate-600">
                High efficiency design reduces electricity consumption and
                operating costs.
              </p>
            </div>

            <div className="group hidden md:block rounded-2xl bg-white p-4 text-center border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 group-hover:bg-indigo-600 transition">
                <Home className="h-8 w-8 text-indigo-600 group-hover:text-white transition" />
              </div>

              <h3 className="font-bold text-slate-900 mb-3">Quiet Operation</h3>

              <p className="text-sm  text-slate-600">
                Low-noise technology creates a safer and more comfortable
                working environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="mx-auto lg:px-15 px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src="/products/Hydraulic Power Packs.webp"
              alt="Euair "
              className="w-full h-102 object-cover rounded-2xl "
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-[42px] font-bold mb-5">
              Why Industries in {city} Trust EutAir ?
            </h2>

            <p className="text-black mb-6 md:leading-relaxed md:  text-lg">
              {city} is one of India’s biggest industrial and commercial hubs,
              where steady compressed air really matters in day-to-day
              production processes. At EutAir we support factories with reliable
              compressor systems, technical know-how and a pretty fast customer
              service response . Our seasoned crew will help you figure out the
              best compressor for your setup, based on airflow needs, required
              pressure, how many hours it runs, and also energy consumption
              goals.
            </p>

            <Link
              href={"/contact"}
              className="mx-auto px-4 py-3 text-lg text-white rounded-md bg-[#1b68fe] hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <FAQ city={city} />
    </>
  );
};

export default Location;
