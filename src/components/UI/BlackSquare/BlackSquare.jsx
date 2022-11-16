import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonsWelcome from '../Buttons/ButtonsWelcome/ButtonsWelcome'
import './BlackSquare.scss'

const BlackSquare = ({ transform, width }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const trans = {
        transform: `translate(${transform}%, 0)`,
        width: `${width}%`
    }
    return (
        <div className="logo" style={trans}>
            <span>
                Build Simple React App With
                <a className="logo__link" onClick={() => navigate('/login')}> Sign In</a> /
                <a className="logo__link" onClick={() => navigate('/signup')}> Sign Up</a> /
                <a className="logo__link" onClick={() => navigate('/')}> Logout</a> functionality
            </span>
            {location.pathname === '/'
                &&
                <div className="logo__buttons">
                    <ButtonsWelcome text={'Log In'} cb={() => navigate('/login')} />
                    <ButtonsWelcome text={'Sign Up'} cb={() => navigate('/signup')} />
                </div>
            }
        </div >
    )
}

export default BlackSquare