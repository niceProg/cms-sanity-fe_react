import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

// Ganti any dengan tipe SanityImageSource
export function urlFor(source: SanityImageSource) {
     return builder.image(source);
}
