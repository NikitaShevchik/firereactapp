import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { userInfo } from '../../redux/reducers/userReducer.tsx'
import './Main.scss'

const Main = () => {
    const [email, setEmail] = useState(userInfo.getState().email)
    function emailSub() {
        setEmail(userInfo.getState().email)
        console.log(email)
    }
    userInfo.subscribe(emailSub)

    return email ?
        (
            <div className='main'>
                {email}
                <button onClick={() => userInfo.dispatch({ type: 'REMOVE_USER' })}>Log out</button>
            </div>
        )
        :
        <Navigate to="/" />
}

export default Main