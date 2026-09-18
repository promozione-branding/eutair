'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import details from '@/lib/Data';
import { useRouter } from 'next/navigation';

export default function ChicagoPneumatic() {
    const router = useRouter();

    const data = details[0];

    if (!data) {
        return <div>Data not found</div>;
    }

    const [active, setActive] = useState('All Products');

    const filteredProducts = useMemo(() => {
        if (active === 'All Products') {
            return Object.values(data.products).flat();
        }

        return data.products[active] || [];
    }, [active, data]);

    return (
        <>
            {/* HERO */}
            <section className="relative flex h-[250px] w-full items-center justify-center overflow-hidden md:h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bghero1.webp')" }}>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <h1 className="z-10 px-10 text-center text-3xl font-bold text-white md:text-7xl">Chicago Pneumatic</h1>
                </div>
            </section>

            {/* ABOUT */}
            <section className="relative overflow-hidden bg-white">
                <div className="relative z-10 container mx-auto px-6 py-4 md:py-10 xl:px-18">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        {/* Left Content */}
                        <div>
                            <h2 className="mt-5 text-2xl leading-tight font-bold text-slate-900 lg:text-3xl xl:text-5xl">
                                Portable Air Compressors for Construction & Mining
                            </h2>

                            <p className="mt-6 text-base leading-6 text-slate-600 md:text-lg md:leading-relaxed">
                                Eutair Equipments offers a comprehensive range of Chicago Pneumatic Portable Air Compressors designed to deliver exceptional
                                performance, energy efficiency, and long-term reliability. Renowned worldwide for their innovative engineering and robust
                                construction, Chicago Pneumatic compressors are trusted by industries seeking dependable compressed air solutions for demanding
                                applications.
                                <br />
                                <br />
                                Whether you operate in Mining, Construction, Fabrication, Boring or Rigging, Chicago Pneumatic compressors provide a consistent
                                compressed air supply that helps maximize productivity and operational efficiency.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src="/drill-cp.jpeg"
                                alt="Screw Air Compressor"
                                width={1000}
                                height={1000}
                                className="h-auto w-full max-w-lg rounded-md object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>{' '}
            </section>

            {/* PRODUCTS */}
            <section className="bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
                <div className="mx-auto max-w-[1400px] px-4">
                    {/* Categories */}
                    <div className="sticky top-4 z-20 mb-14 flex justify-center">
                        <div className="w-full max-w-5xl overflow-x-auto rounded-3xl border border-slate-200 bg-white/80 shadow-lg backdrop-blur-xl">
                            <div className="flex min-w-max justify-center p-2">
                                {data.categories.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            if (item === 'Genuine Parts & Service') {
                                                router.push('/genuine-parts-services');
                                            } else {
                                                setActive(item);
                                            }
                                        }}
                                        className={`mx-1 rounded-2xl px-6 py-3 font-semibold whitespace-nowrap capitalize transition-all duration-300 ${
                                            active === item ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white' : 'text-slate-700 hover:bg-slate-100'
                                        }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div key={active} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((item, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="flex h-[220px] items-center justify-center bg-slate-50 p-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-3">
                                    <h3 className="text-center text-xl font-bold text-slate-900">{item.title}</h3>

                                    <div className="mt-2 flex justify-center">
                                        <Link href={`/chicago-pneumatic/${item.slug}`}>
                                            <button className="rounded-xl bg-sky-500 px-6 py-3 text-white">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="bg-white px-5 py-9 md:px-20">
                <div className="mx-auto mb-4 max-w-4xl text-center lg:mb-8 xl:mb-16">
                    <span className="rounded-full bg-sky-100 p-3 font-semibold text-sky-600">Benefits of Chicago Pneumatic Compressors</span>

                    <h2 className="mt-8 text-2xl font-bold text-slate-900 md:mt-4 md:text-4xl">
                        Enhance Productivity with Reliable and Energy-Efficient Compressed Air Solutions
                    </h2>

                    <p className="mt-6 leading-6 text-slate-600 md:leading-relaxed">
                        Chicago Pneumatic Compressors are widely recognized for their versatility, efficiency, and dependable performance across a broad range
                        of industries. Designed to deliver a consistent compressed air supply, these compressors support critical operations and help businesses
                        maintain productivity, quality, and operational efficiency.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="mt-5 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-5 xl:p-6">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">⚡</div>

                        <h3 className="mb-2 text-xl font-bold text-slate-900 md:mb-4">Enhanced Energy Efficiency</h3>

                        <p className="leading-6 text-slate-600 xl:leading-relaxed">
                            Chicago Pneumatic Compressors are engineered to maximize air output while minimizing energy consumption. Their efficient design
                            helps businesses lower electricity costs and improve overall system performance, making them a cost-effective solution for long-term
                            industrial use.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-5 xl:p-6">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">🔄</div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900 md:mb-4">Consistent and Reliable Performance</h3>

                        <p className="leading-6 text-slate-600 xl:leading-relaxed">
                            A stable compressed air supply is essential for maintaining uninterrupted industrial operations. Chicago Pneumatic Compressors are
                            built to deliver reliable performance even in demanding environments, helping businesses reduce downtime and maintain productivity.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl lg:p-5 xl:p-6">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">🛠️</div>

                        <h3 className="mb-2 text-xl font-bold text-slate-900 md:mb-4">Lower Maintenance Requirements</h3>

                        <p className="leading-6 text-slate-600 xl:leading-relaxed">
                            Manufactured using high-quality components and advanced engineering practices, these compressors are designed for durability and
                            reduced maintenance. This helps minimize service interruptions and lowers overall maintenance expenses.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-5 xl:p-6">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">🏭</div>

                        <h3 className="mb-2 text-xl font-bold text-slate-900 md:mb-4">Long Service Life</h3>

                        <p className="leading-6 text-slate-600 xl:leading-relaxed">
                            The robust construction and superior build quality of Chicago Pneumatic Compressors ensure long-lasting performance. Their
                            durability allows businesses to achieve a higher return on investment while maintaining operational efficiency over time.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-5 xl:p-6">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">📈</div>

                        <h3 className="mb-2 text-xl font-bold text-slate-900 md:mb-4">Improved Productivity</h3>

                        <p className="leading-6 text-slate-600 xl:leading-relaxed">
                            With dependable compressed air delivery and efficient operation, Chicago Pneumatic Compressors help businesses optimize workflows,
                            improve production output, and support continuous operations.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-5 xl:p-6">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">💰</div>

                        <h3 className="mb-2 text-xl font-bold text-slate-900 md:mb-4">Cost-Effective Operations</h3>

                        <p className="leading-6 text-slate-600 xl:leading-relaxed">
                            By combining energy efficiency, reliable performance, and low maintenance requirements, these compressors contribute to reduced
                            operating costs and increased profitability for businesses.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
