import Link from "next/link";
import {
  Phone,
  Mail,
  Building2,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MapPin ,
  
} from "lucide-react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import Enquiry from "@/components/Enquiry"
export default function Navbar() {


 const [open, setOpen] =
    useState(false);


    const products = [
  {
    title: "Mark Compressors",
    href: "/products/screw-air-compressors",
  },
  {
    title: "Chicago Pneumatic",
    href: "/products/oil-free-compressors",
  },
  {
    title: "Air Treatment",
    href: "/products/vfd-screw-compressors",
  },
  {
    title: "Spares and Consumables",
    href: "/products/pm-screw-compressors",
  },
  {
    title: "Piping and Distribution Lines",
    href: "/products/diesel-air-compressors",
  },


];

  return (
<>



  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60">
  {/* Top Info Bar */}


<div className="border-b border-slate-100 bg-slate-50/50">
  <div className="w-full mx-auto px-25">
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
  <span>
 Paschim Vihar, New Delhi-110063
  </span>
</div>

        <div className="w-px h-4 bg-slate-200" />

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-600" />
          <span>Phone
+91 9717159766</span>
        </div>

        <div className="w-px h-4 bg-slate-200" />

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-blue-600" />
          <span>sales@eutair.com</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 border-blue-600 text-blue-600 hover:-translate-y-0.5"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full border  transition-all duration-300 border-blue-600 text-blue-600 hover:-translate-y-0.5"
        >
          <Facebook className="w-4 h-4" />
        </a>


          <a
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full border  transition-all duration-300 border-green-600 text-green-600 hover:-translate-y-0.5"
        >
          <FaWhatsapp className="w-4 h-4" />
        </a>

        <a
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 border border-pink-500 text-pink-500 hover:-translate-y-0.5"
        >
          <Instagram className="w-4 h-4" />
        </a>  

        <a
          href="#"
          className="flex h-8 w-8 items-center justify-center rounded-full border  transition-all duration-300 border-red-500 text-red-500 hover:-translate-y-0.5"
        >
          <Youtube className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</div>

  {/* Main Navbar */}
  <div className="w-full mx-auto px-25">
    <div className="h-23 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="group">
        <img
          src="/logo.png"
          alt="EutAir"
          className="h-16 w-auto transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      {/* Navigation */}
   <nav>
  <ul className="flex items-center gap-12">

    <li>
      <Link
        href="/"
        className="text-[17px] tracking-[0.12em] font-medium text-blue-600"
      >
        HOME
      </Link>
    </li>

    {/* Products Dropdown */}
    <li className="relative group">
      <button
        className="
          flex items-center gap-2
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
                Explore our complete range of industrial air compressors,
                dryers, filtration systems and accessories engineered for
                maximum efficiency.
              </p>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 mt-6 font-semibold"
              >
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>


<div className="flex gap-5 mt-6">

<Image width={100} height={100} src="/cp.jpeg"></Image>
<Image width={100} height={100} src="/mark.jpg"></Image>
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
                      text-slate-700
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
        href="/about-us"
        className="text-[17px] tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
      >
        ABOUT US
      </Link>
    </li>

    <li>
      <Link
        href="/services"
        className="text-[17px] tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
      >
        OUR SERVICES
      </Link>
    </li>

    <li>
      <Link
        href="/contact-us"
        className="text-[17px] tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
      >
        CONTACT US
      </Link>
    </li>

  </ul>
</nav>

      {/* CTA */}
      <button

      onClick={()=> setOpen(true)}
        className="
          relative overflow-hidden
          rounded-full
          px-7 py-3.5
          text-sm font-semibold tracking-wide
          text-white
          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-cyan-500
          shadow-[0_10px_30px_rgba(37,99,235,0.25)]
          hover:shadow-[0_15px_40px_rgba(37,99,235,0.35)]
          transition-all duration-500
          hover:-translate-y-0.5
        "
      >


        GET A QUOTE
      </button>
    </div>
  </div>
</header>


<Enquiry
  isOpen={open}
  onClose={() => setOpen(false)}
/>


</>

  );
}