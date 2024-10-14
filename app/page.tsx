import Image from "next/image";
import Banner from "./components/Banner";
import { Programming, Technology } from "./lib/interface";
import Link from "next/link";
import { getRecentPosts } from "./lib/fetchmain";
import Darkmode from "./components/Darkmode";
import LoadingAnimation from "./components/SlideUp"; // Import your loading animation component

export const revalidate = 60;

export default async function Home() {
     const programmingData = (await getRecentPosts("programming")) as unknown as Programming[];
     const technologyData = (await getRecentPosts("technology")) as unknown as Technology[];

     return (
          <div className={`bg-[#F7F9FC] dark:bg-neutral-900`}>
               <div>
                    <Banner />
               </div>
               <div>
                    <h1 className={`font-extrabold capitalize text-2xl md:text-3xl text-center text-black dark:text-[#F7F9FC] my-12`}>Postingan Pemrograman Terbaru</h1>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
                    {programmingData.map((programming, index) => (
                         <LoadingAnimation key={programming._id} delay={index * 100}>
                              {" "}
                              {/* Delay bertambah per item */}
                              <div className="dark:bg-neutral-900 bg-gray-100 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                                   <article>
                                        <Link href={`/programming/${programming.slug.current}`}>
                                             <div>
                                                  {programming.mainImage && <Image src={programming.mainImage} alt={programming.title} width={500} height={250} className="object-cover w-full h-48 rounded-lg" loading="lazy" />}
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
                         </LoadingAnimation>
                    ))}
               </div>
               <div>
                    <h1 className={`font-extrabold capitalize text-2xl md:text-3xl text-center text-black dark:text-[#F7F9FC] my-14`}>Postingan Teknologi Terbaru</h1>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-4">
                    {technologyData.map((technology, index) => (
                         <LoadingAnimation key={technology._id} delay={index * 100}>
                              {" "}
                              {/* Delay bertambah per item */}
                              <div className="dark:bg-neutral-900 bg-gray-100 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                                   <article>
                                        <Link href={`/technology/${technology.slug.current}`}>
                                             <div>
                                                  {technology.mainImage && <Image src={technology.mainImage} alt={technology.title} width={500} height={250} className="object-cover w-full h-48 rounded-lg" loading="lazy" />}
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
                         </LoadingAnimation>
                    ))}
               </div>
               <Darkmode />
          </div>
     );
}
