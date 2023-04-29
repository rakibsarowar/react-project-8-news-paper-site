import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

// Step 01-----------------------------------
export const authContext = createContext(null);

// Step 04 ---------------------------------------
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // Step 08.2 -------- Get Current User data ------------------------------
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // step 5 ------------------------------------

    // step 6 ------------sign up - auth form firebase ----------------------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // step 7 ------------Log in - auth form firebase ----------------------
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Step 09 --------Log out --------------------------------------------
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // Step 08 -------- Get Current User data ------------------------------
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log('logged User found')
            setUser(loggedUser)
            setLoading(false);
        })
        return() => {
            unSubscribe();
        }
    },[])

    // Step 02 -----------------------------
    const authInfo = {
        user,
        loading,
        createUser,
        signIn, 
        logOut
    };


    // Step 03 ------------------------------- add children
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;