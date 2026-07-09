import Location from "./Location";
import { notFound } from "next/navigation";

const cities = [
  "loni",
  "ghaziabad",
  "noida",
  "greater-noida",
  "sikandrabad-up",
  "meerut",
  "gurgaon",
  "manesar",
  "bilaspur",
  "bawal",
  "bhiwadi",
  "badarpur",
  "bahadurgarh",
  "faridabad",
  "sonipat",
  "panipat",
  "roorkee",
  "saharanpur",
  "haridwar",
  "moradabad",
  "bareily",
  "rohtak",
  "jhajjar",
  "jammu",
  "pulwama",
  "delhi",
];

export async function generateMetadata({ params }) {
  const { location } = await params;

  // Must contain "in-"
  if (!location.includes("in-")) {
    notFound();
  }

  const citySlug = location.split("in-")[1];

  // Invalid city
  if (!citySlug || !cities.includes(citySlug)) {
    notFound();
  }

  const city = citySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `Air Screw Compressor Supplier in ${city} | Industrial Compressors | Eutair
 | `,
    description: `Eutair is a trusted Air Screw Compressor Supplier in  ${city}, providing industrial screw air compressors, air dryers, filters, compressor services, and turnkey compressed air solutions.`,
  };
}

const Page = async ({ params }) => {
  const { location } = await params;

  // Must contain "in-"
  if (!location.includes("in-")) {
    notFound();
  }

  const citySlug = location.split("in-")[1];

  // Invalid city
  if (!citySlug || !cities.includes(citySlug)) {
    notFound();
  }

  return <Location city={citySlug} />;
};

export default Page;