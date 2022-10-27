import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import LeftSideBar from "../Shared/LeftSideBar";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="lg:flex md:flex sm:block dark:bg-black min-h-screen ">
            <LeftSideBar></LeftSideBar>
            <h3>Home page for {user?.email}</h3>
        </div>
    );
}
export default Home;