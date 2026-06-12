import Link from "next/link";
import {
  Phone,
  Mail,
  Building2,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  MapPin 
} from "lucide-react";

export default function Navbar() {
  return (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60">
  {/* Top Info Bar */}


<div className="border-b border-slate-100 bg-slate-50/50">
  <div className="w-full mx-auto px-25">
    <div className="h-11 flex items-center justify-between">
      
      {/* Left Side */}
      <div className="flex items-center gap-6 text-[14px] text-slate-600">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-blue-600" />
          <span>GSTIN: 24ABCDE1234F1Z5</span>
        </div>

          <div className="w-px h-4 bg-slate-200" />
        <div className="flex items-start gap-2">


  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
  <span>
    123 Business Park, SG Highway,
    Ahmedabad, Gujarat - 380015
  </span>
</div>

        <div className="w-px h-4 bg-slate-200" />

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-blue-600" />
          <span>+91 98765 43210</span>
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
        <ul className="flex items-center gap-13">
          {[
            "HOME",
            "OUR PRODUCTS",
            "ABOUT US",
            "OUR SERVICES",
        
            "CONTACT US",
          ].map((item, i) => (
            <li key={item}>
              <Link
                href="#"
                className={`group relative flex items-center gap-1 text-[17px]
                  tracking-[0.16em] font-medium transition-all duration-300
                  ${
                    i === 0
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
              >
                {item}

                {["PRODUCTS", "INDUSTRIES", "SOLUTIONS"].includes(item) && (
                  <ChevronDown className="w-4 h-4" />
                )}

                <span
                  className={`
                    absolute -bottom-3 left-1/2 h-[2px]
                    bg-gradient-to-r from-blue-500 to-cyan-400
                    transition-all duration-300
                    ${
                      i === 0
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full -translate-x-1/2"
                    }
                  `}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA */}
      <button
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
  );
}