"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { LBanner, LNavbar } from "./Logo";

const Banner = () => {
     const [text] = useTypewriter({
          words: ["Selamat Datang di Blogger Saya", "Eksplorasi Tiada Henti di Dunia Teknologi", "Menyajikan Wawasan Terdepan tentang Pengkodean"],
          loop: true,
          typeSpeed: 30,
          deleteSpeed: 10,
          delaySpeed: 1000,
     });
     return (
          <div className="w-full bg-write_banner bg-center h-96 bg-no-repeat bg-cover">
               <div className="w-full h-96 bg-[#F7F9FC] dark:bg-neutral-900 dark:text-[#F7F9FC] mt-7 opacity-70 z-[-1] text-gray-700">
                    <div
                         className="h-80 max-w-screen-2xl mx-auto flex flex-col
                    justify-center items-center text-4xl md:text-5xl font-extrabold text-center"
                    >
                         <motion.div
                              className="h-80 max-w-screen-2xl mx-auto flex flex-col justify-center
                         items-center"
                              initial={{ x: -1000, opacity: 0, scale: 0.5 }}
                              animate={{ x: [0, 900, 0] }}
                              transition={{
                                   duration: 2,
                                   delay: 0.2,
                                   ease: [0, 0.71, 0.2, 1.01],
                              }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                         >
                              <h1
                                   className={`text-3xl md:text-5xl font-semibold
                          mt-16 uppercase tracking-widest`}
                              >
                                   yumna<LBanner></LBanner>
                              </h1>
                              <p className="text-xl md:text-3xl font-semibold -mt-4">
                                   {text}
                                   <Cursor cursorBlinking cursorStyle="|" cursorColor="#4285f4"></Cursor>
                              </p>
                         </motion.div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;
