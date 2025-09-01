import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from "./pages/login";
import Times from "./pages/times";
import Products from "./pages/products";
import DetailsProduct from "./pages/datails-product";
import NotFoundPage from "./pages/not-found";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/times',
    element: <Times />
  },
  {
    path: '/products/:id',
    element: <Products />
  },
  {
    path: '/details/:id',
    element: <DetailsProduct />
  },
  {
    path: '/*',
    element: <NotFoundPage />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;