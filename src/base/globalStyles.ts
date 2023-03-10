import { createGlobalStyle } from "styled-components";
import { Theme } from "./themes";

export default createGlobalStyle<{ theme: Theme; mode: string }>`

html {
  scroll-behavior: smooth;
}

*,*::before,*::after {
    box-sizing: border-box;
}

body {
  margin: 0;
font-size: 16px;
font-family: ${({ theme }) => theme.font};
background-color: ${({ theme, mode }) =>
  mode === "dark" ? theme.dark.background : theme.light.background};
color: ${({ theme, mode }) =>
  mode === "dark" ? theme.dark.text : theme.light.text};
  transition: ${({ theme }) => theme.transition};
};


img {
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;
