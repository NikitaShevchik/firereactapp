import React from 'react'
import './Input.scss'

const Input = ({ icon, placeholder, type, state, setState }) => {
    return (
        <div className="input">
            <div className="input__content">
                <div className="input__icon">
                    {icon}
                </div>
                <input type={type} placeholder={placeholder} className="input__item" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
        </div>
    )
}

export default Input;