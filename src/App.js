import React from 'react';
import './App.css';
import Svg from './Svg'

function App() {
    console.log(window.innerWidth, window.innerHeight)
  return (
    <div className="App">
      <header className="App-header">
      <Svg/>
      </header>
    </div>
  );
}

export default App;
