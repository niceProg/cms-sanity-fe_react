"use client";
import React from "react";
import Link from "next/link";
import { LFooter } from "./Logo";
import Copyright from "./Copyright";
import { Fira_Code } from "next/font/google";

const firacode6 = Fira_Code({ subsets: ["latin"], weight: ["600"] });

const Footer = () => {
     return (
          <div>
               <div className="pt-16 px4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
                    <div className="grid gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-4 font-semibold">
                         <div className="sm:col-span-2">
                              <Link href="/" aria-label="Go home" title="tegaldev" className="">
                                   <LFooter></LFooter>
                              </Link>
                              <div className="mt-6 lg:max-w-sm">
                                   <p className="text-sm text-gray-800">Dibangun dengan penuh semangat dan kreativitas.</p>
                                   <p className="text-sm mt-4 text-gray-800">Mari kita ciptakan kode masa depan bersama!</p>
                              </div>
                         </div>

                         <div className="space-y-2 text-sm">
                              <p className={`text-base font-bold tracking-wide text-gray-500 ${firacode6.className}`}>Kontak</p>
                              <div className="flex text-gray-800">
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
                              <div className="flex text-gray-800">
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
                              <span className={`text-blue-500 ${firacode6.className}`}>Developer |</span>
                              <span className={`text-blue-500 ${firacode6.className}`}> Community |</span>
                              <span className={`text-blue-500 ${firacode6.className}`}> Blogger</span>
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
