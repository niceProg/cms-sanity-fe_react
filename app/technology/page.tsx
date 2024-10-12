import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getData } from "../lib/fetchcategory"; // Import getData dari fetchapi.ts
import { Technology } from "../lib/interface"; // Interface Technology
import Darkmode from "@/app/components/Darkmode";
import LoadingAnimation from "../components/SlideUp";

export const revalidate = 60; // Untuk ISR (Incremental Static Regeneration)

export default async function TechnologyPage() {
     const data = await getData<Technology>("technology");

     return (
          <div className="dark:bg-neutral-900 bg-[#F7F9FC]">
               {/* Banner */}
               <div className="w-full bg-datacenter_banner bg-center h-96 bg-no-repeat bg-cover">
                    <div className="dark:bg-neutral-900 dark:text-[#F7F9FC] w-full h-96 bg-[#F7F9FC] opacity-70 z-[-1] text-gray-700">
                         <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center text-4xl md:text-5xl font-extrabold text-center">Teknologi</div>
                    </div>
               </div>

               {/* POST BLOG */}
               <div>
                    <h1
                         className="font-extrabold uppercase text-2xl md:text-3xl lg:text-3xl
                    text-center text-blue-500 my-12"
                    >
                         semua postingan
                    </h1>
               </div>

               {/* CONTENT */}
               <LoadingAnimation>
                    {" "}
                    {/* Wrap technology content with loading animation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
                         {data.map((technology) => (
                              <div key={technology._id} className="dark:bg-neutral-900 bg-gray-100 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                                   <article>
                                        <Link href={`/technology/${technology.slug.current}`}>
                                             <div>
                                                  {technology.mainImage && <Image src={technology.mainImage} alt={technology.title} width={750} height={300} className="object-cover w-full h-48 rounded-lg" />}
                                                  <h2 className="font-semibold dark:text-white text-gray-800 mt-4 hover:text-blue-500 transition duration-300 ease-in-out">
                                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                                            {new Date(technology._createdAt).toLocaleDateString("id-ID", {
                                                                 day: "2-digit",
                                                                 month: "long",
                                                                 year: "numeric",
                                                                 timeZone: "Asia/Jakarta",
                                                            })}
                                                       </span>
                                                       <br />
                                                       {technology.title}
                                                  </h2>
                                             </div>
                                             <p className="dark:text-gray-300 text-gray-700 mt-2 text-sm line-clamp-3">{technology.overview}</p>
                                        </Link>
                                   </article>
                              </div>
                         ))}
                    </div>
               </LoadingAnimation>
               <Darkmode></Darkmode>
          </div>
     );
}
