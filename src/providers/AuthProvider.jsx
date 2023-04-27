import React, { createContext } from 'react';

// Step 01-----------------------------------
export const authContext = createContext(null);

const AuthProvider = () => {

    // Step 02 -----------------------------
    const authInfo = {
        
    };

    return (
        <authContext.Provider value={authInfo}>
            
        </authContext.Provider>
    );
};

export default AuthProvider;