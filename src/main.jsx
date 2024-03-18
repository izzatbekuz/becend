import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const Login = lazy(() => import("./login/Login.jsx"))
const Auth = lazy(() => import("./helpers/Auth.jsx"))
const Home = lazy(() => import("./home/Home.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Auth />,
    children:[
      {
        path: "/home",
        element: <Home />
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
