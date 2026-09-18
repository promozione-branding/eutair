import Category from '@/components/Inquiry/Category';
import Certificates from '@/components/Inquiry/Certificates';
import CTA from '@/components/Inquiry/CTA';
import Footer from '@/components/Inquiry/Footer';
import HeroSlider from '@/components/Inquiry/Hero';
import Industries from '@/components/Inquiry/Industries';
import Navbar from '@/components/Inquiry/Navbar';
import ProductSlider from '@/components/Inquiry/ProductSlider';
import Testimonials from '@/components/Inquiry/Testimonials';
import TrustSection from '@/components/Inquiry/TrustSection';
import WhyChoose from '@/components/Inquiry/WhyChoose';
import Clients from '@/components/Landingpage/Clients';
import React from 'react';

export default function Inquiry() {
    return (
        <>
            <Navbar />
            <HeroSlider />
            <Clients />
            <ProductSlider />
            <TrustSection />
            <Category />
            <WhyChoose />
            <div className="w-full bg-blue-600">
                <div className="relative z-10 mx-auto max-w-7xl bg-blue-600 px-4 py-10">
                    {/* Heading */}
                    <div className="mb-10 text-center lg:mb-5 xl:mb-9">
                        <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-5 py-2 font-medium text-sky-300">
                            Our Achievements
                        </span>

                        <h2 className="mt-6 text-3xl font-black text-white md:text-6xl">Trusted by Industries Across India</h2>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                        {[
                            {
                                number: '500+',
                                label: 'Projects Delivered',
                            },
                            {
                                number: '300+',
                                label: 'Industrial Clients',
                            },
                            {
                                number: '20+',
                                label: 'Product Categories',
                            },
                            {
                                number: '24/7',
                                label: 'Customer Support',
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-sky-400/40 hover:bg-white/10 md:p-8"
                            >
                                {/* Top Glow Line */}
                                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />

                                {/* Number */}
                                <h3 className="bg-gradient-to-r from-sky-300 via-cyan-300 to-white bg-clip-text text-4xl font-black text-white md:text-6xl">
                                    {item.number}
                                </h3>

                                {/* Label */}
                                <p className="mt-4 text-lg font-medium text-slate-300">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Certificates />
            <Industries />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
}
