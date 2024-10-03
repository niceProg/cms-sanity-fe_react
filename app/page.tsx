import Image from "next/image";
import Banner from "./components/Banner";
import { Programming, Technology } from "./lib/interface";
import Link from "next/link";
import { getRecentPosts } from "./lib/fetchmain";
import Darkmode from "./components/Darkmode";

export const revalidate = 60;

export default async function Home() {
     const programmingData = (await getRecentPosts("programming")) as unknown as Programming[];
     const technologyData = (await getRecentPosts("technology")) as unknown as Technology[];

     return (
          <div className={`bg-[#F7F9FC] dark:bg-neutral-900`}>
               <div>
                    <Banner></Banner>
               </div>
               <div>
                    <h1
                         className={`font-extrabold capitalize text-2xl md:text-3xl
                    text-center text-black dark:text-[#F7F9FC] my-12`}
                    >
                         Postingan Pemrograman Terbaru
                    </h1>
               </div>
               <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
                    {programmingData.map((programming) => (
                         <div
                              key={programming._id}
                              className="dark:bg-neutral-900 bg-gray-100 p-3 rounded-xl shadow-xl
                    hover:scale-105 duration-300 dark:shadow-800"
                         >
                              <article>
                                   <Link href={`/programming/${programming.slug.current}`}>
                                        <div>
                                             <div>{programming.mainImage && <Image src={programming.mainImage} alt={programming.title} width={750} height={300} className="object-cover rounded-lg"></Image>}</div>
                                             <h2 className={`dark:text-[#F7F9FC] font-bold text-lg hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>
                                                  <span className="dark:text-gray-400 text-base font-bold text-gray-500">
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
                                        <p className={`dark:text-[#F7F9FC] line-clamp-3 mt-2 text-sm`}>{programming.overview}</p>
                                   </Link>
                              </article>
                         </div>
                    ))}
               </div>
               <div>
                    <h1
                         className={`font-extrabold capitalize text-2xl md:text-3xl
                    text-center text-black dark:text-[#F7F9FC] my-14`}
                    >
                         Postingan Teknologi Terbaru
                    </h1>
               </div>
               <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
                    {technologyData.map((technology) => (
                         <div
                              key={technology._id}
                              className="dark:bg-neutral-900 dark:shadow-800 bg-gray-100 p-3 rounded-lg shadow-xl
                         hover:scale-105 duration-300"
                         >
                              <article>
                                   <Link href={`/technology/${technology.slug.current}`}>
                                        <div>
                                             <div>{technology.mainImage && <Image src={technology.mainImage} alt={technology.title} width={750} height={300} className="object-cover rounded-lg"></Image>}</div>
                                             <h2 className={`font-bold text-lg dark:text-[#F7F9FC] hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>
                                                  <span className="text-base font-bold text-gray-500 dark:text-gray-400">
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
                                        <p className={`dark:text-[#F7F9FC] line-clamp-3 mt-2 text-sm`}>{technology.overview}</p>
                                   </Link>
                              </article>
                         </div>
                    ))}
               </div>
               <Darkmode></Darkmode>
          </div>
     );
}
