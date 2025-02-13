import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppState from './context/AppState.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AppState>
    <App />
  </AppState>,
)
