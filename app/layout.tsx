import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Fira_Code } from "next/font/google"
import { Poppins } from "next/font/google"
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const firacode4 = Fira_Code({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
     title: "CMS My Blog",
     description: "Blog CMS Descript",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body className={firacode4.className}>
                    <div className="fixed z-20 w-full top-0">
                         <Navbar></Navbar>
                    </div>
                    {children}
                    <Footer></Footer>
               </body>
          </html>
     );
}
