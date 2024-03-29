import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-screen-2xl mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;