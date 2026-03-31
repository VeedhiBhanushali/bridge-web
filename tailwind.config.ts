import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xl': '75rem',
        'screen-2xl': '83.75rem'
      },
      boxShadow: {
        'cause-shadow': '0px 4px 17px 0px #00000008',
        'primary': '0 4px 14px -3px rgb(91 155 213 / 0.4)',
        'primary-lg': '0 8px 30px -4px rgb(91 155 213 / 0.35)',
      },
      transitionDuration: {
        '150': '150ms',
      },
      spacing: {
        '6.25': '6.25rem',
        '70%': '70%',
        '40%': '40%',
        '30%': '30%',
        '80%': '80%',
        8.5: '8.5rem',
        50: '50rem',
        51: "54.375rem",
        25: '35.625rem',
        29: '28rem',
        120: '120rem',
        45: '45rem',
        94: '22.5rem',
        85: '21rem',
        3.75: '3.75rem'
      },
      inset: {
        '5%': '5%',
        '35%': '35%'
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '999': '999'
      },
      colors: {
        primary: "#5B9BD5",
        primaryLight: "#89CFF0",
        primaryDark: "#3A7BB5",
        secondary: "#34C759",
        midnight_text: "#1A1A1D",
        midnight_soft: "#2C2C2E",
        muted: "#6E6E73",
        error: "#FF3B30",
        warning: "#FF9500",
        light_grey: "#F8F9FA",
        grey: "#F2F2F7",
        dark_grey: "#E8E8ED",
        border: "#E5E5EA",
        success: "#34C759",
        section: "#8E8E93",
        darkmode: "#FFFFFF",
        darklight: "#F2F2F7",
        dark_border: "#E5E5EA",
        tealGreen: "#A8D5E2",
        charcoalGray: "#6B7280",
        deepSlate: "#F8FAFC",
        slateGray: "#E2E8F0",
        cream: "#FDFCFA",
      },
      fontSize: {
        86: [
          "5.375rem",
          {
            lineHeight: "1.2",
          }
        ],
        76: [
          "4.75rem",
          {
            lineHeight: "1.2",
          }
        ],
        70: [
          "4.375rem",
          {
            lineHeight: "1.2",
          }
        ],
        54: [
          "3.375rem",
          {
            lineHeight: "1.2",
          }
        ],
        44: [
          "2.75rem",
          {
            lineHeight: "1.3",
          }
        ],
        40: [
          "2.5rem",
          {
            lineHeight: "3rem",
          },
        ],
        36: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        30: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        28: [
          "1.75rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        24: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        22: [
          "1.375rem",
          {
            lineHeight: "2rem",
          },
        ],
        21: [
          "1.3125rem",
          {
            lineHeight: "1.875rem",
          },
        ],
        18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        17: [
          "1.0625rem",
          {
            lineHeight: "1.4875rem",
          },
        ],
        16: [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        14: [
          "0.875rem",
          {
            lineHeight: "1.225rem",
          },
        ],
      },
      backgroundImage: {
        "start": "url('/images/work/bg-start.png')",
        "perk": "url('/images/perks/perk-bg.png')",
      },
      blur: {
        220: '220px',
        400: '400px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        wide: '0.02em',
      },
    },
  },
  plugins: [],
};
export default config; 