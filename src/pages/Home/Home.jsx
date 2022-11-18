import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import BlackSquare from '../../components/UI/BlackSquare/BlackSquare'
import './Home.scss'


import PropTypes from "prop-types";
import { useLocation, withRouter } from "react-router";

const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='home'>
            <BlackSquare transform={location.pathname === '/login' ? 66.66 : 0
                || location.pathname === '/signup' ? 0 : 66.66
                    || location.pathname === '/' ? 0 : 66.66}
                width={location.pathname === '/' ? 100 : 60} />
            <Outlet />
        </div>
    )
}

export default Home