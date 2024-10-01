import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { getData } from "../lib/fetchcategory"; // Import getData dari fetchapi.ts
import { Programming } from "../lib/interface";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const poppins2 = Poppins({ subsets: ["latin"], weight: ["600"] });

export const revalidate = 0;

export default async function ProgrammingPage() {
     const data = await getData<Programming>("programming");
     return (
          <div>
               <div className="w-full bg-code_banner bg-center h-96 bg-no-repeat bg-cover">
                    <div className="w-full h-96 bg-black opacity-70 z-[-1] text-gray-700">
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
               <div className="grid bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
                    {data.map((programming) => (
                         <div
                              key={programming._id}
                              className="bg-gray-100 p-3 rounded-lg shadow-xl
                         hover:scale-105 duration-300"
                         >
                              <article>
                                   <Link href={`/programming/${programming.slug.current}`}>
                                        <div>
                                             <div>{programming.mainImage && <Image src={programming.mainImage} alt={programming.title} width={750} height={300} className="object-cover rounded-lg border border-gray-200"></Image>}</div>
                                             <h2 className={`font-bold text-2xl hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>{programming.title}</h2>
                                        </div>
                                        <p className={`line-clamp-3 mt-2 ${poppins.className}`}>{programming.overview}</p>
                                   </Link>
                                   <div className={`${poppins.className}`}>
                                        Date Publised
                                        <span className={`${poppins2.className}`}>: {new Date(programming._createdAt).toISOString().split("T")[0]}</span>
                                   </div>
                              </article>
                         </div>
                    ))}
               </div>
          </div>
     );
}
