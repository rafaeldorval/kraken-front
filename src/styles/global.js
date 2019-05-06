import { createGlobalStyle } from "styled-components";

const CustomTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #30373E;
    font-family: 'Montserrat', sans-serif;
    color: #fff
  }

  button {
    cursor: pointer;
  }
`;

export default CustomTheme;
