import icon1 from "../assets/icon-expand.png"
import icon2 from "../assets/icon-develop.png"
import icon3 from "../assets/icon-invest.png"
import icon4 from "../assets/icon-learn.png"

const Suggestion = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mx-4 gap-3">
                <div >
                   <div className="card h-80 lg:h-96 mt-20  mb-6 p-4 text-center items-center  justify-center shadow-xl ">
                   <img src={icon1} alt="" className="mb-8 items-center mx-auto" />
                   <h2 className="text-2xl font-medium">Expand Knowledge</h2>
                    <p className="text-xs  text-slate-500">Without getting proper knowledge you can to serve the future. So gether your knowledge from here.</p>
                   </div>
                   <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">1</h2>
                    <hr  />
                   </div>
                   
                </div>
                <div >
                   <div className="card h-80 lg:h-96 mt-20  mb-6 p-4 text-center items-center  justify-center shadow-xl ">
                   <img src={icon2} alt="" className="mb-8 items-center mx-auto" />
                   <h2 className="text-2xl font-medium">Develop Your Skill</h2>
                    <p className="text-xs  text-slate-500">Getting skill is always need for your future. You do not get proper chance if you not gether skills.</p>
                   </div>
                   <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">1</h2>
                    <hr  />
                   </div>
                   
                </div>
                <div >
                   <div className="card h-80 lg:h-96 mt-20  mb-6 p-4 text-center items-center  justify-center shadow-xl ">
                   <img src={icon3} alt="" className="mb-8 items-center mx-auto" />
                   <h2 className="text-2xl font-medium">Invest Time</h2>
                    <p className="text-xs  text-slate-500"> Time is more value full intensive our life ! If we can ensure proper use of it then ist will give us the power of time.     </p>
                   </div>
                   <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">1</h2>
                    <hr  />
                   </div>
                   
                </div>
                <div >
                   <div className="card h-80 lg:h-96 mt-20  mb-6 p-4 text-center items-center  justify-center shadow-xl ">
                   <img src={icon4} alt="" className="mb-8 items-center mx-auto" />
                   <h2 className="text-2xl font-medium">Learn Yourself</h2>
                    <p className="text-xs  text-slate-500">Practice makes a men perfect. If you practice more and more with yourself then you can do something in your entered life. In this web site you can learn by yourself so easily.</p>
                   </div>
                   <div className="relative -ml-20 mt-40 w-14 hover:divide-amber-400">
                    <h2 className="text-8xl   text-slate-200">1</h2>
                    <hr  />
                   </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default Suggestion;