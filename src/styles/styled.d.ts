import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      correct: string;
      wrong: string;
      disabled: string;
    };
    borderColors: {
      primary: string;
      correct: string;
      wrong: string;
      loading: string;
      disabled: string;
    };
  }
}