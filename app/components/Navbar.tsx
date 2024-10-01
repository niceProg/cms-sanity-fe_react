"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LNavbar } from "./Logo";
import { Fira_Code } from "next/font/google";
import { Poppins } from "next/font/google";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const firacode6 = Fira_Code({ subsets: ["latin"], weight: ["600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

type MenuItem = {
     title: string;
     route: string;
     children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
     {
          title: "Beranda",
          route: "/",
     },
     {
          title: "Teknologi",
          route: "/technology",
     },
     {
          title: "Programming",
          route: "/programming",
     },
];

const Navbar: React.FC = () => {
     const [isOpen, setIsOpen] = useState(false);

     return (
          <div>
               <div>
                    <div className="shadow w-full top-0 left-0 z-50">
                         <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                              {/* Logo */}
                              <div>
                                   <Link href="/" className={`cursor-pointer ${firacode6.className}`}>
                                        <span className="font-bold text-blue-500 text-2xl uppercase">
                                             Yumna
                                             <LNavbar></LNavbar>
                                        </span>
                                   </Link>
                              </div>
                              {/* Icon */}
                              <div onClick={() => setIsOpen(!isOpen)} className="absolute right-8 top-6 cursor-pointer w-7 h-7 z-50 lg:hidden">
                                   {isOpen ? <XMarkIcon></XMarkIcon> : <Bars3BottomRightIcon></Bars3BottomRightIcon>}
                              </div>
                              <div
                                   className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white
                              md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 pt-8 transition-all duration-500
                              ease-in ${isOpen ? "top-18" : "top-[-490px]"}
                              `}
                              >
                                   {menuItems.map((item, index) => {
                                        return (
                                             <Link
                                                  href={item.route || ""}
                                                  key={"link-${index}"}
                                                  className={`md:ml-8 md:my-0 my-7 font-medium text-xl uppercase 
                                                       hover:text-blue-500 transition ease-in-out delay-150
                                                       hover:-translate-y-1 hover:scale-300 duration-100 flex items-center cursor-pointer ${poppins.className}`}
                                             >
                                                  {item.title}
                                             </Link>
                                        );
                                   })}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
