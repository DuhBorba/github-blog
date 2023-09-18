import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;

    &:focus {
      outline: none;
      box-shadow: ${props => props.theme.blue}; 
    }
    
    body {
      background: ${props => props.theme['base-background']};
      color: ${props => props.theme['base-text']};
    }

    body, input, textarea, button {
      font: 400 1rem 'Nunito', sans-serif;
    }
  }
`