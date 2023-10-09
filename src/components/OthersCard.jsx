import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const OthersCard = ({ cardData }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={cardData.image} alt="image" />
        </figure>
        <div className="card-body relative top-40 lg:top-36">
          <Link to={`/otherCardDetails/${cardData.id}`}>
            <h2 className="card-title hover:bg-blue-500 ">{cardData.title}</h2>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default OthersCard;
OthersCard.propTypes = {
    cardData: PropTypes.node,
    
  };