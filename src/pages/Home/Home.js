import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import LeftSideBar from "../Shared/LeftSideBar";

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="lg:flex md:flex sm:block dark:bg-black min-h-screen ">
            <LeftSideBar></LeftSideBar>
            <div className="w-full lg:flex">
                <div className="w-60% mx-auto">
                    <div className="w-90% m-8 p-5 rounded-lg mx-auto mt-12 bg-bannerBlue lg:flex md:block block ">
                        <img className="lg:m-10 lg:py-10 " width={250} src="https://i.postimg.cc/K4Xr0cRw/Group-16.png" />
                        <div className="mt-6 mr-2">
                            <h1 className="text-2xl font-bold">Learn effectively with EduLab</h1>
                            <h2 className="text-justify my-4 ">Learn front-end from sketches. We will try to make you a front-end developer. 
                            To learn web development in an easy way from scratch, then enroll in our courses today and enjoy our courses.
                            </h2>
                            <Link to={'/courses'} className=" py-2 mb-3 pr-4 pl-3 text-white bg-regal-blue rounded "
                            >See Our Courses</Link>
                        </div>
                    </div>
                </div>
                <div className="w-40% ">


                </div>
            </div>
        </div>
    );
}
export default Home;