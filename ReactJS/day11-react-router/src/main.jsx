import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { AuthContextProvider } from './Components/AuthContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContextProvider>
  <App/>
  </AuthContextProvider>
    
    </BrowserRouter>
)
