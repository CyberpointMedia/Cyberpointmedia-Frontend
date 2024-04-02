import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    screens:{
      '3xl': {'min':'1800px','max':'1920px'},
    },
      colors: {
        black: '#2E2F30',
      },
    },
    container: {
      padding: {
        DEFAULT: '2rem',
      },
    },
  },
  
  plugins: [],
};
export default config;
