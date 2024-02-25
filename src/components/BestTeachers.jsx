import { useEffect, useState } from "react";
import BestTeachersCard from "./BestTeachersCard";


const BestTeachers = () => {

    const[teacher, setTeacher] = useState([]);

    useEffect(()=>{
        fetch("/categoris.json")
        .then(res => res.json())
        .then(data => setTeacher(data))
    },[])
    return (
        <div>
             <div className=" flex flex-col items-center justify-center item-center mx-auto mt-4 ">
                
                <h2 className="font-semibold lg:text-5xl text-3xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500 my-4 p-3">Our Best Teachers</h2>
                
                <h2 className="text-xl md:text-2xl mt-2 mb-6 font-semibold">IGNITE YOUR VISION WITH US</h2>
                <hr />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mx-5 mb-4" data-aos="zoom-in">
                {
                    teacher?.map(teacherData => <BestTeachersCard key={teacher.id} teacherData={teacherData}></BestTeachersCard>)
                }
            </div>
        </div>
    );
};

export default BestTeachers;