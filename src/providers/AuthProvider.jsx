import React, { createContext } from 'react';

// Step 01-----------------------------------
export const authContext = createContext(null);

const AuthProvider = (children) => {

    // Step 02 -----------------------------
    const authInfo = {
        
    };

    // Step 03 ------------------------------- add children
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;