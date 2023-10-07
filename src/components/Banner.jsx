
import banner1 from "./../assets/banner1.jpg"
import banner2 from "./../assets/banner2.jpg"
import banner3 from "./../assets/banner3.jpg"
import banner4 from "./../assets/banner4.jpg"



const Banner = () => {
    return (
        <div className=" ">
           <div className="carousel w-full rounded-lg">
  <div id="item1" className="carousel-item w-full  bg-image1 relative"> 
   
  <img src={banner1} className="w-full" /> 
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item4" className="btn btn-circle">❮</a> 
      <a href="#item2" className="btn btn-circle">❯</a>
    </div>
</div> 
  <div id="item2" className="carousel-item w-full bg-image2 relative">
    <img src={banner2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item1" className="btn btn-circle">❮</a> 
      <a href="#item3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="item3" className="carousel-item w-full bg-image3 relative">
    <img src={banner3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item2" className="btn btn-circle">❮</a> 
      <a href="#item4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="item4" className="carousel-item w-full bg-image4 relative">
    <img src={banner4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#item3" className="btn btn-circle">❮</a> 
      <a href="#item1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> 

<div className=" relative -mt-12 lg:-mt-28 md:-mt-24 flex justify-center w-full rounded-md py-1 gap-6 ">
  <a href="#item1" className="btn btn-sm lg:btn-md text-blue-500 bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-full">1</a> 
  <a href="#item2" className="btn btn-sm lg:btn-md text-blue-500 bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-full">2</a> 
  <a href="#item3" className="btn btn-sm lg:btn-md text-blue-500 bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-full">3</a> 
  <a href="#item4" className="btn btn-sm lg:btn-md text-blue-500 bg-gradient-to-r from-violet-300 to-fuchsia-300 rounded-full">4</a>
</div>
        </div>
        
    );
};

export default Banner;