import React from "react";
import Navbar from "../pages/Shared/Navbar";
import LeftSideBar from "../pages/Shared/LeftSideBar";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="flex">
            <LeftSideBar></LeftSideBar>
            <div className="relative  w-full h-screen  rounded-lg  bg-gradient-to-b from-stone-200 to-pink-100  ">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            
        </div>
    );
}
export default Main;