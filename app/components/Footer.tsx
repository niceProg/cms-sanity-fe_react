"use client";
import React from "react";
import Link from "next/link";
import { LFooter } from "./Logo";
import Copyright from "./Copyright";
import { Figtree } from "next/font/google";
import "../styles/footer.scss";

const figtree = Figtree({ subsets: ["latin"], weight: ["600"] });

const Footer = () => {
     return (
          <div className="footer bg-[#F7F9FC] dark:bg-neutral-900">
               <div className="pt-16 px4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
                    <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4 font-semibold">
                         <div className="sm:col-span-2">
                              <Link href="/" aria-label="Go home" title="tegaldev" className="">
                                   <LFooter></LFooter>
                              </Link>
                              <div className="mt-6 lg:max-w-sm">
                                   <p className="dark:text-[#F7F9FC] text-sm text-gray-800">Dibangun dengan penuh semangat dan kreativitas.</p>
                                   <p className="dark:text-[#F7F9FC] text-sm mt-4 text-gray-800">Mari kita ciptakan kode masa depan bersama!</p>
                              </div>
                         </div>

                         <div className="space-y-2 text-sm">
                              <p className={`dark:text-[#F7F9FC] text-base font-bold tracking-wide text-gray-500 ${figtree.className}`}>Kontak</p>
                              <div className="dark:text-[#F7F9FC] flex text-gray-800">
                                   <p>Whatsapp:</p>
                                   <Link
                                        href="https://wa.me/+6285600670534"
                                        aria-label="My phone number"
                                        title="My phone number"
                                        className="transition-colors duration-300 text-secondary
                                   hover:text-blue-500"
                                   >
                                        +62 856 0067 0534
                                   </Link>
                                   <br />
                              </div>
                              <div className="dark:text-[#F7F9FC] flex text-gray-800">
                                   <p>Email:</p>
                                   <Link
                                        href="mailto:wisnu.yudhanta@gmail.com"
                                        aria-label="My email"
                                        title="My email"
                                        className="transition-colors duration-300 text-secondary 
                                   hover:text-blue-500"
                                   >
                                        wisnu.yudhanta@gmail.com
                                   </Link>
                                   <br />
                              </div>
                         </div>
                         <p>
                              <span className={`text-blue-500 ${figtree.className}`}>Developer |</span>
                              <span className={`text-blue-500 ${figtree.className}`}> Community |</span>
                              <span className={`text-blue-500 ${figtree.className}`}> Blogger</span>
                         </p>
                    </div>
                    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t-2 lg:flex-row">
                         <div className="text-sm  text-gray-300 ">
                              <Copyright blog="Yumna - TegalDev"></Copyright>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
