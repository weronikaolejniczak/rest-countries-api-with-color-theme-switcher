import { DefaultTheme } from 'styled-components';

type ColorsType = { [key: string]: string };

const Theme = (colors: ColorsType): DefaultTheme => ({
  borderRadius: '6px',
  breakpoints: {
    desktop: '1440px',
    mobile: '375px',
  },
  colors,
  fontFamilies: ["'Nunito Sans'", 'sans-serif'],
  fontSizes: {
    homepage: '14px',
    detailPage: '16px',
  },
  weights: {
    light: 300,
    regular: 600,
    bold: 800,
  },
});

const lightTheme = Theme({
  background: 'hsl(0, 0%, 98%)', // Very Light Gray (Light Mode Background)
  elements: 'hsl(0, 0%, 100%)', // White (Light Mode Elements)
  input: 'hsl(0, 0%, 52%)', // Dark Gray (Light Mode Input)
  text: 'hsl(200, 15%, 8%)', // Very Dark Blue (Light Mode Text)
});

const darkTheme = Theme({
  background: 'hsl(207, 26%, 17%)', // Very Dark Blue (Dark Mode Background)
  elements: 'hsl(209, 23%, 22%)', // Dark Blue (Dark Mode Elements)
  text: 'hsl(0, 0%, 100%)', // White (Dark Mode Text)
});

export { darkTheme, lightTheme };
