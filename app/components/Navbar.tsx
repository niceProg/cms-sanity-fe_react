"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LNavbar } from "./Logo";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

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
     const [isScrolled, setIsScrolled] = useState(false);

     // useEffect untuk menangani efek scroll
     useEffect(() => {
          const handleScroll = () => {
               if (window.scrollY > 0) {
                    setIsScrolled(true); // Halaman di-scroll
               } else {
                    setIsScrolled(false); // Halaman berada di posisi awal
               }
          };

          window.addEventListener("scroll", handleScroll);

          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     return (
          <div>
               <div className={`shadow w-full top-0 left-0 z-50 fixed transition-all duration-300 ease-in-out ${isScrolled ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm" : "bg-[#F7F9FC] dark:bg-neutral-900"}`}>
                    <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                         {/* Logo */}
                         <div>
                              <Link href="/" className={`cursor-pointer`}>
                                   <span className="font-bold tracking-widest text-gray-700 dark:text-[#F7F9FC] hover:text-blue-500 text-2xl uppercase">
                                        Yumna
                                        <LNavbar></LNavbar>
                                   </span>
                              </Link>
                         </div>
                         {/* Icon */}
                         <div onClick={() => setIsOpen(!isOpen)} className="absolute right-8 top-6 cursor-pointer w-7 h-7 z-50 lg:hidden dark:text-[#F7F9FC]">
                              {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                         </div>
                         {/* Menu Links */}
                         <div
                              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static dark:text-[#F7F9FC]
                                   md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 pt-8 transition-all duration-300
                                   ease-in ${isOpen ? "top-18 bg-[#F7F9FC] dark:bg-neutral-900" : "top-[-490px]"}
                                   `}
                         >
                              {menuItems.map((item, index) => {
                                   return (
                                        <Link
                                             href={item.route || ""}
                                             key={`link-${index}`}
                                             className={`md:ml-8 md:my-0 my-7 font-bold tracking-wider text-xl uppercase 
                                                  hover:text-blue-500 transition ease-in-out delay-150
                                                  hover:-translate-y-1 hover:scale-300 duration-100 flex items-center cursor-pointer`}
                                        >
                                             {item.title}
                                        </Link>
                                   );
                              })}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
