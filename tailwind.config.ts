const fs = require('fs');
const colors = require('tailwindcss/colors')

// Impport fjord settings
const settings = JSON.parse(fs.readFileSync('./fjord.json', 'utf8'));

function getColorScheme(colorName: string) {
  switch (colorName) {
    case 'slate':
      return colors.slate;
    case 'gray':
      return colors.gray;
    case 'zinc':
      return colors.zinc;
    case 'neutral':
      return colors.neutral;
    case 'stone':
      return colors.stone;
    case 'red':
      return colors.red;
    case 'orange':
      return colors.orange;
    case 'amber':
      return colors.amber;
    case 'yellow':
      return colors.yellow;
    case 'lime':
      return colors.lime;
    case 'green':
      return colors.green;
    case 'emerald':
      return colors.emerald;
    case 'teal':
      return colors.teal;
    case 'cyan':
      return colors.cyan;
    case 'sky':
      return colors.sky;
    case 'blue':
      return colors.blue;
    case 'indigo':
      return colors.indigo;
    case 'violet':
      return colors.violet;
    case 'purple':
      return colors.purple;
    case 'fuchsia':
      return colors.fuchsia;
    case 'pink':
      return colors.pink;
    case 'rose':
      return colors.rose;
    default:
      return colors.slate;
  }
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: getColorScheme(settings.theme.primary),
        secondary: getColorScheme(settings.theme.secondary),
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  corePlugins: {
    transform: true,
  }
};

export default config;
