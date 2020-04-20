import React, { Component } from 'react'
import Buttons from './Buttons'
import style from './ButtonPanel.module.css'
class ButtonPanel extends Component {

    clickHandler = (name) =>{
        this.props.handleClick(name)
    }
    render() {
        return (
            <div>
                <div className={style.row}>
                    <Buttons handleClick={this.clickHandler} buttonName={"AC"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"+/-"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"%"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"÷"} />
                </div>
                <div className={style.row}>
                    <Buttons handleClick={this.clickHandler} buttonName={"7"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"8"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"9"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"x"} />
                </div>
                <div className={style.row}>
                    <Buttons handleClick={this.clickHandler} buttonName={"4"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"5"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"6"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"-"} />
                </div>
                <div className={style.row}>
                    <Buttons handleClick={this.clickHandler} buttonName={"1"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"2"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"3"} />
                    <Buttons handleClick={this.clickHandler} buttonName={'+'} />
                </div>
                <div className={style.row}>
                    <Buttons handleClick={this.clickHandler} buttonName={"0"} />
                    <Buttons handleClick={this.clickHandler} buttonName={"."} />
                    <Buttons handleClick={this.clickHandler} buttonName={"="} />
                </div>
            </div>
        )
    }
}

export default ButtonPanel
