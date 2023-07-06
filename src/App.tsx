import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { ContextProviders } from './contexts'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContextProviders>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProviders>

      <GlobalStyle />
    </ThemeProvider>
  )
}
