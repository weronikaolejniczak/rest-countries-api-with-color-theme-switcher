import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    breakpoints: { [key: string]: string };
    colors: { [key: string]: string };
    fontFamilies: string[];
    fontSizes: { [key: string]: string };
    weights: { [key: string]: number };
  }
}
