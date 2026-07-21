import details from "@/lib/Data";
import markData from "@/lib/Data2";
import { locations } from "@/lib/Location";

export const dynamic = "force-dynamic";

// import { locations } from "@/lib/Location";
// import { categories } from "@/Data";
// import { client } from "@/lib/sanity";
// import { groq } from "next-sanity";

// Function to fetch all blogs from Sanity
// async function getAllBlogs() {
//   const query = groq`*[_type=="blog"]{slug, date}`;
//   return client.fetch(query);
// }

export async function GET() {
  const baseUrl = "https://screwaircompressormanufacturers.com";

  const baseUrl2 = "https://screwaircompressormanufacturers.com/tel:+919717159766";

  // Flatten all products
  const allProducts1 =
    details?.[0]?.products?.["Diesel and electric powered compressor"] || [];
  const allProducts2 = details?.[0]?.products?.["Handheld Tools"] || [];

  const allProducts3 = markData?.products;

  // Fetch blogs
  //   const blogs = await getAllBlogs();

  // Static pages (About, Contact, Blog Listing)
  const staticPages = [
    { loc: `${baseUrl}/about`, priority: 0.8, changefreq: "yearly" },
    { loc: `${baseUrl}/contact`, priority: 0.8, changefreq: "yearly" },
    {
      loc: `${baseUrl}/air-treatment-service`,
      priority: 0.8,
      changefreq: "yearly",
    },
    { loc: `${baseUrl}/amc-service`, priority: 0.8, changefreq: "yearly" },
    {
      loc: `${baseUrl}/spares-and-consumables`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/air-audit-service`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/genuine-parts-services`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/engineering-consultancy`,
      priority: 0.8,
      changefreq: "yearly",
    },
    { loc: `${baseUrl}/mark-compressor`, priority: 0.8, changefreq: "yearly" },
    {
      loc: `${baseUrl}/piping-and-distribution-lines`,
      priority: 0.8,
      changefreq: "yearly",
    },
    { loc: `${baseUrl}/turnkey-project`, priority: 0.8, changefreq: "yearly" },
    {
      loc: `${baseUrl}/wastewater-engineering`,
      priority: 0.8,
      changefreq: "yearly",
    },
    {
      loc: `${baseUrl}/chicago-pneumatic`,
      priority: 0.8,
      changefreq: "yearly",
    },
    // { loc: `${baseUrl}/our-blogs`, priority: 0.9, changefreq: "weekly" },
  ]
    .map(
      (page) => `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>
    `,
    )
    .join("");

  // Homepage
  const homepage = `
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `;

  // Categories
  //   const categoryUrls = categories
  //     .map(
  //       (cat) => `
  //       <url>
  //         <loc>${baseUrl}/categories/${cat.id}</loc>
  //         <lastmod>${new Date().toISOString()}</lastmod>
  //         <changefreq>weekly</changefreq>
  //         <priority>0.8</priority>
  //       </url>
  //     `
  //     )
  //     .join("");

  // Products
  const chicago = allProducts1
    .map(
      (product) => `
      <url>
        <loc>${baseUrl}/chicago-pneumatic/${product.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `,
    )
    .join("");
  const chicago2 = allProducts2
    .map(
      (product) => `
      <url>
        <loc>${baseUrl}/chicago-pneumatic/${product.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `,
    )
    .join("");
  const mark = allProducts3
    .map(
      (product) => `
      <url>
        <loc>${baseUrl}/mark-compressor/${product.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `,
    )
    .join("");

  // Blogs
  //   const blogUrls = blogs
  //     .map(
  //       (blog) => `
  //       <url>
  //         <loc>${baseUrl}/blog/${blog.slug.current}</loc>
  //         <lastmod>${
  //           blog.date ? new Date(blog.date).toISOString() : new Date().toISOString()
  //         }</lastmod>
  //         <changefreq>monthly</changefreq>
  //         <priority>0.6</priority>
  //       </url>
  //     `
  //     )
  //     .join("");

  const locationUrls = locations
    .map(
      (loc) => `
        <url>
          <loc>${baseUrl}/${loc.slug}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${homepage}
      ${staticPages}
     
    ${chicago}  
    ${chicago2}
    ${mark}
    ${locationUrls}
  


  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
