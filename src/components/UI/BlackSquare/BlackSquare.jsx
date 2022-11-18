import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
            Build Simple react app with sign in/ sign up/ logout functionality
            {location.pathname === '/'
                &&
                <div className="logo__buttons">
                    <button className='logo__buton' onClick={() => navigate('/login')}>Log In</button>
                    <button className='logo__buton' onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
            }
        </div >
    )
}

export default BlackSquare