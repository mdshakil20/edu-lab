import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import LeftSideBar from "../Shared/LeftSideBar";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex ">
            <LeftSideBar></LeftSideBar>
            <h3>Home page for {user?.email}</h3>
        </div>
    );
}
export default Home;