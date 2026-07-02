import Image from "next/image";

import markData from "@/lib/Data2";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

export default function ProductPage({ params }) {
const allProducts = markData.products;

  const product = allProducts.find(
    (item) => item.slug === params.slug
  );


  console.log("params", params);
console.log("slug", params.slug);
console.log("products", allProducts);


  return (
    <>
      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-7 md:py-16">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200/30 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/30 blur-[120px]" />
        </div>

        <div className="max-w-[1800px] mx-auto px-5 md:px-14 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">

            <div className="bg-white rounded-[32px] p-4 md:p-8 border border-slate-200 shadow-[0_25px_80px_rgba(0,0,0,.08)]">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-50 to-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain transition-all duration-700 hover:scale-110"
                />
              </div>
            </div>

            <div>
              <span className="inline-flex px-5 py-2 rounded-full bg-sky-100 text-sky-700 font-semibold">
                Chicago Pneumatic
              </span>

              <h1 className="mt-5 text-[26px] md:text-5xl font-black text-slate-900 leading-tight">
                {product.title}
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-6 md:leading-relaxed">
                {product.shortDescription}
              </p>

              {/* BADGES */}

              <div className="flex flex-wrap gap-3 mt-8">
                {product.badges?.map((badge, index) => (
                  <span
                    key={index}
                    className="md:px-4 px-2 py-1 md:py-2 rounded-full bg-green-100 text-green-700 font-medium"
                  >
                    ✓ {badge}
                  </span>
                ))}
              </div>

              {/* CTA */}

              <div className="flex flex-wrap gap-4 mt-5 md:mt-10">
                <button className="group flex items-center gap-3 px-4 md:px-8 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-[0_10px_30px_rgba(34,197,94,.35)] hover:-translate-y-1 transition-all duration-300">
                  <FaWhatsapp size={24} />
                  <span>WhatsApp Now</span>
                </button>

                <button className="group flex items-center gap-3 px-4 md:px-8 h-16 rounded-2xl bg-white border border-sky-200 text-slate-800 font-semibold">
                  <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center">
                    <FaPhoneAlt size={14} />
                  </div>
                  <span>Call Now</span>
                </button>

                <button className="group flex items-center gap-3 px-8 h-16 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold">
                  <FaDownload size={18} />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIFICATIONS + DESCRIPTION */}

      <section className="py-5 md:py-15 bg-slate-50">
        <div className="w-full mx-auto px-5 md:px-10">

          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* SPECIFICATIONS */}

            <div className="lg:col-span-4">
              <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,.08)] sticky top-24">

                <div className="bg-gradient-to-r from-sky-500 to-blue-400 px-8 py-3">
                  <h2 className="text-2xl font-bold text-white">
                    Specifications
                  </h2>
                </div>

                {product.specifications?.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-4 px-8 py-3 md:py-6 border-b hover:bg-sky-50 transition"
                  >
                    <span className="font-semibold text-slate-900">
                      {spec.label}
                    </span>

                    <span className="text-slate-600 text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="lg:col-span-8">
              <div className="bg-white rounded-[32px] border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,.08)] overflow-hidden">

                <div className="bg-gradient-to-r from-sky-500 to-blue-300 py-3 px-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    Product Description
                  </h2>
                </div>

                <div className="p-5 md:p-10">

                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                    {product.title}
                  </h3>

                  {product.description?.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-lg leading-6 md:leading-relaxed text-slate-600 ${
                        index !== 0 ? "mt-6" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* FEATURES */}

                  <div className="mt-10">
                    <h4 className="text-3xl font-bold text-slate-900 mb-6">
                      Key Features
                    </h4>

                    <div className="grid md:grid-cols-2 gap-5">
                      {product.features?.map((feature, index) => (
                        <div
                          key={index}
                          className="bg-sky-50 rounded-2xl p-3 md:p-5 border border-sky-100"
                        >
                          <h5 className="font-bold text-slate-900 text-lg mb-2">
                            {feature.icon} {feature.title}
                          </h5>

                          <p className="text-slate-600">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* APPLICATIONS */}

                  <div className="mt-12">
                    <h4 className="text-3xl font-bold text-slate-900 mb-5">
                      Applications
                    </h4>

                    <ul className="grid md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-8">
                      {product.applications?.map((app, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-slate-700"
                        >
                          <span className="text-green-500">✓</span>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}

                  <div className="mt-12 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 p-6 md:p-8 text-white">
                    <h4 className="text-2xl font-bold mb-3">
                      {product.cta?.title}
                    </h4>

                    <p className="text-white/90 leading-relaxed">
                      {product.cta?.description}
                    </p>

                    
                    <button className="mt-5 animate-pulse px-10 h-16 text-lg rounded-2xl bg-black text-white font-semibold shadow-lg hover:scale-105 transition">
                      Get Best Price
                    </button>
                   
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



{/* form */}

<section className="relative py-4 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-sky-50" />

  <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200/20 blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 blur-[120px]" />

  <div className="w-full mx-auto px-5 md:px-9 relative z-10">

    <div
      className="
        bg-white/90
        backdrop-blur-xl
        border
        border-white
        rounded-[40px]
        md:p-8
        p-5
        shadow-[0_30px_80px_rgba(0,0,0,.08)]
      "
    >

      {/* Badge */}
      <div className="flex justify-center">
        <span
          className="
            px-5
            py-2
            rounded-full
            bg-sky-100
            text-sky-700
            font-semibold
          "
        >
          Get Expert Assistance
        </span>
      </div>

      {/* Heading */}
      <h2
        className="
          mt-6
          text-center
          text-2xl
          md:text-5xl
     
          font-black
          text-slate-900
          leading-tight
        "
      >
        Power Your Operations with
        <span className="block text-sky-600">
          Chicago Pneumatic Compressors
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          max-w-5xl
          mx-auto
          text-center
          text-slate-600
          text-lg
          md:text-xl
          mt-6
          leading-6
          md:leading-relaxed
        "
      >
        Looking for energy-efficient and high-performance compressed air
        solutions? We offer a complete range of Chicago Pneumatic Screw Air
        Compressors engineered for reliability, productivity, and long-term
        industrial performance.
      </p>

      {/* Form */}
      <form className="mt-9">

        <div className="grid xl:grid-cols-5 gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="
              h-13
              md:h-16
              rounded-2xl
              bg-slate-50
              border
              border-slate-500
              px-3
              md:px-6
              text-slate-800
              outline-none
              transition-all
              focus:border-sky-500
              focus:ring-4
              focus:ring-sky-100
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            className="
              px-3
              md:px-6
              rounded-2xl
              bg-slate-50
              border
          border-slate-500
              h-13
              md:h-16
              text-slate-800
              outline-none
              transition-all
              focus:border-sky-500
              focus:ring-4
              focus:ring-sky-100
            "
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="
              h-13
              md:h-16
              rounded-2xl
              bg-slate-50
              border
            border-slate-500
              px-3
              md:px-6
              text-slate-800
              outline-none
              transition-all
              focus:border-sky-500
              focus:ring-4
              focus:ring-sky-100
            "
          />

          <input
            type="text"
            placeholder="Your Requirement"
            className="
              h-13
              md:h-16
              rounded-2xl
              bg-slate-50
              border
               border-slate-500
              px-3
              md:px-6
              text-slate-800
              outline-none
              transition-all
              focus:border-sky-500
              focus:ring-4
              focus:ring-sky-100
            "
          />

          <button
            type="submit"
            className="
              h-13
              md:h-16
              rounded-2xl
              bg-gradient-to-r
              from-sky-500
              via-cyan-500
              to-blue-600
              text-white
              font-bold
              text-lg
              shadow-lg
              hover:shadow-sky-300/40
              hover:scale-[1.03]
              transition-all
              duration-300
            "
          >
            Request Quote →
          </button>

        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-8">

          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-green-500">✓</span>
            Fast Response
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-green-500">✓</span>
            Technical Consultation
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-green-500">✓</span>
            Best Pricing
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-green-500">✓</span>
            Genuine Products
          </div>

        </div>

      </form>

    </div>

  </div>
</section>



      {/* WHY CHOOSE */}

      <section className=" py-7 md:py-20 bg-white">
        <div className="w-full mx-auto px-5 md:px-15">

          <div className="text-center mb-5 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Why Choose This Compressor
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {product.whyChoose?.map((item, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-[30px] p-4 md:p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-5">
                  {item.icon}
                </div>

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