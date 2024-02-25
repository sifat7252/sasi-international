
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import OthersCard from "./OthersCard";

const OthersCategories = () => {
    const [categoryData, setCategoryData] = useState([]); 
    useEffect(()=>{
        fetch("/othersCategories.json")
        .then(res => res.json())
        .then(data => setCategoryData(data))
    },[])
    // console.log(categoryData)
    return (
        <div>
            <div className=" flex flex-col items-center justify-center item-center mx-auto ">
                
                <h2 className="font-semibold lg:text-5xl text-3xl md:text-4xl text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500 my-4 p-3">Other Course Category</h2>
                
                <h2 className="text-xl md:text-2xl mt-2 mb-6 font-semibold">Just Pick What You Need </h2>
                <hr />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mx-5 ">
                {
                    categoryData?.map(cardData => <OthersCard key={cardData.id} cardData={cardData}></OthersCard>)
                }
            </div>
        </div>
    );
};

export default OthersCategories;
OthersCategories.propTypes = {
    category: PropTypes.node,
    
  };