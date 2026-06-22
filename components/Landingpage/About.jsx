import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import {
  Building2,
  Stethoscope,
  ShoppingCart,
  Store,
  Warehouse,
} from "lucide-react";

const About = () => {




  // who we work with data

  const partners = [
  {
    title: "Government Hospital Tenders Bidders & Project Contractors",
    icon: Building2,
  },
  {
    title: "Private Hospital Purchase & Procurement Teams",
    icon: Stethoscope,
  },
  {
    title: "GeM Portal Institutional Procurement Buyers",
    icon: ShoppingCart,
  },
  {
    title: "Retailers & Wholesale Distributors",
    icon: Store,
  },
  {
    title: "Municipal Corporations & Urban Local Bodies",
    icon: Warehouse,
  },

   {
    title: "Facility Management & Waste Handling Companies",
    icon: Warehouse,
  },
];






  return (
    <div>





{/* who we work with section*/}
<Reveal>


<section className="relative py-3 bg-white overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl opacity-70"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-70"></div>

  <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-18">
    <div className="grid lg:grid-cols-2 md:gap-10 items-center">
      
      {/* Left Content */}
      <div>
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold mb-4">
          Industry Leader in Compressed Air Solutions
        </span>

        <h2 className="text-xl md:text-4xl   font-bold text-slate-900 leading-tight">
          Eutair Equipments LLP – Screw Air Compressors Manufacturer
        </h2>

        <div className="w-24 h-1 bg-cyan-600 rounded-full mt-3 mb-4"></div>

        <h3 className="text-xs  md:text-xl font-semibold text-slate-800 leading-relaxed mb-4">
          Leading Manufacturer, Trader, Exporter & Importer of Air Compressors,
          Air Dryers, Air Line Filters, Drain Valves and Industrial Filtration
          Solutions
        </h3>

        <p className="text-slate-800 leading-8 text-md md:text-lg  text-justify">
          Welcome to Eutair Equipments LLP, a trusted name in the compressed air
          and industrial equipment industry. We are a leading Manufacturer,
          Trader, Exporter, and Importer of high-quality Air Compressors, Air
          Dryers, Air Line Filters, Drain Valves, Ethanol Alcohol Based Hand
          Sanitizers, and MSS Series Screw Compressor Filters. With a commitment
          to quality, innovation, and customer satisfaction, we deliver reliable
          solutions that enhance operational efficiency across various
          industries.
        </p>

        <p className="text-slate-800 leading-8 text-lg text-justify">
          Our extensive product portfolio is designed to meet the diverse
          requirements of manufacturing units, engineering industries,
          pharmaceutical companies, food processing plants, automotive sectors,
          and commercial establishments. We focus on providing durable,
          energy-efficient, and performance-driven products that comply with
          industry standards.
        </p>
      </div>

      {/* Right Side */}
      <div className="relative">
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 p-4 lg:p-10">
          
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <h4 className="md:text-3xl font-bold text-cyan-600">100%</h4>
              <p className="text-slate-600 mt-2 text-sm">
                Quality Focused Solutions
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <h4 className="md:text-3xl font-bold text-cyan-600">24/7</h4>
              <p className="text-slate-600 mt-2 text-sm">
                Customer Support
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <h4 className="md:text-3xl font-bold text-cyan-600">Wide</h4>
              <p className="text-slate-600 mt-2 text-sm">
                Product Portfolio
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <h4 className="md:text-3xl font-bold text-cyan-600">Trusted</h4>
              <p className="text-slate-600 mt-2 text-sm">
                Industry Partner
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
            <h4 className="text-xl font-semibold mb-3">
              Compressed Air & Industrial Equipment Solutions
            </h4>
            <p className="leading-7 text-white/90">
              Delivering quality products, innovative technology, and reliable
              support to help industries achieve maximum productivity and
              operational efficiency.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
</Reveal>






 

    </div>
  );
};

export default About;
