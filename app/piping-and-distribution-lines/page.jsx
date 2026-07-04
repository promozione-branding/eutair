"use client";

import Link from "next/link";
import {
  Wind,
  ShieldCheck,
  Settings,
  Wrench,
  Droplets,
  Filter,
  Gauge,
  ArrowRight,
  Phone,
  CheckCircle2,
  Factory,
} from "lucide-react";

import {
  Network,
  Pipe,
  Workflow,
  


} from "lucide-react";


import { useState } from "react";
import Enquiry from "@/components/Enquiry";

const whyPoints = [
  "Ensures Efficient Compressed Air Distribution Across the Facility",
  "	Minimizes Pressure Drop and Energy Loss",
  "Supports Reliable System Performance and Productivity",
	


];







const products = [
  {
    title: "Compressed Air Piping Systems",
    description:
      "Engineered piping networks that deliver compressed air efficiently from the compressor to every point of use.",
    icon: Network,
  },
  {
    title: "Aluminum Piping Systems",
    description:
      "Lightweight, corrosion-resistant piping solutions that provide excellent airflow and simplified installation.",
    icon: Pipe,
  },
  {
    title: "Air Distribution Networks",
    description:
      "Professionally designed distribution systems that ensure balanced airflow and consistent pressure throughout industrial facilities.",
    icon: Workflow,
  },
  {
    title: "Pipe Fittings & Accessories",
    description:
      "A complete range of connectors, valves, brackets, and accessories for secure and reliable piping installations.",
    icon: Wrench,
  },
  
  {
    title: "Plant Expansion & System Upgrades",
    description:
      "Customized piping solutions that support facility expansion, increased production capacity, and changing operational requirements.",
    icon: Factory,
  },

  {
    title: "Turnkey Piping Installation",
    description:
      "End-to-end design, supply, installation, and commissioning of compressed air piping systems tailored to your industrial needs.",
    icon: Settings,
  },
];



const benefits = [
  "Efficient Compressed Air Delivery Across the Plant",
  "Reduced Pressure Loss and Energy Consumption",
  "Improved System Performance and Reliability",
  "Supports Plant Expansion and Future Upgrades",
  "Durable, Corrosion-Resistant Piping Solutions",
  "Optimized Airflow for Maximum Productivity",
  "Easy Integration with Existing Compressed Air Systems",
  "Cost-Effective and Low-Maintenance Infrastructure",
];

const solutions = [
  {
    icon: Droplets,
    title: "Compressed Air Piping Systems",
    description:
      "Engineered piping networks that deliver compressed air efficiently from the compressor to every point of use.",
  },
  {
    icon: Wind,
    title: "Aluminum Piping Systems",
    description:
      "Lightweight, corrosion-resistant piping solutions that provide excellent airflow and simplified installation.",
  },
  {
    icon: Filter,
    title: "Air Distribution Networks",
    description:
      "Professionally designed distribution systems that ensure balanced airflow and consistent pressure throughout industrial facilities.",
  },
  {
    icon: Gauge,
    title: "Pipe Fittings & Accessories",
    description:
      "A complete range of connectors, valves, brackets, and accessories for secure and reliable piping installations.",
  },
  {
    icon: ShieldCheck,
    title: "Plant Expansion & System Upgrades",
    description:
      "Customized piping solutions that support facility expansion, increased production capacity, and changing operational requirements.",
  },
  {
    icon: Factory,
    title: "Turnkey Piping Installation",
    description:
      "End-to-end design, supply, installation, and commissioning of compressed air piping systems tailored to your industrial needs.",
  },
];



export default function AirTreatmentSolutionsPage() {
     const [open, setOpen] = useState(false);
  return (
    <main className="bg-white">
      {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071B2E] via-[#0B3155] to-[#124A79]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_40%)]" />

  <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 ">
    <div className="max-w-4xl">

    

      <h2 className="mt-6 text-3xl sm:text-5xl font-bold leading-tight text-white">
      Piping & Distribution Lines
      </h2>

      <p className="mt-5 text-[15px] sm:text-base lg:text-lg leading-7 sm:leading-8 text-white">
       Ensure efficient and reliable compressed air delivery with high-quality Piping & Distribution Line Solutions from Eutair Equipments LLP. We provide expertly designed piping systems that transport compressed air from the compressor to every point of use with minimal pressure loss, ensuring maximum system efficiency and consistent performance.


      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          href="/contact"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-[#00AEEF] px-6 py-4 font-semibold text-white hover:bg-cyan-500 transition"
        >
          Talk to Eutair
          <Phone size={18} />
        </Link>

        <button
         onClick={() => setOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white hover:bg-white/20 transition"
        >
          Request a Quote
          <ArrowRight size={18} />
        </button>
      </div>

    </div>
  </div>
</section>

      {/* Why */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
            

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                  Why Piping & Distribution Lines Matter
              </h2>

              <p className="mt-6 text-slate-600 text-lg leading-8">
              A well-designed compressed air piping network is essential for maintaining consistent air pressure, minimizing energy losses, and ensuring efficient air distribution throughout your facility. Proper system design not only improves equipment performance but also reduces maintenance requirements and operating costs.
              </p>
            </div>

            <div className="grid gap-5">
              {whyPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <CheckCircle2 />
                  </div>

                  <p className="text-slate-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sky-600 font-semibold uppercase tracking-wider">
              Key Benefits
            </span>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Key Benefits
            </h2>

            <p className="mt-4 text-lg text-slate-600 leading-8">
             Our piping and distribution line solutions are designed to improve compressed air system performance while ensuring long-term operational efficiency.
            </p>
          </div>

          <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-7 shadow-sm border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition"
              >
                <CheckCircle2 className="text-sky-600 mb-5" size={28} />

                <p className="text-slate-700 font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
          

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
             Our Piping & Distribution Solutions
            </h2>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-8">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#071B2E] via-[#0B3155] to-[#124A79] py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/10 backdrop-blur mb-8">
            <Settings className="text-white" size={38} />
          </div>

          <h2 className="text-4xl font-bold text-white">
            Need Expert Piping & Distribution Solutions?
          </h2>

          <p className="mt-6 text-lg text-blue-100 leading-8">
           Improve the performance of your compressed air system with professionally engineered Piping & Distribution Line Solutions from Eutair Equipments LLP. Our experts are ready to help you design, install, and optimize a piping network that delivers maximum efficiency and long-term reliability.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00AEEF] px-8 py-4 font-semibold text-white transition hover:bg-cyan-500"
            >
              Enquire Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

       <Enquiry isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}