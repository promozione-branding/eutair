import React from "react";

const Bestseller = () => {
  return (
    <section className="md:py-12  bg-white overflow-hidden">
      <div className="w-full px-5 md:px-19 mx-auto ">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Video - First on Mobile */}
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
              <video
                className="
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  md:h-[360px]
                  object-contain
                "
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="https://res.cloudinary.com/dcefpzfe0/video/upload/v1781243641/WhatsApp_Video_2026-06-09_at_3.50.56_PM_arktyk.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* Quote Box */}
            <div
              className="
                p-4
                sm:p-6
                mt-6
                lg:mt-8
                bg-gradient-to-r
                from-cyan-300/10
                to-transparent
                rounded-2xl
                border-l-4
                border-cyan-500
              "
            >
              <p className="text-gray-700 leading-7 text-sm sm:text-base">
                Our commitment to quality enables us to deliver trusted
                solutions that businesses can rely on every day.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <span
            className=" text-center 
                text-sky-600
                font-semibold
                uppercase
                tracking-[2px]
                md:tracking-[3px]
                text-xs
                sm:text-sm
              "
            >
              Our Quality Commitment
            </span>

            <h2
              className="
                text-2xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-gray-900
                leading-tight
                mb-2
                lg:mb-6
              "
            >
              Export & International Trade Operations
            </h2>

            <p
              className="
                text-gray-700
                text-sm
                sm:text-base
                leading-7
                mb-4
              "
            >
             Eutair actively supports export-oriented supply for companies based in Africa and other emerging markets. The company operates as an execution partner for industrial equipment and project-related supplies.
            </p>

            <p
              className="
                text-gray-700
                text-sm
                sm:text-base
                leading-7
                md:mb-6
              "
            >
             
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {[
                "Purchase and procurement of equipment & raw material from approved OEMs and suppliers",
                "Inventory stocking and consolidation",
                "Pre-Dispatch Inspection (PDI) and quality checks",
                "Export documentation and logistics coordination",
                "Supply to Africa-based customers through structured export channels",
                "Customer-Focused Approach",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-gray-50
                    p-2
                    md:p-4
                    rounded-xl
                    border
                    border-gray-100
                    hover:border-cyan-200
                    transition-all
                  "
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0"></div>

                  <span
                    className="
                      font-medium
                      text-gray-800
                      text-[9px]
                      sm:text-base
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bestseller;