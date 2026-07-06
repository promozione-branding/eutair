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
   <TrustSection/>
   <ProductSlider/>
   <Category/>
   <WhyChoose/>
   <Certificates/>
   <Industries/>
     <Clients/>
     <Testimonials/>
     <CTA/>
     <Footer/>
   </>
  )
}
