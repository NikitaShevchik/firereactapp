import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>Home</div>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Home