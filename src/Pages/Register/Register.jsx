import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';



const Register = () => {
    const [showPasswordIcon, setShowPasswordIcon] = useState(false);
    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleRegister = e =>{
        

        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.checkbox.checked;
        // console.log(name, email, password)

      

    // :: CONDITION FOR PASSWORD LENGTH , UPPERCASE-LOWERCASE , AND CHECKED TICKED ::::

    if (password.length < 6) {
      setRegisterError("Password should be At least 6 character");
      swal("Opps !!", registerError, "error");
      return;    
    }
    else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
      setRegisterError("Password Should at least one Uppercase, lowercase and number");
      swal("Opps !!", registerError, "error");
      return;
    } 
    else if (!accepted) {
      setRegisterError("You must be checked out term and policies");
      swal("Opps !!", registerError, "error");
      return;
    }

        // :: CREATING NEW USER WITH EMAIL AND PASSWORD ::
        createUser(email, password)
        .then(result => {
          setSuccessMessage("New User Created Successfully")
          console.log(result.user)
          swal("Congratulation !!", successMessage , "success");
        })
        .catch(error =>{
          console.error(error)
          setRegisterError(error.message);
          swal("Opps !!", registerError, "error");
        })
        
          


    }
    return (
        <div>
            
            <div className="flex justify-center items-center mt-8">
      <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Sign Up
        </h4>
        <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          Enter your details to register.
        </p>
        <form onSubmit={handleRegister} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="text"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-fuchsia-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                 name="name" required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-fuchsia-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-fuchsia-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-fuchsia-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="text"
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-fuchsia-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                 name="photoUrl" id="photoUrl"
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-fuchsia-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-fuchsia-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-fuchsia-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Photo Url
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input type="email "
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-fuchsia-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                 name= "email" required
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-fuchsia-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-fuchsia-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-fuchsia-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type={showPasswordIcon ? "text" : "password"}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-fuchsia-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                 name="password" required
              />
              <span onClick={()=> setShowPasswordIcon(!showPasswordIcon)} className="absolute right-2 top-3">{showPasswordIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-fuchsia-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-fuchsia-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-fuchsia-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>
          </div>
          <div className="inline-flex items-center">
            <label
              className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              htmlFor="checkbox"
              data-ripple-dark="true"
            >
              <input
                type="checkbox" name="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-fuchsia-500 checked:bg-fuchsia-500 checked:before:bg-fuchsia-500 hover:before:opacity-10"
                id="checkbox"
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              className="mt-px cursor-pointer select-none font-light text-gray-700"
              htmlFor="checkbox"  name="checkbox" id="checkbox" 
            >
              <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                I agree the
                <Link
                  className="font-medium transition-colors hover:text-fuchsia-500"
                  
                >
                  &nbsp;Terms and Conditions
                </Link>
              </p>
            </label>
          </div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-fuchsia-500/20 transition-all hover:shadow-lg hover:shadow-fuchsia-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Register
          </button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Already have an account?
            <Link to='/login'>
            <button
              className="btn-link font-medium text-fuchsia-500 transition-colors hover:text-blue-700"
              
            >
              Log In
            </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Register;