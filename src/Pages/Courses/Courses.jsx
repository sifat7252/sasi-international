import { useLoaderData } from "react-router-dom";

import Course from "./Course";


const Courses = () => {
    const courseData = useLoaderData();
    return (
        <div>
            <div className=" flex flex-col items-center justify-center item-center mx-auto ">
                
                <h2 className="font-semibold lg:text-5xl text-3xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500 my-4 p-3">Course Category</h2>
                
                <h2 className="text-xl md:text-2xl mt-2 mb-6 font-semibold">Just Pick What You Need </h2>
                <hr />
            </div>
            <div className="grid lg:grid-cols-2 gap-4">
                {
                    courseData?.map(data => <Course key={data.id} data={data}></Course> ) 
                }
            </div>
        </div>
    );
};

export default Courses;