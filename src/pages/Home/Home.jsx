import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import BlackSquare from '../../components/UI/BlackSquare/BlackSquare'
import { Navigate, useLocation } from "react-router";
import './Home.scss'
import { userInfo } from '../../redux/reducers/userReducer.tsx';

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
            <div className='home'>
                <div style={{ fontSize: "100px", color: "#fff", position: "absolute", zIndex: "100" }}>gf{email}</div>
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