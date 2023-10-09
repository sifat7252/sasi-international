import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  // console.log(category)
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={category.image} alt="Shoes" />
        </figure>
        <div className="card-body relative top-40 lg:top-36">
          <Link to={`/otherCardDetails/${category.id}`}>
            <h2 className="card-title ">{category.title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
Categories.propTypes = {
  category: PropTypes.node,
};
