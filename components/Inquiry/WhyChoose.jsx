'use client';

import { BadgeCheck, UserCheck, ShieldCheck, Wrench, Truck, Leaf } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Form from './Form';

const features = [
    {
        icon: BadgeCheck,
        title: 'Authorized Distributor',
    },
    {
        icon: UserCheck,
        title: 'Expert & Trained Engineers',
    },
    {
        icon: ShieldCheck,
        title: 'AMC & After Sales Support',
    },
    {
        icon: Wrench,
        title: 'Genuine Spare Parts',
    },
    {
        icon: Truck,
        title: 'Quick Delivery Pan India',
    },
    {
        icon: Leaf,
        title: 'Energy Efficient Solutions',
    },
];

const FeatureCard = ({ item }) => {
    const Icon = item.icon;

    return (
        <div className="group flex h-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:shadow-2xl md:p-7">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 transition group-hover:bg-blue-600">
                <Icon className="h-10 w-10 text-blue-600 transition group-hover:text-white" />
            </div>

            <h3 className="text-sm font-bold text-slate-800 md:text-lg md:leading-7">{item.title}</h3>
        </div>
    );
};

export default function WhyChoose({ city }) {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 overflow-hidden px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
                <div className="mb-5 text-center md:mb-10">
                    <h2 className="text-3xl font-extrabold uppercase md:text-4xl">
                        WHY CHOOSE <span className="text-blue-600">EUTAIR?</span>
                    </h2>

                    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-blue-600" />
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
                        className="pb-10"
                    >
                        {features.map((item, index) => (
                            <SwiperSlide key={index}>
                                <FeatureCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid */}
                <div className="hidden grid-cols-3 gap-5 lg:grid">
                    {features.map((item, index) => (
                        <FeatureCard key={index} item={item} />
                    ))}
                </div>
            </div>

            <div id="contact">
                <Form />
            </div>
        </div>
    );
}
