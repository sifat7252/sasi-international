import { Link } from "react-router-dom";
import userDefaultPic from "../../../assets/user-removebg-preview.png"
import swal from 'sweetalert';
import mainLogoColor from "./../../../assets/mainLogoWithColor-removebg-preview.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const {user, logOut } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const handelLogOut = () => {
    logOut()
    .then(result =>{
      console.log(result.user)
      setSuccessMessage("Log Out SuccessFully")
      swal("Congratulation !!", 'Log Out Successful' || successMessage , "success");
    })
    .catch(error=>{
      console.error(error)
      setErrorMessage("You are Logged out " )
      swal("Opps !!", "You are Logged out " || errorMessage , "error");
    })

  }



    const navLinks = 
    <>
    <li className="block p-1 font-sans text-sm md:text-base lg:text-xl text-black lg:font-semibold md:font-medium font-normal  leading-normal  antialiased text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <Link to={"/"} className="flex items-center">
                  Home
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm lg:text-xl text-black lg:font-semibold font-normal leading-normal text-inherit antialiased">
                <Link to={"/categories"} className="flex items-center">
                  Categories
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm lg:text-xl text-black lg:font-semibold font-normal leading-normal  antialiased text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <Link to={"/courses"} className="flex items-center">
                  Courses
                </Link>
              </li>
              {/* <li className="block p-1 font-sans text-sm lg:text-xl text-black lg:font-semibold font-normal leading-normal text-inherit antialiased">
                <Link to={"/classes"} className="flex items-center">
                  Classes
                </Link>
              </li> */}
              
              
              {
                user && 
                <>             
              
              <li className="block p-1 font-sans text-sm lg:text-xl text-black lg:font-semibold font-normal leading-normal  antialiased text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <Link to={"/pages"} className="flex items-center">
                  Pages
                </Link>
              </li>
                </>
              }
              <li className="block p-1 font-sans text-sm lg:text-xl text-black lg:font-semibold font-normal leading-normal text-inherit antialiased">
                <Link to={"/contact"} className="flex items-center">
                  Contact
                </Link>
              </li>
              {
                !user &&  <li className="block p-1 font-sans text-sm lg:text-xl text-black lg:font-semibold font-normal leading-normal  antialiased text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <Link to={"/register"} className="flex items-center">
                  Register
                </Link>
              </li>
              }
    </>
  return (
    <div>
      
      
      <div className="navbar rounded-lg bg-blue-100 sticky shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-4 lg:py-2  border  bg-opacity-80 py-1 px-3 text-black inset-0 z-10">
        <div className="navbar-start">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          {/* <a className=" btn btn-ghost  normal-case lg:text-4xl text-lg font-bold text-transparent bg-clip-text   bg-gradient-to-r from-violet-500 to-fuchsia-500">SaSi International</a> */}
          <div className=" flex  item-center">
            <img className=" h-18 w-48 text-transparent bg-clip-text  font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 " src={mainLogoColor} alt="" />
            </div>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
             <>
             <div className="lg:w-10 w-7 rounded-full lg:mr-4 mr-2 ">
          <img src={userDefaultPic} />
        </div>
        <Link onClick={handelLogOut} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-violet-400 to-fuchsia-400 text-white">LogOut</Link>

            </> :
             <Link to={'/login'} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-violet-400 to-fuchsia-400 text-white">LogIn</Link>
          }

        
         
        </div>
      </div>
      {/* <div className="mx-auto max-w-screen-md py-8 border">
          <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border border shadow-md">
            
          </div>
          
        </div> */}
    </div>
  );
};

export default Navbar;
