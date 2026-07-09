import React from "react";
import details from "@/lib/Data";
import ProductPageClientC from "./ProductPageClientC";

export async function generateMetadata({ params }) {
  const allProducts = details.flatMap((company) =>
    Object.values(company.products).flat()
  );

  const product = allProducts.find(
    (item) => item.slug === params.slug
  );



  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.metaTitle ,
    description:
      product.metaDescription 
  };
}

export default function Page() {
  return <ProductPageClientC />;
}