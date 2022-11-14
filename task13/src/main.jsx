import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import Dashboard from './routes/dashboard/Dashboard';
import Welcome from './routes/welcome/Welcome';
import Error from './routes/error/Error';
import Photos from './routes/photos/Photos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <Error />
  },
  {
    path: "Dashboard",
    element: <Dashboard />,
  },
  {
    path: "Photos",
    element: <Photos />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
