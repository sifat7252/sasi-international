import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const OtherCardDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const cardDetails = useLoaderData();

  useEffect(() => {
    const cardsDetails = cardDetails?.find((data) => data.id == id);
    setDetail(cardsDetails);
  }, [cardDetails, id]);
  // console.log(detail);



  return (
    <div>
      <div className="card w-full bg-base-100 lg:p-20 shadow-xl">
        <figure>
          <img className="w-3/4 rounded-lg" src={detail.image} alt="class" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center items-center">
            <div>
            <h2 className="card-title font-semibold lg:text-4xl lg:mb-5">
            {detail.title}
          </h2>
          
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
            <h2>{detail.rating}</h2>
          </div>
            </div>
          </div>
          <p className="text-slate-500 lg:text-xl">{detail.details}</p>
          <div className="card-actions justify-center">
            <button
              className="btn mt-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white "
              data-aos="zoom-in"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCardDetails;
