import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './view/App'
import './view/styles/common.scss'
import './view/styles/reset.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
