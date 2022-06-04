import logo from './logo.svg';
import React from 'react'
import './App.css';

import Landing from './Componets/Landing';
import Innovator from './Componets/Innovator';
import Speed from './Componets/Speed';
import Dev from './Componets/Dev';
function App() {
  return (
    <div className="App">
      <Landing/>
      <Innovator/>
      
      <Speed/>
      <Dev/>
    </div>
  );
}

export default App;
