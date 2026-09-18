import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
const Cta = () => {
    return (
        <div>
            <section className="py-5 lg:py-7 xl:py-10">
                <div className="mx-auto w-full">
                    <div className="bg-cyan-700 px-8 py-4 text-center lg:py-7 xl:py-12">
                        <h2 className="text-3xl font-bold text-white md:text-4xl">Find the Right Product for Your Application</h2>

                        <p className="mt-3 text-cyan-100">Browse our extensive range of industrial equipment and filtration products.</p>

                        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a href="tel:+919717159766" className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-semibold text-cyan-700">
                                <Phone size={18} />
                                Get Instant Price
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cta;
