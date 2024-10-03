import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getData } from "../lib/fetchcategory"; // Import getData dari fetchapi.ts
import { Programming } from "../lib/interface";
import Darkmode from "@/app/components/Darkmode";

export const revalidate = 0;

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
               <div className="grid bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
                    {data.map((programming) => (
                         <div
                              key={programming._id}
                              className="dark:bg-neutral-900 dark:shadow-800 bg-gray-100 p-3 rounded-lg shadow-xl
                         hover:scale-105 duration-300"
                         >
                              <article>
                                   <Link href={`/programming/${programming.slug.current}`}>
                                        <div>
                                             <div>{programming.mainImage && <Image src={programming.mainImage} alt={programming.title} width={750} height={300} className="object-cover rounded-lg"></Image>}</div>
                                             <h2 className={`dark:text-[#F7F9FC] font-bold text-lg hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>
                                                  <span className="dark:text-[#F7F9FC] text-base font-bold">
                                                       {new Date(programming._createdAt).toLocaleDateString("id-ID", {
                                                            day: "2-digit",
                                                            month: "long", // Nama bulan (contoh: Januari, Februari, dll.)
                                                            year: "numeric",
                                                            timeZone: "Asia/Jakarta", // Mengatur zona waktu ke WIB
                                                       })}
                                                  </span>
                                                  <br />
                                                  {programming.title}
                                             </h2>
                                        </div>
                                        <p className={`line-clamp-3 mt-2 text-sm`}>{programming.overview}</p>
                                   </Link>
                              </article>
                         </div>
                    ))}
               </div>
               <Darkmode></Darkmode>
          </div>
     );
}
