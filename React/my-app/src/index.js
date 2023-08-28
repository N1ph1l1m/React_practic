import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import ErrorPage from './components/Router/errorPage';
import FormsComponent from './components/FormsComponent';
import App from './components/app/app';
import Root from './components/Router/root';

const router  = createBrowserRouter([
    {
      path:"/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:"/home",
            element:<App/>
        },
        {
            path:"/form",
            element:<FormsComponent/>
        },
      ]
    },

   
    ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

    <RouterProvider router={router}>
    <Root/>
    </RouterProvider>

</React.StrictMode>
);


