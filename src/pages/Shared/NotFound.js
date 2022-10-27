import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import LeftSideBar from "../Shared/LeftSideBar";

const NotFound = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="lg:flex md:flex sm:block dark:bg-black ">
            <LeftSideBar></LeftSideBar>
            
            {/* body */}
            <div className="text-center mt-12 w-full min-h-screen ">
                <h1 className="text-8xl dark:text-blue-500">404</h1>
                <h1 className="text-4xl dark:text-blue-500">Nothing Found in this Route</h1>
            </div>
            
        </div>
    );
}
export default NotFound;