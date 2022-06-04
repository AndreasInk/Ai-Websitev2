import React from 'react'
import './speed.css';
import Laptop from './Laptop';
import { Suspense } from 'react';
import Apps from './Apps';
function Speed() {
  return (
    <div className="Innovator">
         <div className="Laptop">
      {/* <Suspense fallback={null}>
      <Laptop/>
      
      </Suspense> */}
     
      </div>
        <h1 className='ino-header'>Speedy Success</h1>
        <h2 className='subheader'>Andreas is an innovator, develops amazing apps, websites, and products.</h2>
    
      <Apps/>
      
      </div>
  );
}

export default Speed;
