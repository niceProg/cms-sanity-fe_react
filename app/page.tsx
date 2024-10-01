import Image from "next/image";
import Banner from "./components/Banner";
import { Programming, Technology } from "./lib/interface";
import Link from "next/link";
import { getRecentPosts } from "./lib/fetchmain";

export const revalidate = 0;

export default async function Home() {
     const programmingData = (await getRecentPosts("programming")) as unknown as Programming[];
     const technologyData = (await getRecentPosts("technology")) as unknown as Technology[];

     return (
          <div className="bg-[#F7F9FC]">
               <div>
                    <Banner></Banner>
               </div>
               <div>
                    <h1
                         className={`font-extrabold capitalize text-3xl md:text-3xl lg:text-5xl
                    text-center text-black my-12`}
                    >
                         Postingan Pemrograman Terbaru
                    </h1>
               </div>
               <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
                    {programmingData.map((programming) => (
                         <div
                              key={programming._id}
                              className="bg-gray-100 p-3 rounded-lg shadow-xl
                    hover:scale-105 duration-300"
                         >
                              <article>
                                   <Link href={`/programming/${programming.slug.current}`}>
                                        <div>
                                             <div>{programming.mainImage && <Image src={programming.mainImage} alt={programming.title} width={750} height={300} className="object-cover rounded-lg border border-gray-200"></Image>}</div>
                                             <h2 className={`font-bold text-lg hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>
                                                  <span className="text-base font-bold text-gray-500">
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
               <div>
                    <h1
                         className={`font-extrabold capitalize text-3xl md:text-3xl lg:text-5xl
                    text-center text-black my-14`}
                    >
                         Postingan Teknologi Terbaru
                    </h1>
               </div>
               <div className="grid grid-2 bg-transparent lg:grid-cols-4 gap-8 px-8 py-3">
                    {technologyData.map((technology) => (
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
                                                  <span className="text-base font-bold text-gray-500">
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
