import { Factory, Car, Pill, UtensilsCrossed, Shirt, Wrench, FlaskConical, Pickaxe } from 'lucide-react';
import { Boxes } from 'lucide-react';
const industries = [
    {
        icon: Factory,
        title: 'Manufacturing Industry',
        description:
            'We provide dependable compressed air solutions that support production processes, machinery operation, assembly lines, and industrial automation systems, ensuring uninterrupted performance and enhanced productivity.',
    },
    {
        icon: Car,
        title: 'Automotive Industry',
        description:
            'Our air compressors and filtration systems play a vital role in automotive manufacturing, painting, assembly, maintenance, and pneumatic tool applications, helping businesses maintain efficiency and precision.',
    },
    {
        icon: Pill,
        title: 'Pharmaceutical Industry',
        description:
            'We supply high-quality air treatment and filtration products designed to meet the strict cleanliness and operational requirements of pharmaceutical manufacturing facilities.',
    },
    {
        icon: UtensilsCrossed,
        title: 'Food & Beverage Processing',
        description:
            'Our compressed air solutions help maintain product quality, hygiene, and operational reliability in food processing and beverage production environments where clean air is essential.',
    },
    {
        icon: Shirt,
        title: 'Textile Industry',
        description:
            'From spinning and weaving to dyeing and finishing processes, our air compressors and filtration systems contribute to smooth and efficient textile manufacturing operations.',
    },
    {
        icon: Wrench,
        title: 'Engineering & Fabrication Units',
        description:
            'Engineering workshops and fabrication facilities rely on our compressed air equipment for powering pneumatic tools, machinery, and production processes with maximum efficiency.',
    },

    {
        icon: Pickaxe,
        title: 'Mining & Construction Industry',
        description:
            'We provide reliable compressed air solutions for mining and construction applications, ensuring high efficiency, consistent performance, and maximum productivity in demanding environments.',
    },

    {
        icon: Boxes,
        title: 'Many More',
        description:
            'We also serve a wide range of industries with reliable compressed air and industrial solutions tailored to diverse operational requirements.',
    },
];

export default function IndustriesWeServe() {
    return (
        <section className="mt-3 overflow-hidden bg-gradient-to-b from-white to-slate-50 pb-6">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20">
                {/* Header */}
                <div className="mx-auto mb-10 max-w-6xl text-center lg:mb-9 xl:mb-14">
                    <span className="mb-4 text-center text-xs font-semibold tracking-[2px] text-sky-600 uppercase sm:text-sm md:tracking-[3px]">
                        Industries We Serve
                    </span>

                    <h2 className="mt-3 text-lg leading-tight font-bold text-slate-900 sm:text-4xl">
                        Reliable Compressed Air & Industrial Filtration Solutions for Every Industry
                    </h2>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 gap-5 lg:gap-6 xl:grid-cols-4">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <div
                                key={index}
                                className="group h-full rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl lg:rounded-3xl lg:p-6"
                            >
                                {/* Icon */}
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 transition-transform duration-300 group-hover:scale-110 lg:h-14 lg:w-14">
                                    <Icon className="h-6 w-6 text-white lg:h-7 lg:w-7" />
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-sm leading-snug font-bold text-slate-900 sm:text-xl">{industry.title}</h3>

                                {/* Description */}
                                <p className="hidden text-sm leading-7 text-slate-600 sm:text-[15px] md:block lg:leading-6 xl:leading-7">
                                    {industry.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
