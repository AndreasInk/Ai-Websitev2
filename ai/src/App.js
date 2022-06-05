import logo from './logo.svg';
import React from 'react'
import './App.css';

import Landing from './Componets/Landing';
import Innovator from './Componets/Innovator';
import Speed from './Componets/Speed';
import Dev from './Componets/Dev';
import Footer from './Componets/Footer';
function App() {
  return (
    <div className="App">
      <Landing/>
      <Innovator/>
      
      <Speed/>
      <Dev/>
      <Footer/>
    </div>
  );
}

export default App;
