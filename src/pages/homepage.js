import React from 'react';
// import { Component } from 'react';
import Navbar from '../Components/Navbar';
import Intro from '../Components/intro';
import Skill from '../Components/devskill';
import Project from '../Components/project';
import Footer from '../Components/footer';
import '../css/main.css'

import bgImage from "../image/intro.png"

const Home = () => {
    return (
        <home>

    <div>
      <Navbar/>
          <div className="introimage"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' , marginLeft:"30px" 
      }}>
          <Intro/>
          <Skill/>
        </div>
            <br></br>
          <Project/>
        <div>
          <Footer/>
        </div>
    </div>
    
    </home>
    );
};




export default Home;