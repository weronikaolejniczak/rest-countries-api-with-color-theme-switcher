import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    breakpoints: { [key: string]: string };
    colors: { [key: string]: string };
    fontFamily: string;
    fontSizes: { [key: string]: string };
    weights: { [key: string]: number };
  }
}
