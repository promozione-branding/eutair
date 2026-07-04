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

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [productMenu, setProductMenu] = useState(false);
  const [servicesMenu, setServicesMenu] = useState(false);

  const services = [
    {
      title: "AMC Service",
      href: "/amc-service",
    },
    {
      title: "Air Audit Services",
      href: "/air-audit-service",
    },
    {
      title: "Engineering Consultancy",
      href: "/engineering-consultancy",
    },
    {
      title: "Wastewater Engineering",
      href: "/wastewater-engineering",
    },
    {
      title: "Turnkey Project",
      href: "/turnkey-project",
    },
  ];

  const [open, setOpen] = useState(false);

  const products = [
    {
      title: "Mark Compressors",
      href: "/mark-compressor",
    },
    {
      title: "Chicago Pneumatic",
      href: "/chicago-pneumatic",
    },
    {
      title: "Air Treatment",
      href: "/air-treatment-service",
    },
    {
      title: "Spares and Consumables",
      href: "/spares-and-consumables",
    },
    {
      title: "Piping and Distribution Lines",
      href: "/piping-and-distribution-lines",
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
                  href="https://www.linkedin.com/company/eutairequipments/"
                  className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 border-blue-600 text-blue-600 hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="https://www.facebook.com/eutairequipmentsllp?mibextid=wwXIfr&rdid=CXzIuIs5Eeyc0JDi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CSypmAiQR%2F%3Fmibextid%3DwwXIfr#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border  transition-all duration-300 border-blue-600 text-blue-600 hover:-translate-y-0.5"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/919582911766
"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp
                    size={10}
                    className="flex h-8 w-8 p-1 items-center justify-center rounded-full border  transition-all duration-300 border-green-600 text-green-600 hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href="https://www.instagram.com/eutairequipments"
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 border border-pink-500 text-pink-500 hover:-translate-y-0.5"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/@eutairequipments1359"
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
            <Link href="/" className="group">
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
                    href="/about"
                    className="text-[17px] lg:text-[16px]  tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
                  >
                    ABOUT US
                  </Link>
                </li>

                {/* Products Dropdown */}
                <li className="relative group">
                  <button
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
                    <ChevronDown
                      className="
            w-4 h-4
            transition-transform duration-300
            group-hover:rotate-180
          "
                    />
                  </button>

                  <div
                    className="
          absolute left-1/2 top-full
          lg:text-[16px] 
          -translate-x-1/2
          pt-6
          opacity-0 invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all duration-300
        "
                  >
                    <div
                      className="
                      lg:text-[16px] 
            w-[700px]
            rounded-3xl
            bg-white
            border border-slate-200
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            overflow-hidden
          "
                    >
                      <div className="grid grid-cols-2">
                        {/* Left */}
                        <div className="p-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                          <h3 className="text-2xl font-bold mb-4">
                            Air Solutions
                          </h3>

                          <p className="text-white/90 leading-relaxed">
                            Explore our complete range of industrial air
                            compressors, dryers, filtration systems and
                            accessories engineered for maximum efficiency.
                          </p>

                          <div className="flex gap-5 mt-6">
                            <div
                              className="
      flex items-center justify-center
      px-5 py-3
      bg-white/90 backdrop-blur-md
      border border-white/60
      rounded-full
      shadow-[0_8px_25px_rgba(0,0,0,0.15)]
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]
      transition-all duration-300
    "
                            >
                              <Image
                                src="/mark-compressors-logo.png"
                                alt="Mark Compressors"
                                width={110}
                                height={60}
                                className="object-contain"
                              />
                            </div>

                            {/* Chicago Pneumatic */}
                            <div
                              className="
      flex items-center justify-center
      px-5 py-3
      bg-white/90 backdrop-blur-md
      border border-white/60
      rounded-full
      shadow-[0_8px_25px_rgba(0,0,0,0.15)]
      hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]
      transition-all duration-300
    "
                            >
                              <Image
                                src="/chicago-pneumatic-logo.png"
                                alt="Chicago Pneumatic"
                                width={100}
                                height={60}
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Right */}
                        <div className="p-8">
                          <div className="grid grid-cols-1 gap-2">
                            {products.map((product) => (
                              <Link
                                key={product.title}
                                href={product.href}
                                className="
                      flex items-center justify-between
                      rounded-xl
                      px-4 py-3
                      text-black
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition-all
                      group/item
                    "
                              >
                                <span>{product.title}</span>

                                <ArrowRight
                                  className="
                        w-4 h-4
                        opacity-0
                        group-hover/item:opacity-100
                        transition-all
                      "
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/our-blogs"
                    className="text-[17px] lg:text-[16px]  tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
                  >
                    BLOGS
                  </Link>
                </li>

                <li className="relative group">
                  <button
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
                    OUR SERVICES
                    <ChevronDown
                      className="
        w-4 h-4
        transition-transform duration-300 lg:text-[16px] 
        group-hover:rotate-180
      "
                    />
                  </button>

                  <div
                    className="
      absolute left-1/2 top-full
      -translate-x-1/2
      pt-6
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-300
    "
                  >
                    <div
                      className="
        w-[650px]
        rounded-3xl
        bg-white
        border border-slate-200
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        overflow-hidden
      "
                    >
                      <div className="grid grid-cols-2">
                        {/* Left */}
                        <div className="p-8 bg-gradient-to-br lg:text-[16px]  from-cyan-600 to-blue-600 text-white">
                          <h3 className="text-2xl font-bold mb-4">
                            Our Services
                          </h3>

                          <p className="text-white/90 leading-relaxed">
                            Professional compressed air system services,
                            maintenance, audits and installation support for
                            maximum efficiency and reliability.
                          </p>
                        </div>

                        {/* Right */}
                        <div className="p-8">
                          <div className="grid gap-2">
                            {services.map((service) => (
                              <Link
                                key={service.title}
                                href={service.href}
                                className="
                  flex items-center justify-between
                  rounded-xl
                  px-4 py-3
                  text-black
                  hover:bg-cyan-50
                  hover:text-cyan-600
                  transition-all
                  group/item
                "
                              >
                                <span>{service.title}</span>

                                <ArrowRight
                                  className="
                    w-4 h-4
                    opacity-0
                    group-hover/item:opacity-100
                    transition-all
                  "
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-[17px] tracking-[0.12em] lg:text-[16px]  font-medium text-slate-700 hover:text-blue-600"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-base font-semibold"
              >
                Get a Quote
              </button>

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
            <button
              onClick={() => setOpen(true)}
              className="
        hidden lg:block
relative overflow-hidden
rounded-full
px-7 py-3.5
text-sm font-semibold
tracking-wide
text-white
bg-gradient-to-r
from-blue-600
via-blue-500
to-cyan-500
shadow-[0_10px_30px_rgba(37,99,235,0.25)]
        "
            >
              GET A QUOTE
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-4 py-5">
              <div className="flex flex-col gap-4">
                <Link
                  href="/about"
                  onClick={() => setMobileMenu(false)}
                  className="font-medium text-slate-700"
                >
                  ABOUT US
                </Link>

                {/* Products Accordion */}
                <div>
                  <button
                    onClick={() => setProductMenu(!productMenu)}
                    className="flex items-center justify-between w-full font-medium text-slate-700"
                  >
                    OUR PRODUCTS
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        productMenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {productMenu && (
                    <div className="mt-3 pl-4 flex flex-col gap-3 border-l">
                      {products.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileMenu(false)}
                          className="text-slate-600"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/our-blogs"
                  onClick={() => setMobileMenu(false)}
                  className="font-medium text-slate-700"
                >
                  BLOGS
                </Link>

                <div>
                  <button
                    onClick={() => setServicesMenu(!servicesMenu)}
                    className="flex items-center justify-between w-full font-medium text-slate-700"
                  >
                    SERVICES
                    <ChevronDown
                      className={`w-4 h-4 transition ${
                        servicesMenu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesMenu && (
                    <div className="mt-3 pl-4 flex flex-col gap-3 border-l">
                      {services.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileMenu(false)}
                          className="text-slate-600"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="font-medium text-slate-700"
                >
                  CONTACT US
                </Link>

                <button
                  onClick={() => {
                    setOpen(true);
                    setMobileMenu(false);
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
                    href="https://wa.me/919582911766
"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                  </a>
                  <a href="https://www.instagram.com/eutairequipments">
                    {" "}
                    <Instagram className="w-5 h-5 text-pink-500" />
                  </a>
                  <a href="https://www.youtube.com/@eutairequipments1359">
                    <Youtube className="w-6 h-6 text-red-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <Enquiry isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
