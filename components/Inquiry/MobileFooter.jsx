"use client";

import Link from "next/link";
import { PhoneCall, FileText, MessageCircleMore } from "lucide-react";
import ContactForm from "./PopupForm";
import { useState } from "react";

export default function MobileFooter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        {/* soft top fade so the bar doesn't clip page content harshly */}
        <div className="h-6 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div
          className="relative bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-[0_-8px_30px_rgba(15,23,42,0.08)]"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <div className="grid grid-cols-3 items-end h-18 px-2">
            {/* Call */}

            <a
              href="tel:+919717159766"
              className="group flex flex-col items-center justify-center gap-1 h-full active:scale-95 transition-transform"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#155dfc]/10 group-active:bg-[#155dfc]/20 transition-colors">
                <PhoneCall
                  className="w-[20px] h-[20px] text-[#155dfc]"
                  strokeWidth={2.25}
                />
              </span>
              <span className="text-[14px] font-semibold text-slate-700 tracking-tight">
                Call
              </span>
            </a>

            {/* Get Quote — raised center pill */}
            <div className="flex flex-col items-center justify-end h-full">
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="group -translate-y-4 flex flex-col items-center justify-center gap-0.5 w-16 h-16 rounded-full bg-gradient-to-b from-[#2b6bff] to-[#0f4fe0] text-white shadow-[0_10px_25px_rgba(21,93,252,0.45)] ring-4 ring-white active:scale-95 transition-transform"
              >
                <FileText className="w-5 h-5" strokeWidth={2.25} />
                <span className="text-[14px] font-bold tracking-tight leading-none">
                  Quote
                </span>
              </button>
            </div>

            {/* Inquiry */}
            <Link
              href="https://wa.link/rntibs"
              className="group flex flex-col items-center justify-center gap-1 h-full active:scale-95 transition-transform"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#155dfc]/10 group-active:bg-[#155dfc]/20 transition-colors">
                <MessageCircleMore
                  className="w-[20px] h-[20px] text-[#155dfc]"
                  strokeWidth={2.25}
                />
              </span>
              <span className="text-[14px] font-semibold text-slate-700 tracking-tight">
                Inquiry
              </span>
            </Link>
          </div>
        </div>
      </div>
      {open && <ContactForm isOpen={open} onClose={() => setOpen(false)} />}
    </>
  );
}
