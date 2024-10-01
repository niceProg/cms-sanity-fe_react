import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { getData } from "../lib/fetchcategory"; // Import getData dari fetchapi.ts
import { Technology } from "../lib/interface"; // Interface Technology

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const poppins2 = Poppins({ subsets: ["latin"], weight: ["600"] });

export const revalidate = 0; // Untuk ISR (Incremental Static Regeneration)

export default async function TechnologyPage() {
     const data = await getData<Technology>("technology");

     return (
          <div className="bg-[#F7F9FC]">
               <div className="w-full bg-datacenter_banner bg-center h-96 bg-no-repeat bg-cover">
                    <div className="w-full h-96 bg-[#F7F9FC] opacity-70 z-[-1] text-gray-700">
                         <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center text-4xl md:text-5xl font-extrabold text-center">Teknologi</div>
                    </div>
               </div>

               {/* POST BLOG */}
               <div>
                    <h1 className="font-extrabold uppercase text-2xl md:text-3xl lg:text-3xl text-center text-blue-500 my-12">semua postingan</h1>
               </div>

               {/* CONTENT */}
               <div className="grid bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
                    {data.map((technology) => (
                         <div
                              key={technology._id}
                              className="bg-gray-100 p-3 rounded-lg shadow-xl
                         hover:scale-105 duration-300"
                         >
                              <article>
                                   <Link href={`/technology/${technology.slug.current}`}>
                                        <div>
                                             <div>{technology.mainImage && <Image src={technology.mainImage} alt={technology.title} width={750} height={300} className="object-cover rounded-lg border border-gray-200"></Image>}</div>
                                             <h2 className={`font-bold text-lg hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>
                                                  <span className="text-base font-bold">
                                                       {new Date(technology._createdAt).toLocaleDateString("id-ID", {
                                                            day: "2-digit",
                                                            month: "long", // Nama bulan (contoh: Januari, Februari, dll.)
                                                            year: "numeric",
                                                            timeZone: "Asia/Jakarta", // Mengatur zona waktu ke WIB
                                                       })}
                                                  </span>
                                                  <br />
                                                  {technology.title}
                                             </h2>
                                        </div>
                                        <p className={`line-clamp-3 mt-2 text-sm`}>{technology.overview}</p>
                                   </Link>
                              </article>
                         </div>
                    ))}
               </div>
          </div>
     );
}
