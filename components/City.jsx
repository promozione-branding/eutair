import { locations } from "@/lib/Location";
import Link from "next/link";
import React from "react";

const CityPage = () => {
  return (
    <>
    <section className="py-5 md:py-10 bg-blue-200 px-4 md:px-20">


     <h2 className="my-5 text-2xl md:text-5xl font-bold  text-[#304B99]">Our Supply Network</h2>
    <div className="flex gap-2 px-2 flex-wrap overflow-hidden ">
   
    
      {locations.map((item, idx) => (
        <Link
          href={item.slug}
          key={idx}
          className="hover:underline hover:scale-105 hover:duration-300 "
        >
          {item.label}
        </Link>
      ))}
    </div>
    </section>
    </>
  );
};

export default CityPage;
