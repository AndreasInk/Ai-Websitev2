import React from 'react'
import './speed.css';
import AppShowCase from './AppShowCase';
import Apps from './Apps';
import './dev.css'
import Cer from '../res/Cer.png'
import Vit from '../res/Vit.png'
function Dev() {
  return (
    <div className="Innovator">
         <div className="Laptop">
      {/* <Suspense fallback={null}>
      <Laptop/>
      
      </Suspense> */}
     
      </div>
        <h1 className='ino-header'>Decorated Developer</h1>
        <h2 className='subheader'>Andreas develops high quality software and has a track record to prove it </h2>
   <AppShowCase/>
   <div  className='showcase-div'> 
  <h1 style={{marginTop: "2em"}}>What's Next?</h1>
      <img className="showcase" src={Cer}></img>
      <a href='https://cerebellia.com'>
   <h2>Cerebellia</h2>
   </a>
      </div>
      <div  className='showcase-div'> 
      
      <img className="showcase" src={Vit}></img>
      <a href='https://vito-website.vercel.app'>
      <h2>Vito</h2>
      </a>
      
      </div>
      </div>
  );
}

export default Dev;
