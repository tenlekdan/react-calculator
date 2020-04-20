import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)


  }

  clickHandler = (name) => {
    console.log(name);
  }
  
  render() {
    return (
      <div className="App">
        <Display text={"This is the display"} />
        <ButtonPanel handleClick={this.clickHandler} />
      </div>
    )
  }
}

export default App

