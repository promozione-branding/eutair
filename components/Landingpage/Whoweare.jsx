import React from 'react';
import Reveal from './Reveal';
const Whoweare = () => {
    return (
        <Reveal>
            <section className="overflow-hidden bg-white py-12 lg:py-10 xl:py-16">
                <div className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                    <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
                        {/* Image */}
                        <div className="order-1 lg:col-span-4">
                            <div className="relative">
                                <img src="/iso.webp" alt="ISO Certified" className="w-full rounded-2xl border border-slate-200 object-contain shadow-sm" />

                                {/* Certification Badge */}
                                <div className="absolute bottom-3 left-3 max-w-[220px] rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg sm:bottom-5 sm:left-5 sm:px-5 sm:py-4">
                                    <div className="text-sm font-bold text-sky-600 sm:text-lg">ISO 9001:2015</div>
                                    <div className="text-xs text-slate-500 sm:text-sm">Certified Organization</div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-2 lg:col-span-8">
                            <span className="text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">WHO WE ARE</span>

                            <h2 className="mt-3 text-2xl leading-tight font-bold text-slate-900 sm:text-4xl lg:text-3xl xl:text-4xl">
                                Quality, Reliability & Engineering Excellence
                            </h2>

                            <div className="mt-2 mb-3 h-1 w-16 rounded-full bg-sky-600 sm:mt-5 sm:mb-8 sm:w-20 lg:mb-5 xl:mb-6"></div>

                            {/* Content Block 1 */}
                            <div className="flex gap-3 sm:gap-5">
                                <div className="w-1 shrink-0 rounded-full bg-sky-600"></div>

                                <div>
                                    <p className="text-base font-semibold text-slate-800 sm:text-lg">Eutair is ISO 9001:2015 certified.</p>

                                    <p className="mt-3 text-sm leading-7 text-black sm:text-base sm:leading-8 lg:leading-5 xl:leading-7">
                                        Our quality-focused approach reflects a commitment to structured processes, consistency, reliability and continuous
                                        improvement across engineering, products, services and project execution.
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="my-6 h-px bg-slate-200"></div>

                            {/* Content Block 2 */}
                            <div className="flex gap-3 sm:gap-5">
                                <div className="w-1 shrink-0 rounded-full bg-sky-600"></div>

                                <div>
                                    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8 lg:leading-5 xl:leading-7">
                                        We do designing, supply, erect and commission complete compressed air systems along with heat exchangers, cooling
                                        towers, plant air and water piping systems. We design, develop and charge up all three sides: generation, distribution
                                        and demand.
                                    </p>
                                </div>
                            </div>

                            {/* Standards Section */}
                            <div className="mt-8 rounded-r-xl border-l-4 border-sky-600 bg-slate-50 p-4 sm:mt-10 sm:p-6">
                                <h3 className="mb-3 text-base font-semibold text-black sm:text-lg">
                                    Industry Codes and Standards adhered to by our Designers:
                                </h3>

                                <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:leading-5 xl:leading-7">
                                    API 650, API 579, API 620, API 653, ASME Boiler & Pressure Vessel Code, Section VIII, Div. – 1 & Div. – 2, PD 5500, TEMA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    );
};

export default Whoweare;
