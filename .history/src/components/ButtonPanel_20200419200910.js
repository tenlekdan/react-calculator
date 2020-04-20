import React, { Component } from 'react'
import Buttons from './Buttons'

class ButtonPanel extends Component {
    render() {
        return (
            <div>
                <Buttons buttonName={"0"}/>
                <Buttons buttonName={"1"}/>
                <Buttons buttonName={"2"}/>
                <Buttons buttonName={"3"}/>
                <Buttons buttonName={"4"}/>
                <Buttons buttonName={"5"}/>
                <Buttons buttonName={"6"}/>
                <Buttons buttonName={"7"}/>
                <Buttons buttonName={"8"}/>
                <Buttons buttonName={"9"}/>
            </div>
        )
    }
}

export default ButtonPanel
