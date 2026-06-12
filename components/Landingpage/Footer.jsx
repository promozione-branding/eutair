"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#081B2E] text-white relative overflow-hidden">
      
      {/* CTA Strip */}
      <div className="border-b border-white/10">
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

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}
          <div >
          <Image width={200}
          height={200} src="/logofooter-removebg-preview.png">

          </Image>

            <p className="text-slate-300 mt-8 leading-8">
              Leading Manufacturer, Trader, Exporter & Importer of
              Air Compressors, Air Dryers, Air Line Filters,
              Drain Valves and Industrial Filtration Solutions.
            </p>

            <div className="mt-6">
              <a
                href="/products"
                className="inline-flex items-center gap-2 text-cyan-400 font-medium"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about-us">About Us</Link>
              </li>

              <li>
                <Link href="/products">Products</Link>
              </li>

              <li>
                <Link href="/blogs">Blogs</Link>
              </li>

              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Our Products
            </h4>

            <ul className="space-y-4 text-slate-300">
              <li>Oil Injected Screw Compressors</li>
              <li>VFD Screw Compressors</li>
              <li>PM Screw Compressors</li>
              <li>Oil Free Compressors</li>
              <li>Air Dryers</li>
              <li>Air Line Filters</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              Contact Information
            </h4>

            <div className="space-y-5">

              <div className="flex gap-4">
                <MapPin
                  className="text-cyan-500 shrink-0 mt-1"
                  size={20}
                />
                <p className="text-slate-300">
                  Add Your Office Address Here
                </p>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="text-cyan-500 shrink-0"
                  size={20}
                />
                <a
                  href="tel:+919999999999"
                  className="text-slate-300"
                >
                  +91 99999 99999
                </a>
              </div>

              <div className="flex gap-4">
                <Mail
                  className="text-cyan-500 shrink-0"
                  size={20}
                />
                <a
                  href="mailto:info@eutair.com"
                  className="text-slate-300"
                >
                  info@eutair.com
                </a>
              </div>

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
            Designed & Developed by Promozione Branding Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}