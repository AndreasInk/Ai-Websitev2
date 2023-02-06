
import React from 'react'
import './apps.css';
function Apps(props) {
  return (
    <div className="section apps" id="apps">

    
   
    
    <div className="apps-feature">
      <div className="apps-feature-cell">
          <div className='app-feature-img-div'>
        <img alt="icon" className="apps-feature-img " src={props.app1.img} />
        </div>
        <h3 className="apps-feature-header">{props.app1.header}</h3>
        <caption className="apps-feature-caption">
       {props.app1.caption}
        </caption>
      </div>
    
      <div className="apps-feature-cell">
          <div className='app-feature-img-div'>
        <img alt="icon" className="apps-feature-img " src={props.app2.img} />
        </div>
        <h3 className="apps-feature-header">{props.app2.header}</h3>
        <caption className="apps-feature-caption">
       {props.app2.caption}
        </caption>
      </div>
      <div className="apps-feature-cell">
          <div className='app-feature-img-div'>
        <img alt="icon" className="apps-feature-img " src={props.app3.img} />
        </div>
        <h3 className="apps-feature-header">{props.app3.header}</h3>
        <caption className="apps-feature-caption">
       {props.app3.caption}
        </caption>
      </div>
    </div>
    </div>
  );
}

export default Apps;

