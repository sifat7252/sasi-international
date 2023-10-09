import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register.jsx";
import Category from "../Pages/Category/Category";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Class from "../Pages/Class/Class";

  const  Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/public/categoris.json')
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/courses',
            element: <PrivateRoutes><Courses></Courses></PrivateRoutes>
        },
        {
          path: '/categories',
          element: <PrivateRoutes><Category></Category></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/class/:id',
          element: <PrivateRoutes><Class></Class></PrivateRoutes>,
          loader: () => fetch('/public/categoris.json')
        }
      ]
    },
  ]);



export default Routes;