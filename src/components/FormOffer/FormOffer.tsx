import React from 'react'
import { Link } from 'react-router-dom';
import { FormOfferProps } from '../../types/types';
import './FormOffer.scss'

const FormOffer = ({ text, linkText, path }: FormOfferProps) => {
    return (
        <div className="offer">
            {text} <Link to={path}>{linkText}</Link>
        </div>
    )
}

export default FormOffer;