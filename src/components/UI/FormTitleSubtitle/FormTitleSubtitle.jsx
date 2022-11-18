import React from 'react'
import './FormTitleSubtitle.scss'

const FormTitleSubtitle = ({ title, subtitle }) => {
    return (
        <div className="text">
            <div className="text__title">
                {title}
            </div>
            <div className="text__subtitle">
                {subtitle}
            </div>
        </div>
    )
}

export default FormTitleSubtitle