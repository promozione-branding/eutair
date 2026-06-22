import Image from "next/image";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
export default function ProductPage() {


  return (

    <>
    

    
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-16">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200/30 blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 blur-[120px]" />
  </div>

  <div className="max-w-[1800] mx-auto px-14 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Product Image */}
      <div
        className="
        bg-white
        rounded-[32px]
        p-8
        border
        border-slate-200
        shadow-[0_25px_80px_rgba(0,0,0,.08)]
      "
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white">
          <Image
            src="/hero1.png"
            alt="Chicago Pneumatic Compressor"
            width={800}
            height={800}
            className="
            w-full
            h-auto
            object-contain
            transition-all
            duration-700
            hover:scale-110
          "
          />
        </div>
      </div>

      {/* Product Content */}
      <div>
        <span className="inline-flex px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
          Chicago Pneumatic
        </span>

        <h2 className="mt-5 text-5xl  font-black text-slate-900 leading-tight">
   CFM: 81 - 187, BAR: 7 - 12, PSI: 100 – 175
        </h2>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          High-performance industrial air compressor engineered for
          continuous-duty operation, energy efficiency and reliable
          compressed air delivery.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-3 mt-8">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
            ✓ Energy Efficient
          </span>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            ✓ Industrial Grade
          </span>

          <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium">
            ✓ Low Maintenance
          </span>
        </div>

        {/* CTA */}
      <div className="flex flex-wrap gap-4 mt-10">

  {/* WhatsApp */}
  <button
    className="
      group
      flex
      items-center
      gap-3
      px-8
      h-16
      rounded-2xl
      bg-gradient-to-r
      from-green-500
      to-emerald-600
      text-white
      font-semibold
      shadow-[0_10px_30px_rgba(34,197,94,.35)]
      hover:-translate-y-1
      hover:shadow-[0_20px_40px_rgba(34,197,94,.45)]
      transition-all
      duration-300
    "
  >
    <FaWhatsapp
      size={24}
      className="group-hover:scale-110 transition"
    />
    <span>WhatsApp Now</span>
  </button>

  {/* Call */}
  <button
    className="
      group
      flex
      items-center
      gap-3
      px-8
      h-16
      rounded-2xl
      bg-white
      border
      border-sky-200
      text-slate-800
      font-semibold
      shadow-[0_10px_30px_rgba(0,0,0,.06)]
      hover:-translate-y-1
      hover:border-sky-500
      hover:text-sky-600
      hover:shadow-[0_20px_40px_rgba(14,165,233,.15)]
      transition-all
      duration-300
    "
  >
    <div
      className="
        w-9
        h-9
        rounded-full
        bg-sky-100
        flex
        items-center
        justify-center
      "
    >
      <FaPhoneAlt size={14} />
    </div>

    <span>Call Now</span>
  </button>

  {/* Brochure */}
  <button
    className="
      group
      flex
      items-center
      gap-3
      px-8
      h-16
      rounded-2xl
      bg-gradient-to-r
      from-slate-900
      to-slate-700
      text-white
      font-semibold
      shadow-[0_10px_30px_rgba(15,23,42,.25)]
      hover:-translate-y-1
      hover:shadow-[0_20px_40px_rgba(15,23,42,.35)]
      transition-all
      duration-300
    "
  >
    <FaDownload
      size={18}
      className="group-hover:-translate-y-1 transition"
    />

    <span>Download Brochure</span>
  </button>

</div>
      </div>

    </div>
  </div>
</section>





<section className="py-15 bg-slate-50">
  <div className="w-full mx-auto px-10">

    <div className="grid lg:grid-cols-12 gap-8 items-start">

      {/* Specifications */}
      <div className="lg:col-span-4">
        <div
          className="
            bg-white
            rounded-[32px]
            overflow-hidden
            shadow-[0_20px_60px_rgba(0,0,0,.08)]
            sticky top-24
          "
        >
          <div className="bg-gradient-to-r from-sky-500 to-blue-400 px-8 py-3">
            <h2 className="text-2xl font-bold text-white">
              Specifications
            </h2>
          </div>

          {[
            ["CFM", "81 - 187"],
            ["Pressure", "7 - 12 Bar"],
            ["PSI", "100 - 175"],
            ["Cooling Type", "Air Cooled"],
            ["Application", "Industrial"],
               ["PSI", "100 - 175"],
            ["Cooling Type", "Air Cooled"],
            ["Application", "Industrial"],
               ["PSI", "100 - 175"],
            ["Cooling Type", "Air Cooled"],
            ["Application", "Industrial"],
          ].map((item, index) => (
            <div
              key={index}
              className="
                flex
                justify-between
                gap-4
                px-8
                py-6
                border-b
                hover:bg-sky-50
                transition
              "
            >
              <span className="font-semibold text-slate-900">
                {item[0]}
              </span>

              <span className="text-slate-600 text-right">
                {item[1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Product Description */}
      <div className="lg:col-span-8">
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,.08)] overflow-hidden">

          <div className="bg-gradient-to-r from-sky-500 to-blue-300 py-3 px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Product Description
            </h2>
          </div>

          <div className="p-8 md:p-10">

            <h3 className="text-4xl font-black text-slate-900 mb-6">
              Chicago Pneumatic Screw Air Compressor
            </h3>

            <p className="text-lg leading-relaxed text-slate-600">
              Chicago Pneumatic Screw Air Compressors are engineered to provide
              dependable, energy-efficient, and continuous compressed air
              solutions for a wide range of industrial applications. Designed
              using advanced rotary screw technology, these compressors deliver
              consistent airflow, reduced operating costs, and long-term
              reliability even under demanding working conditions.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Widely used across manufacturing plants, engineering workshops,
              automotive facilities, packaging units, pharmaceutical
              industries, textile mills, and fabrication industries, Chicago
              Pneumatic compressors help businesses improve productivity while
              maintaining optimum energy efficiency.
            </p>

            {/* Features */}
            <div className="mt-10">
              <h4 className="text-3xl font-bold text-slate-900 mb-6">
                Key Features
              </h4>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                  <h5 className="font-bold text-slate-900 text-lg mb-2">
                    ⚡ Energy Efficient Operation
                  </h5>
                  <p className="text-slate-600">
                    Optimized design helps reduce power consumption and
                    operating expenses.
                  </p>
                </div>

                <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                  <h5 className="font-bold text-slate-900 text-lg mb-2">
                    🔄 Continuous Air Supply
                  </h5>
                  <p className="text-slate-600">
                    Delivers stable compressed air for uninterrupted production.
                  </p>
                </div>

                <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                  <h5 className="font-bold text-slate-900 text-lg mb-2">
                    🛠 Low Maintenance
                  </h5>
                  <p className="text-slate-600">
                    Premium components ensure reliability and reduced servicing
                    requirements.
                  </p>
                </div>

                <div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                  <h5 className="font-bold text-slate-900 text-lg mb-2">
                    🏭 Industrial Grade Construction
                  </h5>
                  <p className="text-slate-600">
                    Built to perform efficiently in demanding industrial
                    environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="mt-12">
              <h4 className="text-3xl font-bold text-slate-900 mb-5">
                Applications
              </h4>

              <ul className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Manufacturing Industry
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Automotive Industry
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Textile Industry
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Packaging Industry
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Chemical Industry
                </li>

                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500">✓</span>
                  Engineering & Fabrication Units
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-8 text-white">
              <h4 className="text-2xl font-bold mb-3">
                Looking for the Right Compressor Solution?
              </h4>

              <p className="text-white/90 leading-relaxed">
                Contact our experts today for product recommendations,
                technical guidance, pricing information, and customized
                compressed air solutions tailored to your industrial
                requirements.
              </p>

            
 <button
            className="mt-5
            animate-pulse
            px-10
            h-16
            text-lg
            rounded-2xl
            bg-black
            text-white
            font-semibold
            shadow-lg
            hover:scale-105
            transition
          "
          >
            Get Best Price
          </button>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</section>






<section className="py-20 bg-white">
  <div className="w-full mx-auto px-15">

    <div className="text-center mb-14">
      <h2 className="text-5xl font-black text-slate-900">
        Why Choose This Compressor
      </h2>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {[
        {
          icon: "⚡",
          title: "Energy Efficient",
          desc: "Reduced power consumption.",
        },
        {
          icon: "🔧",
          title: "Low Maintenance",
          desc: "Long service intervals.",
        },
        {
          icon: "🏭",
          title: "Industrial Grade",
          desc: "Built for harsh environments.",
        },
        {
          icon: "📈",
          title: "Maximum Output",
          desc: "Consistent compressed air flow.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
          group
          bg-white
          border
          border-slate-200
          rounded-[30px]
          p-8
          shadow-lg
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
        "
        >
          <div className="text-5xl mb-5">{item.icon}</div>

          <h3 className="text-2xl font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-3 text-slate-800">
            {item.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


    </>




  );
}