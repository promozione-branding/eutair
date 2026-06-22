import React from 'react'
import Link from "next/link";
import { Phone } from "lucide-react";
const Cta = () => {
  return (
    <div>
      



<section className="py-10">
  <div className="w-full mx-auto">
    <div className=" bg-cyan-700 px-8 py-4 md:py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Find the Right Product for Your Application
      </h2>

      <p className="mt-3 text-cyan-100">
        Browse our extensive range of industrial equipment and filtration products.
      </p>

    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
<a
  href="tel:6564545454"
  className="inline-flex items-center gap-2 px-10 py-4 bg-white text-cyan-700 font-semibold rounded-full "
>
  <Phone size={18} />
  Get Instant Price
</a>


</div>


    </div>
  </div>
</section>


    </div>
  )
}

export default Cta
