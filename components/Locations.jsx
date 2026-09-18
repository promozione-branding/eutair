import React from 'react';
import { serviceLocations } from '../Data';
import Link from 'next/link';

const Loactions = () => {
    return (
        <div className="mb-10 overflow-hidden bg-white px-3 md:px-8 lg:px-26">
            <h2 className="mb-8 text-3xl font-bold md:my-5 md:text-5xl">Our Supply Network</h2>
            <div className="flex flex-wrap gap-2">
                {serviceLocations?.map(({ href, label, id }) => {
                    return (
                        <Link href={href} key={id} className="hover:font-bold hover:underline">
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Loactions;
