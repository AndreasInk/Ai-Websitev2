
import React from 'react'
import './apps.css';
import Appz from "../res/Mock.svg"
function Apps() {
  return (
    <div className="section apps" id="apps">

    
   
    
    <div className="apps-feature">
      <div className="apps-feature-cell">
          <div className='app-feature-img-div'>
        <img alt="icon" className="apps-feature-img " src={Appz} />
        </div>
        <h3 className="apps-feature-header">Background Processing</h3>
        <caption className="apps-feature-caption">
          A remarkably convenient algorithm that can run when the app is
          closed to alert you of stress events such as infection
        </caption>
      </div>
    
      <div className="apps-feature-cell">
          <div className='app-feature-img-div'>
        <img alt="icon" className="apps-feature-img " src={Appz} />
        </div>
        <h3 className="apps-feature-header">Background Processing</h3>
        <caption className="apps-feature-caption">
          A remarkably convenient algorithm that can run when the app is
          closed to alert you of stress events such as infection
        </caption>
      </div>

      <div className="apps-feature-cell">
          <div className='app-feature-img-div'>
        <img alt="icon" className="apps-feature-img " src={Appz} />
        </div>
        <h3 className="apps-feature-header">Background Processing</h3>
        <caption className="apps-feature-caption">
          A remarkably convenient algorithm that can run when the app is
          closed to alert you of stress events such as infection
        </caption>
      </div>
    </div>
    </div>
  );
}

export default Apps;

