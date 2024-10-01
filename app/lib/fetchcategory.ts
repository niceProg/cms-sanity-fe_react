import { client } from "../lib/sanity";

// Fungsi fetch untuk data Sanity
export async function getData<T>(type: string): Promise<T[]> {
     // Dynamic query based on the type provided
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
          // Fetch data based on the dynamic query
          const data = await client.fetch(query);

          // Handle case where Sanity API returns an error page or invalid data
          if (typeof data === "string" && data.includes("<html")) {
               throw new Error("Received HTML instead of JSON from Sanity.");
          }

          console.log(`Sanity API Response for ${type}:`, data);
          return data;
     } catch (error: any) {
          console.error(`Error fetching ${type} data:`, error);
          throw new Error(`Failed to fetch ${type} data: ${error.message}`);
     }
}
