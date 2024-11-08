//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "./components/Theme";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
<BrowserRouter >
   <div>
    <App />
   </div>
 </BrowserRouter>
  </ThemeProvider>
 
);
