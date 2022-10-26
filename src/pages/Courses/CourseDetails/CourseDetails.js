import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import CourseSideBar from "../../CourseSideBar/CourseSideBar";
import LeftSideBar from "../../Shared/LeftSideBar";

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course.img);
    return (
        <div className="flex ">
            <LeftSideBar></LeftSideBar>
            <div className="mx-auto mt-3 ">
                <Link to={'/courses'} class=" mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</Link>

                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    
                    <img className="rounded-t-lg mx-auto mt-5" src={course.img} alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.CourseTitle}</h5>
                        <p className="mb-3">By {course.instructor}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.discription}</p>
                        <p className="mt-2">Total Lesson :<b> {course.totalLesson}</b></p>
                        <p className="mt-2">Total Hour : <b>{course.totalHour}</b></p>
                        <p className="mt-2">Total Task :<b> {course.totalTask}</b></p>
                        <p className="mt-2">Price :<b> ${course.price} </b></p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;