"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactForm({
    isOpen,
  onClose,
}) {
//   const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => setIsOpen(true), 15000);
//     return () => clearTimeout(timer);
//   }, []);

  if (!isOpen) return null;

const handleClose = () => {
  onClose();
};

  // SUBMIT FORM
  const submitForm = async (e) => {
    e.preventDefault();

    if (!phone || phone.length !== 10) {
      return toast.error("Enter a valid phone number");
    }

    try {
      setLoading(true);

      const formData = {
        platform: "eutair popup Form Inquiry Page",
        platformEmail: "sales@eutair.com",
        name,
        phone,
        email,
        product,
        message,
        place: "N/A",
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData
      );

      if (data?.success) {
        setStatus("✅ Your enquiry has been submitted successfully!");

        toast.success("Form Submitted Successfully");

        

        setTimeout(() => {
          window.open(
            `https://wa.link/rntibs`,
            "_blank"
          );
        }, 1000);

        // Reset Form
        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        setTimeout(() => {
  onClose();
}, 3000);
      } else {
        setStatus("❌ Failed to submit enquiry.");
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error. Please try again later.");
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 px-4">
      <div className="relative w-full max-w-sm md:max-w-2xl rounded-3xl bg-cyan-600 p-6 md:p-10 shadow-2xl text-white">

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-xl hover:text-red-500"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold">
          Get In Touch With Us
        </h2>

        <div className="mx-auto mt-3 mb-8 h-1 w-24 rounded-full bg-white"></div>

        <form onSubmit={submitForm} className="space-y-4">
          <div className="flex gap-3 max-md:flex-col">
            <input
              type="text"
              placeholder="Your Name"
              required
              disabled={loading}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-1/2 max-md:w-full rounded-md border-2 border-black bg-blue-50 p-3 text-black focus:outline-none"
            />

            <select
              required
              disabled={loading}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-1/2 max-md:w-full rounded-md border-2 border-black bg-blue-50 p-3 text-black focus:outline-none"
            >
              <option value="">Select Product</option>

              <option value="Mark Compressors">
                Mark Compressors
              </option>

              <option value="Chicago Pneumatic">
                Chicago Pneumatic
              </option>

              <option value="Air Treatment">
                Air Treatment
              </option>

              <option value="Spares and Consumables">
                Spares and Consumables
              </option>

              <option value="Piping and Distribution Lines">
                Piping and Distribution Lines
              </option>
            </select>
          </div>

          {/* Phone */}
          <div className="flex overflow-hidden rounded-md border-2 border-black bg-white">
            <span className="flex items-center px-3 text-black">
              🇮🇳
            </span>

            <input
              type="tel"
              maxLength={10}
              required
              disabled={loading}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, ""))
              }
              placeholder="8123456789"
              className="w-full bg-blue-50 p-3 text-black focus:outline-none"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            required
            disabled={loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border-2 border-black bg-blue-50 p-3 text-black focus:outline-none"
          />

          {/* Message */}
          <textarea
            required
            disabled={loading}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="h-28 w-full resize-none rounded-md border-2 border-black bg-blue-50 p-3 text-black focus:outline-none"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-gradient-to-r from-[#0077e6] to-[#005bb5] py-3 font-semibold text-white shadow-md transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`text-center font-medium ${
                status.startsWith("✅")
                  ? "text-green-200"
                  : "text-red-200"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}