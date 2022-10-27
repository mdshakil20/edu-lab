import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/Courses/CourseDetails/CourseDetails";
import Faq from "../pages/Faq/Faq";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/Shared/NotFound";
import Checkout  from "../pages/Checkout/Checkout ";
import PrivateRoute from "./PrivateRouter/PrivateRoute";

export const route = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:7000/courses')
            },
            {
                path: '/courses/:id/:nid',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute> ,
                loader: ({params}) => fetch(`http://localhost:7000/courses/${params.id}/`)
            } ,
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails> ,
                loader: ({params}) => fetch(`http://localhost:7000/courses/${params.id}`)
            } ,
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

            //404 rout
            {
                path: '*',
                element: <NotFound></NotFound>
            }
        ]
    }
])