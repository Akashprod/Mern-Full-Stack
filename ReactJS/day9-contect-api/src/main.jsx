
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './Context/ThemeContextProvider.jsx'
import AuthContextProvider from './Context/AuthContextProvider.jsx'
// import App2 from './App2.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <AuthContextProvider>
        <App />
        </AuthContextProvider>
    
    </ThemeContextProvider>
   
  
)
