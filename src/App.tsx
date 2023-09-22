import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './global'
import { Home } from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Post } from './pages/Post'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:issueNumber" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
