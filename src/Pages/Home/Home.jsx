import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ClassesPart from "../../components/ClassesPart";
import Suggestion from "../../components/Suggestion";
import Header from "../SharedPage/Header/Header";

import { useLoaderData } from "react-router-dom";

const Home = () => {
  const cardsData = useLoaderData()
  return (
    <div>
      
      
      <Banner></Banner>
      <Suggestion></Suggestion>
      <div>
      <div className=" flex flex-col items-center justify-center item-center mx-auto ">
                
                <h2 className="font-semibold lg:text-5xl text-lg text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500 my-4 ">Featured Classes</h2>
                
                <h2 className="text-xl mt-2 mb-6">ONLY THE GREATEST MINDS</h2>
                <hr />
            </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
        {
          cardsData?.map(card => <ClassesPart key={card.id} card={card}></ClassesPart>)
        }
        </div>
      </div>
      {/* <ClassesPart></ClassesPart> */}



      <Footer></Footer>
      
    </div>
  );
};

export default Home;
