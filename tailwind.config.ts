import colors from "tailwindcss/colors";
import type { Config } from "tailwindcss";
import fjord from "./fjord.config";

function getColorScheme(colorName: string) {
  switch (colorName) {
    case "slate":
      return colors.slate;
    case "gray":
      return colors.gray;
    case "zinc":
      return colors.zinc;
    case "neutral":
      return colors.neutral;
    case "stone":
      return colors.stone;
    case "red":
      return colors.red;
    case "orange":
      return colors.orange;
    case "amber":
      return colors.amber;
    case "yellow":
      return colors.yellow;
    case "lime":
      return colors.lime;
    case "green":
      return colors.green;
    case "emerald":
      return colors.emerald;
    case "teal":
      return colors.teal;
    case "cyan":
      return colors.cyan;
    case "sky":
      return colors.sky;
    case "blue":
      return colors.blue;
    case "indigo":
      return colors.indigo;
    case "violet":
      return colors.violet;
    case "purple":
      return colors.purple;
    case "fuchsia":
      return colors.fuchsia;
    case "pink":
      return colors.pink;
    case "rose":
      return colors.rose;
    default:
      return colors.slate;
  }
}

const config: Config = {
  // toggle to 'media' to disable dark mode, see: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: "media",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: getColorScheme(fjord.theme.primary),
        secondary: getColorScheme(fjord.theme.secondary),
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    transform: true,
  },
};

export default config;
