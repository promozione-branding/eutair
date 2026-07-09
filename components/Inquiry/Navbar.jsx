"use client";
import Link from "next/link";
import {
  Phone,
  Mail,
  Building2,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Enquiry from "@/components/Enquiry";
import { Menu, X } from "lucide-react";
import ContactForm from "./PopupForm";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [open, setOpen] = useState(false);

  const [productMenu, setProductMenu] = useState(false);
  const [servicesMenu, setServicesMenu] = useState(false);

  const services = [
    {
      title: "AMC Service",
      href: "",
    },
    {
      title: "Air Audit Services",
      href: "",
    },
    {
      title: "Engineering Consultancy",
      href: "",
    },
    {
      title: "Wastewater Engineering",
      href: "",
    },
    {
      title: "Turnkey Project",
      href: "",
    },
  ];

  const products = [
    {
      title: "Mark Compressors",
      href: "",
    },
    {
      title: "Chicago Pneumatic",
      href: "",
    },
  ];

  return (
    <>
      <header className=" sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60">
        {/* Top Info Bar */}

        <div className="hidden md:block border-b border-slate-100 bg-slate-50/50">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="h-11 flex items-center justify-between">
              {/* Left Side */}
              <div className="flex items-center gap-6 text-[14px] text-slate-600">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span>GSTIN: 07AAGFE0760M2ZB</span>
                </div>

                <div className="w-px h-4 bg-slate-200" />
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Paschim Vihar, New Delhi-110063</span>
                </div>

                <div className="w-px h-4 bg-slate-200" />

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a
                    href="tel:+919717159766"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Phone +91 9717159766
                  </a>
                </div>

                <div className="w-px h-4 bg-slate-200" />

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <a
                    href="mailto:sales@eutair.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    sales@eutair.com
                  </a>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-3">
                <a
                  href=""
                  className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 border-blue-600 text-blue-600 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href=""
                  className="flex h-8 w-8 items-center justify-center rounded-full border  transition-all duration-300 border-blue-600 text-blue-600 hover:-translate-y-0.5"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp
                    size={10}
                    className="flex h-8 w-8 p-1 items-center justify-center rounded-full border  transition-all duration-300 border-green-600 text-green-600 hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href=""
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 border border-pink-500 text-pink-500 hover:-translate-y-0.5"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href=""
                  className="flex h-8 w-8 items-center justify-center rounded-full border  transition-all duration-300 border-red-500 text-red-500 hover:-translate-y-0.5"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="w-full mx-auto px-5 md:px-25 lg:px-15">
          <div className="h-16 sm:h-20 lg:h-19 flex items-center justify-between">
            {/* Logo */}
            <Link href="" className="group">
              <img
                src="/logo.png"
                alt="EutAir"
                className="h-10 lg:h-16 w-auto transition-transform duration-500 group-hover:scale-[1.03] object-contain"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-12 lg:gap-15">
                <li>
                  <Link
                    href=""
                    className="text-[17px] lg:text-[16px]  tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
                  >
                    ABOUT US
                  </Link>
                </li>

                {/* Products Dropdown */}
                <li className="relative group">
                  <Link
                    href="#products"
                    className="
          flex items-center gap-2
          lg:text-[16px] 
          text-[17px]
          tracking-[0.12em]
          font-medium
          text-slate-700
          hover:text-blue-600
          transition-all
        "
                  >
                    OUR PRODUCTS
                    
                  </Link>

                  
                </li>

                <li className="relative group">
                  <Link href="#industries"
                    className="
      flex items-center gap-2
      text-[17px]
      lg:text-[16px] 
      tracking-[0.12em]
      font-medium
      text-slate-700
      hover:text-blue-600
      transition-all
    "
                  >
                    OUR INDUSTRIES
                    
                  </Link>

                 
                </li>

                <li>
                  <Link
                    href="#contact"
                    className="text-[17px] tracking-[0.12em] lg:text-[16px]  font-medium text-slate-700 hover:text-blue-600"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="lg:hidden flex items-center gap-3">
              <a
                href="https://wa.link/rntibs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex py-3 px-3 gap-2 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all"
              >
                <FaWhatsapp className="w-6 h-6" /> WhatsApp
              </a>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="p-2"
              >
                {mobileMenu ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>

            {/* CTA */}
            {/* Call & WhatsApp */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919717159766"
                className="flex items-center gap-3 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Phone className="w-5 h-5" />
                </div>

                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>
                  <p className="text-[15px] font-semibold text-slate-800 group-hover:text-blue-600 transition">
                    +91 97171 59766
                  </p>
                </div>
              </a>

              <a
                href="https://wa.link/rntibs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex py-3 px-3 items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all"
              >
                <FaWhatsapp className="w-6 h-6" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-5">
              <div className="flex flex-col gap-4">
                <Link
                  href="/inquiry"
                  onClick={() => setMobileMenu(false)}
                  className="font-medium text-slate-700"
                >
                  ABOUT US
                </Link>

                {/* Products Accordion */}
                <div>
                  <Link 
                   href="#products"
                   onClick={() => setMobileMenu(false)}
                    className="flex items-center justify-between w-full font-medium text-slate-700"
                  >
                    OUR PRODUCTS
                    
                  </Link>

                  
                </div>

                {/* <Link
                  href="/our-blogs"
                  onClick={() => setMobileMenu(false)}
                  className="font-medium text-slate-700"
                >
                  BLOGS
                </Link> */}

                <div>
                  <Link
  onClick={() => setMobileMenu(false)}
                    href="#industries"
                    className="flex items-center justify-between w-full font-medium text-slate-700"
                  >
                    SERVICES
                    
                  </Link>

                  
                </div>

                <Link
                onClick={() => setMobileMenu(false)}
                  href="#contact"
                  
                  className="font-medium text-slate-700"
                >
                  CONTACT US
                </Link>

                <button
                  onClick={() => {
                    setOpen(true);
                    // setMobileMenu(false);
                    // setopen(true)
                  }}
                  className="mt-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-semibold"
                >
                  GET A QUOTE
                </button>

                {/* Social Icons */}
                <div className="flex gap-3 pt-4 border-t">
                  <a href="https://www.linkedin.com/company/eutairequipments/">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  <a href="https://www.facebook.com/eutairequipmentsllp?mibextid=wwXIfr&rdid=CXzIuIs5Eeyc0JDi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CSypmAiQR%2F%3Fmibextid%3DwwXIfr#">
                    <Facebook className="w-5 h-5 text-blue-600" />
                  </a>
                  <a
                    href="https://wa.link/rntibs
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                  </a>
                  <a href="">
                    {" "}
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </a>
                  <a href="">
                    <Youtube className="w-6 h-6 text-red-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
