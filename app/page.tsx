import Image from "next/image";
import Banner from "./components/Banner";
import { Programming, Technology } from "./lib/interface";
import Link from "next/link";
import { getRecentPosts } from "./lib/fetchmain";
import { Fira_Code, Poppins } from "next/font/google";

const firacode6 = Fira_Code({ subsets: ["latin"], weight: ["600"] });
// const firacode4 = Fira_Code({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const poppins2 = Poppins({ subsets: ["latin"], weight: ["600"] });

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
                    text-center text-black ${firacode6.className} my-12`}
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
                                             <h2 className={`font-bold text-2xl hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>{programming.title}</h2>
                                        </div>
                                        <p className={`line-clamp-3 mt-2 ${poppins.className}`}>{programming.overview}</p>
                                   </Link>
                                   <div className={`${poppins.className}`}>
                                        Tanggal Rilis
                                        <span className={`${poppins2.className}`}>: {new Date(programming._createdAt).toISOString().split("T")[0]}</span>
                                   </div>
                              </article>
                         </div>
                    ))}
               </div>
               <div>
                    <h1
                         className={`font-extrabold capitalize text-3xl md:text-3xl lg:text-5xl
                    text-center text-black ${firacode6.className} my-14`}
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
                                             <div>{technology.mainImage && <Image src={technology.mainImage} alt={technology.title} width={750} height={300} className="object-cover rounded-xl border border-gray-200"></Image>}</div>
                                             <h2 className={`font-bold text-2xl hover:text-blue-500 transition duration-300 ease-in-out mt-6 capitalize`}>{technology.title}</h2>
                                        </div>
                                        <p className={`line-clamp-3 mt-2 ${poppins.className}`}>{technology.overview}</p>
                                   </Link>
                                   <div className={`${poppins.className}`}>
                                        Tanggal Terbit
                                        <span className={`${poppins2.className}`}>
                                             :{" "}
                                             {new Date(technology._createdAt)
                                                  .toLocaleDateString("id-ID", {
                                                       day: "2-digit",
                                                       month: "2-digit", // Angka bulan dengan dua digit (contoh: 01, 02, dst.)
                                                       year: "numeric",
                                                       timeZone: "Asia/Jakarta", // Zona waktu WIB
                                                  })
                                                  .replace(/\//g, "-")}
                                             ,{" "}
                                             {new Date(technology._createdAt).toLocaleTimeString("id-ID", {
                                                  hour: "2-digit",
                                                  minute: "2-digit",
                                                  timeZone: "Asia/Jakarta", // Zona waktu WIB
                                                  hour12: false, // Format 24 jam
                                             })}
                                        </span>
                                   </div>
                              </article>
                         </div>
                    ))}
               </div>
          </div>
     );
}
