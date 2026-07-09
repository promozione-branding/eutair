// components/services/TurnkeyProjectExecution.tsx

"use client"
import Link from "next/link";
import Enquiry from "@/components/Enquiry";
import React from "react";
import { useState } from "react";
const benefits = [
  "Single-window project execution support",
  "Reduced project management burden for plant teams",
  "Faster decision-making and issue resolution",
  "Consistent quality throughout execution",
  "Improved project visibility and control",
  "Reduced risk of vendor coordination challenges",

];

const features = [
  {
    title: "Engineering & Project Planning",
    description:
      "Comprehensive project planning based on air demand analysis, utility requirements, plant layout considerations, operational objectives, and future expansion needs.",
  },
  {
    title: "System Design & Technical Evaluation",
    description:
      "Development of compressed air system designs that support efficient operation, reliable performance, and optimized lifecycle costs.",
  },
  {
    title: "Equipment Selection & Procurement Support",
    description:
      "Selection and coordination of compressors, dryers, filters, receivers, piping systems, condensate management solutions, and associated infrastructure components.",
  },
  {
    title: "Utility & Infrastructure Integration",
    description:
      "Integration of compressed air systems with plant utilities, production processes, and operational infrastructure to ensure seamless functionality.",
  },
  {
    title: "Compressed Air Piping Network Execution",
    description:
      "Design and implementation of distribution networks that support efficient airflow, minimize pressure losses, and improve system reliability.",
  },
  {
    title: "Installation Management",
    description:
      "Coordination of mechanical, electrical, utility, and infrastructure activities to support efficient and organized project execution.",
  },
  {
    title: "Testing, Validation & Commissioning",
    description:
      "Verification of system performance through structured testing and commissioning activities before operational handover.",
  },
  {
    title: "Documentation & Handover Support",
    description:
      "Provision of project documentation, system information, and operational guidance to support smooth transition into plant operations.",
  },
];

const processSteps = [
  {
    title: "Requirement Assessment",
    description:
      "Understanding production requirements, air demand profiles, plant conditions, utility infrastructure, and project objectives.",
  },
  {
    title: "Engineering & System Design",
    description:
      "Development of technical solutions based on performance requirements, operational goals, and future growth considerations.",
  },
  {
    title: "Procurement & Resource Planning",
    description:
      "Coordination of equipment, materials, project resources, and execution schedules.",
  },
  {
    title: "Installation & Integration",
    description:
      "Execution of system installation, piping infrastructure, utility connections, and equipment integration activities.",
  },
  {
    title: "Testing & Commissioning",
    description:
      "Performance verification and commissioning to ensure the system meets operational requirements.",
  },
  {
    title: "Project Handover",
    description:
      "Final documentation, operational readiness review, and structured project completion support.",
  },
];

const industries = [
  "Manufacturing Plants",
  "Automotive & Auto Component Industries",
  "Engineering & Fabrication Facilities",
  "Food & Beverage Processing Units",
  "Pharmaceutical Manufacturing",
  "Textile & Packaging Industries",
  "Chemical & Process Industries",
  "Electronics Manufacturing Facilities",
  "Utility Infrastructure Projects",
  "Large Industrial Campuses",
];

const applications = [
  "New plant projects",
  "Greenfield industrial developments",
  "Brownfield expansion projects",
  "Compressed air infrastructure upgrades",
  "Utility modernization initiatives",
  "Distribution network installation projects",
  "Production capacity expansion programs",
  "Multi-compressor system implementation",
  "System integration initiatives",
  "Industrial utility expansions",
];

const faqs = [
  {
    question: "What is included in Turnkey Project Execution?",
    answer:
      "Turnkey Project Execution typically includes project planning, engineering support, system design, equipment coordination, installation management, testing, commissioning, and project handover activities.",
  },
  {
    question: "Who should consider Turnkey Project Services?",
    answer:
      "Organizations planning new facilities, plant expansions, utility upgrades, or large-scale compressed air infrastructure projects can benefit from a turnkey execution model.",
  },
  {
    question: "What are the advantages of a turnkey approach?",
    answer:
      "A turnkey approach provides centralized coordination, improved accountability, streamlined communication, and better alignment across all project stages.",
  },
  {
    question:
      "Can turnkey services support both new and existing facilities?",
    answer:
      "Yes. Turnkey execution can support greenfield developments, brownfield expansions, retrofit projects, and modernization initiatives.",
  },
  {
    question: "How does turnkey execution improve project outcomes?",
    answer:
      "Through coordinated planning, structured execution, and integrated project management, turnkey delivery helps reduce delays, improve implementation quality, and support successful commissioning.",
  },
];

export default function TurnkeyProjectExecution() {

const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-8 md:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Turnkey Project Execution
          </h1>

          <h2 className="text-lg md:text-2xl text-blue-300 font-medium mb-6">
            End-to-End Compressed Air Project Delivery Through a Single Point of
            Responsibility
          </h2>

          <p className="md:text-lg text-slate-300 md:leading-relaxed max-w-4xl">
            Execute compressed air infrastructure projects with greater
            confidence through comprehensive Turnkey Project Execution Services.
            From initial planning and engineering through procurement,
            installation, testing, and commissioning, a turnkey approach
            provides a structured framework for delivering reliable and
            efficient compressed air systems.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mt-4">
            By managing all critical stages of the project lifecycle through a
            coordinated execution strategy, organizations can reduce
            complexity, improve accountability, and ensure smoother project
            implementation.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <button onClick={()=> setOpen(true)} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
              Start Turnkey Discussion
            </button>

<Link href="/contact">

            <button className="border border-white hover:bg-white hover:text-slate-900 px-6 py-3 rounded-lg font-medium transition">
              Request Quote
            </button>

</Link>

          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-8 lg:py-12 xl:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-4 lg:mb-6 xl:mb-8">
            Why Turnkey Execution Matters
          </h2>

          <div className="space-y-6 text-gray-700 xl:leading-relaxed">
            <p>
              Industrial compressed air projects involve multiple disciplines,
              including engineering, equipment selection, utility planning,
              piping networks, electrical integration, installation, testing,
              and commissioning. Coordinating these activities through multiple
              vendors often increases project complexity and can lead to delays,
              communication gaps, and execution challenges.
            </p>

            <p>
              Turnkey Project Execution simplifies this process by providing a
              single point of responsibility throughout the project lifecycle.
              This approach helps maintain alignment between project objectives,
              technical requirements, timelines, and operational expectations.
            </p>

            <p>
              A structured turnkey model ensures that every stage of the project
              is planned and executed with consideration for performance,
              efficiency, reliability, and future scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-7 lg:py-10 xl:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-6 md:mb-10">Benefits</h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-3 md:p-5 rounded-xl shadow-sm border"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-7 lg:py-12 xl:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-6 xl:mb-10">Key Features</h2>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 lg:p-5 xl:p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-7 lg:py-12 xl:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 lg:mb-7 xl:mb-10">
            Turnkey Project Execution Process
          </h2>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border p-4 md:p-6 flex gap-6"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries & Applications */}
      <section className="py-7 lg:py-12 xl:py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
                Industries & Use Cases
              </h2>

              <ul className="space-y-2 md:space-y-3">
                {industries.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Typical Applications
              </h2>

              <ul className="space-y-2 md:space-y-3">
                {applications.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-7 lg:py-12 xl:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10">
            Frequently Asked Question - Turnkey Project Execution
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-3 md:p-6"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {index + 1}. {faq.question}
                </h3>

                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />

    </div>
  );
}