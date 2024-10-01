import { client } from "./sanity"; // Pastikan client diimport

// Fungsi fetch data dengan slug untuk type tertentu
export async function getDataBySlug<T>(type: string, slug: string): Promise<T | null> {
     // Query Sanity untuk item berdasarkan slug
     const query = `*[_type == "${type}" && slug.current == "${slug}"]{
        title,
        content,
        _createdAt,
        "mainImage": mainImage.asset->url
    }[0]`;

     try {
          // Fetch data menggunakan client dari Sanity
          const data = await client.fetch(query);

          // Penanganan jika API mengembalikan HTML (seharusnya JSON)
          if (typeof data === "string" && data.includes("<html")) {
               throw new Error("Received HTML instead of JSON from Sanity.");
          }

          console.log(`Sanity API Response for ${type} with slug ${slug}:`, data);
          return data || null; // Jika data tidak ditemukan, kembalikan null
     } catch (error: any) {
          console.error(`Error fetching ${type} data with slug ${slug}:`, error);
          throw new Error(`Failed to fetch ${type} data with slug ${slug}: ${error.message}`);
     }
}
