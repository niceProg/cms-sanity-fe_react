"use client";

import React, { useEffect, useState } from "react";

const Copyright = ({ blog }: { blog: string }) => {
     const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

     useEffect(() => {
          const interValid = setInterval(() => {
               setCurrentYear(new Date().getFullYear());
          }, 1000);
          return () => {
               clearInterval(interValid);
          };
     }, []);
     return (
          <div>
               <p className="text-sm text-gray-400">
                    &copy; {currentYear} {blog}. All rights reserved.
               </p>
          </div>
     );
};

export default Copyright;
