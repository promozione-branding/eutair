"use client";
import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  Wrench,
  ShieldCheck,
  Factory,
  ArrowRight,
} from "lucide-react";
import Enquiry from "@/components/Enquiry";
export default function AMC() {
  const [isOpen, setOpen] = useState(false);

  const benefits = [
    "Planned maintenance for improved operational uptime",
    "Reduced risk of unexpected breakdowns and production interruptions",
    "Improved equipment efficiency and reliability",
    "Better lifecycle management of compressed air assets",
    "Predictable maintenance planning and support",
    "Lower long-term maintenance and repair costs",
  ];

  const industries = [
    "Manufacturing Plants",
    "Automotive & Auto Component Industries",
    "Engineering & Fabrication Facilities",
    "Food & Beverage Processing Units",
    "Pharmaceutical Manufacturing",
    "Textile & Packaging Industries",
    "Chemical & Process Industries",
    "Utility and Compressor Rooms",
    "Production Support Infrastructure",
  ];

  const applications = [
    "Production air systems",
    "Plant utility air networks",
    "Critical process air applications",
    "Multi-compressor installations",
    "Compressed air treatment systems",
    "Industrial maintenance programs",
  ];

  const features = [
    {
      title: "Preventive Maintenance Programs",
      description:
        "Scheduled inspections and servicing activities designed to identify potential issues before they impact operations.",
    },
    {
      title: "Periodic System Health Checks",
      description:
        "Regular evaluation of compressors, dryers, filters, piping systems, and related equipment to maintain reliable performance.",
    },
    {
      title: "Performance Monitoring Support",
      description:
        "Assessment of operating conditions to help ensure efficient compressed air generation and distribution.",
    },
    {
      title: "Maintenance Planning",
      description:
        "Service schedules aligned with equipment operating hours, production requirements, and plant conditions.",
    },
    {
      title: "Priority Service Readiness",
      description:
        "Improved response preparedness for critical maintenance requirements and operational support.",
    },
    {
      title: "Spare Parts Recommendations",
      description:
        "Guidance on consumables and replacement components to support uninterrupted system operation.",
    },
  ];

  const faqs = [
    {
      question: "1. What is included in AMC Services?",
      answer:
        "AMC Services typically include scheduled preventive maintenance visits, equipment inspections, performance assessments, maintenance planning, and service support aimed at improving reliability and operational continuity.",
    },
    {
      question: "2. Who should consider AMC Services?",
      answer:
        "Any industrial facility that depends on compressed air for production, automation, utilities, or critical processes can benefit from AMC Services to reduce downtime and maintain efficient operations.",
    },
    {
      question: "3. Can AMC Services be customized?",
      answer:
        "Yes. Maintenance programs can be tailored according to equipment type, operating conditions, plant criticality, operating hours, and specific maintenance requirements.",
    },
    {
      question: "4. How do AMC Services improve equipment life?",
      answer:
        "Regular inspections, preventive maintenance, timely servicing, and condition monitoring help reduce wear, identify issues early, and maintain equipment in optimal working condition.",
    },
    {
      question:
        "5. Why is preventive maintenance important for compressed air systems?",
      answer:
        "Preventive maintenance helps identify potential issues before they lead to equipment failure, reducing unexpected downtime, improving system efficiency, and supporting consistent plant operations.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        style={{ backgroundImage: "url(/bghero1.webp)" }}
        className="relative overflow-hidden bg-cover bg-center  lg:h-[70vh] xl:h-[80vh] text-white"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-7xl mx-auto relative px-4 py-8 md:py-20">
          <div className="max-w-4xl">
            <span className=" rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              AMC Services
            </span>

            <h1 className="mt-6 text-2xl md:text-4xl   font-bold leading-tight">
              Structured Maintenance Support for Reliable Compressed Air
              Operations
            </h1>

            <p className="mt-6 md:text-lg text-white md:leading-relaxed">
              Maintain peak system performance, reduce unexpected downtime, and
              improve equipment reliability with structured Annual Maintenance
              Contract (AMC) Services. Designed for industrial compressed air
              systems, AMC programs help ensure continuous operation through
              planned inspections, preventive maintenance, and responsive
              service support.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => setOpen(true)}
                className="bg-white text-slate-900 px-7 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Request AMC Discussion
              </button>

              <Link
                href="/contact"
                className="border border-white px-7 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why AMC */}
      <section className="py-5 md:py-10">
        <div className="max-w-7xl  flex justify-center items-center mx-auto px-4">
          <div className="max-w-7xl text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
              Why AMC Services Matter
            </h2>

            <p className="md:text-xl text-slate-900 md:leading-relaxed mb-6">
              Compressed air systems play a critical role in daily production
              and plant operations. Unplanned equipment failures, performance
              losses, and reactive maintenance can result in costly downtime and
              reduced productivity.
            </p>

            <p className="md:text-xl text-slate-900 md:leading-relaxed">
              AMC Services provides a proactive maintenance framework that helps
              improve system reliability, optimize performance, and extend
              equipment life through scheduled service activities and preventive
              care.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-5 lg:py-8 xl:py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-slate-900">
            Benefits
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="bg-white p-3 lg:p-5 xl:p-6 rounded-2xl shadow-sm border"
              >
                <CheckCircle className="w-8 h-8  lg:block text-green-600 mb-4" />
                <p className="text-slate-700 text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5 lg:py-7 xl:py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-7 md:mb-14 text-slate-900">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white border rounded-3xl p-4 lg:p-6 xl:p-8 shadow-sm hover:shadow-lg transition"
              >
                <Wrench className="w-10 h-10 text-[#0B4A8B] mb-5" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 xl:leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-5 lg:py-7 xl:py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-slate-900">
            Industries & Use Cases
          </h2>

          <p className="text-center text-slate-600 max-w-4xl mx-auto mb-5 md:mb-10">
            AMC Services support reliable compressed air operations across a
            wide range of industrial environments, including:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl p-3 md:p-5 flex items-center gap-3"
              >
                <Factory className="w-5 h-5 text-[#0B4A8B]" />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-5 lg:py-7 xl:py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-10 text-slate-900">
            Typical Applications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {applications.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl border p-3 md:p-6 flex items-center gap-3"
              >
                <ShieldCheck className="w-6 h-6 text-green-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 md:py-10 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 md:mb-10 text-slate-900">
            Frequently Asked Question – AMC Services
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border p-4 md:p-7 shadow-sm"
              >
                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                <p className="text-slate-600 md:leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-8 bg-gradient-to-r from-[#0B4A8B] to-slate-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Let's Discuss the Right Maintenance Strategy
          </h2>

          <p className="md:text-lg text-slate-200 leading-relaxed mb-6">
            A well-planned maintenance program can significantly improve system
            reliability, efficiency, and long-term performance. AMC Services
            help organizations establish a structured approach to maintenance
            while minimizing operational risks and unplanned downtime.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:919717159766"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </a>

            <Link
              href="/contact"
              className="border border-white px-8 py-4 rounded-xl font-semibold"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />
    </div>
  );
}
