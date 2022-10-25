import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Navbar from "../pages/Shared/Navbar";

export const route = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Navbar></Navbar>
            }
        ]
    }
])