import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      ko: ['Noto Sans KR', 'sans-serif'],
      en: ['Google Sans Display', 'sans-serif'],
    },
    colors: {
      gdsc: {
        Blue: {
          900: '#3842AD',
          700: '#3F74E0',
          500: '#4295FF',
          300: '#6DB5FF',
          100: '#BFDEFF',
        },
        Green: {
          800: '#1F843C',
          600: '#34A853',
          400: '#5CC275',
          200: '#A2DBAE',
          50: '#E7F6EB',
        },
        Yellow: {
          800: '#F9AB00',
          600: '#FADB1F',
          400: '#F7EE4A',
          200: '#FCF699',
          50: '#FEFEE6',
        },
        Red: {
          900: '#AD211C',
          700: '#C9312E',
          500: '#EA4435',
          300: '#DD7271',
          100: '#FCCCD1',
        },
        Black: {
          DEFAULT: '#111',
        },
        Grey: {
          800: '#506067',
          600: '#6F8A94',
          400: '#91AAB4',
          200: '#C1CFD4',
        },
        White: {
          DEFAULT: '#F1F3F4',
        },
      },
    },
    fontSize: {
      72: '4.5rem',
      48: '3rem',
      32: '2rem',
      24: '1.5rem',
      18: '1.125rem',
      16: '1rem',
      14: '0.875rem',
      12: '0.75rem',
    },
    extend: {},
  },
  plugins: [
    ({ addUtilities }: any) => {
      addUtilities({
        '.text-H_EN': {
          '@apply font-en font-bold': {},
          lineHeight: '160%',
        },
        '.text-H1_EN': {
          '@apply text-H_EN text-72': {},
        },
        '.text-H2_EN': {
          '@apply text-H_EN text-48': {},
        },
        '.text-H3_EN': {
          '@apply text-H_EN text-32': {},
        },
        '.text-H4_EN': {
          '@apply text-H_EN text-24': {},
        },
        '.text-H5_EN': {
          '@apply text-H_EN text-18': {},
        },

        '.text-P_EN': {
          '@apply font-en font-normal': {},
          lineHeight: '180%',
        },
        '.text-P1_EN': {
          '@apply text-P_EN text-24': {},
        },
        '.text-P2_EN': {
          '@apply text-P_EN text-18': {},
        },
        '.text-P3_EN': {
          '@apply text-P_EN text-16': {},
        },
        '.text-P4_EN': {
          '@apply text-P_EN text-14': {},
        },
        '.text-P5_EN': {
          '@apply text-P_EN text-12': {},
        },

        '.text-H_KR': {
          '@apply font-ko font-semibold': {},
          lineHeight: '160%',
        },
        '.text-H1_KR': {
          '@apply text-H_KR text-72': {},
        },
        '.text-H2_KR': {
          '@apply text-H_KR text-48': {},
        },
        '.text-H3_KR': {
          '@apply text-H_KR text-32': {},
        },
        '.text-H4_KR': {
          '@apply text-H_KR text-24': {},
        },
        '.text-H5_KR': {
          '@apply text-H_KR text-18': {},
        },

        '.text-P_KR': {
          '@apply font-ko font-normal': {},
          lineHeight: '180%',
        },
        '.text-P1_KR': {
          '@apply text-P_KR text-24': {},
        },
        '.text-P2_KR': {
          '@apply text-P_KR text-18': {},
        },
        '.text-P3_KR': {
          '@apply text-P_KR text-16': {},
        },
        '.text-P4_KR': {
          '@apply text-P_KR text-14': {},
        },
        '.text-P5_KR': {
          '@apply text-P_KR text-12': {},
        },
      });
    },
  ],
};
export default config;
