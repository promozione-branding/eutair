'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { toast } from 'react-toastify';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export default function ContactForm({ isOpen, onClose }) {
    const [submitted, setSubmitted] = useState(false);

    const [successMessage, setSuccessMessage] = useState('');

    const [loading, setLoading] = useState(false);

    // OTP STATES

    const [formValues, setFormValues] = useState(null);

    // INIT RECAPTCHA

    if (!isOpen) return null;

    const handleClose = () => {
        onClose();
    };

    // SEND OTP
    // const sendOTP = async (phone) => {
    //   try {
    //     setLoading(true);

    //     const appVerifier =
    //       window.recaptchaVerifier;

    //     const result =
    //       await signInWithPhoneNumber(
    //         auth,
    //         "+91" + phone.trim(),
    //         appVerifier
    //       );

    //     setConfirmationResult(result);

    //     setShowOtpBox(true);

    //     toast.success("OTP Sent Successfully");
    //   } catch (error) {
    //     console.log(error);

    //     toast.error(
    //       error.message || "Failed to send OTP"
    //     );
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // VERIFY OTP
    // const verifyOTP = async () => {
    //   try {
    //     setLoading(true);

    //     await confirmationResult.confirm(otp);

    //     setIsPhoneVerified(true);

    //     toast.success(
    //       "Phone Verified Successfully"
    //     );

    //     // SUBMIT FORM AFTER VERIFY
    //     await submitForm(formValues);
    //   } catch (error) {
    //     console.log(error);

    //     toast.error("Invalid OTP");
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // SUBMIT FORM
    const submitForm = async (values) => {
        try {
            setLoading(true);

            const { data } = await axios.post('https://brandbnalo.com/api/form/add', {
                platform: 'eutair enquiry Form',
                supplierToken: '6a9fe072d936bdc2bb1d990f',

                platformEmail: 'rishi.raj@eutair.com',

                name: values.name,

                phone: values.phone,

                email: values.email,

                place: 'N/A',

                product: values.product,

                message: values.message,
            });

            if (data?.success) {
                setSubmitted(true);

                setSuccessMessage('✅ Your enquiry has been submitted successfully!');

                toast.success('Form Submitted Successfully');

                const whatsappText = `Hi, I am ${values.name}.
Email: ${values.email}
Product: ${values.product}
Message: ${values.message}
Contact: ${values.phone}`;

                setTimeout(() => {
                    window.open(`https://wa.me/919582911766?text=${encodeURIComponent(whatsappText)}`, '_blank');
                }, 1000);

                setTimeout(() => {
                    setSubmitted(false);

                    onClose();
                }, 4000);
            } else {
                setSuccessMessage('❌ Failed to send. Please try again.');
            }
        } catch (error) {
            console.log(error);

            setSuccessMessage('❌ Server error. Try again later.');
        } finally {
            setLoading(false);
        }
    };

    // HANDLE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const values = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            product: form.products.value,
            message: form.message.value,
        };

        if (!values.phone || values.phone.length < 10) {
            return toast.error('Enter Valid Phone Number');
        }

        await submitForm(values);
    };

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-black/60 p-4">
            <div
                className="relative z-[1000] w-full max-w-[570px] rounded-3xl bg-cover bg-center p-6 text-white shadow-2xl md:p-10"
                style={{
                    backgroundImage: 'url(/formbg.jpg)',
                }}
            >
                {/* OVERLAY */}
                <div className="absolute inset-0 z-[1000] rounded-3xl bg-black/70"></div>

                {/* CONTENT */}
                <div className="relative z-[10001]">
                    {/* CLOSE BUTTON */}
                    <button className="absolute top-0 right-0 cursor-pointer text-2xl text-white hover:text-red-500" onClick={handleClose}>
                        ✕
                    </button>

                    {/* HEADING */}
                    <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">Get In Touch With Us</h2>

                    <div className="mx-auto mt-3 mb-8 h-[4px] w-28 rounded-full bg-white"></div>

                    {!submitted ? (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* NAME + PRODUCT */}
                            <div className="flex flex-col gap-3 md:flex-row">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    disabled={loading}
                                    className="w-full rounded-md border-2 border-white bg-transparent p-3 text-white placeholder-white focus:outline-none md:w-1/2"
                                />

                                <select
                                    name="products"
                                    required
                                    disabled={loading}
                                    defaultValue=""
                                    className="w-full rounded-md border-2 border-white bg-blue-50 p-3 text-sm text-black focus:outline-none md:w-1/2"
                                >
                                    <option value="">Select Product</option>

                                    <option value="Mark Compressors">Mark Compressors</option>

                                    <option value="Chicago Pneumatic">Chicago Pneumatic</option>

                                    <option value="Air Treatment">Air Treatment</option>

                                    <option value="Spares and Consumables">Spares and Consumables</option>

                                    <option value="Piping and Distribution Lines">Piping and Distribution Lines</option>
                                </select>
                            </div>

                            {/* PHONE */}
                            <div className="flex items-center overflow-hidden rounded-md border-2 border-white">
                                <span className="ml-3">🇮🇳</span>

                                <input
                                    type="tel"
                                    name="phone"
                                    maxLength={10}
                                    minLength={10}
                                    required
                                    disabled={loading}
                                    placeholder="8123456789"
                                    className="w-full bg-transparent p-3 text-white placeholder-white focus:outline-none"
                                />
                            </div>

                            {/* RECAPTCHA */}
                            {/* <div
                id="recaptcha-container"
                className="mt-2"
              ></div> */}

                            {/* OTP BOX */}
                            {/* {showOtpBox &&
                !isPhoneVerified && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value)
                      }
                      className="w-full p-3 rounded-md border-2 border-white bg-transparent text-white placeholder-white focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={verifyOTP}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold"
                    >
                      Verify OTP
                    </button>
                  </div>
                )} */}

                            {/* EMAIL */}
                            <input
                                type="email"
                                name="email"
                                required
                                disabled={loading}
                                placeholder="Email Address"
                                className="w-full rounded-md border-2 border-white bg-transparent p-3 text-white placeholder-white focus:outline-none"
                            />

                            {/* MESSAGE */}
                            <textarea
                                name="message"
                                required
                                disabled={loading}
                                placeholder="Message"
                                className="h-28 w-full resize-none rounded-md border-2 border-white bg-transparent p-3 text-white placeholder-white focus:outline-none"
                            ></textarea>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-md bg-gradient-to-r from-[#0077e6] to-[#005bb5] py-3 font-semibold text-white shadow-md transition hover:opacity-90"
                            >
                                {loading ? 'Loading...' : 'Send Message'}
                            </button>
                        </form>
                    ) : (
                        <p className="text-center text-lg font-semibold text-white">{successMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
