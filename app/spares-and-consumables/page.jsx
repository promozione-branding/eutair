import Image from "next/image";
import {
  Filter,
  Droplets,
  Cog,
  Settings,
  Wrench,
  Cpu,
  Thermometer,
  Fan,
} from "lucide-react";










export default function BrandsSection() {



const brands = [
  { name: "Atlas Copco", logo: "/1.png" },
  { name: "Chicago Pneumatic", logo: "/2.webp" },
  { name: "Ingersoll Rand", logo: "/3.png" },
  { name: "Kaeser", logo: "/4.jpg" },
  { name: "ELGi", logo: "/5.jpg" },
  { name: "Kirloskar", logo: "6.jfif" },
  { name: "CompAir", logo: "/7.jfif" },
  { name: "Gardner Denver", logo: "/8.jfif" },
  { name: "Sullair", logo: "/9.png" },
  { name: "Hitachi", logo: "/10.png" },
  { name: "Doosan", logo: "/11.jfif" },
  { name: "Boge", logo: "/cp.jpeg" },
  { name: "FS Curtis", logo: "/mark.jpg" },
  { name: "ABAC", logo: "/client/23.png" },
];



const products = [
  { title: "Air Filters", icon: Filter },
  { title: "Oil Filters", icon: Droplets },
  { title: "Oil Separators", icon: Filter },
  { title: "Compressor Lubricants & Oils", icon: Droplets },
  { title: "Airend Spare Parts", icon: Cog },
  { title: "Valves & Control Components", icon: Settings },
  { title: "Service & Maintenance Kits", icon: Wrench },
  { title: "Sensors & Monitoring Devices", icon: Thermometer },
  { title: "PLC & Controller Modules", icon: Cpu },
  { title: "VFD / Drive Components", icon: Cpu },

];



  return (

    <>
    
    
    <section className="relative overflow-hidden py-10 px-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-cyan-50" />

      {/* Decorative Blur */}
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            Trusted Partners
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900 lg:text-5xl">
            Brands We Support
          </h2>

          <p className="mt-3 text-md     leading-8 text-slate-600">
            We provide genuine, OEM-equivalent, and compatible spare parts for
            leading compressor brands:
          </p>
        </div>

        {/* Logo Grid */}
        <div className="mt-5 grid  sm:grid-cols-2 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex h-50 items-center justify-center rounded-3xl border border-white bg-white/80 p-8 shadow-lg shadow-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={80}
                className="h-full w-auto object-contain transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}

          {/* Last Card */}
          <div className="flex h-40 items-center justify-center rounded-3xl border border-dashed border-sky-300 bg-white/60 p-8 text-center shadow-lg shadow-slate-100">
            <p className="font-semibold text-slate-700">
              And many other
              <br />
              leading brands
            </p>
          </div>
        </div>
      </div>
    </section>


  <section className="py-10 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Spare Parts Portfolio
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Our Product Range
          </h2>

          <p className="mt-4 text-slate-600">
            Comprehensive spare parts and maintenance components for industrial
            compressed air systems.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={26} />
                </div>

                <h3 className="mt-2 font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>


    </>
  );
}