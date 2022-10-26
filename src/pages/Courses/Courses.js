import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSideBar from "../CourseSideBar/CourseSideBar";

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    const bgImage = 'https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg';
    return (
        <div className="flex ">
            <CourseSideBar className="w-1/4"></CourseSideBar>

            <div className="w-80% m-8 h-80 grid gap-8 lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 ">
                {
                    courses.map(course =>
                        <div key={course.id} class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800
                        border border-blue-500 dark:border-gray-700">
                            <a href="#">
                                <img class="p-8 rounded-t-lg mx-auto" src={course.img} alt="product image"  />
                            </a>
                            <div class="px-5 pb-5">
                                <a href="#">
                                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{course.CourseTitle}</h5>
                                </a>

                                <div class="flex justify-between items-center">
                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$ {course.price} </span>
                                    <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enroll Now</a>
                                </div>
                            </div>
                        </div>
                    )

                }
            </div>
        </div>
    );
}
export default Courses;