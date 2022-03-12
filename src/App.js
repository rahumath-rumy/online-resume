import React from 'react';
// import { Component } from 'react';
import Navbar from './Components/Navbar';
import Intro from './Components/intro';
import Skill from './Components/devskill';
import Project from './Components/project';
import '././css/main.css'

import bgImage from "././image/bg1.png"
import tools from "././image/tools.png"


function App() {
//simple javascript code
   return( // can have only 1 parent tag (div)
    <div>
      <Navbar/>
        <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', marginLeft:"50px" }}>
          <Intro/>
          <Skill/>
       </div>
       <br></br>
          <Project/>
          <div>
            <div style={{ backgroundImage: `url(${{tools}})`, backgroundSize: 'cover', marginLeft:"50px" }}>
              </div>
</div>        
    
    </div>
  );
}

export default App;
