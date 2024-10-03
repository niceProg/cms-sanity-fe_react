"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Membuat Context untuk Dark Mode
interface DarkModeContextType {
     darkMode: boolean;
     toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const useDarkMode = () => {
     const context = useContext(DarkModeContext);
     if (!context) {
          throw new Error("useDarkMode harus digunakan dalam DarkModeProvider");
     }
     return context;
};

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
     const [darkMode, setDarkMode] = useState(false);

     const toggleDarkMode = () => {
          setDarkMode((prevMode) => !prevMode);
     };

     return (
          <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
               <div className={darkMode ? "dark" : ""}>{children}</div>
          </DarkModeContext.Provider>
     );
};
