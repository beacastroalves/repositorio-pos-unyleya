import AboutUs from './pages/about-us';
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
    {
      path: "/quem-somos",
      element: <AboutUs />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;