import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1ey0tkus",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
