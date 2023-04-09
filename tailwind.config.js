/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import { screens as _screens } from 'tailwindcss/defaultTheme';
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      gravel: 'rgba(72,72,72,1)',
      white: 'rgba(255,255,255,1)',
    },
    screens: {
      xs: '475px',
      ..._screens,
    },
  },
};
export const plugins = [];
