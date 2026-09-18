import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

// Fetch blog
async function getBlog(slug) {
    return client.fetch(
        groq`*[_type=="blog" && slug.current==$slug][0]{
      title,
      date,
      excerpt,
      "imageUrl": image.asset->url,
      content,
      metaTitle,
      metaDescription
    }`,
        { slug }
    );
}

// ✅ SEO
export async function generateMetadata({ params }) {
    const blog = await getBlog(params.slug);

    return {
        title: blog?.metaTitle || blog?.title || 'Blog |  Studio',
        description: blog?.metaDescription || blog?.excerpt || 'Read the latest insights and updates from Studio.',
    };
}

const components = {
    types: {},
    list: {
        bullet: ({ children }) => <ul className="ml-6 list-disc">{children}</ul>,
        number: ({ children }) => <ol className="ml-6 list-decimal">{children}</ol>,
    },
    block: {
        h1: ({ children }) => <h1 className="mb-4 text-3xl font-bold text-gray-900">{children}</h1>,
        h2: ({ children }) => <h2 className="mb-3 text-2xl font-semibold text-gray-800">{children}</h2>,
        h3: ({ children }) => <h3 className="mb-2 text-xl font-semibold text-gray-700">{children}</h3>,

        h4: ({ children }) => <h4 className="mb-2 text-lg font-semibold text-gray-600">{children}</h4>,

        h5: ({ children }) => <h5 className="mb-2 text-base font-semibold text-gray-500">{children}</h5>,
        normal: ({ children }) => <p className="mb-4 leading-relaxed text-black">{children}</p>,
        blockquote: ({ children }) => <blockquote className="my-4 border-l-4 border-blue-500 pl-4 text-gray-600 italic">{children}</blockquote>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        link: ({ value, children }) => (
            <a href={value?.href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
        color: ({ value, children }) => {
            const colorHex = value?.hex || 'inherit';
            return <span style={{ color: colorHex }}>{children}</span>;
        },
    },
};

export default async function BlogDetail({ params }) {
    const blog = await getBlog(params.slug);

    if (!blog) return <p>Blog not found</p>;

    return (
        <>
            <section style={{ backgroundImage: "url('/bghero1.webp')" }} className="relative h-[50vh] overflow-hidden bg-cover bg-center md:h-[70vh]">
                <div className="absolute inset-0 z-[1] bg-black/40"></div>

                <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6">
                    <div className="max-w-6xl rounded bg-white p-2 text-cyan-500 opacity-80">
                        <h1 className="text-center text-xl leading-tight font-bold md:text-4xl">{blog.title}</h1>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-6 py-10">
                {blog.imageUrl && <Image src={blog.imageUrl} alt={blog.title} width={800} height={400} className="my-6 rounded" />}

                <p className="mb-3 text-sm text-red-500">
                    published on:{' '}
                    {blog.date
                        ? new Date(blog.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                          })
                        : 'No date'}
                </p>

                <PortableText value={blog.content} components={components} />
            </div>
        </>
    );
}
