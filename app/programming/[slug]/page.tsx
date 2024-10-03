// ProgrammingSlugPage.tsx
import { Programming } from "@/app/lib/interface";
import { getDataBySlug } from "@/app/lib/fetchblog";
import { getRecentPosts } from "@/app/lib/fetchmain";
import { PortableText, PortableTextComponentProps } from "next-sanity";
import { urlFor } from "@/app/lib/imageurl";
import Image from "next/image";
import SyntaxHighlighterComponent from "./syntaxhighlight"; // Impor komponen baru
import React from "react";
import Link from "next/link";
import "@/app/styles/blog_content.scss";
import Darkmode from "@/app/components/Darkmode";

export const revalidate = 60;

export default async function ProgrammingSlugPage({ params }: { params: { slug: string } }) {
     const data = await getDataBySlug<Programming>("programming", params.slug);
     const programmingData = (await getRecentPosts("programming")) as unknown as Programming[];

     const PortableTextComponent = {
          types: {
               image: ({ value }: { value: any }) => <Image src={urlFor(value).url()} alt="Image" width={800} height={800} className="" />,
          },
          marks: {
               code: ({ children }: { children: React.ReactNode }) => {
                    const codeText = Array.isArray(children)
                         ? children
                                .map((child) => {
                                     return typeof child === "object" && child !== null ? child.text?.replace(/^(\s+)/gm, "\t") || "\n" : String(child);
                                })
                                .join("")
                         : String(children);

                    return <SyntaxHighlighterComponent codeText={codeText} />;
               },
               strong: ({ children }: { children: React.ReactNode }) => <strong className="font-bold !text-black dark:!text-[#F7F9FC]">{children}</strong>,
               italic: ({ children }: { children: React.ReactNode }) => <em className="italic dark:text-[#F7F9FC]">{children}</em>,
               underline: ({ children }: { children: React.ReactNode }) => <span className="underline dark:text-[#F7F9FC]">{children}</span>,
               strike: ({ children }: { children: React.ReactNode }) => <span className="line-through dark:text-[#F7F9FC]">{children}</span>,
          },
          block: {
               normal: ({ children }: PortableTextComponentProps<any>) => <div className="mb-4 leading-relaxed dark:text-[#F7F9FC]">{children}</div>,
               h1: ({ children }: PortableTextComponentProps<any>) => <h1 className="text-4xl font-bold mb-4 dark:text-[#F7F9FC]">{children}</h1>,
               h2: ({ children }: PortableTextComponentProps<any>) => <h2 className="text-3xl font-semibold mb-4 dark:text-[#F7F9FC]">{children}</h2>,
               h3: ({ children }: PortableTextComponentProps<any>) => <h3 className="text-2xl font-medium mb-4 dark:text-[#F7F9FC]">{children}</h3>,
               h4: ({ children }: PortableTextComponentProps<any>) => <h4 className="text-xl font-medium mb-4 dark:text-[#F7F9FC]">{children}</h4>,
               h5: ({ children }: PortableTextComponentProps<any>) => <h5 className="text-lg font-medium mb-3 dark:text-[#F7F9FC]">{children}</h5>,
               h6: ({ children }: PortableTextComponentProps<any>) => <h6 className="text-base font-normal mb-4 dark:text-[#F7F9FC]">{children}</h6>,
          },
          list: {
               bullet: ({ children }: PortableTextComponentProps<any>) => <ul className="list-disc ml-5 mb-4 dark:text-[#F7F9FC]">{children}</ul>,
               number: ({ children }: PortableTextComponentProps<any>) => <ol className="list-decimal ml-5 mb-4 dark:text-[#F7F9FC]">{children}</ol>,
          },
     };

     const createdAt = data?._createdAt
          ? new Date(data._createdAt).toLocaleDateString("id-ID", {
                 day: "2-digit",
                 month: "long", // Menggunakan nama bulan (contoh: Januari, Februari, dll.)
                 year: "numeric",
                 timeZone: "Asia/Jakarta", // Mengatur zona waktu WIB
            })
          : "Unknown Date";

     return (
          <div className="dark:bg-neutral-900 bg-[#F7F9FC] grid grid-cols-1 lg:grid-cols-12 gap-12">
               {/* Blog Content */}
               <div className="my-32 lg:col-span-8 col-span-1 mx-auto">
                    <div className="mx-auto text-center">
                         <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl px-4 pt-4 dark:text-[#F7F9FC]">{data?.title || "No Title Available"}</h1>
                         <p className="my-2 font-bold dark:text-[#F7F9FC]">{createdAt}</p>

                         {data?.mainImage && <Image src={data.mainImage} alt="Image" width={750} height={300} className="object-cover rounded-lg border border-gray-500 mx-auto main-image" />}
                    </div>
                    <div className="px-0 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 leading-8 text-[#333] text-content">
                         {data?.content && <PortableText value={data.content} components={PortableTextComponent} />}
                    </div>
               </div>

               {/* Second Content */}
               <div className="lg:col-span-4 col-span-1 my-24">
                    <div className="lg:sticky relative top-8 my-14">
                         <div className="dark:bg-neutral-700 bg-gray-100 shadow-xl dark:shadow-neutral-800 rounded-l-2xl pb-12 p-5">
                              <h3 className="dark:text-[#F7F9FC] text-xl mb-8 font-semibold border-b pb-4">Postingan Terkait</h3>

                              {programmingData.map((programming) => (
                                   <div key={programming._id}>
                                        <Link href={`/programming/${programming.slug.current}`} className="flex items-center w-full mb-4">
                                             <div className="w-20 flex-none">{programming.mainImage && <Image src={programming.mainImage} alt="Image" width={100} height={100} className="align-middle rounded-2xl" />}</div>
                                             <div className="flex-grow ml-4">
                                                  <p className="dark:text-neutral-400 text-gray-500 font-xs">
                                                       <span>
                                                            {new Date(programming._createdAt).toLocaleDateString("id-ID", {
                                                                 day: "2-digit",
                                                                 month: "long", // Nama bulan (contoh: Januari, Februari, dll.)
                                                                 year: "numeric",
                                                                 timeZone: "Asia/Jakarta", // Mengatur zona waktu ke WIB
                                                            })}
                                                       </span>
                                                  </p>
                                                  <p className="dark:text-[#F7F9FC] text-md hover:text-blue-500">{programming.title}</p>
                                             </div>
                                        </Link>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
               <Darkmode></Darkmode>
          </div>
     );
}
