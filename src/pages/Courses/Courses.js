import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSideBar from "../CourseSideBar/CourseSideBar";

const Courses = () => {
    const course = useLoaderData();
    console.log(course)
    return(
        <div className="flex">
            <CourseSideBar></CourseSideBar>
            <h1>courses page </h1>
        </div>
    );
}
export default Courses;