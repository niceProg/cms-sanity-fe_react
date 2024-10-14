"use client";

import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import { useDarkMode } from "./DarkmodeContext";
import { useState } from "react";

const Darkmode = () => {
     const { darkMode, toggleDarkMode } = useDarkMode();
     const [isClicked, setIsClicked] = useState(false);

     const handleClick = () => {
          setIsClicked(true);
          toggleDarkMode();
          setTimeout(() => {
               setIsClicked(false);
          }, 500); // Reset animation after 500ms
     };

     return (
          <button
               onClick={handleClick}
               aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} // Aria-label untuk aksesibilitas
               aria-pressed={darkMode} // Memberi tahu status tombol
               className={`fixed w-16 h-16 bottom-16 right-16 rounded-full
            bg-neutral-900 dark:bg-[#F7F9FC] text-[#F7F9FC] dark:text-black 
            font-semibold uppercase flex items-center justify-center
            border-4 transition-transform duration-500 ${darkMode ? "border-blue-500" : "border-transparent"} ${isClicked ? "scale-110" : "scale-100"}`}
               style={{ transition: "transform 0.5s ease, background-color 0.5s ease" }}
               onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                         e.preventDefault();
                         handleClick();
                    }
               }} // Mengatasi pengendalian fokus dengan keyboard
               tabIndex={0} // Agar dapat diakses dengan keyboard
          >
               {darkMode ? <SunIcon className="text-black h-10 w-10 transition-opacity duration-300" /> : <MoonIcon className="text-white h-10 w-10 transition-opacity duration-300" />}
          </button>
     );
};

export default Darkmode;
