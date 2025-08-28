import Details from './pages/details';
import Home from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;