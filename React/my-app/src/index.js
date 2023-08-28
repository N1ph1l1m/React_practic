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
import Calculator from './components/Calculator';
import SecondComponent from './components/SecondComponent/secondComponent';

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
            path:"/second",
            element:<SecondComponent/>
        },
        {
            path:"/form",
            element:<FormsComponent/>
        },
        {
            path:"/temp",
            element:<Calculator/>
        },
      ]
    },

   
    ])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
);


