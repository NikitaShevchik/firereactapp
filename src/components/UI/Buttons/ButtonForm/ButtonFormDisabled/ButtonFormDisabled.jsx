import React from 'react'
import '../ButtonForm.scss'

const ButtonFormDisabled = ({ text }) => {
    return (
        <button disabled type='submit' className="button _disabled" >
            {text}
        </button>
    )
}

export default ButtonFormDisabled;