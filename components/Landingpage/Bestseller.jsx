import React from 'react';

const Bestseller = () => {
    return (
        <section className="overflow-hidden bg-white lg:py-8 xl:py-12">
            <div className="mx-auto w-full px-5 md:px-19">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* Video - First on Mobile */}
                    <div className="relative order-1 lg:order-2">
                        <div className="overflow-hidden rounded-2xl shadow-xl lg:rounded-3xl">
                            <video className="h-[250px] w-full object-contain sm:h-[350px] md:h-[360px]" autoPlay muted loop playsInline>
                                <source
                                    src="https://pub-46e3376571d149c28119abf9aa0d6786.r2.dev/video/WhatsApp%20Video%202026-06-09%20at%203.50.56%20PM%20(1).mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>

                        {/* Quote Box */}
                        <div className="mt-6 rounded-2xl border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-300/10 to-transparent p-4 sm:p-6 lg:mt-8">
                            <p className="text-sm leading-7 text-gray-700 sm:text-base lg:leading-5 xl:leading-7">
                                Our commitment to quality enables us to deliver trusted solutions that businesses can rely on every day.
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <span className="text-center text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">
                            Our Quality Commitment
                        </span>

                        <h2 className="mb-2 text-2xl leading-tight font-bold text-gray-900 sm:text-4xl lg:mb-6 lg:text-5xl">
                            Export & International Trade Operations
                        </h2>

                        <p className="mb-4 text-sm leading-7 text-gray-700 sm:text-base">
                            Eutair actively supports export-oriented supply for companies based in Africa and other emerging markets. The company operates as an
                            execution partner for industrial equipment and project-related supplies.
                        </p>

                        <p className="text-sm leading-7 text-gray-700 sm:text-base md:mb-6"></p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 gap-2 md:gap-4">
                            {[
                                'Purchase and procurement of equipment & raw material ',
                                'Inventory stocking and consolidation',
                                'Pre-Dispatch Inspection (PDI) and quality checks',
                                'Export documentation and logistics coordination',
                                'Supply to Africa-based customers through structured export channels',
                                'Customer-Focused Approach',
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-2 transition-all hover:border-cyan-200 lg:p-3 xl:p-4"
                                >
                                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-500"></div>

                                    <span className="text-base text-[12px] font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bestseller;
