import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Components/nav';

const Auth = () => {
    return (
        <div className='poppins-regular'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;