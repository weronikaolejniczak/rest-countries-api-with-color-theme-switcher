import { ReactNode, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from 'constants/themes';

const darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

type ThemePropsType = {
  children: ReactNode;
};

export const Theme = ({ children }: ThemePropsType) => {
  const [isDarkMode, setIsDarkMode] = useState(darkModeMatchMedia.matches);

  darkModeMatchMedia.addEventListener('change', (event) =>
    setIsDarkMode(event.matches)
  );

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
