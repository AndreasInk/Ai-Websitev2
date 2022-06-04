import React from 'react'
import land from '../res/Mock.svg';
import './innovator.css';
import { Suspense } from 'react';
import Laptop from './Laptop';
import Apps from './Apps';
import Git from '../res/git.png'
import Cal from '../res/calendar.png'
import Store from '../res/AppStore.png'
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
      <Apps app1={{img: Store, header: "7+ Apps", caption: "Andreas has developed many apps, from an app to reduce his neck pain with AirPods, to an app for his Dad to track tremors."}} app2={{img: Git, header: "50+ Open Sourced Repos", caption: "Open source is powerful to learn from or meet others, therefore, Andreas open sources many of his projects"}} app3={{img: Cal, header: "4+ Years of Programming", caption: "Andreas loves to code and has been coding for a long time"}}/>
      
      </div>
     
  );
}

export default Innovator;
