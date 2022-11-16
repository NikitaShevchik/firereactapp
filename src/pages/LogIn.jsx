import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>Login</div>
            <button onClick={() => navigate('/')}>Back to home</button>
        </div>
    )
}

export default LogIn