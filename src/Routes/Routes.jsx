import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Courses from "../Pages/Courses/Courses";

  const  Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/classes',
            element: <Classes></Classes>
        },
        {
            path: '/courses',
            element: <Courses></Courses>
        }
      ]
    },
  ]);



export default Routes;