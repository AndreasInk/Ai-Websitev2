import React from 'react'
import './speed.css';

import Apps from './Apps';
function Dev() {
  return (
    <div className="Innovator">
         <div className="Laptop">
      {/* <Suspense fallback={null}>
      <Laptop/>
      
      </Suspense> */}
     
      </div>
        <h1 className='ino-header'>Decorated Developer</h1>
        <h2 className='subheader'>Andreas is an innovator, develops amazing apps, websites, and products.</h2>
    
      <Apps/>
      
      </div>
  );
}

export default Dev;
