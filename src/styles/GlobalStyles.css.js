import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Raleway from './fonts/Raleway.ttf';

export const GlobalStyles = createGlobalStyle`
  /* stylelint-disable */
  ${reset}
  /* stylelint-enable */
  
  @font-face {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    src: local('Raleway'), url(${Raleway}) format('truetype');
  }
  
  :root {
    --backgroundColor: whitesmoke;
    --fontColor: black;
    --headerColor: #2196F3;
    --headerFontColor: white;
    
    font-size: 16px;
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
      --backgroundColor: #2C2F33;
      --fontColor: white;
      --headerColor: #7289DA;
      --headerFontColor: white;
    }
  }
  
  html {
    max-width: 1000px;
    margin: auto;
    background-color: var(--backgroundColor);
    color: var(--fontColor);
    font-family: Raleway, sans-serif;
  }
  
  h1 {
    font-size: 2.625rem;
    line-height: 1.548rem;
  }
  
  h2 {
    font-size: 2.063rem;
    line-height: 1.576rem;
  }
  
  h3 {
    font-size: 1.625rem;
    line-height: 1.615rem;
  }
  
  h4 {
    font-size: 1.25rem;
    line-height: 1.65rem;
  }
  
  body {
    font-size: 1rem;
    line-height: 1.688rem;
  }
  
  small {
    font-size: 0.813rem;
    line-height: 1.769rem;
  }
  
  img {
    max-width: 100%;
  }
`;
