import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from "./pages/login";
import Times from "./pages/times";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/times',
    element: <Times />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;