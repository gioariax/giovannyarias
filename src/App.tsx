import { BrowserRouter } from 'react-router-dom'
import AppStyled from './App'
import { AppRouter } from './router/AppRouter'
import { ConfigProvider, theme } from 'antd'

function App() {
  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
    <AppStyled>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppStyled>
  </ConfigProvider>
  )
}

export default App
