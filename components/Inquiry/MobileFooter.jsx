
'use client';

import Link from 'next/link';
import { PhoneCall, FileText, MessageCircleMore } from 'lucide-react';
import ContactForm from './PopupForm';
import { useState } from 'react';
import { handleCallClick } from '@/lib/tracking';

export default function MobileFooter() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ================= MOBILE FOOTER ================= */}
            <div className="fixed right-0 bottom-0 left-0 z-50 md:hidden">
                <div
                    className=" shadow-[0_-8px_30px_rgba(15,23,42,0.15)]"
                    style={{
                        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
                    }}
                >
                    <div className="grid h-[72px] grid-cols-3">

                        {/* ================= CALL ================= */}
                        <a
                            href="tel:+919717159766"
                            aria-label="Call us"
                            onClick={() => handleCallClick({ source: 'Website' })}
                            className="group bg-red-500 flex h-full flex-col items-center justify-center gap-1 border-r border-white/20 text-white transition-all duration-200 active:scale-[0.98] active:bg-white/10"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 transition-colors duration-200 group-active:bg-white/25">
                                <PhoneCall
                                    className="h-5 w-5 text-white"
                                    strokeWidth={2.2}
                                />
                            </div>

                            <span className="text-[13px] font-semibold tracking-tight text-white">
                                Call
                            </span>
                        </a>

                        {/* ================= GET QUOTE ================= */}
                        <button
                            type="button"
                            onClick={() => setOpen(true)}
                            aria-label="Get a quote"
                            className="group relative flex h-full flex-col items-center justify-center gap-1 overflow-hidden bg-[#0d4ed8] text-white transition-all duration-200 active:scale-[0.98] active:bg-[#0a42bd]"
                        >
                            <span className="absolute top-0 right-0 left-0 h-[2px] bg-white/30" />

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

                        {/* ================= WHATSAPP ================= */}
                        <Link
                            href="https://wa.me/919582911766"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send an inquiry on WhatsApp"
                            className="group bg-green-500 flex h-full flex-col items-center justify-center gap-1 border-l border-white/20 text-white transition-all duration-200 active:scale-[0.98] active:bg-white/10"
                        >
                            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/15 transition-colors duration-200 group-active:bg-white/25">
                                <MessageCircleMore
                                    className="h-5 w-5 text-white"
                                    strokeWidth={2.2}
                                />
                            </div>

                            <span className="text-[13px] font-semibold tracking-tight text-white">
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
