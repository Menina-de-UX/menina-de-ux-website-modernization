import { fonts, colors } from './src/tokens'
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
        hero3: "url('/home/background-hero-3.png')",
        'background-sobre': "url('/sobre/background.png')",
        'background-sobre-sm': "url('/sobre/background-sm.png')",
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
        },
      },
    },
    colors: { ...colors, current: 'currentColor' },
    fontSize: fonts.fontSizes,
    fontWeight: fonts.fontWeights,
    fontFamily: {
      ncs: fonts.fontFamilies.ncs,
      avenir: fonts.fontFamilies.avenir,
    },
  },

  plugins: [],
}
export default config
