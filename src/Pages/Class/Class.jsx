import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";


const Class = () => {
    // const [singleClass, setSingleClass] = useState();
    const { id } = useParams();
    const [data, setData] = useState([]);

    const classData = useLoaderData();
    // console.log(typeof classData, typeof classId)
    // console.log( classData, classId)

    useEffect(() => {

        const classDetails = classData?.find((classDataDetails) => classDataDetails.id == id)

        // console.log(classDetails.title)
         setData(classDetails)

        // console.log(data)
        // setSingleClass(classDetails)
        // return classDetails
    }, [classData, id]);
console.log(data)
// console.log(singleClass)
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className='w-full rounded-lg' src={data.picture} alt="class" /></figure>
  <div className="card-body">
    <h2 className="card-title font-semibold lg:text-4xl lg:mb-5">{data.title}</h2>
    <div className="author-details flex  items-center gap-3 mb-4">
        <div className="author-image"><img src={data.instructor_picture} alt="" className="rounded-full w-16 h-16 lg:w-24 lg:h-24" /></div>
        
        <div className="author-details ">
            <h2 className="font-semibold lg:text-2xl">{data.instructor_name}</h2>
            <h2 className="font-normal text-slate-500 lg:text-xl">{data.instructor_professions}</h2>
            <span className='flex gap-3 items-center mt-2'><FaFacebook></FaFacebook><FaInstagram></FaInstagram><FaLinkedinIn></FaLinkedinIn><FaWhatsapp></FaWhatsapp><FaYoutube></FaYoutube></span>
        </div>
        
    </div>
    <div className="flex gap-3 items-center lg:mb-4">
              <div className="rating lg:rating-md rating-sm">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400" 
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h2>{data.rating}</h2>
            </div>
    <p className='text-slate-500 lg:text-xl'>{data.details}</p>
    <div className="card-actions justify-center">
      <button className="btn mt-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white " data-aos="zoom-in">Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Class;