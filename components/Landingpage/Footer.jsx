"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle
  
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#081B2E] px-2 text-white relative overflow-hidden">
      
      {/* CTA Strip */}
      <div className="border-b hidden md:block border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold">
              Need Industrial Air Solutions?
            </h3>
            <p className="text-slate-300 mt-2">
              Talk to our experts and find the right compressed air solution for your business.
            </p>
          </div>

          <a
            href="tel:+919999999999"
            className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-full font-semibold transition"
          >
            Get Instant Quote
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 py-10">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}
          <div >
          <Image width={200}
          height={200} src="/logofooter-removebg-preview.png">

          </Image>

            <p className="text-white mt-8 leading-8">
              Leading Manufacturer, Trader, Exporter & Importer of
              Air Compressors, Air Dryers, Air Line Filters,
              Drain Valves and Industrial Filtration Solutions.
            </p>
    {/* Email Contacts */}
  

          </div>

          {/* Quick Links */}
          <div >
            <h4 className="text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-white">
              <li className="hover:text-cyan-500">
                <Link href="/">Home</Link>
              </li>

              <li className="hover:text-cyan-500">
                <Link href="/about-us">About Us</Link>
              </li>

               <li className="hover:text-cyan-500">
                <Link href="/products">Products</Link>
              </li>

                <li className="hover:text-cyan-500">
                <Link href="/blogs">Blogs</Link>
              </li>

                <li className="hover:text-cyan-500">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>   

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Our Products
            </h4>

            <ul className="space-y-4  cursor-pointer text-white">
               <li className="hover:text-cyan-500">Oil Injected Screw Compressors</li>
              <li className="hover:text-cyan-500">VFD Screw Compressors</li>
               <li className="hover:text-cyan-500">PM Screw Compressors</li>
                <li className="hover:text-cyan-500">Oil Free Compressors</li>
                <li className="hover:text-cyan-500">Air Dryers</li>
        
            </ul>
          </div>

          {/* Contact */}
         <div>
  <h4 className="text-xl font-semibold mb-5">
    Contact Information
  </h4>

  <div className="space-y-6">

  

    {/* Phone */}
    <div className="flex items-start gap-4">
      <Phone
        className="text-cyan-500 shrink-0 mt-1"
        size={20}
      />
      <div>
        <p className="font-semibold text-white">
          Phone
        </p>
        <a
          href="tel:+919717159766"
          className="text-slate-300 hover:text-cyan-400 transition-colors"
        >
          +91 9717159766
        </a>
      </div>
    </div>

    {/* WhatsApp */}
    <div className="flex items-start gap-4">
      <FaWhatsapp
        className="text-cyan-500 shrink-0 mt-1"
        size={20}
      />
      <div>
        <p className="font-semibold text-white">
          WhatsApp
        </p>
        <a
          href="https://wa.me/919582911766"
          className="text-slate-300 hover:text-cyan-400 transition-colors"
        >
          +91 958 2911766
        </a>
      </div>
    </div>


  </div>



  <div className="flex items-start gap-4 mt-3">
      <Mail
        className="text-cyan-500 shrink-0 mt-1"
        size={20}
      />
      <div>
        <p className="font-semibold text-white  mb-2">
          Email Contacts
        </p>

        <div className="space-y-1 text-slate-300">
        

          <a
            href="mailto:support@eutair.com"
            className="block hover:text-cyan-400 transition-colors"
          >
            support@eutair.com
          </a>

          <a
            href="mailto:sales@eutair.com"
            className="block hover:text-cyan-400 transition-colors"
          >
            sales@eutair.com
          </a>
        </div>
      </div>
    </div>

</div>

        </div>
      </div>

<div className="h-px w-full  bg-gray-50/40"></div>


<div className="flex py-5  gap-4 justify-center items-center max-w-7xl mx-auto">


  {/* Registered Address */}

  <div className="flex flex-col md:flex-row">


    <div className="flex   items-start gap-4">
      <MapPin
        className="text-cyan-500 shrink-0 mt-1"
        size={20}
      />
      <div>
        <p className="font-semibold text-white">
          Regd. Address
        </p>
        <p className="text-slate-300 leading-relaxed">
          37C, 2nd Floor, Gate No. 3, Opp. IDBI Bank,
          Chaudhary Balbir Singh Marg, A3 Block,
          Paschim Vihar, New Delhi - 110063
        </p>
      </div>
    </div>

    {/* Office Address */}
    <div className="flex items-start gap-4">
      <MapPin
        className="text-cyan-500 shrink-0 mt-1"
        size={20}
      />
      <div>
        <p className="font-semibold text-white">
          Office Address
        </p>
        <p className="text-slate-300 leading-relaxed">
          T-3, Third Floor, Ansal Utility Tower,
          A2 Block, Paschim Vihar,
          New Delhi, Delhi - 110063
        </p>
      </div>
    </div>
</div>
  </div>



      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between gap-4 text-sm text-slate-400">
          <p>
            © 2026 Eutair Equipments LLP. All Rights Reserved.
          </p>

          <p>
            Website Designed By Inquiry Bazaar Pvt. Ltd. <a className="underline text-cyan-500" href="https://inquirybazaar.com/">B2B Marketplace</a> 
          </p>
        </div>
      </div>
    </footer>
  );
}