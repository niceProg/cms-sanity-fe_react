import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
     icons: {
          icon: "/assets/logo/Tegal.dev-AA-ic.png", // Ubah path jika favicon berbeda
     },
     title: "Yumna Dev Blog",
     description: "Explore insightful articles and tutorials on web development, technology, and coding tips ",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body className={firacode.className}>
                    <div className="fixed z-20 w-full top-0">
                         <Navbar></Navbar>
                    </div>
                    {children}
                    <Footer></Footer>
               </body>
          </html>
     );
}
