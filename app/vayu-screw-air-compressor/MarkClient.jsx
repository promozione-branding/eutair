'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import markData from '@/lib/Data2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Enquiry from '@/components/Enquiry';

const MarkClient = () => {
 const [isOpen, setOpen] = useState(false);

 const products = markData.products || [];
 const heroImages = ['/products/VAYU Screw Air Compressor.jpg'];

 const compressorRange = [
 'Fixed-Speed Screw Compressors',
 'Variable-Speed Screw Compressors',
 'Refrigerated Air Dryers',
 'Downstream Filters',
 'Vertical Air Receivers',
 ];

 const features = [
 {
 title: 'Dependable Performance',
 desc: 'Built for demanding manufacturing conditions, VAYU Screw Air Compressors deliver stable and reliable compressed air through robust construction and consistent performance. Designed for real-world industrial applications, they help businesses maintain smooth production across different operating environments.',
 },
 {
 title: 'Efficient Operation',
 desc: 'VAYU Air Compressors are engineered for efficient operation, helping industries optimize compressed air performance while keeping energy consumption and operating costs under control. Their practical design makes them a dependable choice for manufacturers seeking efficient industrial screw air compressors.',
 },
 {
 title: 'Built for Easy Ownership',
 desc: 'VAYU compressors are designed with practical ownership in mind. Competitive pricing, straightforward maintenance, and durable construction help provide lasting value throughout the working life of the compressor.',
 },
 {
 title: 'Simple Usability',
 desc: 'An intuitive controller makes monitoring and operating VAYU Screw Air Compressors simple and convenient. Easy-to-understand controls help operators monitor compressor performance efficiently while staying focused on production.',
 },
 {
 title: 'Reliable Continuous Operation',
 desc: 'Designed for demanding industrial applications, VAYU Air Compressors provide dependable compressed air for continuous and intermittent operations. Their robust construction and stable air delivery help manufacturers maintain productivity and keep production running smoothly.',
 },
 {
 title: 'Service That Stays Close',
 desc: 'As a dependable VAYU Compressor Supplier, we believe reliable equipment should be supported by reliable service. VAYU is backed by responsive service and dependable parts support, helping customers maintain compressor performance, reduce downtime, and keep their operations moving.',
 },
 ];

 const benefits = [
 {
 title: 'Enhanced Operating Efficiency',
 desc: 'VAYU Screw Air Compressors are engineered for efficient operation and stable air delivery, helping manufacturers optimize compressed air performance while managing energy and operating costs.',
 },
 {
 title: 'Improved Production Productivity',
 desc: 'A dependable and consistent compressed air supply helps keep production processes running smoothly, reducing interruptions and allowing businesses to maintain productivity across demanding industrial applications.',
 },
 {
 title: 'Lower Maintenance Requirements',
 desc: 'Designed for practical ownership, VAYU Air Compressors feature robust construction and straightforward maintenance requirements, helping reduce maintenance effort, service costs, and unnecessary downtime.',
 },
 {
 title: 'Long-Lasting Performance',
 desc: 'Built for real-world manufacturing conditions, VAYU compressors combine rugged construction with dependable engineering to provide consistent performance and lasting value throughout their working life.',
 },
 ];

 const applications = [
 {
 title: 'General Engineering',
 image: '/indus1.jpg',
 desc: 'Providing dependable compressed air for machine tools, pneumatic equipment, automation systems, fabrication processes, and other engineering applications.',
 },
 {
 title: 'Food Processing',
 image: '/indus2.jpg',
 desc: 'Supporting food processing, production, packaging, and material-handling operations with a reliable compressed air supply for demanding manufacturing environments.',
 },
 {
 title: 'Ceramics',
 image: '/indus3.jpg',
 desc: 'Delivering dependable compressed air for ceramic manufacturing processes, pneumatic equipment, automation, and production operations.',
 },
 {
 title: 'Textile Units',
 image: '/indus4.jpg',
 desc: 'Supporting spinning, weaving, processing, dyeing, finishing, and other textile manufacturing operations with consistent compressed air.',
 },
 {
 title: 'Plastics & Packaging',
 image: '/indus5.jpg',
 desc: 'Powering pneumatic machinery, injection moulding equipment, automated production systems, filling machines, and packaging applications.',
 },
 {
 title: 'Foundry',
 image: '/indus6.jpg',
 desc: 'Built to support demanding foundry environments, VAYU compressors provide dependable compressed air for pneumatic tools, equipment, automation, and production processes.',
 },
 {
 title: 'Leather Industry',
 image: '/indus7.jpg',
 desc: 'Providing reliable compressed air for leather processing, finishing, handling, and manufacturing applications where consistent performance is essential.',
 },
 {
 title: 'Rubber Industry',
 image: '/indus7.jfif',
 desc: 'Supporting rubber processing and manufacturing operations with dependable compressed air for pneumatic machinery, automation, and production equipment.',
 },
 ];

 return (
 <div>
 <section className="relative flex h-[250px] w-full items-center justify-center overflow-hidden md:h-[400px]">
 <div
 className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
 style={{ backgroundImage: "url('/bghero1.webp')" }}
 >
 <div className="absolute inset-0 bg-black/50" />
 <h1 className="z-10 px-10 text-center text-3xl font-bold text-white md:text-7xl">
 VAYU Screw Air Compressor
 </h1>
 </div>
 </section>

 <section className="relative overflow-x-hidden bg-white">
 <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-6 lg:py-9 xl:px-8 xl:py-14">
 <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
 <div className="w-full">
 <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
 Trusted VAYU Screw Air Compressors Supplier
 </span>

 <h2 className="mt-5 text-2xl leading-tight font-bold break-words text-slate-900 sm:text-4xl lg:text-4xl xl:text-5xl">
 VAYU (Egli) Screw Air Compressors Supplier
 </h2>

 <p className="mt-5 text-base leading-6 break-words text-slate-700 md:leading-7 xl:text-lg">
 Eutair Equipments LLP is a trusted VAYU (Egli) Screw Air Compressors Supplier,
 offering dependable and high-performance compressed air solutions for a wide
 range of industrial applications. VAYU screw air compressors are designed to
 deliver reliable performance, efficient operation, easy maintenance, and
 long-term value in demanding manufacturing environments.
 </p>

 <p className="mt-4 text-base leading-6 break-words text-slate-700 md:leading-7 xl:text-lg">
 Built in India for manufacturers across the world, VAYU compressors are
 engineered for real operating conditions and backed by responsive service and
 parts support. Our VAYU screw compressor range is suitable for manufacturing
 units, automotive industries, pharmaceutical companies, engineering workshops,
 textile industries, and other industrial applications requiring a dependable
 compressed air supply.
 </p>

 <button
 type="button"
 onClick={() => setOpen(true)}
 className="mt-8 w-full rounded-2xl bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-200 transition-all duration-300 hover:bg-sky-600 sm:w-auto"
 >
 Get a Free Quote Today
 </button>
 </div>

 <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
 <div className="absolute inset-0 rounded-full bg-sky-300/20 blur-3xl" />

 <div className="relative z-10 overflow-hidden rounded-[30px] border border-sky-100 bg-white/80 p-3 shadow-[0_20px_60px_rgba(14,165,233,.12)] backdrop-blur-xl md:rounded-[40px] md:p-5">
 <Swiper
 modules={[Autoplay, Pagination]}
 autoplay={{
 delay: 3000,
 disableOnInteraction: false,
 }}
 pagination={{ clickable: true }}
 loop={heroImages.length > 1}
 className="heroSwiper"
 >
 {heroImages.map((img, index) => (
 <SwiperSlide key={img}>
 <div className="flex items-center justify-center">
 <img
 src={img}
 alt={`VAYU screw air compressor ${index + 1}`}
 className="mx-auto h-[240px] w-full max-w-full object-contain sm:h-[300px] md:h-[420px] md:max-w-[500px]"
 />
 </div>
 </SwiperSlide>
 ))}
 </Swiper>
 </div>

 <div className="absolute top-12 -left-8 z-20 hidden rounded-2xl border border-sky-100 bg-white px-6 py-4 shadow-xl lg:flex">
 <div>
 <h4 className="text-2xl font-bold text-sky-600">VAYU</h4>
 <p className="text-sm text-slate-500">Made in India</p>
 </div>
 </div>

 <div className="absolute -right-6 bottom-10 z-20 hidden rounded-2xl border border-sky-100 bg-white px-6 py-4 shadow-xl lg:flex">
 <div>
 <h4 className="text-xl font-bold text-sky-600">VAYU</h4>
 <p className="text-sm text-slate-500">Industrial Solutions</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="bg-slate-50 px-6 py-8 md:py-12">
 <div className="container mx-auto md:px-6">
 <div className="mb-6 text-center lg:mb-8">
 <h2 className="text-3xl font-bold md:text-4xl">Our VAYU Compressor Range</h2>
 <ul className="mt-5 flex flex-wrap justify-center gap-3">
 {compressorRange.map((item) => (
 <li
 key={item}
 className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm md:text-base"
 >
 {item}
 </li>
 ))}
 </ul>
 </div>

 <h3 className="mb-6 text-center text-2xl font-bold text-slate-900">
 VAYU Screw Air Compressors
 </h3>

 <div className="mt-5 grid gap-8 md:grid-cols-2 lg:mt-8 lg:grid-cols-5 xl:mt-12">
 {products.map((item, index) => (
 <div
 key={item.slug || index}
 className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_15px_40px_rgba(0,0,0,.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(14,165,233,.15)]"
 >
 <div className="flex h-[270px] items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 to-white p-8 lg:p-6 xl:p-8">
 <img
 src={item.image}
 alt={item.title}
 className="max-h-[280px] object-contain transition-all duration-500 group-hover:scale-110"
 />
 </div>

 <div className="p-4 text-center">
 <h3 className="min-h-15 text-xl leading-snug font-bold text-slate-900 lg:text-base xl:text-lg">
 {item.title}
 </h3>
 <Link
 href={`/vayu-screw-air-compressor/${item.slug}`}
 className="mt-5 inline-block rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-3 font-semibold text-white transition-all hover:scale-105"
 >
 View Details
 </Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="bg-white py-8 md:py-12">
 <div className="container mx-auto px-5 md:px-10">
 <div className="mb-10 text-center">
 <h2 className="text-3xl font-bold md:text-4xl">
 Why Choose VAYU Screw Air Compressors?
 </h2>
 <p className="my-4 text-base leading-6 text-cyan-800 md:text-lg">
 Every investment should create clear value where it matters most — on your factory
 floor. VAYU Screw Air Compressors combine dependable engineering, efficient
 operation, practical ownership, and responsive service support to deliver reliable
 compressed air solutions for modern industries. As a trusted Screw Air Compressor
 Supplier, we provide VAYU Air Compressors designed to support productivity while
 helping manufacturers manage operating costs.
 </p>
 </div>

 <div className="grid gap-3 md:gap-6 lg:grid-cols-3">
 {features.map((item) => (
 <div
 key={item.title}
 className="rounded-3xl bg-gradient-to-br from-slate-900 to-blue-900 p-5 text-white lg:p-6 xl:p-8"
 >
 <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
 <p className="text-white">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section className="bg-[#f8fbff] py-8 lg:py-10 xl:py-12">
 <div className="container mx-auto px-6">
 <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 p-6 text-white shadow-[0_20px_60px_rgba(14,165,233,.25)] md:p-10">
 <div className="relative z-10 mx-auto max-w-4xl text-center">
 <h2 className="mb-6 text-3xl font-bold md:text-4xl">
 Ready to Improve Your Compressed Air Performance?
 </h2>
 <p className="text-lg text-white/90">
 Partner with Eutair Equipments LLP, a trusted VAYU Screw Air Compressor
 Supplier, and discover dependable VAYU Air Compressors engineered for efficient
 operation, reliable performance, and long-term value.
 </p>

 <a
 href="tel:+919717159766"
 className="mt-7 inline-block rounded-2xl bg-white px-10 py-4 font-semibold text-sky-600 transition-all hover:scale-105"
 >
 Get a Free Quote Today
 </a>
 </div>
 </div>
 </div>
 </section>

 <section className="bg-gradient-to-b from-white to-sky-50 py-8 md:py-12">
 <div className="container mx-auto px-6">
 <div className="mx-auto mb-12 max-w-4xl text-center md:mb-20">
 <span className="font-semibold text-sky-600">
 Benefits of VAYU Screw Air Compressors
 </span>
 <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
 Improve Efficiency, Productivity &amp; Cost Control
 </h2>
 <p className="mt-5 leading-relaxed text-slate-600">
 As a trusted VAYU Screw Air Compressor Supplier, Eutair Equipments LLP offers
 VAYU Air Compressors designed to deliver dependable performance, efficient
 operation, and practical long-term value. Built for demanding manufacturing
 conditions, VAYU Screw Air Compressors help businesses maintain reliable
 compressed air supply, improve productivity, and keep operating costs under
 control.
 </p>
 </div>

 <div className="grid gap-8 md:gap-16 lg:grid-cols-2">
 <div className="relative">
 <div className="sticky top-24">
 <div className="absolute inset-0 rounded-full bg-sky-200/30 blur-3xl" />
 <div className="relative overflow-hidden rounded-[36px] border border-sky-100 bg-white shadow-[0_20px_60px_rgba(14,165,233,.12)]">
 <img
 src="/Screw.png"
 alt="VAYU screw air compressor"
 className="relative z-10 w-full object-cover"
 />
 </div>
 </div>
 </div>

 <div className="space-y-6">
 {benefits.map((item) => (
 <div
 key={item.title}
 className="rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(14,165,233,.08)] transition-all hover:-translate-y-1 md:p-8"
 >
 <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
 <p className="text-slate-600">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 <section className="bg-white px-6 py-8 md:px-8">
 <div className="container mx-auto md:px-6">
 <div className="mx-auto mb-7 max-w-4xl text-center">
 <span className="font-semibold text-sky-600">
 Applications of VAYU Screw Air Compressors
 </span>
 <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
 Built for Diverse Manufacturing Applications
 </h2>
 <p className="mt-6 leading-6 text-slate-600 md:leading-relaxed">
 Proudly made in India for the world, VAYU Screw Air Compressors are built for
 unstoppable manufacturing entrepreneurs who need dependable compressed air to
 keep their operations moving and their ambitions growing. Designed for real-world
 manufacturing conditions, VAYU delivers reliable performance across a wide range
 of industrial applications.
 </p>
 </div>

 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
 {applications.map((item, index) => (
 <div
 key={item.title}
 className="group overflow-hidden rounded-[32px] border border-sky-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,.12)]"
 >
 <div className="relative h-46 overflow-hidden">
 <img
 src={item.image}
 alt={item.title}
 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
 <div className="absolute top-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 font-bold text-sky-600 shadow-lg backdrop-blur-sm">
 {(index + 1).toString().padStart(2, '0')}
 </div>
 </div>

 <div className="p-4">
 <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
 <p className="leading-relaxed text-slate-600 lg:leading-5 xl:leading-6">
 {item.desc}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 <Enquiry isOpen={isOpen} onClose={() => setOpen(false)} />
 </div>
 );
};

export default MarkClient;
