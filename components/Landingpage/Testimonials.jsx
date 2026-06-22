"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      company: "Delta Autocorp",
      quote:
        "Reliable compressor performance and low maintenance have made Eutair a trusted support partner for our operations.",
      certificate: "/cert1.jpeg",
    },
    {
      company: "Ganesh Foundry",
      quote:
        "The installation quality and technical support were excellent, and the team stayed responsive throughout the project.",
      certificate: "/cert2.png",
    },
    {
      company: "Kaleido Chemie",
      quote:
        "We appreciate the engineering support, reliable delivery, and continued service experience with Eutair.",
      certificate: "/cert3.png",
    },
    {
      company: "Metal Manufacturing",
      quote:
        "Eutair delivered dependable execution with strong service support, and we are happy to recommend their solutions.",
      certificate: "/cert4.png",
    },
  ];

  const [start, setStart] = useState(0);

  const next = () => {
    setStart((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  };

  const prev = () => {
    setStart((prev) =>
      prev - 2 < 0
        ? Math.max(testimonials.length - 2, 0)
        : prev - 2
    );
  };

  const visible = testimonials.slice(start, start + 2);

  return (
    <section className="bg-[#f6f8fa] py-20">
      <div className="w-full mx-auto px-24">

        <div className="flex items-center justify-between mb-10">
       <div>
  <span className="text-[#176BB0] uppercase tracking-[0.3em] text-sm font-semibold">
    Customer Success Stories
  </span>

  <h2 className="mt-3 text-5xl font-bold text-[#0d4976]">
    Letters of Appreciation
  </h2>

  <p className="mt-4 text-slate-500 max-w-2xl">
    Trusted by manufacturing plants, engineering companies,
    automotive facilities and industrial organizations across India.
  </p>
</div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-50"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {visible.map((item, index) => (
<div
  key={index}
  className="
    group
    rounded-[32px]
    overflow-hidden
    border
    border-slate-200
    bg-white
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-500
  "
>
  {/* Certificate */}
  <div className="relative bg-slate-50 p-4">
    <div className="relative h-[500px] rounded-2xl overflow-hidden border border-slate-200">
      <Image
        src={item.certificate}
        alt={item.company}
        fill
        className="
          object-contain
          bg-white
          transition-transform
          duration-700
          group-hover:scale-[1.02]
        "
      />
    </div>

    <div className="absolute top-8 left-8">
      <span className="bg-[#176BB0] text-white text-xs px-4 py-2 rounded-full font-medium">
        Verified Client
      </span>
    </div>
  </div>

  {/* Content */}
  <div className="p-8">
    <h3 className="text-3xl font-bold text-[#0d4976]">
      {item.company}
    </h3>

    <div className="mt-5 flex gap-3">
      <div className="text-6xl leading-none text-[#176BB0]/20">
        "
      </div>

      <p className="text-slate-600 italic leading-7">
        {item.quote}
      </p>
    </div>

  
  </div>
</div>
          ))}
        </div>

      </div>
    </section>
  );
}