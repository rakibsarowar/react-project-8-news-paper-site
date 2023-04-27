import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

// Step 01-----------------------------------
export const authContext = createContext(null);

// Step 04v ---------------------------------------
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    // step 5 ------------------------------------
    const user = null

    // Step 02 -----------------------------
    const authInfo = {
        user
    };

    // Step 03 ------------------------------- add children
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;