import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../Firebase/firebase.config";

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // :::: CREATING NEW USER::::
    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password)
    } 

    // ::: SIGN IN WITH EMAIL AND PASSWORD :::
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ::: LOG OUT BUTTON HANDLER :::
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // ::   AUTHENTICATION PROVIDERS   ::
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


    // ::: GOOGLE SIGN IN METHOD :::
    const googleLogIn = () =>{
        setLoading(true);
      return  signInWithPopup(auth, googleProvider)
    }
    // ::: GITHUB SIGN IN METHOD :::
    const githubLogIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }



    // :::: OBSERVE THE AUTH CHANGED :::
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])



    


    


    

    const authInfo = { user, createUser, signIn, logOut, loading, googleLogIn, githubLogIn }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
    
  };