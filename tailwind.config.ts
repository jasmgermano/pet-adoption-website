import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-whoweare': "url('../assets/bg-whoweare.svg')",
        'bg-info': "url('../assets/bg-info.svg')",
        'bg-social': "url('../assets/bg-social.svg')",
      },
      colors: {
        'custom-yellow': '#F8D432',
        'custom-cyan': '#0AAAB6',
        'custom-light-cyan': '#94DBDF',
        'custom-red': '#F2786A',
        'custom-light-red': '#F2786A',
        'custom-blue': '#0A63B6',
      }
    },
  },
  plugins: [],
}
export default config
