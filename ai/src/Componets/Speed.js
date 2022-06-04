import React from 'react'
import './speed.css';
import VitoCer from '../res/VitoCer.png';
import { Suspense } from 'react';
import Apps from './Apps';

import Git from '../res/star.png'
import Cal from '../res/code2.png'
import Store from '../res/Trending.png'

function Speed() {
  return (
    <div className="Innovator">
         <div className="Laptop">
      {/* <Suspense fallback={null}>
      <Laptop/>
      
      </Suspense> */}
     
      </div>
        <h1 className='ino-header'>Speedy Success</h1>
        <h2 className='subheader'>Last year of high school and first year of university was huge for Andreas.</h2>
    <img src={VitoCer}></img>
    <Apps app1={{img: Store, header: "5/8 Hackathon Wins", caption: "To network and have fun, Andreas participated in many hackathons"}} app2={{img: Git, header: "2/2 Deans List", caption: "Andreas excels academically and has a 3.8 college GPA"}} app3={{img: Cal, header: "2 First Year Research Projects", caption: "Out of the gate, Andreas strove to apply his coding abilities in an academic context"}}/>
      
      </div>
  );
}

export default Speed;
