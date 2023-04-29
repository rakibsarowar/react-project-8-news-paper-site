import React from 'react';
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    // step 01 ------------------------
    const {user} = useContext(authContext);

    // step 02 --------- get back same place after login ---------------
    const location = useLocation();
    console.log(location)
    

    //2---------------
    if(user){
        return children;
    }
    return <Navigate state={location} to="/login" replace></Navigate>
};

export default PrivateRoute;