"use client";

import { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setplace] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const formData = {
        platform: "Sangam Garbage Bag Contact Form",
        platformEmail: "info@sangamgarbagebags.com",
        name,
        phone,
        email,
        place,
        product: requirement,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        setStatus("success");

        // const whatsappText = `Hi, I am ${name}.
        //   Email: ${email}
        //   Product: ${requirement}
        //   City: ${place}
        //   Message: ${message}
        //   Contact: ${phone}`;

        // setTimeout(() => {
        //   window.open(
        //     `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
        //       whatsappText
        //     )}`,
        //     "_blank"
        //   );
        // }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setplace("");
        setRequirement("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);

      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>




 <section className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: "url('/bghero1.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="px-10   text-center text-3xl md:text-7xl font-bold text-white z-10">
        
       Contact Us
          </h1>
        </div>
      </section>







      {/* HERO SECTION */}
   <section className="relative -mt-24 z-20 px-4">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-3 gap-6">

      {[
        {
          title: "Call Us",
          value: "+91 9717159766 , +91 958 2911766          ",
          icon: <Phone size={32} />,
        },
        {
          title: "Email Address",
          value: "support@eutair.com",
          icon: <Mail size={32} />,
        },
        {
          title: "Office Address",
          value:
            "T-3, Third Floor, Ansal Utility Tower, A 2 Block, Paschim Vihar, New Delhi, Delhi 110063",
          icon: <MapPin size={32} />,
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
          bg-white
          rounded-[32px]
          p-8
          shadow-[0_20px_60px_rgba(0,0,0,.08)]
          border
          border-slate-100
          hover:-translate-y-2
          transition-all
        "
        >
          <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
            {item.icon}
          </div>

          <h3 className="mt-6 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 text-slate-600 whitespace-pre-line">
            {item.value}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* CONTACT INFO */}
     <section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-4">

    <div className="grid lg:grid-cols-5 gap-10">

      {/* Left */}
      <div className="lg:col-span-2">

        <span className="text-cyan-600 font-semibold">
          Contact Sangam Industries
        </span>

        <h2 className="mt-4 text-5xl font-black text-slate-900">
          Let's Discuss Your Requirements
        </h2>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Looking for premium-quality garbage bags, biomedical waste bags,
          biodegradable bags, or customized packaging solutions?
        </p>

        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Our experts are ready to help you find the right product based
          on your application, quantity, and specifications.
        </p>

        <div className="mt-10 space-y-6">

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
              ✓
            </div>

            <div>
              <h4 className="font-bold">
                Fast Response
              </h4>

              <p className="text-slate-500">
                Get a reply within 24 hours.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
              ✓
            </div>

            <div>
              <h4 className="font-bold">
                Bulk Order Support
              </h4>

              <p className="text-slate-500">
                Best pricing for large requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
              ✓
            </div>

            <div>
              <h4 className="font-bold">
                Nationwide Supply
              </h4>

              <p className="text-slate-500">
                Serving customers across India.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Form */}
      <div className="lg:col-span-3">

        <div
          className="
          bg-white
          rounded-[40px]
          p-8 md:p-12
          shadow-[0_20px_60px_rgba(0,0,0,.08)]
        "
        >
          <h3 className="text-3xl font-black text-slate-900 mb-8">
            Send Inquiry
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                className="h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="email"
                placeholder="Email Address"
                className="h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder="City"
                className="h-14 px-5 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500"
              />

            </div>

            <select className="h-14 px-5 rounded-2xl border border-slate-200 w-full">
              <option>Select Product</option>
            </select>

            <textarea
              rows={5}
              placeholder="Tell us your requirement..."
              className="w-full rounded-2xl border border-slate-200 p-5"
            />

            <button
              type="submit"
              className="
              h-14
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-cyan-600
              to-cyan-700
              text-white
              font-semibold
              shadow-lg
              hover:scale-[1.02]
              transition-all
            "
            >
              Submit Inquiry →
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</section>
    </div>
  );
}
