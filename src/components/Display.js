import React from 'react'
import style from './Display.module.css';
function Display({text}) {
    return (
        <div className={style.display__container}>
            <div className={style.display__text}>{text}</div>
        </div>
    )
}

export default Display

