import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import LeftSideBar from "../Shared/LeftSideBar";

const Checkout = () => {
    //context
    const { user } = useContext(AuthContext);

    const SelectedCourse = useLoaderData();
    console.log("chech out page");
    return (
        <div className="lg:flex md:flex sm:block dark:bg-black min-h-screen ">
            <LeftSideBar></LeftSideBar>
            <div className="h-full rounded-lg lg:m-10 md:m-8 sm:m-1 item-center w-full justify-between flex p-5
             border border-green-300 ">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{SelectedCourse.CourseTitle}</h5>
                
                <p className="mt-2 dark:text-white">Price :<b> ${SelectedCourse.price} </b></p>
                <p className="mt-2 dark:text-white  hidden lg:block md:block  ">Trainer :<b> {SelectedCourse.instructor} </b></p>

                {/* Get premium access button  */}
                
                <div>
                <Link to={'/'} class=" mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                                dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Money</Link>
                </div>
            </div>
        </div>
    );
}
export default Checkout;