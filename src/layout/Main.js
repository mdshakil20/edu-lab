import React from "react";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="flex">
            <div className=" w-full">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            
        </div>
    );
}
export default Main;