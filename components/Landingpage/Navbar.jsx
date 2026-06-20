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
import { Menu, X } from "lucide-react";

export default function Navbar() {
const [mobileMenu, setMobileMenu] = useState(false);
const [productMenu, setProductMenu] = useState(false);

 const [open, setOpen] =
    useState(false);


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
  <div className="w-full mx-auto px-5 md:px-25">
    <div className="h-16 sm:h-20 lg:h-23 flex items-center justify-between">
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
  <ul className="flex items-center gap-12">




  <li>
      <Link
        href="/about"
        className="text-[17px] tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
      >
        ABOUT US
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
        className="text-[17px] tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
      >
        BLOGS
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
        href="/contact"
        className="text-[17px] tracking-[0.12em] font-medium text-slate-700 hover:text-blue-600"
      >
        CONTACT US
      </Link>
    </li>

  </ul>
</nav>




<div className="lg:hidden flex items-center gap-3">
  <button
    onClick={() => setOpen(true)}
    className="bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold"
  >
    Quote
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

      onClick={()=> setOpen(true)}
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

        <Link
          href="/services"
          onClick={() => setMobileMenu(false)}
          className="font-medium text-slate-700"
        >
          OUR SERVICES
        </Link>

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
          <Linkedin className="w-5 h-5 text-blue-600" />
          <Facebook className="w-5 h-5 text-blue-600" />
          <FaWhatsapp className="w-5 h-5 text-green-600" />
          <Instagram className="w-5 h-5 text-pink-500" />
          <Youtube className="w-5 h-5 text-red-500" />
        </div>
      </div>
    </div>
  </div>
)}


</header>


<Enquiry
  isOpen={open}
  onClose={() => setOpen(false)}
/>


</>

  );
}