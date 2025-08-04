import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Cart from './components/Cart/Cart.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WishList from './components/WishList/WishList.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Error from './components/Error/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        loader: () => fetch('/api.json'),
        element: <Statistics></Statistics>
      },
      {
        path: '/product/:productId',
        loader: () => fetch('/api.json'),
        element: <ProductPage></ProductPage>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: 'cart',
            loader: () => fetch('/api.json'),
            element: <Cart></Cart>
          },
          {
            path: 'wishlist',
            loader: () => fetch('/api.json'),
            element: <WishList></WishList>
          },

        ]
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,  <ToastContainer />
  </StrictMode>,
)
