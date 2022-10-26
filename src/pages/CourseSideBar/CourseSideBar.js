
import React, { useEffect, useState } from "react";
import { BsFillForwardFill, BsCaretDownFill,BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseSideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }
        , [])
    return (
        <aside className="w-20% mt-8 border-r-2 border-blue-900" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 bg-white rounded dark:bg-gray-800">
                <ul className="space-y-2 pr-3">
                    <li>
                        <Link to={''} className="flex w-11/12 items-center p-2 pl-8 py-3 text-base font-normal text-white rounded-r-lg dark:text-white bg-regal-blue hover:text-white dark:hover:bg-gray-700">
                            <BsCaretDownFill /> <span className="ml-3">Courses Title </span>
                        </Link>
                    </li>
                    {
                        courses.map(course =>
                            <li key={course.id}>
                                <Link to={''} className="flex w-11/12 items-center p-2 pl-8 py-3 text-base font-normal text-gray-900 rounded-r-lg dark:text-white hover:bg-regal-blue hover:text-white dark:hover:bg-gray-700">
                                    <BsFillForwardFill /> <span className="ml-3">{course.CourseTitle}</span>
                                </Link>
                            </li>
                        )
                    }


                </ul>
            </div>
        </aside>
    );
};

export default CourseSideBar;