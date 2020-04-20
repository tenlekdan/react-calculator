import React from 'react'
import style from './Buttons.module.css';
function Buttons({buttonName, handleClick}) {

    const clickHandler = () => {
        handleClick(buttonName);
    }
    return (
        <div>
            <button onClick={clickHandler}>{buttonName}</button>
        </div>
    )
}

export default Buttons
