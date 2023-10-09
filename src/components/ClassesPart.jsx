import PropTypes from "prop-types";

import Cards from "./Cards";

const ClassesPart = ({card}) => {
    // console.log(card)
    
    // const { picture, title, rating, price, what_to_learn, id } = {card} ;
    return (
        <div>
             <div className="gap-5 m-4 Lg:p-6">
                
                <Cards key={card.id} card={card}></Cards>
            </div>
        </div>
    );
};

export default ClassesPart;

ClassesPart.propTypes = {
    card: PropTypes.node,
  };