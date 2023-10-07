

import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Suggestion from "../../components/Suggestion";
import Header from "../SharedPage/Header/Header";
import Navbar from "../SharedPage/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border border shadow-md">
            <Banner ></Banner>
            <Suggestion></Suggestion>

            </div>
            
            <h2 className="text-5xl">This is home page</h2>
            <Footer></Footer>
        </div>
    );
};

export default Home;