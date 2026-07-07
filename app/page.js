
import Hero from "@/components/Landingpage/Hero";


import Cta from "@/components/Landingpage/Cta";

import Process from "@/components/Landingpage/Process";
import Faq from "@/components/Landingpage/Faq";
import About from "@/components/Landingpage/About"

import Popup from "@/components/Popup";
// import CityPage from "../components/City";
import Dedicated from "@/components/Landingpage/Dedicated";
import Otherproduct from "@/components/Landingpage/Otherpro";

import IndustriesSection from "@/components/Landingpage/Industries";
import Products from "@/components/Landingpage/Products";
import Clients from "@/components/Landingpage/Clients"
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Bestseller from "@/components/Landingpage/Bestseller";
import Whoweare from "@/components/Landingpage/Whoweare";
import CityPage from "@/components/City";
export default function Home() {
  return (
    <>
      <Popup></Popup>
      <Hero />
      <Clients/>
     
     
<About/>
<Whoweare/>
  <Products></Products>
       <Cta></Cta>
      <Otherproduct></Otherproduct>
       <Process></Process>
      <Dedicated></Dedicated>
  
        <Bestseller></Bestseller>
  
  <IndustriesSection/>
       <TestimonialSlider></TestimonialSlider>


      {/* <CityPage/> */}
      <Faq></Faq>
   
    </>
  );
}
