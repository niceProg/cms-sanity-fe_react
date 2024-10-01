import type { Config } from "tailwindcss";

const config: Config = {
     content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
     theme: {
          extend: {
               colors: {
                    background: "var(--background)",
                    foreground: "var(--foreground)",
                    codeBg: "#1e1e1e",
                    codeText: "#dcdcdc",
               },
               backgroundImage: {
                    write_banner: "url('../public/assets/banner/write_banner.jpg')",
                    code_banner: "url('../public/assets/banner/code_banner.jpg')",
                    datacenter_banner: "url('../public/assets/banner/datacenter_banner.jpg')",
                    logowhite: "url('../public/assets/logo/Tegal.dev-BB.png')",
                    logoblue: "url('../public/assets/logo/Tegal.dev-BBB.png')",
               },
          },
     },
     plugins: [],
};
export default config;
