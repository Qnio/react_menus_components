import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --color-primary-black: #1e1f20;
  --color-primary-grey: #b6b6b6;
  --color-primary-white: #ffffff;
  --color-primary-yellow: #f8bb10;
}

// RESPONSIVE BREAKPOINTS
$bp-largest: 75em; // 1200px
$bp-large: 62.5em; // 1000px
$bp-medium: 50em; // 800px;
$bp-small: 37.5em; // 600px;
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px
  @media only screen and (max-width: $bp-largest) {
  font-size: 50%;
}
}
body {
  
}
`;
