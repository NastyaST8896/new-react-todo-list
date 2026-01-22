import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.beige};
  }

  body {
    font-family: "Red Rose", serif;
    font-weight: 500;
    margin: 20px;
    padding: 0;
  }

  h1 {
    text-align: center;
  }
`;