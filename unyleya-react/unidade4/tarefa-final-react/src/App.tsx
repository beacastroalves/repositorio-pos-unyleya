import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './pages/login';
import ProductList from './pages/product-list';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/products',
    element: <ProductList />
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
