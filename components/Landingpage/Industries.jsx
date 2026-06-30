import {
  Factory,
  Car,
  Pill,
  UtensilsCrossed,
  Shirt,
  Wrench,
  FlaskConical,
  HeartPulse,
} from "lucide-react";
import { Boxes } from "lucide-react";
const industries = [
  {
    icon: Factory,
    title: "Manufacturing Industry",
    description:
      "We provide dependable compressed air solutions that support production processes, machinery operation, assembly lines, and industrial automation systems, ensuring uninterrupted performance and enhanced productivity.",
  },
  {
    icon: Car,
    title: "Automotive Industry",
    description:
      "Our air compressors and filtration systems play a vital role in automotive manufacturing, painting, assembly, maintenance, and pneumatic tool applications, helping businesses maintain efficiency and precision.",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Industry",
    description:
      "We supply high-quality air treatment and filtration products designed to meet the strict cleanliness and operational requirements of pharmaceutical manufacturing facilities.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage Processing",
    description:
      "Our compressed air solutions help maintain product quality, hygiene, and operational reliability in food processing and beverage production environments where clean air is essential.",
  },
  {
    icon: Shirt,
    title: "Textile Industry",
    description:
      "From spinning and weaving to dyeing and finishing processes, our air compressors and filtration systems contribute to smooth and efficient textile manufacturing operations.",
  },
  {
    icon: Wrench,
    title: "Engineering & Fabrication Units",
    description:
      "Engineering workshops and fabrication facilities rely on our compressed air equipment for powering pneumatic tools, machinery, and production processes with maximum efficiency.",
  },
 
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Facilities",
    description:
      "We provide dependable air treatment and filtration products that support various healthcare applications where clean and reliable compressed air systems are required.",
  },

    {
    icon:Boxes,
    title: "Many More",
    description:
      "We provide dependable air treatment and filtration products that support various healthcare applications where clean and reliable compressed air systems are required.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 pb-6  overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-14">
          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-cyan-100
              text-cyan-700
              text-xs
              sm:text-sm
              font-semibold
              mb-4
            "
          >
            Industries We Serve
          </span>

          <h2
            className="
              text-xl
              sm:text-4xl
           
              font-bold
              text-slate-900
              leading-tight
            "
          >
            Reliable Compressed Air &
          
            Industrial Filtration Solutions
         
            for Every Industry
          </h2>
        </div>

        {/* Industries Grid */}
        <div
          className="
            grid
           
            grid-cols-2
            xl:grid-cols-4
            gap-5
            lg:gap-6
          "
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  lg:rounded-3xl
                  p-3
                  lg:p-6
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  h-full
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    lg:w-14
                    lg:h-14
                    rounded-2xl
                    bg-cyan-600
                    flex
                    items-center
                    justify-center
                    mb-4
                    group-hover:scale-110
                    transition-transform
                    duration-300
                  "
                >
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-md
                    sm:text-xl
                    font-bold
                    text-slate-900
                    mb-3
                    leading-snug
                  "
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p
                  className="hidden md:block
                    text-slate-600
                    text-sm
                    sm:text-[15px]
                    leading-7
                  "
                >
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}