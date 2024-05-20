import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-info': "url('../assets/bg-info.svg')",
        'yellow-blob': "url('../assets/blob1.svg')",
        'blue-blob': "url('../assets/blob3.svg')",
        'red-blob': "url('../assets/blob2.svg')",
        'bg-whoarewe-tablet': "url('../assets/bg-whoarewe-tablet.svg')",
        'bg-whoarewe-mobile': "url('../assets/bg-whoarewe-mobile.svg')",
      },
      colors: {
        'custom-yellow': '#F8D432',
        'custom-cyan': '#0AAAB6',
        'custom-light-cyan': '#94DBDF',
        'custom-red': '#F2786A',
        'custom-light-red': '#F2786A',
        'custom-blue': '#0A63B6',
      },
      screens: {  
        'tablet': '640px',
       // => @media (min-width: 640px) { ... }

        'laptop': '1030px',
        // => @media (min-width: 1024px) { ... }
      }
    },
  },
  plugins: [nextui()],
}
export default config
