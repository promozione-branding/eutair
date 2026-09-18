'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const certificates = [
    {
        image: '/cert2.png',
        title: 'ISO 9001:2015',
    },
    {
        image: '/cert3.png',
        title: 'CE Certified',
    },
    {
        image: '/cert4.png',
        title: 'MSME Certificate',
    },
];

export default function Certificates() {
    return (
        <section className="bg-gray-50 py-3 md:py-12">
            <div className="mx-auto max-w-7xl px-4">
                {/* Heading */}
                <div className="mb-4 text-center md:mb-12">
                    <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Our Certificates</h2>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                    spaceBetween={25}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {certificates.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:scale-105">
                                <div className="relative h-95 md:h-110">
                                    <Image src={item.image} alt={item.title} fill className="object-cover p-2 md:p-6" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
