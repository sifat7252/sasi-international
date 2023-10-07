import Header from "../SharedPage/Header/Header";
import Navbar from "../SharedPage/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-5xl">This is home page</h2>
        </div>
    );
};

export default Home;