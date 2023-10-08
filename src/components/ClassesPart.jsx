import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const ClassesPart = ({card}) => {
    // console.log(card)
    
    // const { picture, title, rating, price, what_to_learn, id } = {card} ;
    return (
        <div>
             <div className="grid grid-cols-4">
                
                <Cards key={card.id} card={card}></Cards>
            </div>
        </div>
    );
};

export default ClassesPart;

ClassesPart.propTypes = {
    card: PropTypes.node,
  };