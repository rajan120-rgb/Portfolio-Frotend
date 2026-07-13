import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 import { ToastContainer } from 'react-toastify';
import { LoginProvider } from './Context/Context.jsx';
createRoot(document.getElementById('root')).render(
  
   <LoginProvider>
     <App />
    <ToastContainer />
   </LoginProvider>
  
)
