import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        orange: '#ff7d1a',
        'pale-orange': '#ffede0',
        'very-dark-blue': '#1d2025',
        'dark-grayish-blue': '#68707d',
        'light-grayish-blue': '#f7f8fd',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 1s easy-in-out',
      },
    },
  },
  plugins: [],
};
