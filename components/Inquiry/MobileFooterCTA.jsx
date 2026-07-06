"use client";

import Link from "next/link";
import { Phone, FileText, MessageSquare } from "lucide-react";

export default function MobileFooterCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white  shadow-lg md:hidden">
      <div className="grid grid-cols-3 h-14">

        {/* Call */}
        <a
          href="tel:+919717159766"
          className="flex flex-col items-center justify-center text-blue-700 hover:bg-blue-50 transition"
        >
          <Phone size={20} />
          <span className="text-xs font-semibold mt-1">Call</span>
        </a>

        {/* Get Quote */}
        <a
          href="https://wa.me/919717159766"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-[#54D3F1] text-white hover:bg-blue-700 transition"
        >
          <MessageSquare size={20} />
          <span className="text-xs font-semibold mt-1">
            Get Quote
          </span>
        </a>

        {/* Enquiry */}
        <Link
          href="/inquiry"
          className="flex flex-col items-center justify-center text-blue-700 hover:bg-blue-50 transition"
        >
          <FileText size={20} />
          <span className="text-xs font-semibold mt-1">
            Enquiry
          </span>
        </Link>

      </div>
    </div>
  );
}