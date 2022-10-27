import React from "react";
import { BsPlayCircle } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import CourseSideBar from "../../CourseSideBar/CourseSideBar";
import LeftSideBar from "../../Shared/LeftSideBar";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    console.log('from detail page: ',course.id);
    return (
        <div className="flex dark:bg-black">
            {/* side bar  */}
            <LeftSideBar></LeftSideBar>

            {/* main body  */}
            <div className="mx-auto mt-3 ">
                <div className="flex justify-between">
                    <Link to={'/courses'} class=" mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</Link>
                    <Link class=" mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800"><Pdf targetRef={ref} filename="code-example.pdf">{({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}</Pdf></Link>
                </div>

                <div ref={ref} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.CourseTitle}</h5>
                        <img className="rounded-t-lg mx-auto mt-5" src={course.img} alt="" />
                        <p className="my-3 dark:text-white ">Instructor:  <b>{course.instructor}</b></p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{course.discription}</p>
                        <p className="mt-2 dark:text-white ">Total Lesson :<b> {course.totalLesson}</b></p>
                        <p className="mt-2 dark:text-white ">Total Hour : <b>{course.totalHour}</b></p>
                        <p className="mt-2 dark:text-white ">Total Task :<b> {course.totalTask}</b></p>
                        <p className="mt-2 mb-5 dark:text-white ">Price :<b> ${course.price} </b></p>
                        {/* Get premium access button  */}
                        <Link to={course.id} class=" mb-5 mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                                dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get premium access</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;