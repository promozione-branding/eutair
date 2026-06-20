const benefits = [
  "Supports better design decisions from the outset",
  "Improves system suitability and future scalability",
  "Helps avoid under-sizing and over-sizing issues",
  "Reduces avoidable inefficiencies during execution",
  "Supports optimized utility integration",
  "Enhances long-term system performance and reliability",
];

const features = [
  {
    title: "System Sizing & Capacity Planning",
    description:
      "Assessment of air demand requirements to support appropriate equipment selection and system design.",
  },
  {
    title: "Plant Layout Support",
    description:
      "Guidance on equipment placement, utility routing, and infrastructure planning for efficient system operation.",
  },
  {
    title: "Utility Integration Planning",
    description:
      "Support for integrating compressed air systems with existing plant utilities and operational requirements.",
  },
  {
    title: "Process Requirement Evaluation",
    description:
      "Alignment of system design with production processes, air quality needs, and operational objectives.",
  },
  {
    title: "Expansion & Scalability Planning",
    description:
      "Recommendations that accommodate future capacity increases and plant expansion requirements.",
  },
  {
    title: "Retrofit & Upgrade Guidance",
    description:
      "Technical support for improving existing compressed air installations through modernization and optimization.",
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
  "Utility Infrastructure Projects",
  "Industrial Expansion Programs",
];

const applications = [
  "New industrial facility development",
  "Plant expansion projects",
  "Utility engineering design",
  "Compressed air system upgrades",
  "Retrofit and modernization planning",
  "Capacity enhancement initiatives",
  "Process-driven compressed air applications",
];

const faqs = [
  {
    question:
      "1. What is included in Engineering Consultancy Services?",
    answer:
      "Engineering Consultancy Services typically include system planning, capacity assessment, layout recommendations, guidance on utility integration, and technical support for designing efficient compressed air systems.",
  },
  {
    question: "2. Who should consider Engineering Consultancy?",
    answer:
      "Organizations planning new facilities, plant expansions, system upgrades, or compressed air infrastructure improvements can benefit from engineering consultancy support.",
  },
  {
    question: "3. Why is proper system sizing important?",
    answer:
      "Correct sizing helps ensure reliable performance, avoids unnecessary energy consumption, reduces capital waste, and supports future operational requirements.",
  },
  {
    question:
      "4. Can consultancy services support retrofit projects?",
    answer:
      "Yes. Consultancy services can help evaluate existing systems, identify improvement opportunities, and recommend upgrades that enhance performance and efficiency.",
  },
  {
    question:
      "5. How does engineering consultancy improve long-term system performance?",
    answer:
      "Through proper planning, optimized equipment selection, efficient system design, and scalability considerations, consultancy services help create compressed air systems that perform reliably throughout their lifecycle.",
  },
];
import { Factory, ChevronRight } from "lucide-react";
export default function EngineeringConsultancyService() {
  return (
    <section className="bg-white">
      {/* Hero */}
    <section className="bg-white">
  <div className="container mx-auto px-6 py-15 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
          Engineering Consultancy
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 ">
          Technical Expertise for Efficient and Future-Ready Compressed Air Systems
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-900">
          Make informed decisions from the earliest stages of your project with professional Engineering Consultancy Services. From system sizing and utility planning to layout optimization and future expansion considerations, engineering support helps ensure compressed air systems are designed for performance, efficiency, and long-term reliability.
        </p>

     
      </div>

      <div className="lg:col-span-5">
        <div className="sticky top-24 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-slate-500">Service Focus</div>
              <div className="mt-2 text-lg font-semibold">
                Engineering Consultancy Services
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="text-sm text-slate-500">
                Project Support Areas
              </div>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li>System Sizing</li>
                <li>Capacity Planning</li>
                <li>Plant Layout Support</li>
                <li>Utility Integration</li>
                <li>Expansion Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Why It Matters */}
      <div className="border-y border-slate-200 bg-slate-50">
        <div className="container mx-auto px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Why Engineering Consultancy Matters
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Design Today for Reliable Performance Tomorrow
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black lg:col-span-8">
              <p>
                Decisions made during the planning and design stage have a
                lasting impact on system performance, operating costs, and
                future scalability. Incorrect sizing, inadequate infrastructure
                planning, or poor system integration can lead to inefficiencies
                that are difficult and costly to correct later.
              </p>

              <p>
                Engineering Consultancy Services help organizations evaluate
                requirements, optimize system design, and align compressed air
                infrastructure with operational objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-6 py-10 lg:px-8 bg-cyan-100/20">
        <div className="max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Benefits
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Strategic Advantages Through Better Planning
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-blue-200 p-4 transition hover:border-blue-200 hover:bg-blue-50/30"
            >
              <div className="text-3xl font-bold text-slate-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="mt-6 text-lg font-medium text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
   <div className="relative overflow-hidden bg-slate-950">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:60px_60px]" />

  <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

  <div className="container relative mx-auto px-6 py-7 lg:px-8">
    {/* Heading */}
    <div className="max-w-4xl">
      <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
        Key Features
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-white">
        Comprehensive Engineering Support
      </h2>

      <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>

    {/* Features */}
    <div className="mt-10 grid gap-8 lg:grid-cols-2">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
        >
          {/* Feature Number */}
          <div className="absolute right-6 top-4 text-7xl font-bold text-white/[0.04] transition group-hover:text-blue-500/10">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Accent Line */}
          <div className="mb-6 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-24" />

          <h3 className="relative text-2xl font-semibold text-white">
            {feature.title}
          </h3>

          <p className="relative mt-5 leading-8 text-slate-300">
            {feature.description}
          </p>

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Industries & Applications */}


<section className="py-10 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
  <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4A8B]/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-6 relative">
    <div className="max-w-4xl mx-auto text-center">
      <span className="inline-flex items-center rounded-full border border-[#0B4A8B]/20 bg-[#0B4A8B]/5 px-4 py-2 text-sm font-medium text-[#0B4A8B]">
        Industry Applications
      </span>

      <h2 className="mt-6 text-4xl  font-bold text-slate-900 leading-tight">
        Industries & Use Cases
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-[#0B4A8B] to-cyan-500 rounded-full mx-auto mt-6"></div>

   
    </div>

    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {industries.map((item, index) => (
        <div
          key={item}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(11,74,139,0.12)] hover:-translate-y-1 transition-all duration-500"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0B4A8B] to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B4A8B]/10 group-hover:bg-[#0B4A8B] transition-colors duration-500">
              <Factory className="h-7 w-7 text-[#0B4A8B] group-hover:text-white transition-colors duration-500" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 leading-relaxed">
                {item}
              </h3>

              <div className="mt-4 flex items-center text-[#0B4A8B] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-sm">Industrial Application</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ */}
     <section className="py-7">
  <div className="container mx-auto px-16">
    <h2 className="text-4xl font-bold text-slate-900">
      Frequently Asked Question - Engineering Consultancy Services
    </h2>

    <div className="mt-12">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="border-b border-slate-200 py-8"
        >
          <summary className="cursor-pointer text-lg font-semibold text-slate-900">
            {faq.question}
          </summary>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
    </section>
  );
}