import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-10 pb-22 md:pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 shadow-2xl">
          {/* Background Blur */}
          <div className="absolute -top-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-6 md:py-10">
            {/* Left */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                24×7 Expert Assistance
              </span>

              <h2 className="mt-4 text-2xl lg:text-4xl font-bold text-white leading-tight">
                Need an Air Compressor Solution?
              </h2>

              <p className="mt-3 text-blue-100 md:text-lg max-w-xl">
                Talk to our certified experts and get the right compressor, best
                pricing, and fast delivery across India.
              </p>
            </div>

            {/* Right */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        {/* WhatsApp CTA */}
        <a
          href="https://wa.link/rntibs"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center gap-3 text-lg rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30 active:translate-y-0"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
            <MessageCircle size={20} className="relative" />
          </span>
          WhatsApp now
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
 
        {/* Call CTA */}
        <a
          href="tel:+919717159766"
          className="group flex items-center justify-center gap-3 text-lg rounded-2xl bg-white text-blue-700 border border-blue-100 px-8 py-4 font-semibold shadow-lg shadow-blue-500/10 transition-all duration-300 hover:bg-blue-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20 active:translate-y-0"
        >
          <Phone
            size={20}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          Call now
        </a>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
}
