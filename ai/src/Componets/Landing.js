import React from 'react'
import land from '../res/Mock.svg';
import './landing.css';

function Landing() {
  return (
    <div className="Landing">
       <div className="Stack">
         
           <h1 className="Header">Andreas Ink</h1>
           <h3 className="subheader">Talented Dev Who Loves To Develop Innovative Solutions </h3>
          
       </div>
    <img src={land} className="Land" alt="Desktop Image" />
    </div>
  );
}

export default Landing;
