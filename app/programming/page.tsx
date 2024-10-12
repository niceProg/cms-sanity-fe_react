import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getData } from "../lib/fetchcategory"; // Import getData dari fetchapi.ts
import { Programming } from "../lib/interface";
import Darkmode from "@/app/components/Darkmode";
import LoadingAnimation from "../components/SlideUp";

export const revalidate = 60;

export default async function ProgrammingPage() {
     const data = await getData<Programming>("programming");
     return (
          <div className="dark:bg-neutral-900 bg-[#F7F9FC]">
               <div className="w-full bg-code_banner bg-center h-96 bg-no-repeat bg-cover">
                    <div className="dark:bg-neutral-900 w-full h-96 bg-[#F7F9FC] opacity-70 z-[-1] dark:text-[#F7F9FC] text-gray-700">
                         <div
                              className="h-96 max-w-screen-2xl mx-auto flex flex-col
                    justify-center items-center text-4xl md:text-5xl font-extrabold text-center"
                         >
                              Programming
                         </div>
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
                    {/* Wrap programming content with loading animation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
                         {data.map((programming) => (
                              <div key={programming._id} className="dark:bg-neutral-900 bg-gray-100 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                                   <article>
                                        <Link href={`/programming/${programming.slug.current}`}>
                                             <div>
                                                  {programming.mainImage && <Image src={programming.mainImage} alt={programming.title} width={750} height={300} className="object-cover w-full h-48 rounded-lg" />}
                                                  <h2 className="font-semibold dark:text-white text-gray-800 mt-4 hover:text-blue-500 transition duration-300 ease-in-out">
                                                       <span className="text-sm text-gray-500 dark:text-gray-400">
                                                            {new Date(programming._createdAt).toLocaleDateString("id-ID", {
                                                                 day: "2-digit",
                                                                 month: "long",
                                                                 year: "numeric",
                                                                 timeZone: "Asia/Jakarta",
                                                            })}
                                                       </span>
                                                       <br />
                                                       {programming.title}
                                                  </h2>
                                             </div>
                                             <p className="dark:text-gray-300 text-gray-700 mt-2 text-sm line-clamp-3">{programming.overview}</p>
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
