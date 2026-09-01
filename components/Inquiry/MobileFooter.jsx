
"use client";

import Link from "next/link";
import { PhoneCall, FileText, MessageCircleMore } from "lucide-react";
import ContactForm from "./PopupForm";
import { useState } from "react";

export default function MobileFooter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE FOOTER ================= */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div
          className=" bg-white shadow-[0_-8px_30px_rgba(15,23,42,0.10)]"
          style={{
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
        >
          <div className="grid h-[72px] grid-cols-3">

            {/* ================= CALL ================= */}
            <a
              href="tel:+919717159766"
              aria-label="Call us"
              className="group flex h-full flex-col items-center justify-center gap-1 border-r border-slate-200 text-[#155dfc] transition-all duration-200 active:bg-blue-50 active:scale-[0.98]"
            >
              <div className="flex h-9 w-9 items-center rounded-2xl justify-center bg-[#155dfc]/10 transition-colors duration-200 group-active:bg-[#155dfc]/20">
                <PhoneCall
                  className="h-5 w-5 text-[#155dfc]"
                  strokeWidth={2.2}
                />
              </div>

              <span className="text-[13px] font-semibold tracking-tight text-slate-700">
                Call
              </span>
            </a>

            {/* ================= GET QUOTE ================= */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Get a quote"
              className="group relative flex h-full flex-col items-center justify-center gap-1 overflow-hidden bg-[#155dfc] text-white transition-all duration-200 active:bg-[#0f4fe0] active:scale-[0.98]"
            >
              {/* Top highlight */}
              <span className="absolute left-0 right-0 top-0 h-[2px] bg-white/30" />

              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 transition-transform duration-200 group-active:scale-90">
                <FileText
                  className="h-5 w-5"
                  strokeWidth={2.2}
                />
              </div>

              <span className="text-[13px] font-bold tracking-tight">
                Get Quote
              </span>
            </button>

            {/* ================= WHATSAPP / INQUIRY ================= */}
            <Link
              href="https://wa.link/rntibs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an inquiry on WhatsApp"
              className="group flex h-full flex-col items-center justify-center gap-1 text-[#155dfc] transition-all duration-200 active:bg-blue-50 active:scale-[0.98]"
            >
              <div className="flex h-9 w-9 items-center rounded-2xl justify-center bg-green-500/10 transition-colors duration-200 group-active:bg-[#155dfc]/20">
                <MessageCircleMore
                  className="h-5 w-5 text-green-500"
                  strokeWidth={2.2}
                />
              </div>

              <span className="text-[13px] font-semibold tracking-tight text-slate-700">
                WhatsApp
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* ================= CONTACT FORM ================= */}
      {open && (
        <ContactForm
          isOpen={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

