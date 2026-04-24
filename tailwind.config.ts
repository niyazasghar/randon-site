import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#0a0a0a", // Charcoal/Near-black hero
          light: "#fdfdfb", // Off-white content
          surface: "#141414", // Muted gray-black surfaces
        },
        primary: {
          light: "#FFFFFF",
          dark: "#111111",
        },
        accent: {
          DEFAULT: "#f05d23", // Copper Red / Deep Coral (Restrained)
          muted: "#d9480f",
        },
        "brand-gray": {
          50: "#f9f9f9",
          100: "#f0f0f0",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section-title': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '700' }],
        'eyebrow': ['0.75rem', { letterSpacing: '0.2em', fontWeight: '600' }],
      },
      spacing: {
        'section': 'clamp(80px, 12vh, 160px)',
        'gutter': 'clamp(24px, 5vw, 80px)',
      },
      animation: {
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'marquee-left': 'marquee-left 30s linear infinite',
        'marquee-right': 'marquee-right 30s linear infinite',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
