import React from "react";

const Bestseller = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Video - First on Mobile */}
          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl">
              <video
                className="
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  md:h-[450px]
                  object-cover
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
              className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-[#CEFAFE]
                text-[#18829E]
                font-medium
                text-xs
                sm:text-sm
                mb-4
              "
            >
              Our Quality Commitment
            </span>

            <h2
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-gray-900
                leading-tight
                mb-5
                lg:mb-6
              "
            >
              Delivering Excellence Through Quality
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
              At Eutair Equipments LLP, quality is at the heart of everything
              we do. As a trusted Screw Air Compressor Manufacturer, we are
              committed to delivering reliable, efficient, and durable products
              that meet the highest industry standards. Every product is
              carefully inspected to ensure consistent performance, long service
              life, and maximum customer satisfaction.
            </p>

            <p
              className="
                text-gray-700
                text-sm
                sm:text-base
                leading-7
                mb-6
              "
            >
              From Screw Air Compressors and Diesel Air Compressors to Air
              Dryers, Air Line Filters, Drain Valves, and MSS Series Screw
              Compressor Filters, we maintain strict quality standards to
              provide solutions that help industries improve productivity and
              operational efficiency.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Premium Quality Products",
                "Rigorous Quality Checks",
                "Reliable Performance",
                "Long Service Life",
                "Industry-Compliant Standards",
                "Customer-Focused Approach",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    bg-gray-50
                    p-4
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
                      text-sm
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