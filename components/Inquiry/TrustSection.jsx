'use client';

import { Users, ShieldCheck, BadgeCheck, Cog, HardHat } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function TrustSection() {
    const features = [
        {
            icon: Users,
            title: '500+',
            subtitle: 'Happy Customers',
        },
        {
            icon: BadgeCheck,
            title: 'ISO 9001:2015',
            subtitle: 'Certified Company',
        },
        {
            icon: ShieldCheck,
            title: '100%',
            subtitle: 'Genuine Products',
        },
        {
            icon: Cog,
            title: 'Quick',
            subtitle: 'Installation',
        },
        {
            icon: HardHat,
            title: 'Experienced',
            subtitle: 'Engineering Team',
        },
    ];

    return (
        <section className="px-4 py-2 md:py-10">
            <div className="mx-auto max-w-7xl">
                {/* Desktop */}
                <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:block">
                    <div className="grid grid-cols-5">
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className={`group flex items-center justify-center gap-4 px-3 py-8 transition hover:bg-blue-50 ${
                                        index !== features.length - 1 ? 'border-r border-slate-200' : ''
                                    }`}
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg transition group-hover:scale-110">
                                        <Icon className="h-8 w-8" />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-700">{item.title}</h3>

                                        <p className="font-medium text-slate-600">{item.subtitle}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Slider */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1.2}
                        spaceBetween={16}
                        centeredSlides={false}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            480: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <SwiperSlide key={index}>
                                    <div className="mb-3 flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-xl md:p-8">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                                            <Icon className="h-8 w-8" />
                                        </div>

                                        <h3 className="mt-3 text-xl font-bold text-blue-700 md:mt-5">{item.title}</h3>

                                        <p className="mt-2 text-sm font-medium text-slate-600">{item.subtitle}</p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
