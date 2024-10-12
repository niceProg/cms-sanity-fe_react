import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import { DarkModeProvider } from "./components/DarkmodeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
     icons: {
          icon: "/assets/logo/Tegal.dev-AA-ic.png",
     },
     title: "Yumna Dev Blog",
     description: "Explore insightful articles and tutorials on web development, technology, and coding tips",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body className={figtree.className}>
                    <DarkModeProvider>
                         <div className="fixed z-20 w-full top-0">
                              <Navbar />
                         </div>
                         {children}
                         <Footer />
                    </DarkModeProvider>
               </body>
          </html>
     );
}
