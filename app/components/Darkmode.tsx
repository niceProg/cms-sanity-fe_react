"use client";

import SunIcon from "@heroicons/react/24/solid/SunIcon";
import { useDarkMode } from "./DarkmodeContext";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";

const Darkmode = () => {
     const { darkMode, toggleDarkMode } = useDarkMode(); // Mengambil state dan fungsi dari context

     return (
          <button
               className="fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-[#F7F9FC]
            rounded-full text-[#F7F9FC] dark:text-black font-semibold uppercase flex items-center justify-center"
               onClick={toggleDarkMode}
          >
               {darkMode ? (
                    <SunIcon className="text-black h-10 w-10" /> // Tampilkan Sun Icon untuk dark mode
               ) : (
                    <MoonIcon className="text-white h-10 w-10" /> // Tampilkan Moon Icon untuk light mode
               )}
          </button>
     );
};

export default Darkmode;
