import React from 'react'
import style from './Buttons.module.css';
function Buttons({buttonName}) {
    return (
        <div>
            <button>{buttonName}</button>
        </div>
    )
}

export default Buttons
