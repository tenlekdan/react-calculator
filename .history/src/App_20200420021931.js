import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import calculate from './logic/calculate.js'
import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      total: null,
      next: null,
      operation: null
    }

  }

  clickHandler = (name) => {
    console.log(name);
    this.setState(calculate(this.setState, name))
  }

  render() {
    return (
      <div className="App">
        <Display text={this.state.next || this.state.total || "0"} />
        <ButtonPanel handleClick={this.clickHandler} />
      </div>
    )
  }
}

export default App

