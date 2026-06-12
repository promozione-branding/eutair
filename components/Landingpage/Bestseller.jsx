import React from 'react'

const Bestseller = () => {
  return (
    <div>
      <section className="py-10 bg-white">
  <div className="container mx-auto px-15">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
  

      {/* Right Side - Content */}
      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-[#CEFAFE] text-[#18829E] font-medium text-sm mb-4">
          Our Quality Commitment
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Delivering Excellence Through Quality
        </h2>

        <p className="text-black leading-relaxed mb-3">
          At Eutair Equipments LLP, quality is at the heart of everything we do.
          As a trusted Screw Air Compressor Manufacturer, we are committed to
          delivering reliable, efficient, and durable products that meet the
          highest industry standards. Every product is carefully inspected to
          ensure consistent performance, long service life, and maximum customer
          satisfaction.
        </p>

        <p className="text-black leading-relaxed mb-5">
          From Screw Air Compressors and Diesel Air Compressors to Air Dryers,
          Air Line Filters, Drain Valves, and MSS Series Screw Compressor
          Filters, we maintain strict quality standards to provide solutions
          that help industries improve productivity and operational efficiency.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            "Premium Quality Products",
            "Rigorous Quality Checks",
            "Reliable Performance",
            "Long Service Life",
            "Industry-Compliant Standards",
            "Customer-Focused Approach",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
              <span className="font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>

     
      </div>




    {/* Left Side - Video */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          {/* Add your video here */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://res.cloudinary.com/dcefpzfe0/video/upload/v1781243641/WhatsApp_Video_2026-06-09_at_3.50.56_PM_arktyk.mp4" type="video/mp4" />
          </video>
        </div>





   <div className="p-6 mt-10 bg-gradient-to-r from-cyan-300/10 to-transparent rounded-2xl border-l-4 border-cyan-500">
          <p className="text-gray-700 leading-relaxed">
            Our commitment to quality enables us to deliver trusted solutions
            that businesses can rely on every day.
          </p>
        </div>


      </div>

    </div>
  </div>
</section>
    </div>
  )
}

export default Bestseller
