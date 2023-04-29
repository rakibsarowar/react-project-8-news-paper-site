import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

// Step 01-----------------------------------
export const authContext = createContext(null);

// Step 04 ---------------------------------------
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // step 5 ------------------------------------
    const user = null

    // step 6 ------------sign up - auth form firebase ----------------------
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    // step 7 ------------Log in - auth form firebase ----------------------
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Step 02 -----------------------------
    const authInfo = {
        user,
        createUser,
        signIn
    };


    // Step 03 ------------------------------- add children
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;