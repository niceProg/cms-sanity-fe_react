"use client";

import { useEffect } from "react";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

const LoadingAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
     useEffect(() => {
          const AOS = require("aos");
          AOS.init({
               duration: 500,
               easing: "ease-in-out",
               once: true,
          });
     }, []);

     return (
          <div data-aos="fade-up" className="py-4">
               {children}
          </div>
     );
};

export default LoadingAnimation;
