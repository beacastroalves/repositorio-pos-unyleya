import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/index.tsx'
import ProductList from './pages/product-list/index.tsx'
import ProductDetails from './pages/product-details/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { index: true, Component: ProductList },
      { path: 'login', Component: Login, },
      { path: 'product/:id', Component: ProductDetails, }
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
