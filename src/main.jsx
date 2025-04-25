import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { ThemeProvider } from './Component/theme-Provider'
import { Provider } from 'react-redux'
import { store } from './Component/store/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider defaultTheme="system" className="bg-amber-600" storageKey="vite-ui-theme"> */}
        <App />
      {/* </ThemeProvider> */}
    </Provider>
  </StrictMode>,
)
