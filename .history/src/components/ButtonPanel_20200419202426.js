import React, { Component } from 'react'
import Buttons from './Buttons'
import style from './ButtonPanel.module.css'
class ButtonPanel extends Component {
    render() {
        return (
            <div>
                <div className={style.row}>
                    <Buttons buttonName={"AC"} />
                    <Buttons buttonName={"+/-"} />
                    <Buttons buttonName={"%"} />
                    <Buttons buttonName={"/"} />
                </div>
                <div className="row">
                    <Buttons buttonName={"7"} />
                    <Buttons buttonName={"8"} />
                    <Buttons buttonName={"9"} />
                    <Buttons buttonName={"X"} />
                </div>
                <div className="row">
                    <Buttons buttonName={"4"} />
                    <Buttons buttonName={"5"} />
                    <Buttons buttonName={"6"} />
                    <Buttons buttonName={"-"} />
                </div>
                <div className="row">
                    <Buttons buttonName={"1"} />
                    <Buttons buttonName={"2"} />
                    <Buttons buttonName={"3"} />
                    <Buttons buttonName={'+'} />
                </div>
                <div className="row">

                    <Buttons buttonName={"0"} />
                    <Buttons buttonName={"."} />
                    <Buttons buttonName={"="} />
                </div>
            </div>
        )
    }
}

export default ButtonPanel
