'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('');
    const [message, setMessage] = useState('');

    // OTP STATES

    // useEffect(() => {
    //   const timer = setTimeout(() => setIsOpen(true), 15000);
    //   return () => clearTimeout(timer);
    // }, []);

    // FIREBASE RECAPTCHA

    const handleClose = () => setIsOpen(false);

    // VERIFY OTP

    // SUBMIT FORM
    const submitForm = async () => {
        try {
            setLoading(true);

            const formData = {
                platform: 'eutair popup Form',
                platformEmail: 'rishi.raj@eutair.com',
                supplierToken: '6a9fe072d936bdc2bb1d990f',

                name,
                phone,
                email,
                product,
                message,
                place: 'N/A',
            };

            const { data } = await axios.post('https://brandbnalo.com/api/form/add', formData);

            if (data?.success) {
                setStatus('✅ Your enquiry has been submitted successfully!');

                toast.success('Form Submitted Successfully');

                const whatsappText = `Hi, I am ${name}.
Email: ${email}
Product: ${product}
Message: ${message}
Contact: ${phone}`;

                setTimeout(() => {
                    window.open(
                        `https://wa.me/919582911766
?text=${encodeURIComponent(whatsappText)}`,
                        '_blank'
                    );
                }, 1000);

                // RESET FORM
                setName('');
                setPhone('');
                setEmail('');
                setProduct('');
                setMessage('');

                setTimeout(() => setIsOpen(false), 3000);
            } else {
                setStatus('❌ Failed to send. Please try again.');
            }
        } catch (error) {
            console.log(error);

            setStatus('❌ Server error. Try again later.');
        } finally {
            setLoading(false);
        }
    };

    // HANDLE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!phone || phone.length < 10) {
            return toast.error('Enter Valid Phone Number');
        }

        // IF ALREADY VERIFIED

        await submitForm();

        // SEND OTP FIRST
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

            if (scrollPercent > 30) {
                setIsOpen(true);
                window.removeEventListener('scroll', handleScroll); // run only once
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40">
            <div className="relative max-w-sm rounded-3xl bg-cyan-600 p-10 text-white shadow-2xl md:max-w-2xl">
                {/* Close button */}
                <button className="absolute top-4 right-4 cursor-pointer text-xl text-white hover:text-red-500" onClick={handleClose}>
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-center text-xl font-semibold tracking-wide text-white md:text-3xl">Get In Touch With Us</h2>

                <div className="mx-auto mt-3 mb-8 h-[4px] w-28 rounded-full bg-white"></div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="flex gap-3 max-md:flex-col">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            className="w-1/2 rounded-md border border-2 border-black bg-blue-50 p-3 text-sm text-black focus:outline-none max-md:w-full"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={loading}
                        />

                        <select
                            name="products"
                            required
                            disabled={loading}
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                            className="w-1/2 rounded-md border-2 bg-blue-50 p-3 text-sm text-black focus:outline-none max-md:w-full"
                        >
                            <option value="">Select Product</option>

                            <option value="   Mark Compressors">Mark Compressors</option>

                            <option
                                value=" Chicago Pneumatic
"
                            >
                                Chicago Pneumatic
                            </option>

                            <option value="  Air Treatment">Air Treatment</option>

                            <option value=" Spares and Consumables">Spares and Consumables</option>

                            <option value="Piping and Distribution Lines">Piping and Distribution Lines</option>
                        </select>
                    </div>

                    {/* PHONE */}
                    <div className="flex items-center overflow-hidden rounded-md border border-2 border-black bg-white">
                        <span className="px-3 text-lg text-black">🇮🇳</span>

                        <input
                            type="tel"
                            name="phone"
                            maxLength={10}
                            placeholder="81234 56789"
                            className="w-full border-0 bg-blue-50 p-3 text-sm text-black focus:outline-none"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={loading}
                        />
                    </div>

                    {/* RECAPTCHA */}

                    {/* OTP BOX */}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full rounded-md border-2 border-black bg-blue-50 p-3 text-sm text-black focus:outline-none"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        className="h-28 w-full resize-none rounded-md border-2 border-black bg-blue-50 p-3 text-sm text-black focus:outline-none"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={loading}
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-gradient-to-r from-[#0077e6] to-[#005bb5] py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Send Message'}
                    </button>

                    {status && (
                        <p className={`mt-2 text-center text-sm font-medium ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>
                    )}
                </form>
            </div>
        </div>
    );
}
