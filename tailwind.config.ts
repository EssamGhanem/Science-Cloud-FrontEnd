import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        greens:"#556B2F",
        prime:"#161D6F",
        // prime:"#00afcb",
        secondary:"#0B2F9F",
        therd:"#98DED9",
        fourth:"#C7FFD8"
      },
      boxShadow: {
        'start': '0 0px 40px 20px #161d6f;',
      },

      fontFamily:{
        cairo:["Cairo", 'sans-serif'],
        aref :["Aref Ruqaa", 'serif'],
        kanit:["Kanit", "sans-serif"]
      },
      backgroundImage: {
        'hero-BG': "url('/home_bg_img.png')",
        
      },
      keyframes: {
        moveBackgroundImage: {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '0% 500%' },
          '100%': { backgroundPosition: '0% 1000%' },
        }
      },
      animation: {
        moveBackgroundImageSm: 'moveBackgroundImage 100s linear infinite',
        moveBackgroundImageMd: 'moveBackgroundImage 100s linear infinite',
        moveBackgroundImage: 'moveBackgroundImage 25s linear infinite',
      },
      clipPath: {
        'twoChoice-polygon': 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
