import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import Welcome from './welcome.tsx'
import Navbar from './components/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Navbar /> */}
    <App />
    {/* <Welcome /> */}
  </StrictMode>,
)
