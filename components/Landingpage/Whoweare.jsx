import React from 'react'

const Whoweare = () => {
  return (
    <div>
  <section className="py-10 bg-white">
  <div className="w-full px-16 mx-auto ">

    <div className="grid lg:grid-cols-12 gap-18 items-center">

      {/* Image */}
      <div className="lg:col-span-4">
        <div className="relative">
          <img
            src="/iso.webp"
            alt="ISO Certified"
            className="
              w-full
              rounded-2xl
              object-contain
              border border-slate-200
          
            "
          />

          <div className="
            absolute
            bottom-6
            left-6
            bg-white
            px-5
            py-4
            rounded-xl
            shadow-lg
            border
            border-slate-200
          ">
            <div className="text-sky-600 font-bold text-lg">
              ISO 9001:2015
            </div>
            <div className="text-sm text-slate-500">
              Certified Organization
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-8">

        <span className="text-sky-600 font-semibold uppercase tracking-[3px] text-sm">
          WHO WE ARE
        </span>

        <h2 className="mt-3 text-4xl font-bold text-slate-900 leading-tight">
          Quality, Reliability &
          Engineering Excellence
        </h2>

        <div className="w-20 h-1 bg-sky-600 mt-5 mb-8 rounded-full"></div>

        {/* Content Block 1 */}
        <div className="flex gap-5">
          <div className="w-1 bg-sky-600 rounded-full shrink-0"></div>

          <div>
            <p className="text-slate-800 font-semibold text-lg">
              Eutair is ISO 9001:2015 certified.
            </p>

            <p className="mt-3 text-black leading-8">
              Our quality-focused approach reflects a commitment to structured
              processes, consistency, reliability and continuous improvement
              across engineering, products, services and project execution.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 my-5"></div>

        {/* Content Block 2 */}
        <div className="flex gap-5">
          <div className="w-1 bg-sky-600 rounded-full shrink-0"></div>

          <div>
            <p className="text-black leading-8">
              We do designing, supply, erect and commission complete compressed
              air systems along with heat exchangers, cooling towers, plant air
              and water piping systems. We design, develop and charge up all
              three sides: generation, distribution and demand.
            </p>
          </div>
        </div>

        {/* Standards */}
        <div className="
          mt-10
          border-l-4
          border-sky-600
          bg-slate-50
          p-6
          rounded-r-xl
        ">
          <h3 className="font-semibold text-black mb-3">
            Industry Codes and Standards adhered to by our Designers:
          </h3>

          <p className="text-slate-600 leading-8">
            API 650, API 579, API 620, API 653, ASME Boiler & Pressure Vessel
            Code, Section VIII, Div. – 1 & Div. – 2, PD 5500, TEMA
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Whoweare
