import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: auto;
  }

  html {
    height: 100%;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    height: 100%;
    line-height: 1.5;
    text-align: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
