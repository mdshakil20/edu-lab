import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import LeftSideBar from "../Shared/LeftSideBar";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="lg:flex md:flex sm:block dark:bg-black min-h-screen ">
            <LeftSideBar></LeftSideBar>
            <div className="w-full lg:flex">
                <div className="w-60% ">
                    <div className="w-90% rounded-lg mx-auto mt-12 bg-bannerBlue">
                        <img className="lg:m-10 lg:py-10 w-60%" src= "https://i.postimg.cc/K4Xr0cRw/Group-16.png"/>
                    </div>
                </div>
                <div className="w-40% ">


                </div>
            </div>
        </div>
    );
}
export default Home;