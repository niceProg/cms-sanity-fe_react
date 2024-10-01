import { createClient } from "next-sanity";

export const client = createClient({
     projectId: "orvrrlzg",
     dataset: "production",
     useCdn: false,

     apiVersion: "2022-03-07",
});
