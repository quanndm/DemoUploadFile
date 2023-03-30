import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout';
import Index from './pages/Index';
import Photo from './pages/Photo';
import FormUpload from './pages/FormUpload';
import axios from 'axios';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"",
        element: <Index />
      },
      {
        path:"photo/:fileName",
        element: <Photo />
      },
      {
        path: "uploads",
        element:<FormUpload />
      }
    ]
  },
]);
function App() {
  axios.defaults.baseURL=process.env.REACT_APP_URL_API
  return (
    <div className="App ">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
