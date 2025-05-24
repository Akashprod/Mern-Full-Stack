
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './Class.jsx'




createRoot(document.getElementById('root')).render(
 <ThemeProvider theme={theme}>
  <App />
 </ThemeProvider>
  
 
)
