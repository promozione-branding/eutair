import React from "react";

const Whoweare = () => {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-4 order-1">
            <div className="relative">
              <img
                src="/iso.webp"
                alt="ISO Certified"
                className="
                  w-full
                  rounded-2xl
                  object-contain
                  border
                  border-slate-200
                  shadow-sm
                "
              />

              {/* Certification Badge */}
              <div
                className="
                  absolute
                  bottom-3
                  left-3
                  sm:bottom-5
                  sm:left-5
                  bg-white
                  px-3
                  py-2
                  sm:px-5
                  sm:py-4
                  rounded-xl
                  shadow-lg
                  border
                  border-slate-200
                  max-w-[220px]
                "
              >
                <div className="text-sky-600 font-bold text-sm sm:text-lg">
                  ISO 9001:2015
                </div>
                <div className="text-xs sm:text-sm text-slate-500">
                  Certified Organization
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 order-2">
            <span
              className="
                text-sky-600
                font-semibold
                uppercase
                tracking-[2px]
                md:tracking-[3px]
                text-xs
                sm:text-sm
              "
            >
              WHO WE ARE
            </span>

            <h2
              className="
                mt-3
                text-2xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                text-slate-900
                leading-tight
              "
            >
              Quality, Reliability &
              <br className="hidden sm:block" />
              Engineering Excellence
            </h2>

            <div className="w-16 sm:w-20 h-1 bg-sky-600 mt-4 sm:mt-5 mb-6 sm:mb-8 rounded-full"></div>

            {/* Content Block 1 */}
            <div className="flex gap-3 sm:gap-5">
              <div className="w-1 bg-sky-600 rounded-full shrink-0"></div>

              <div>
                <p className="text-slate-800 font-semibold text-base sm:text-lg">
                  Eutair is ISO 9001:2015 certified.
                </p>

                <p
                  className="
                    mt-3
                    text-black
                    text-sm
                    sm:text-base
                    leading-7
                    sm:leading-8
                  "
                >
                  Our quality-focused approach reflects a commitment to
                  structured processes, consistency, reliability and continuous
                  improvement across engineering, products, services and project
                  execution.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-200 my-6"></div>

            {/* Content Block 2 */}
            <div className="flex gap-3 sm:gap-5">
              <div className="w-1 bg-sky-600 rounded-full shrink-0"></div>

              <div>
                <p
                  className="
                    text-black
                    text-sm
                    sm:text-base
                    leading-7
                    sm:leading-8
                  "
                >
                  We do designing, supply, erect and commission complete
                  compressed air systems along with heat exchangers, cooling
                  towers, plant air and water piping systems. We design,
                  develop and charge up all three sides: generation,
                  distribution and demand.
                </p>
              </div>
            </div>

            {/* Standards Section */}
            <div
              className="
                mt-8
                sm:mt-10
                border-l-4
                border-sky-600
                bg-slate-50
                p-4
                sm:p-6
                rounded-r-xl
              "
            >
              <h3 className="font-semibold text-black mb-3 text-base sm:text-lg">
                Industry Codes and Standards adhered to by our Designers:
              </h3>

              <p
                className="
                  text-slate-600
                  text-sm
                  sm:text-base
                  leading-7
                  sm:leading-8
                "
              >
                API 650, API 579, API 620, API 653, ASME Boiler & Pressure
                Vessel Code, Section VIII, Div. – 1 & Div. – 2, PD 5500,
                TEMA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;