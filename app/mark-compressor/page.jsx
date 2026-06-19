"use client"

import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
  
const page = () => {

const heroImages = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",

];



const products = [
  {
    title: "MSS 37 Screw Air Compressor",
    image: "/mark.webp",
  },
  {
    title: "Lubricated Screw Air Compressors",
    image: "/mark2.webp",
  },
  {
    title: "Mark MSS 30 Screw Air Compressor",
    image: "/mark3.webp",
  },
  {
    title: "Mark MSS 18.5 Screw Air Compressor",
    image: "/mark.webp",
  },
];



const features = [
  {
    title: "High Energy Efficiency",
    desc: "Our MARK Compressors are designed to optimize energy usage, making them a cost-effective choice for industries seeking reliable compressed air solutions from a trusted Screw Air Compressors Supplier."
  },
  {
    title: "Reliable Continuous Operation",
    desc: "Built for demanding industrial environments, MARK Compressors ensure uninterrupted compressed air supply, helping businesses maintain smooth and efficient operations."
  },
  {
    title: "Advanced Compressor Technology",
    desc: "As an experienced Screw Air Compressors Trader, we offer MARK Compressors equipped with innovative technology that enhances performance, control, and operational efficiency."
  },
  {
    title: "Low Maintenance Requirements",
    desc: "The robust construction and quality components of MARK Compressors help reduce maintenance needs and operational downtime."
  },
  {
    title: "Durable & Long-Lasting Performance",
    desc: "Designed to withstand challenging industrial conditions, MARK Compressors provide long service life and dependable performance."
  },


  {
  title: "Consistent Air Quality",
  desc: "MARK Compressors deliver a stable and reliable compressed air supply, ensuring consistent performance across industrial applications while supporting operational efficiency and product quality."
}




];



const benefits = [
  {
    title: "Enhanced Energy Efficiency",
    desc: "MARK Compressors are engineered to consume less power while delivering consistent compressed air output, helping reduce energy expenses."
  },
  {
    title: "Improved Operational Productivity",
    desc: "A continuous and reliable air supply ensures smooth production processes and minimizes workflow interruptions."
  },
  {
    title: "Lower Maintenance Costs",
    desc: "Built with high-quality components, MARK Compressors require less frequent maintenance, reducing downtime and service expenses."
  },
  {
    title: "Long Service Life",
    desc: "Robust construction and advanced engineering ensure durability and dependable performance for years of operation."
  },
  {
    title: "Reduced Downtime",
    desc: "Reliable compressor performance helps prevent unexpected breakdowns and keeps industrial operations running efficiently."
  }
];

const applications = [
  {
    title: "Manufacturing Industry",
    image: "/indus1.jpg",
    desc: "Providing dependable compressed air for production lines, machinery, automation systems, and industrial processes."
  },
  {
    title: "Automotive Industry",
    image: "/indus2.jpg",
    desc: "Supporting vehicle assembly, painting, maintenance, and pneumatic tool operations with reliable compressed air solutions."
  },
  {
    title: "Pharmaceutical Industry",
    image: "/indus3.jpg",
    desc: "Ensuring clean and consistent compressed air for manufacturing processes and quality-controlled environments."
  },
  {
    title: "Food & Beverage Industry",
    image: "/indus4.jpg",
    desc: "Helping maintain operational efficiency and product quality in food processing and packaging applications."
  },
  {
    title: "Textile Industry",
    image: "/indus5.jpg",
    desc: "Supporting spinning, weaving, dyeing, and finishing processes with uninterrupted compressed air supply."
  },
  {
    title: "Engineering & Fabrication Units",
    image: "/indus6.jpg",
    desc: "Powering pneumatic equipment, industrial tools, and manufacturing machinery for improved productivity."
  },
  {
    title: "Chemical Industry",
    image: "/indus7.jpg",
    desc: "Providing reliable compressed air solutions for demanding processing and production environments."
  },
  {
    title: "Packaging Industry",
    image: "/indus7.jfif",
    desc: "Enhancing efficiency in automated packaging systems, filling machines, and production lines."
  }
];



  return (
    <div>
      
  <section className="relative overflow-hidden bg-white">
  {/* Decorative Blurs */}
  

  <div className="container mx-auto px-13 py-15 relative z-10">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      <div className=''>
        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-sky-200 text-sky-700 font-medium shadow-sm">
          Trusted Screw Air Compressors Supplier
        </span>


  <h1 className="mt-4 text-4xl  font-bold leading-tight text-slate-900">
           Screw Air Compressors Trader &   
          <span className="block text-sky-600">
            MARK Compressors Supplier
          </span>
        </h1>


      

        <p className="mt-4 text-lg text-black leading-relaxed text-justify max-w-2xl">
        Eutair Equipments LLP is a trusted Screw Air Compressors Supplier of high-performance MARK Compressors for industrial applications. We offer advanced compressed air solutions designed to deliver superior efficiency, reliability, and long-lasting performance. Our MARK Compressor range is engineered to meet the compressed air requirements of manufacturing units, automotive facilities, pharmaceutical companies, engineering workshops, textile industries, and other industrial sectors.


        </p>

        <div className="flex flex-wrap gap-4 mt-7">
          <button className="px-8 py-4 rounded-2xl bg-sky-500 text-white font-semibold shadow-lg shadow-sky-200 hover:scale-105 transition-all">
            Get a Free Quote Today
          </button>

          <button className="px-8 py-4 rounded-2xl bg-white border border-sky-200 text-slate-700 hover:border-sky-400 transition-all">
            Explore Products
          </button>
        </div>
      </div>

   <div className="relative">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-sky-300/20 blur-3xl rounded-full"></div>

  {/* Floating Card */}
  <div className="
    relative
    z-10
    bg-white/80
    backdrop-blur-xl
    border
    border-sky-100
    rounded-[40px]
    p-5
    shadow-[0_20px_60px_rgba(14,165,233,.12)]
  ">

    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      loop={true}
      className="heroSwiper"
    >
      {heroImages.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center">

            <img
              src={img}
              alt={`Compressor ${index + 1}`}
              className="
                w-full
                max-w-[500px]
                h-[420px]
                object-contain
                drop-shadow-[0_25px_50px_rgba(14,165,233,.25)]
              "
            />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>

  {/* Floating Stats Card */}
  <div className="
    hidden lg:flex
    absolute
    -left-10
    top-12
    bg-white
    rounded-3xl
    px-6
    py-4
    shadow-xl
    border
    border-sky-100
    z-20
  ">
    <div>
      <h4 className="text-2xl font-bold text-sky-600">
        99%
      </h4>
      <p className="text-sm text-slate-500">
        Efficiency
      </p>
    </div>
  </div>

  {/* Floating Experience Card */}
  <div className="
    hidden lg:flex
    absolute
    -right-6
    bottom-10
    bg-white
    rounded-3xl
    px-6
    py-4
    shadow-xl
    border
    border-sky-100
    z-20
  ">
    <div>
      <h4 className="text-2xl font-bold text-sky-600">
        MARK COMPRESSORS
      </h4>
      <p className="text-sm text-slate-500">
        Industrial Solutions
      </p>
    </div>
  </div>

</div>

    </div>
  </div>
</section>



<section className="py-12 px-6 bg-slate-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">
        Our MARK Compressor Range
      </h2>
    
    </div>
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
  {products.map((item, index) => (
    <div
      key={index}
      className="
        group
        bg-white
        rounded-[30px]
        overflow-hidden
        border
        border-slate-200
        shadow-[0_15px_40px_rgba(0,0,0,.06)]
        hover:shadow-[0_25px_60px_rgba(14,165,233,.15)]
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      <div className="bg-gradient-to-b from-sky-50 to-white p-8 h-[240px] flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            max-h-[280px]
            object-cover
            transition-all
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-3 text-center">
        <h3 className="text-xl font-bold text-slate-900 leading-snug">
          {item.title}
        </h3>

        <button
          className="
            mt-5
            px-5
            py-3
            rounded-xl
            bg-gradient-to-r
            from-sky-500
            to-blue-600
            text-white
            font-semibold
            hover:scale-105
            transition-all
          "
        >
          View Details
        </button>
      </div>
    </div>
  ))}
</div>
  </div>
</section>


<section className="py-12 bg-white">
  <div className="container mx-auto px-10">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold">
        Why Choose MARK Compressors?
      </h2>

      <p className="text-xl text-cyan-800 my-4">
       MARK Compressors are recognized worldwide for delivering dependable compressed air solutions that combine advanced technology, energy efficiency, and long-term reliability. Designed to meet the demanding requirements of modern industries, MARK Compressors help businesses achieve consistent performance while reducing energy consumption and operating costs.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      {features.map((item,index)=>(
        <div
          key={index}
          className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-3xl p-8"
        >
          <h3 className="font-bold text-xl mb-4">
            {item.title}
          </h3>

          <p className="text-white">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="py-12 bg-[#f8fbff]">
  <div className="container mx-auto px-6">

    <div className="
      relative
      overflow-hidden
      rounded-[40px]
      bg-gradient-to-r
      from-sky-500
      via-cyan-500
      to-blue-500
      p-10
  
      text-white
      shadow-[0_20px_60px_rgba(14,165,233,.25)]
    ">

  

      <div className="relative z-10 text-center max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Improve Your Compressed Air Efficiency?
        </h2>

        <p className="text-lg text-white/90">
          Partner with Eutair Equipments LLP, a trusted Screw Air Compressors
          Supplier, and discover high-performance MARK Compressors engineered
          for reliability, efficiency, and long-term value.
        </p>

        <button className="
          mt-7
          px-10
          py-4
          rounded-2xl
          bg-white
          text-sky-600
          font-semibold
          hover:scale-105
          transition-all
        ">
          Get a Free Quote Today
        </button>

      </div>

    </div>
  </div>
</section>





<section className="py-13 bg-gradient-to-b from-white to-sky-50">
  <div className="container mx-auto px-6">

    <div className="text-center max-w-4xl mx-auto mb-20">
      <span className="text-sky-600 font-semibold">
        Benefits of MARK Compressors
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        Maximize Efficiency, Productivity & Cost Savings
      </h2>

      <p className="mt-5 text-slate-600 leading-relaxed">
        As a trusted Screw Air Compressors Trader, Eutair Equipments LLP offers MARK Compressors that are designed to deliver exceptional performance, energy efficiency, and operational reliability. These compressors help businesses optimize their compressed air systems while reducing overall operating costs.
      </p>
    </div>

   <div className="grid lg:grid-cols-2 gap-16">

    <div className="relative">
  <div className="sticky top-54">

    <div className="absolute inset-0 bg-sky-200/30 blur-3xl rounded-full"></div>

    <div className="
      relative
      overflow-hidden
      rounded-[36px]
      bg-white
      border
      border-sky-100
      shadow-[0_20px_60px_rgba(14,165,233,.12)]
    ">
      <img
        src="/Screw.png"
        alt=""
        className="relative z-10 w-full object-cover"
      />
    </div>

  </div>
</div>

      <div className="space-y-6">
        {benefits.map((item, index) => (
      <div
  key={index}
  className="
    bg-white
    border
    border-sky-100
    rounded-[28px]
    p-8
    shadow-[0_10px_40px_rgba(14,165,233,.08)]
    hover:-translate-y-1
    transition-all
  "
>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {item.title}
            </h3>

            <p className="text-slate-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>









<section className="py-5 px-8 bg-white">
  <div className="container mx-auto px-6">

    <div className="text-center max-w-4xl mx-auto mb-7">
      <span className="text-sky-600 font-semibold">
        Applications of MARK Compressors
      </span>

      <h2 className="text-5xl font-bold text-slate-900 mt-4">
        Reliable Compressed Air Solutions for Diverse Industrial Applications
      </h2>

      <p className="mt-6 text-slate-600 leading-relaxed">
        As a trusted Screw Air Compressors Supplier, Eutair Equipments LLP supplies MARK Compressors that are designed to support a wide range of industrial operations. Their efficiency, durability, and reliable performance make them suitable for industries where a consistent compressed air supply is critical.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {applications.map((item, index) => (
       <div
  key={index}
  className="
    group
    overflow-hidden
    bg-white
    border
    border-sky-100
    rounded-[32px]
    shadow-[0_10px_30px_rgba(0,0,0,.05)]
    hover:-translate-y-2
    hover:shadow-[0_20px_50px_rgba(14,165,233,.12)]
    transition-all
    duration-500
  "
>
  {/* Image */}
  <div className="relative overflow-hidden h-46">
    <img
      src={item.image}
      alt={item.title}
      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    <div className="
      absolute
      top-4
      left-4
      w-14
      h-14
      rounded-2xl
      bg-white/90
      backdrop-blur-sm
      flex
      items-center
      justify-center
      text-sky-600
      font-bold
      shadow-lg
    ">
      {(index + 1).toString().padStart(2, "0")}
    </div>
  </div>

  {/* Content */}
  <div className="p-3">
    <h3 className="text-xl font-bold text-slate-900 mb-1">
      {item.title}
    </h3>

    <p className="text-slate-600 leading-relaxed">
      {item.desc}
    </p>
  </div>
</div>
      ))}
    </div>

  </div>
</section>




    </div>
  )
}

export default page
