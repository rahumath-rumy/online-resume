import React from 'react';
// import { Component } from 'react';
import Navbar from './Components/Navbar';
import Intro from './Components/intro';
import Skill from './Components/devskill';
import Project from './Components/project';
import Footer from './Components/footer';
import '././css/main.css'

import bgImage from "././image/bg1.png"



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
          <Footer/>
        </div>
      
        
    </div>
  );
}

export default App;
