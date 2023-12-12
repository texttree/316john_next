/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#323653",
        customWhiteGray: "#E1E2E5",
        customGreen: "#9CAFA0",
        customGray: "#9CA3AF",
        widget: "#1D1F34",
      },
      colors: {
        "th-primary-100": "var(--primary-100)",
        "th-primary-200": "var(--primary-200)",
        "th-primary-300": "var(--primary-300)",
        "th-primary-400": "var(--primary-400)",
        "th-secondary-10": "var(--secondary-10)",
        "th-secondary-100": "var(--secondary-100)",
        "th-secondary-200": "var(--secondary-200)",
        "th-secondary-300": "var(--secondary-300)",
        "th-secondary-400": "var(--secondary-400)",
        "th-text-primary": "var(--text-primary)",
        "th-text-secondary": "var(--text-secondary)",
        "th-invalid": "var(--invalid)",
        "th-divide-verse1": "var(--divide-verse1)",
        "th-divide-verse2": "var(--divide-verse2)",
        "th-divide-verse3": "var(--divide-verse3)",
        "th-divide-verse4": "var(--divide-verse4)",
        "th-divide-verse5": "var(--divide-verse5)",
        "th-divide-verse6": "var(--divide-verse6)",
        "th-divide-verse7": "var(--divide-verse7)",
        "th-divide-verse8": "var(--divide-verse8)",
        "th-divide-verse9": "var(--divide-verse9)",

        gray: {
          150: "#EDEDED",
          250: "#E3E3E3",
          450: "#AEAEAE",
        },
        yellow: {
          650: "#C68D39",
        },
        slate: {
          550: "#3C6E71",
          580: "#609295",
          650: "#1E5053",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
