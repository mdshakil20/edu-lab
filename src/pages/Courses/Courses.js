import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseSideBar from "../CourseSideBar/CourseSideBar";

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    const bgImage = 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg';
    return (
        <div className="dark:bg-gree-500 h-full">
            <div className="lg:flex md:flex sm:block  dark:bg-black ">
                <CourseSideBar className="lg:w-1/4 md:w-1/4 sm:w-full "></CourseSideBar>

                <div className=" dark:bg-black w-80% m-8 my-10 grid gap-8 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 ">
                    {
                        courses.map(course =>
                            
                            <Link  key={course.id} className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800
                                        border border-blue-500 dark:border-gray-700">
                                <Link to={''} >
                                    <img className="p-8 rounded-t-lg mx-auto" src={course.img} alt="product image" />
                                </Link>
                                <div className="px-5 pb-5">
                                    <Link to={''} >
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{course.CourseTitle}</h5>
                                    </Link>

                                    <div className="flex justify-between items-center">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {course.price} </span>
                                        <Link  to={course.id}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                                                dark:hover:bg-blue-700 dark:focus:ring-blue-800">See Details</Link>
                                    </div>
                                </div>
                            </Link>
                        )

                    }
                </div>
            </div>
        </div>
    );
}
export default Courses;