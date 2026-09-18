'use client';

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import { User, Building2, Phone, MapPin, Mail, ClipboardList, ArrowRight } from 'lucide-react';

export default function Form() {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        mobile: '',
        city: '',
        email: '',
        requirement: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.mobile.length !== 10) {
            return toast.error('Please enter a valid mobile number.');
        }

        try {
            setLoading(true);

            const formData = {
                platform: 'Eutair Website Form',
                platformEmail: 'rishi.raj@eutair.com',
                supplierToken: '6a9fe072d936bdc2bb1d990f',

                name: form.name,
                phone: form.mobile,
                email: form.email,
                product: form.requirement,
                message: `
City: ${form.city}
Requirement: ${form.requirement}`,
                place: form.city || 'N/A',
            };

            const { data } = await axios.post('https://brandbnalo.com/api/form/add', formData);

            if (data?.success) {
                toast.success('Enquiry submitted successfully!');

                window.open(`https://wa.link/rntibs`, '_blank');

                setForm({
                    name: '',
                    company: '',
                    mobile: '',
                    city: '',
                    email: '',
                    requirement: '',
                });
            } else {
                toast.error('Failed to submit enquiry.');
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white shadow-2xl">
            {/* Header */}
            <div className="px-8 pt-4 pb-3 text-center md:pt-8 md:pb-6">
                <h2 className="text-3xl font-extrabold uppercase">GET BEST PRICE TODAY!</h2>

                <p className="mt-2 text-blue-100">Fill the form & our expert will contact you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 px-6 pb-5 md:pb-8">
                {/* Name */}
                <div className="relative">
                    <User className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-blue-600" />

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={handleChange}
                        className="h-10 w-full rounded-xl bg-white pr-4 pl-12 text-black outline-none focus:ring-2 focus:ring-yellow-400 md:h-14"
                        required
                    />
                </div>

                {/* Mobile */}
                <div className="relative">
                    <Phone className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-blue-600" />

                    <input
                        type="tel"
                        name="mobile"
                        maxLength={10}
                        placeholder="Mobile Number *"
                        value={form.mobile}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                mobile: e.target.value.replace(/\D/g, ''),
                            })
                        }
                        className="h-10 w-full rounded-xl bg-white pr-4 pl-12 text-black outline-none focus:ring-2 focus:ring-yellow-400 md:h-14"
                        required
                    />
                </div>

                {/* City + Email */}
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="relative">
                        <MapPin className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-blue-600" />

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={form.city}
                            onChange={handleChange}
                            className="h-10 w-full rounded-xl bg-white pr-4 pl-12 text-black outline-none focus:ring-2 focus:ring-yellow-400 md:h-14"
                        />
                    </div>

                    <div className="relative">
                        <Mail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-blue-600" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="h-10 w-full rounded-xl bg-white pr-4 pl-12 text-black outline-none focus:ring-2 focus:ring-yellow-400 md:h-14"
                        />
                    </div>
                </div>

                {/* Requirement */}
                <div className="relative">
                    <ClipboardList className="absolute top-5 left-4 h-5 w-5 text-blue-600" />

                    <textarea
                        rows={4}
                        name="requirement"
                        placeholder="Your Requirement *"
                        value={form.requirement}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl bg-white pt-4 pr-4 pl-12 text-black outline-none focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="group flex h-10 w-full items-center justify-center gap-3 rounded-xl bg-yellow-400 text-lg font-bold text-slate-900 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60 md:h-14"
                >
                    {loading ? 'Submitting...' : 'GET FREE QUOTE'}

                    <ArrowRight className="transition group-hover:translate-x-1" />
                </button>
            </form>
        </div>
    );
}
