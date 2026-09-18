import React from 'react';
import { locations } from '../../lib/Location';
import Link from 'next/link';

const CityPage = () => {
    return (
        <section className="mx-auto max-w-7xl">
            <div className="mb-6 overflow-hidden bg-white px-3 py-3 md:px-8 lg:px-26">
                <h2 className="mt-3 mb-4 text-center text-3xl font-bold md:my-5 md:text-5xl">
                    Our Supply <span className="text-[#198aff]">Network</span>
                </h2>
                <div className="flex flex-wrap gap-2">
                    {locations?.map(({ slug, label }) => {
                        return (
                            <Link href={slug} className="hover:font-bold hover:text-[#198aff] hover:underline">
                                {label} |
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CityPage;
