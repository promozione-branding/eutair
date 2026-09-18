'use client';

import Link from 'next/link';
import { Phone, FileText, MessageSquare } from 'lucide-react';

export default function MobileFooterCTA() {
    return (
        <div className="fixed right-0 bottom-0 left-0 z-50 bg-white shadow-lg md:hidden">
            <div className="grid h-14 grid-cols-3">
                {/* Call */}
                <a href="tel:+919717159766" className="flex flex-col items-center justify-center text-blue-700 transition hover:bg-blue-50">
                    <Phone size={20} />
                    <span className="mt-1 text-xs font-semibold">Call</span>
                </a>

                {/* Get Quote */}
                <a
                    href="https://wa.me/919717159766"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center bg-[#54D3F1] text-white transition hover:bg-blue-700"
                >
                    <MessageSquare size={20} />
                    <span className="mt-1 text-xs font-semibold">Get Quote</span>
                </a>

                {/* Enquiry */}
                <Link href="/inquiry" className="flex flex-col items-center justify-center text-blue-700 transition hover:bg-blue-50">
                    <FileText size={20} />
                    <span className="mt-1 text-xs font-semibold">Enquiry</span>
                </Link>
            </div>
        </div>
    );
}
