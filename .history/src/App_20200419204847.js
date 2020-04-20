import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Display text={"This is the display"} />
        <ButtonPanel />
      </div>
    )
  }
}

export default App

