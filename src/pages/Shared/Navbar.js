
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div className="flex justify-between my-5 py-2	">
            <div className="ml-10 ">
                <Link className="text-lg font-semibold px-2 ml-4">EduLab</Link>
            </div>
            <div className="mr-10 ">
                <Link className=" text-lg font-semibold px-2 ml-4 hover:underline 
                    underline-offset-8 " to={'/'} >Home</Link>
                <Link className=" text-lg font-semibold px-2 ml-4 hover:underline 
                    underline-offset-8 " to={'/courses'} >Courses</Link>
                <Link className=" text-lg font-semibold px-2 ml-4 hover:underline 
                    underline-offset-8 " to={''} >FAQ</Link>
                <Link className=" text-lg font-semibold px-2 ml-4 hover:underline 
                    underline-offset-8 " to={''} >Blog</Link>
                <Link className=" text-lg font-semibold px-2 ml-4 hover:underline 
                    underline-offset-8 " to={''} >Login</Link>
            </div>
        </div>

    );
}
export default Navbar;