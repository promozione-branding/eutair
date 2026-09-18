'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/lib/sanity';

async function getBlogs() {
    return client.fetch(
        `*[_type == "blog"] | order(date desc){
      title,
      slug,
      date,
      excerpt,
      "imageUrl": image.asset->url
    }`
    );
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        async function fetchBlogs() {
            const data = await getBlogs();
            setBlogs(data);
        }
        fetchBlogs();
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section style={{ backgroundImage: "url('/bghero1.webp')" }} className="relative h-[50vh] w-full bg-cover">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-lg text-white">Home / Blogs</p>
                    <h1 className="z-10 text-6xl font-bold text-white">Our Blogs</h1>
                </div>
            </section>

            {/* Blog Listing */}
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.slice(0, visibleCount).map((b) => (
                        <article key={b.slug?.current || b.title} className="rounded-lg border bg-white shadow">
                            {b.imageUrl && <Image src={b.imageUrl} alt={b.title} width={1200} height={600} className="h-48 w-full rounded-t-lg object-cover" />}
                            <div className="p-4">
                                <h2 className="mb-2 text-lg font-semibold">{b.title}</h2>
                                <p className="mb-3 text-sm text-gray-500">
                                    {b.date
                                        ? new Date(b.date).toLocaleDateString('en-US', {
                                              year: 'numeric',
                                              month: 'long',
                                              day: 'numeric',
                                          })
                                        : 'No date'}
                                </p>

                                <p className="text-sm text-gray-700">{b.excerpt}</p>
                                <Link href={`/our-blogs/${b.slug.current}`} className="mt-3 block font-medium text-blue-600 hover:underline">
                                    Read More →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ✅ Load More Button */}
                {visibleCount < blogs.length && (
                    <div className="mt-10 text-center">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 6)} // load +6 blogs each click
                            className="inline-block rounded-md bg-blue-600 px-6 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
