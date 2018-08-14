import React, { Component } from 'react';
import Name from './name';
import Title from './title';

import Navbar from './navbar';

export default class Homepage extends Component {
  render() {
    return (
      <div className='homepage'>
      <style>
          @import url('https://fonts.googleapis.com/css?family=Lekton');
          @import url('https://fonts.googleapis.com/css?family=Lekton|Orbitron');
      </style>
      
        <Navbar/>
        <Name/>
        <Title/>
        {/* <Title/>
        <Statement/> */}


          <div className="intro">

            {/* <h1>Selma Batista</h1>
            <h2>Junior Web Developer</h2>
            <p>I always love a challenge and enjoy problem solving! 
                Thats why web developing is my passion!</p> */}
          </div>
      </div>
    );
  }
}
