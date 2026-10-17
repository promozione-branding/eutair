'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function ContactForm({ isOpen: isOpenProp, onClose }) {
    const [autoOpen, setAutoOpen] = useState(false);
    const isControlled = isOpenProp !== undefined;
    const isOpen = isControlled ? isOpenProp : autoOpen;

    const handleClose = () => {
        if (isControlled) {
            onClose?.();
        } else {
            setAutoOpen(false);
        }
    };

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('');
    const [message, setMessage] = useState('');

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
                    window.open(`https://wa.me/919582911766?text=${encodeURIComponent(whatsappText)}`, '_blank');
                }, 1000);

                // RESET FORM
                setName('');
                setPhone('');
                setEmail('');
                setProduct('');
                setMessage('');

                setTimeout(handleClose, 3000);
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

        await submitForm();
    };

    // AUTO-OPEN ON SCROLL (only when not controlled by a parent)
    useEffect(() => {
        if (isControlled) return;

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;

            const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

            if (scrollPercent > 30) {
                setAutoOpen(true);
                window.removeEventListener('scroll', handleScroll); // run only once
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isControlled]);

    if (!isOpen) return null;

    const inputBase =
        'w-full min-w-0 rounded-md border-2 border-black bg-blue-50 p-3 text-base text-black focus:outline-none md:text-sm';

    return (
        <div className="fixed inset-0 z-[99999] overflow-y-auto bg-black/40 p-4">
            {/* min-h-full + flex centers the card, but lets it scroll when taller than the screen */}
            <div className="flex min-h-full items-center justify-center">
                <div className="relative w-full max-w-md rounded-3xl bg-cyan-600 p-5 pt-12 text-white shadow-2xl sm:p-8 sm:pt-12 md:max-w-2xl md:p-10">
                    {/* Close button */}
                    <button
                        type="button"
                        aria-label="Close"
                        className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full text-xl text-white hover:text-red-500 md:right-4 md:top-4"
                        onClick={handleClose}
                    >
                        ✕
                    </button>

                    {/* Title */}
                    <h2 className="text-center text-xl font-semibold tracking-wide text-white md:text-3xl">Get In Touch With Us</h2>

                    <div className="mx-auto mb-6 mt-3 h-[4px] w-24 rounded-full bg-white md:mb-8 md:w-28"></div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-3 md:flex-row">
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                className={`${inputBase} md:w-1/2`}
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
                                className={`${inputBase} md:w-1/2`}
                            >
                                <option value="">Select Product</option>
                                <option value="Chicago Pneumatic">Chicago Pneumatic</option>
                                <option value="Air Treatment">Air Treatment</option>
                                <option value="Spares and Consumables">Spares and Consumables</option>
                                <option value="Piping and Distribution Lines">Piping and Distribution Lines</option>
                            </select>
                        </div>

                        {/* PHONE */}
                        <div className="flex items-center overflow-hidden rounded-md border-2 border-black bg-blue-50">
                            <span className="px-3 text-lg text-black">🇮🇳</span>

                            <input
                                type="tel"
                                name="phone"
                                inputMode="numeric"
                                maxLength={10}
                                placeholder="81234 56789"
                                className="w-full min-w-0 border-0 bg-blue-50 p-3 text-base text-black focus:outline-none md:text-sm"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                disabled={loading}
                            />
                        </div>

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={inputBase}
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            className={`${inputBase} h-24 resize-none md:h-28`}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={loading}
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full rounded-md bg-gradient-to-r from-[#0077e6] to-[#005bb5] py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90 disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Send Message'}
                        </button>

                        {status && (
                            <p className={`mt-2 text-center text-sm font-medium ${status.startsWith('✅') ? 'text-green-100' : 'text-red-200'}`}>
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}