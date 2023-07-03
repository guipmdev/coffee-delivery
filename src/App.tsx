import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { ContextProvider } from './contexts'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <ContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ContextProvider>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
