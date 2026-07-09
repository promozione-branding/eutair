import React from "react";
import ProductPage from "./MarkProductPageClient";
import markData from "@/lib/Data2";

export async function generateMetadata({ params }) {
  const product = markData.products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | MARK Compressors",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export default function Page() {

  return <ProductPage  />;
}
