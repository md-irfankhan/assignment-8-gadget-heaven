import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home  from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/product/:productId',
        loader:()=>fetch('/api.json'),
        element:<ProductPage></ProductPage>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} /> 
  </StrictMode>,
)
