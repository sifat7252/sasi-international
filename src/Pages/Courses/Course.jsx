import { Link } from "react-router-dom";
import PropTypes from "prop-types";




const Course = ({data}) => {
    console.log(data)
    return (
        <div>
            <div className="course-cards">
        <div className="card   bg-base-100 shadow-xl">
          {/* <figure className="">
            <img className="lg:h-[300px] w-full" src={data.picture} alt="class" />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title text-2xl text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500">{data.title}</h2>
            <div className="flex gap-3 items-center">
              <div className="rating rating-md">
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
            <ul>
              <ol className="text-lg text-slate-400">
                <li>{data.what_to_learn}</li>
              </ol>
            </ul>
            <hr />
            <div className="card-actions justify-between items-center">
              <h2 className="text-lg font-semibold">
                Price: <span className="text-sky-600">{data.price}</span>$
              </h2>

              <Link to={`/class/${data.id}`}>
                <button className="btn btn-link text-sky-600">
                  View Details{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Course;
Course.propTypes = {
    data: PropTypes.node,
    
  };