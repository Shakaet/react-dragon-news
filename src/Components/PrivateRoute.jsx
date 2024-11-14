import React, { useContext } from 'react';
import { AuthContext } from './Provider';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

const PrivateRoute = ({children}) => {

    let {user,loading}= useContext(AuthContext)

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
    return (
        <div>
            <Navigate to="/auth/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;