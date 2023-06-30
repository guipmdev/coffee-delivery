import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{}>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;  
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  body {
    background: ${(props) => props.theme.background};
    
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
`
