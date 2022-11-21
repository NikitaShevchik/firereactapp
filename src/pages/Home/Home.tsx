import React, { useState } from 'react';
import { Navigate, useLocation } from "react-router";
import { Outlet } from 'react-router-dom';
import BlackSquare from '../../components/BlackSquare/BlackSquare';
import { userInfo } from '../../redux/reducers/userReducer';

const Home = () => {
    const location = useLocation()

    const [email, setEmail] = useState(userInfo.getState().email)
    function emailSub() {
        setEmail(userInfo.getState().email)
    }
    userInfo.subscribe(emailSub)

    return email ?
        <Navigate to="/main" />
        :
        (
            <div >
                <BlackSquare transform={location.pathname === '/login' ? 66.66 : 0
                    || location.pathname === '/signup' ? 0 : 66.66
                        || location.pathname === '/' ? 0 : 66.66
                }
                    width={location.pathname === '/' ? 100 : 60} />
                <Outlet />
            </div >
        )
}

export default Home