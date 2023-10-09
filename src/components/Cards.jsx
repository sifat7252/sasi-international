import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ card }) => {
    // console.log(card.title)
  return (
    <div>
      <div className="course-cards">
        <div className="card   bg-base-100 shadow-xl">
          <figure className="">
            <img className="lg:h-[300px] w-full" src={card.picture} alt="class" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{card.title}</h2>
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
              <h2>{card.rating}</h2>
            </div>
            <ul>
              <ol className="text-lg text-slate-400">
                <li>{card.what_to_learn}</li>
              </ol>
            </ul>
            <hr />
            <div className="card-actions justify-between items-center">
              <h2 className="text-lg font-semibold">
                Price: <span className="text-sky-600">{card.price}</span>$
              </h2>

              <Link to={`/class/${card.id}`}>
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

export default Cards;

Cards.propTypes = {
    card: PropTypes.node,
    
  };
