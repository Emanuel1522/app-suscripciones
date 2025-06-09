import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router/Router'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(Router)} />
  </StrictMode>,
)
