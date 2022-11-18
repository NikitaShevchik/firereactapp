import React from 'react'
import './ButtonsWelcome.scss'

const ButtonsWelcome = ({ text, cb }) => {
    return (
        <button className='buttonwelcome' onClick={cb}>{text}</button>
    )
}

export default ButtonsWelcome;