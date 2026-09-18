'use client';
import React from 'react';
import Image from 'next/image';

const Process = () => {
    return (
        <>
            <div className="my-8 hidden md:block lg:my-6 xl:my-7">
                <h2 className="text-center text-3xl font-bold capitalize md:text-5xl">complete air system solution </h2>
                <p className="my-4 text-center text-lg">we don't just sell compression, we deliver complete compressed air solutions</p>

                <section
                    style={{ backgroundImage: 'url(/process.png)' }}
                    className="relative hidden h-[50vh] w-full bg-cover bg-center lg:block lg:h-[30vh] xl:h-[50vh]"
                ></section>
            </div>
        </>
    );
};

export default Process;
