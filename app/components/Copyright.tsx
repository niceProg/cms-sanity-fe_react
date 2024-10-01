"use client";

import React, { useEffect, useState } from "react";

const Copyright = ({ blog }: { blog: string }) => {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

    // Hanya diambil saat komponen pertama kali di-render
    useEffect(() => {
         setCurrentYear(new Date().getFullYear());
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
