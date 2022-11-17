import React from 'react'
import './ButtonForm.scss'

const ButtonForm = ({ text, cb }) => {
    return (
        <button type='submit' className="button" onClick={cb}>
            {text}
        </button>
    )
}

export default ButtonForm