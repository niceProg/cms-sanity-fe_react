import { client } from "../lib/sanity";

type PostType = "programming" | "technology";

// Fungsi fetch untuk data Sanity
export async function getRecentPosts(postType: PostType) {
     // Dynamic query based on the type provided
     const query = `*[_type == "${postType}"] | order(_createdAt desc) [0..3] {
         title,
         overview,
         slug,
         _id,
         _createdAt,
         "mainImage": mainImage.asset->url,
         content
     }`;

     try {
          // Fetch data based on the dynamic query
          const data = await client.fetch(query);

          // Handle case where Sanity API returns an error page or invalid data
          if (typeof data === "string" && data.includes("<html")) {
               throw new Error("Received HTML instead of JSON from Sanity.");
          }

          console.log(`Sanity API Response for ${postType}:`, data);
          return data;
     } catch (error: any) {
          console.error(`Error fetching ${postType} data:`, error);
          throw new Error(`Failed to fetch ${postType} data: ${error.message}`);
     }
}
