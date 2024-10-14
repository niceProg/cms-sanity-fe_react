"use client";

import { useEffect } from "react";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

interface LoadingAnimationProps {
     children: React.ReactNode;
     delay?: number; // Optional delay prop
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ children, delay = 0 }) => {
     useEffect(() => {
          const AOS = require("aos");
          AOS.init({
               duration: 500,
               easing: "ease-in-out",
               once: true,
          });
     }, []);

     return (
          <div data-aos="fade-up" data-aos-delay={delay} className="py-4">
               {" "}
               {/* Apply delay dynamically */}
               {children}
          </div>
     );
};

export default LoadingAnimation;
