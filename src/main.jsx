import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import CSPage from './pages/CSPage.jsx'

const router = createBrowserRouter([
  {path:"/", element: <CSPage />},
  {path:"/CS", element: <CSPage />},
  {path:"*", element: <NotFoundPage />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
