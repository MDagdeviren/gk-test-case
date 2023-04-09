import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'src/pages/Layout';
import Home from 'src/pages/Home';
import Error from 'src/pages/Error';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
