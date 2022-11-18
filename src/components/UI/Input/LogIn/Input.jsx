import React from 'react'
import { useState } from 'react'
import '../Input.scss'

const Input = ({ icon, placeholder, type, maxLength, state, setState }) => {
    const [active, setActive] = useState(false);

    return (
        <div className="input" style={{ borderColor: `${active ? 'black' : 'transparent'}` }} >
            <div className="input__content">
                <div className="input__icon">
                    {icon}
                </div>
                <input type={type} onFocus={() => setActive(true)} onBlur={() => setActive(false)} maxLength={maxLength} value={state} onChange={(e) => setState(e.target.value)} placeholder={placeholder} className="input__item" />
            </div>
        </div >
    )
}

export default Input;