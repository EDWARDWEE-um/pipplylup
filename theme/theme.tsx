// /theme/theme.ts
"use client";

import { extendTheme } from '@chakra-ui/react';

// Define custom colors, fonts, etc.
const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#f5f7ff',
      100: '#dbe4ff',
      200: '#b0c7ff',
      300: '#85aaff',
      400: '#5a8dff',
      500: '#306ff7', // Custom brand color
      600: '#2155c4',
      700: '#153b91',
      800: '#09215f',
      900: '#01092e',
    },
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

export default customTheme;
