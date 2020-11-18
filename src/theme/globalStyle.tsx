import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fbfbfb;
    color: #333;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  @media (max-width: 1450px) {
    .wrapper {
      width: 95% !important;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem !important;
    }
    h2 {
      font-size: 1.25rem !important;
    }
    p {
      font-size: .9rem !important;
    }
    span {
      font-size: .8rem !important;
    }
    header {
      margin: 50px 0 !important;
    }
  }

  @media (max-width: 380px) {
    .list {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`;

export default GlobalStyle;
