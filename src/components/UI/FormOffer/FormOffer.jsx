import React from 'react'
import './FormOffer.scss'

const FormOffer = ({ text, linkText, cb }) => {
    return (
        <div className="offer">
            {text} <a onClick={cb}>{linkText}</a>
        </div>
    )
}

export default FormOffer;