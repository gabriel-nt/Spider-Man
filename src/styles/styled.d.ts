import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      yellow: string;
      twitter: string;
      blue: string;
      blueDark: string;
      blueLight: string;
      red: string;
      redDark: string;
      redLight: string;
      white: string;
      whiteDark: string;
      whiteLight: string;
      gray1: string;
      gray2: string;
      gray3: string;
    };
    gap: {
      gap1: string;
      gap2: string;
      gap3: string;
      gap4: string;
      gap5: string;
    };
  }
}
