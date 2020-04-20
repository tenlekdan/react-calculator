import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

function App() {
  return (
    <div className="App">
      <Display text={"This is the display"} />
     <ButtonPanel />
    </div>
  );
}

export default App;
