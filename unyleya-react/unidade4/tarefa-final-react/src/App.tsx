import { createBrowserRouter, RouterProvider } from "react-router";
import ProductList from "./pages/product-list";
// import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />
    // element: <Login />
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
