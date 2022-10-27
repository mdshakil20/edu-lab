
import React from "react";
import { FaHome, FaBook, FaHeart,  } from 'react-icons/fa';
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
    return (

        <aside className="lg:w-20% md:w-30% sm:w-full mt-8 border-r-2 border-blue-900" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 bg-white rounded dark:bg-black">
                <ul className="space-y-2 pr-3">
                    <li className="">
                        <Link to={'/'} className="flex w-11/12 items-center p-2 pl-8 py-3 text-base font-normal text-white rounded-r-lg dark:text-white bg-regal-blue dark:hover:bg-gray-700">
                            <FaHome/> <span className="ml-3">Home</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to={''} className="flex w-11/12 items-center p-2 pl-8 py-3 text-base font-normal text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-600 hover:text-white dark:hover:bg-gray-700">
                            <FaBook/> <span className="ml-3">My Courses</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to={''} className="flex w-11/12 items-center p-2 pl-8 py-3 text-base font-normal text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-600 hover:text-white dark:hover:bg-gray-700">
                            <FaHeart/> <span className="ml-3">Favorite</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to={''} className="flex w-11/12 items-center p-2 pl-8 py-3 text-base font-normal text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-600 hover:text-white dark:hover:bg-gray-700">
                            <RiLayoutGridFill/> <span className="ml-3">Test</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to={''} className="flex w-11/12 items-center p-2 pl-8 py-3 text-base font-normal text-gray-900 rounded-r-lg dark:text-white hover:bg-gray-600 hover:text-white dark:hover:bg-gray-700">
                            <BsFillBookmarkCheckFill/> <span className="ml-3">Certificates</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </aside>

    );
}
export default LeftSideBar;