export default function AirAuditService() {
  const benefits = [
    "Identifies air leaks and pressure losses",
    "Supports lower energy and operating costs",
    "Improves overall system efficiency",
    "Enhances compressed air reliability and performance",
    "Helps prioritize maintenance and corrective actions",
    "Supports long-term optimization planning",
  ];

  const features = [
    {
      title: "System Performance Assessment",
      description:
        "Evaluation of compressed air generation, treatment, storage, and distribution systems to identify performance improvement opportunities.",
    },
    {
      title: "Leak Detection Support",
      description:
        "Identification of air leakage points that contribute to unnecessary energy consumption and system inefficiencies.",
    },
    {
      title: "Pressure & Flow Analysis",
      description:
        "Assessment of pressure levels, flow demand, and system behavior to uncover operational bottlenecks.",
    },
    {
      title: "Energy Efficiency Evaluation",
      description:
        "Analysis of energy usage patterns to support cost-saving initiatives and efficiency improvements.",
    },
    {
      title: "Optimization Recommendations",
      description:
        "Practical recommendations for corrective actions, upgrades, and operational improvements.",
    },
    {
      title: "Data-Driven Reporting",
      description:
        "Structured findings and insights to support informed maintenance, investment, and system planning decisions.",
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
    "Utility and Compressor Rooms",
    "Large Compressed Air Networks",
  ];

  const applications = [
    "Energy optimization programs",
    "Existing plant performance reviews",
    "Utility cost reduction initiatives",
    "Compressed air leak detection projects",
    "System expansion planning",
 
  ];

  const faqs = [
    {
      question: "1. What is included in an Air Audit?",
      answer:
        "An Air Audit typically includes system assessment, leak detection analysis, pressure and flow evaluation, performance review, and recommendations for improving efficiency, reliability, and operating costs.",
    },
    {
      question: "2. Who should consider Air Audit Services?",
      answer:
        "Industrial facilities experiencing high energy costs, pressure fluctuations, recurring performance issues, or plans for system expansion can benefit from an air audit.",
    },
    {
      question: "3. How can an air audit reduce operating costs?",
      answer:
        "By identifying air leaks, pressure losses, inefficient operating practices, and oversized or underperforming equipment, an air audit helps reduce energy waste and improve system efficiency.",
    },
    {
      question: "4. How often should a compressed air system be audited?",
      answer:
        "The frequency depends on system size, operating conditions, and business objectives. Many facilities conduct audits periodically or before major system upgrades and optimization projects.",
    },
    {
      question:
        "5. What are the most common issues identified during an air audit?",
      answer:
        "Common findings include air leakage, pressure drops, improper compressor controls, oversized equipment, inadequate storage capacity, and distribution system inefficiencies.",
    },
  ];

  return (
  <section className="bg-white">
  {/* Hero */}
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />

    <div className="container relative mx-auto px-6 py-10 lg:px-8">
      <div className="max-w-5xl">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-cyan-200 px-4 py-2 text-sm font-medium text-slate-600">
          Air Audit Services
        </span>

        <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 ">
          Identify Inefficiencies Before They Impact Performance and Energy Costs
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-8 text-slate-900">
          Gain better visibility into your compressed air system with
          structured Air Audit Services. Air audits help identify leaks,
          pressure losses, inefficient operating conditions, and system
          performance issues that can increase energy consumption and
          operating costs.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-xl bg-slate-900 px-8 py-4 text-white transition hover:bg-slate-800">
            Request Air Audit Support
          </button>

          <button className="rounded-xl border border-slate-300 px-8 py-4 text-slate-700 transition hover:bg-slate-50">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Why Air Audits Matter */}
  <div className="border-y border-slate-200 bg-slate-50">
    <div className="container mx-auto px-6 py-20 lg:px-10">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Why Air Audits Matter
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Improve Reliability. Reduce Waste. Optimize Performance.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-900 lg:col-span-8">
          <p>
            Compressed air is one of the most expensive utility resources in
            many industrial facilities. Over time, system inefficiencies such
            as air leaks, pressure drops, inappropriate controls, and
            distribution losses can significantly affect productivity and
            energy performance.
          </p>

          <p>
            Air Audit Services provide valuable insights into system
            operations, helping organizations identify opportunities for
            improvement and make informed decisions to optimize.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Benefits */}
  <div className="container mx-auto px-6 py-10 lg:px-8">
    <div className="max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        Benefits
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        Measurable Operational Advantages
      </h2>
    </div>

    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {benefits.map((item, index) => (
        <div
          key={item}
          className="group rounded-2xl border  p-5 transition border-blue-200 bg-blue-50/30"
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
  <div className="bg-slate-950">
    <div className="container mx-auto px-6 py-10 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Key Features
        </span>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Comprehensive System Evaluation
        </h2>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Industries & Applications */}
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-10">
  <div className="grid gap-8 lg:grid-cols-2">

    {/* Industries */}
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-slate-200
        bg-white
        p-8 lg:p-10
        shadow-[0_15px_50px_rgba(0,0,0,0.06)]
      "
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-600" />

      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Industries We Serve
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          Industries & Use Cases
        </h2>

        <p className="mt-3 text-slate-500">
          Air Audit Services are valuable across a wide range of industrial
          applications.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {industries.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-50
              hover:text-blue-700
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Applications */}
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-slate-200
        bg-white
        p-8 lg:p-10
        shadow-[0_15px_50px_rgba(0,0,0,0.06)]
      "
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-cyan-500 to-blue-600" />

      <div className="mb-6">
        <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
          Key Applications
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900">
          Typical Applications
        </h2>

        <p className="mt-3 text-slate-500">
          Common scenarios where structured air audits help improve
          performance and efficiency.
        </p>
      </div>

      <div className="space-y-4">
        {applications.map((item) => (
          <div
            key={item}
            className="
              group
              flex
              items-center
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-4
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-white
              hover:shadow-md
            "
          >
            <div
              className="
                mr-4
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-blue-100
                transition-all
                duration-300
                group-hover:bg-blue-600
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-blue-600 group-hover:bg-white" />
            </div>

            <span className="font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

  {/* FAQ */}
  <div className="bg-slate-50">
    <div className="container mx-auto px-6 py-5 lg:px-8">
      <div className="max-w-3xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          FAQ
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mt-12 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group p-8">
            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
              {faq.question}
            </summary>

            <p className="mt-4 leading-8 text-slate-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </div>

  {/* Premium CTA */}
  <div className="bg-[#ECFEFF]">
    <div className="container mx-auto px-6 py-10 lg:px-8">
      <div className="rounded-[32px] border border-white/10 bg-cyan-950 p-10 text-center backdrop-blur-xl">
        <h2 className="text-4xl font-bold text-white">
          Let's Discuss Your Air System Performance
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white">
          Understanding how your compressed air system operates is the first
          step toward improving efficiency, reducing energy costs, and
          enhancing reliability.
        </p>

        <p className="mx-auto mt-4 max-w-4xl text-white">
          Discuss audit requirements, performance concerns, and optimization
          goals to identify the most effective approach for your facility.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-white px-8 py-4 font-medium text-slate-900">
            Request Air Audit Support
          </button>

          <button className="rounded-xl border border-white/20 px-8 py-4 text-white">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}