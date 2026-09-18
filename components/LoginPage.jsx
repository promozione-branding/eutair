'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);
    const router = useRouter();
    const params = useSearchParams();
    const from = params?.get('from') || '/studio';

    useEffect(() => setFadeIn(true), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            if (res.ok) router.push(from);
            else alert('Invalid password');
        } catch (err) {
            console.error(err);
            alert('Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
            <form
                onSubmit={handleSubmit}
                className={`w-full max-w-sm transform rounded bg-white p-6 shadow transition-opacity duration-700 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
            >
                <h2 className="mb-4 text-xl font-semibold">Studio Login</h2>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="mb-4 w-full rounded border p-2"
                    required
                />
                <button type="submit" disabled={loading} className="w-full rounded bg-blue-600 py-2 text-white">
                    {loading ? 'Checking...' : 'Enter Studio'}
                </button>
            </form>
        </div>
    );
}
