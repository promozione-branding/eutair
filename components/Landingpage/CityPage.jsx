import React from "react";
import { locations } from "../../lib/Location"
import Link from "next/link";

const CityPage = () => {
    return (
        <section className="max-w-7xl mx-auto">
        <div className="px-3 overflow-hidden py-3 mb-6 md:px-8 lg:px-26 bg-white">
            <h2 className="text-3xl text-center md:text-5xl mt-3 font-bold md:my-5 mb-4">
                Our Supply <span className="text-[#198aff]">Network</span> 
            </h2>
            <div className="flex gap-2 flex-wrap">
                {locations?.map(({ slug, label }) => {
                    return (
                        <Link href={slug}  className="hover:font-bold hover:underline hover:text-[#198aff]">
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