import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from './routes/HomePage';
import InsertionSortPage from './routes/InsertionSortPage';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement:  <ErrorPage/>
  },
  {
    path: "/InsertionSort",
    element: <InsertionSortPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
)
