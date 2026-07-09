"use client";

import {
  ShieldCheck,
  Wrench,
  Cog,
  Settings,
  Gauge,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Enquiry from "@/components/Enquiry";
import { useState } from "react";


export default function GenuineParts() {
    const [open, setOpen] = useState(false);
  
  return (
    <main className="bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_40%)]" />

        <div className="container mx-auto px-6 py-10 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Service & Support Solutions
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-5xl">
              EutAir Service & Genuine Parts Support
            </h1>

            <p className="mt-8 text-2xl font-medium text-slate-200">
              Reliable Service Solutions for Maximum Equipment Performance and
              Long-Term Reliability
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.link/rntibs" className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                Request Service Support
              </a>

              <button  onClick={() => setOpen(true)} className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm">
                Request Parts Information
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
     <section className="relative py-10 overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
  <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-50" />
  <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-50" />

  <div className="container relative z-10 mx-auto px-6 lg:px-8">
    <div className="grid items-center gap-16 lg:grid-cols-2">
      
      {/* Content Side */}
      <div>
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Service Excellence
        </span>

        <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 ">
          Reliable Service Solutions for Maximum Equipment Performance
        </h2>

        <div className="mt-8 space-y-6">
          <p className="text-lg leading-9 text-slate-900">
            Maintaining compressed air equipment goes beyond routine
            maintenance. Consistent performance, operational efficiency, and
            equipment longevity depend on timely servicing, genuine
            replacement components, and expert technical support.
          </p>

          <p className="text-lg leading-9 text-slate-900">
            Comprehensive Service & Parts Support helps industrial
            facilities reduce unplanned downtime, extend equipment life, and
            maintain optimal operating performance through preventive
            maintenance programs, technical assistance, repair services, and
            access to genuine spare parts and consumables.
          </p>

          <p className="text-lg leading-9 text-slate-900">
            Whether supporting a single compressor installation or a large
            compressed air network, service solutions are designed to keep
            critical operations running smoothly and efficiently.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <span className="text-sm font-semibold text-slate-900">
              Preventive Maintenance
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <span className="text-sm font-semibold text-slate-900">
              Genuine Spare Parts
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <span className="text-sm font-semibold text-slate-900">
              Technical Support
            </span>
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="relative">
        <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl" />

        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-2xl">
          <img
            src="/drill-cp.jpeg"
            alt="Service Support"
            className="h-[550px] w-full rounded-[24px] object-cover"
          />
        </div>

        {/* Floating Card */}
        <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-white p-6 shadow-2xl lg:block">
          <h4 className="text-3xl font-bold text-blue-600">24/7</h4>
          <p className="mt-1 text-sm text-slate-600">
            Service & Technical Support
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Section Heading */}
      <section className="pb-7">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Service Excellence
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
              Solutions That Keep Your Operations Running
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
              Industrial operations depend on reliable compressed air systems to
              maintain productivity and process continuity. Structured service
              programs, quality replacement parts, and technical expertise help
              ensure equipment operates at peak performance while minimizing
              lifecycle costs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="">
        <div className="container mx-auto space-y-10 px-6 lg:px-8">

          {/* Card 1 */}
          <ServiceCard
            icon={<ShieldCheck size={36} />}
            title="Comprehensive Maintenance Programs"
            content="Proactive maintenance services are designed to maximize equipment reliability and reduce unexpected failures.

Regular inspections, preventive maintenance schedules, performance assessments, and technical evaluations help identify potential issues before they affect production."
            benefits={[
              "Reduced unplanned downtime",
              "Improved equipment reliability",
              "Better system performance",
              "Predictable maintenance planning",
              "Lower long-term operating costs",
              "Extended equipment lifespan",
            ]}
          />

          {/* Card 2 */}
          <ServiceCard
            icon={<Cog size={36} />}
            title="Genuine Spare Parts & Service Kits"
            content="The quality of replacement components directly affects equipment performance and reliability.

Genuine spare parts are designed to match original equipment specifications, ensuring proper fitment, reliable operation, and consistent performance throughout the equipment lifecycle."
            benefits={[
              "Compressor spare parts",
              "Air filters and oil filters",
              "Separator elements",
              "Service and maintenance kits",
              "Valves and control components",
              "Air treatment consumables",
              "Replacement wear parts",
            ]}
          />

          {/* Card 3 */}
          <ServiceCard
            icon={<Wrench size={36} />}
            title="Emergency Repairs & Technical Support"
            content="Unexpected equipment failures can impact production schedules and operational performance.

Responsive repair and technical support services help diagnose issues quickly, implement corrective actions, and restore equipment to normal operation with minimal disruption."
            benefits={[
              "Breakdown assistance",
              "Technical troubleshooting",
              "Root cause analysis",
              "Performance diagnostics",
              "Corrective maintenance",
              "System health evaluations",
            ]}
          />

          {/* Card 4 */}
          <ServiceCard
            icon={<Settings size={36} />}
            title="Extended Equipment Protection"
            content="Long-term service programs help protect equipment investments and provide additional operational confidence.

Structured maintenance practices, documented service history, and the use of approved replacement components contribute to improved equipment reliability and reduced lifecycle risk."
            benefits={[
              "Improved asset protection",
              "Reduced repair uncertainty",
              "Better maintenance planning",
              "Enhanced equipment value retention",
              "Increased operational confidence",
            ]}
          />

          {/* Card 5 */}
          <ServiceCard
            icon={<Gauge size={36} />}
            title="Refurbishment & System Restoration"
            content="Older compressed air equipment can often be restored to reliable operating condition through refurbishment and modernization programs.

Refurbishment services help improve performance, extend asset life, and delay the need for major capital replacement investments."
            benefits={[
              "Major component replacement",
              "Mechanical restoration",
              "Performance upgrades",
              "Control system improvements",
              "System reliability enhancements",
              "Operational efficiency improvements",
            ]}
          />

          {/* Card 6 */}
          <ServiceCard
            icon={<BarChart3 size={36} />}
            title="Performance Lubricants & Consumables"
            content="Specialized lubricants and consumables play a critical role in compressor efficiency, reliability, and equipment life.

High-quality oils, lubricants, and maintenance consumables help reduce wear, improve cooling performance, and support longer service intervals."
            benefits={[
              "Compressor lubricants",
              "Synthetic oils",
              "Maintenance consumables",
              "Air treatment consumables",
              "Replacement filtration products",
            ]}
          />
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Why Service & Genuine Parts Matter
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-700">
              A compressed air system represents a critical utility asset for
              many industrial operations. Without proper maintenance and quality
              replacement components, equipment performance can decline over
              time, leading to higher energy consumption, increased breakdown
              risk, and rising operating costs.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {[
                "Improve system reliability",
                "Reduce maintenance-related disruptions",
                "Extend equipment life",
                "Optimize operating efficiency",
                "Improve productivity",
                "Protect long-term equipment investments",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="bg-slate-950 py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-blue-600 to-cyan-500 p-12 text-center">
            <h2 className="text-4xl font-bold text-white">
              Let's Discuss Your Service Requirements
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-blue-50">
              Whether the objective is preventive maintenance, spare parts
              support, emergency repairs, refurbishment, or long-term equipment
              reliability, the right service strategy can help maximize
              operational performance and reduce lifecycle costs.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900">
                Request Service Support
              </button>

              <button className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white">
                Request Parts Information
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-10">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-8 text-center text-4xl font-bold text-slate-900">
            Frequently Asked Question
          </h2>

          <div className="space-y-6">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            <Enquiry isOpen={open} onClose={() => setOpen(false)} />
      
    </main>
  );
}

function ServiceCard({ icon, title, content, benefits }) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-100">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          {icon}
        </div>

        <h3 className="text-3xl font-bold text-slate-900">{title}</h3>
      </div>

      <p className="mt-8 whitespace-pre-line leading-8 text-slate-600">
        {content}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {benefits.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-blue-600" />
            <span className="text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqData = [
  {
    q: "1. What services are typically covered under equipment support programs?",
    a: "Service support may include preventive maintenance, scheduled inspections, breakdown assistance, technical troubleshooting, performance evaluations, spare parts support, and system optimization recommendations depending on operational requirements.",
  },
  {
    q: "2. Why should genuine spare parts be used for maintenance?",
    a: "Genuine spare parts are designed to meet original equipment specifications, ensuring proper fit, reliable performance, improved durability, and reduced risk of unexpected failures or compatibility issues.",
  },
  {
    q: "3. How often should compressed air equipment be serviced?",
    a: "Service intervals depend on equipment type, operating hours, environmental conditions, and application requirements. Regular preventive maintenance helps maintain performance and reduce the risk of costly downtime.",
  },
  {
    q: "4. Can refurbishment extend the life of existing equipment?",
    a: "Yes. Refurbishment and restoration programs can improve equipment reliability, restore performance, replace worn components, and help extend the operational life of existing assets.",
  },
  {
    q: "5. How do maintenance programs help reduce operating costs?",
    a: "Structured maintenance programs help identify issues early, improve equipment efficiency, reduce breakdown frequency, optimize energy performance, and minimize unplanned repair expenses over the long term.",
  },
];