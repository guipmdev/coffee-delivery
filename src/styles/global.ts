import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{}>`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${(props) => props.theme.background};
    
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  button, input, textarea {
    background: transparent;
    border: none;
  }

  body, input, textarea, button {
    font: ${(props) => props.theme['text-m']};
  }

  ul {
    list-style: none;
  }
`
