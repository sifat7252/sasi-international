import { Link } from "react-router-dom";

const Navbar = () => {

    const navLinks = 
    <>
    <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link to={"/"} className="flex items-center">
                  Home
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link to={"/classes"} className="flex items-center">
                  Classes
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link to={"/courses"} className="flex items-center">
                  Courses
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link to={"/pages"} className="flex items-center">
                  Pages
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link to={"/contact"} className="flex items-center">
                  Contact
                </Link>
              </li>
    </>
  return (
    <div>
      
      
      <div className="navbar bg-base-100 sticky shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-4 lg:py-2  border  bg-opacity-80 py-2 px-4 text-black inset-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl">SaSi International</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
      <div className="mx-auto max-w-screen-md py-8 border">
          <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border border shadow-md">
            
          </div>
          
        </div>
    </div>
  );
};

export default Navbar;