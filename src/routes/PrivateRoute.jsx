import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    console.log(loading);
    const location = useLocation();
    if(loading){
        return (
            <div className='d-flex justify-content-center  my-5'>
                <Spinner animation="border" variant="success"/>
            </div>
        )
    }
    if(user) {
        return children;
    }

   return <Navigate to="/login" state={{from: location}} replace/>
};

export default PrivateRoute;