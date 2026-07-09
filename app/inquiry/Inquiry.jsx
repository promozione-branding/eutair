import Category from '@/components/Inquiry/Category'
import Certificates from '@/components/Inquiry/Certificates'
import CTA from '@/components/Inquiry/CTA'
import Footer from '@/components/Inquiry/Footer'
import HeroSlider from '@/components/Inquiry/Hero'
import Industries from '@/components/Inquiry/Industries'
import MobileFooterCTA from '@/components/Inquiry/MobileFooterCTA'
import Navbar from '@/components/Inquiry/Navbar'
import ProductSlider from '@/components/Inquiry/ProductSlider'
import Testimonials from '@/components/Inquiry/Testimonials'
import TrustSection from '@/components/Inquiry/TrustSection'
import WhyChoose from '@/components/Inquiry/WhyChoose'
import Clients from "@/components/Landingpage/Clients"
import React from 'react'

export default function Inquiry() {
  return (
   <>
   <Navbar/>
   <HeroSlider/>
     <Clients/>
   <ProductSlider/>
   <TrustSection/>
   <Category/>
   <WhyChoose/>
   <div className='bg-blue-600 w-full'>
   <div className="relative z-10 max-w-7xl py-10 bg-blue-600 mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-10 lg:mb-5 xl:mb-9">
      <span
        className="
          inline-flex
          px-5
          py-2
          rounded-full
          bg-sky-500/10
          border
          border-sky-400/20
          text-sky-300
          font-medium
        "
      >
        Our Achievements
      </span>

      <h2 className="mt-6 text-3xl md:text-6xl font-black text-white">
        Trusted by Industries Across India
      </h2>

  
    </div>

    {/* Stats */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">

      {[
        {
          number: "500+",
          label: "Projects Delivered",
       
        },
        {
          number: "300+",
          label: "Industrial Clients",
        
        },
        {
          number: "20+",
          label: "Product Categories",
      
        },
        {
          number: "24/7",
          label: "Customer Support",
        
        },
      ].map((item, index) => (
        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            p-5
            md:p-8
            text-center
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-sky-400/40
            hover:bg-white/10
          "
        >
          {/* Top Glow Line */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />

       

          {/* Number */}
          <h3
            className="
              text-4xl
              md:text-6xl
              font-black
              bg-gradient-to-r
              from-sky-300
              via-cyan-300
              to-white
              bg-clip-text
              text-white
            "
          >
            {item.number}
          </h3>

          {/* Label */}
          <p className="mt-4 text-lg text-slate-300 font-medium">
            {item.label}
          </p>
        </div>
      ))}

    </div>

  </div>
  </div>
   <Certificates/>
   <Industries/>
     <Testimonials/>
     <CTA/>
     <Footer/>
   </>
  )
}
