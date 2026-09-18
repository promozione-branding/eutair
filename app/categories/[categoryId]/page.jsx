import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }) {
    const { categoryId } = params;
    const category = categories.find((c) => c.id === categoryId);

    if (!category) {
        return {
            title: 'Category Not Found ',
            description: 'The requested category does not exist.',
        };
    }

    return {
        title: category.metaTitle,
        description: category.metaDescription,
    };
}

export default function CategoryPage({ params }) {
    const { categoryId } = params;
    const category = categories.find((c) => c.id === categoryId);

    if (!category) {
        return <h2 className="mt-10 text-center text-red-500">Category not found</h2>;
    }

    return (
        <>
            {/* Hero Section */}
            <section style={{ backgroundImage: "url('/bag/bg-other.webp')" }} className="relative h-[50vh] w-full bg-cover bg-center md:h-[90vh]">
                <div className="absolute inset-0 flex items-center justify-center px-5 text-center">
                    <h2 className="z-10 bg-white p-3 text-2xl font-bold text-emerald-700 md:text-6xl">{category.name}</h2>
                </div>
            </section>

            {/* Products Grid */}
            <div className="mx-auto max-w-7xl p-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {category.products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.id}`}
                            className="rounded-lg border bg-emerald-50 p-4 shadow-md transition hover:shadow-lg"
                        >
                            <div className="relative h-75 w-full overflow-hidden rounded-md">
                                <Image
                                    src={product.image[0]?.src || '/placeholder.png'}
                                    alt={product.image[0]?.alt || product.name}
                                    title={product.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <h2 className="mt-3 bg-yellow-100 p-2 text-center text-xl font-semibold">{product.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
