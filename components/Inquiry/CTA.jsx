import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="px-4 py-10 pb-22 md:pb-8">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 shadow-2xl">
                    {/* Background Blur */}
                    <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
                    <div className="absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>

                    <div className="relative flex flex-col items-center justify-between gap-8 px-8 py-6 md:py-10 lg:flex-row">
                        {/* Left */}
                        <div className="text-center lg:text-left">
                            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md">
                                24×7 Expert Assistance
                            </span>

                            <h2 className="mt-4 text-2xl leading-tight font-bold text-white lg:text-4xl">Need an Air Compressor Solution?</h2>

                            <p className="mt-3 max-w-xl text-blue-100 md:text-lg">
                                Talk to our certified experts and get the right compressor, best pricing, and fast delivery across India.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.link/rntibs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/30 active:translate-y-0"
                            >
                                <span className="relative flex h-5 w-5 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
                                    <MessageCircle size={20} className="relative" />
                                </span>
                                WhatsApp now
                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            {/* Call CTA */}
                            <a
                                href="tel:+919582911766"
                                className="group flex items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/20 active:translate-y-0"
                            >
                                <Phone size={20} className="transition-transform duration-300 group-hover:rotate-12" />
                                Call now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
