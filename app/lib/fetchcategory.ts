import { client } from "../lib/sanity";

// Fungsi fetch untuk data Sanity
export async function getData<T>(type: string): Promise<T[]> {
     // Dynamic query berdasarkan tipe yang diberikan
     const query = `*[_type == "${type}"] {
        title,
        overview,
        slug {
            current
        },
        _id,
        _createdAt,
        "mainImage": mainImage.asset->url
    }`;

     try {
          // Fetch data berdasarkan dynamic query
          const data = await client.fetch(query);

          // Penanganan jika API Sanity mengembalikan halaman error atau data tidak valid
          if (typeof data === "string" && data.includes("<html")) {
               throw new Error("Received HTML instead of JSON from Sanity.");
          }

          console.log(`Sanity API Response for ${type}:`, data);
          return data;
     } catch (error: unknown) {
          // Ganti any dengan unknown
          // Pengecekan tipe sebelum mengakses properti error
          if (error instanceof Error) {
               console.error(`Error fetching ${type} data:`, error);
               throw new Error(`Failed to fetch ${type} data: ${error.message}`);
          } else {
               // Penanganan jika error bukan instance dari Error
               console.error("An unknown error occurred:", error);
               throw new Error("An unknown error occurred during data fetching.");
          }
     }
}
