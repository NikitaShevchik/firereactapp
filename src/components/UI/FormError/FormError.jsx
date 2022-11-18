import React from 'react'
import { BiError } from 'react-icons/bi'
import './FormError.scss'

const FormError = ({ text }) => {
    return (
        <div className="error">
            <div className="error__icon"><BiError /></div>
            <div className="error__text">{text}</div>
        </div>
    )
}

export default FormError