import { locations } from '@/lib/Location';
import Link from 'next/link';
import React from 'react';

const CityPage = () => {
    return (
        <>
            <section className="bg-blue-200 px-4 py-5 md:px-20 md:py-10">
                <h2 className="my-5 text-2xl font-bold text-[#304B99] md:text-5xl">Our Supply Network</h2>
                <div className="flex flex-wrap gap-2 overflow-hidden px-2">
                    {locations.map((item, idx) => (
                        <Link href={item.slug} key={idx} className="hover:scale-105 hover:underline hover:duration-300">
                            {item.label}
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CityPage;
