import React from "react";
import { useLoaderData } from "react-router-dom";

const Courses = () => {
    const course = useLoaderData();
    console.log(course)
    return(
        <div>
            <h1>courses page </h1>

        </div>
    );
}
export default Courses;