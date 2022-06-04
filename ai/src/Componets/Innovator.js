import React from 'react'
import land from '../res/Mock.svg';
import './innovator.css';
import { Suspense } from 'react';
import Laptop from './Laptop';
import Apps from './Apps';
import Speed from './Speed';
function Innovator() {
  return (
      
    <div className="Innovator">
        <h1 className='ino-header'>Ink Innovates</h1>
        <h3 className='subheader'>Andreas is an innovator, develops amazing apps, websites, and products.</h3>
     <div className="Laptop">
      <Suspense fallback={null}>
      <Laptop/>
      
      </Suspense>
     
      </div>
      <Apps/>
      
      </div>
     
  );
}

export default Innovator;
