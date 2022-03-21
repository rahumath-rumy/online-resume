import React from 'react';
// import { Component } from 'react';
import Navbar from '../Components/Navbar';
import Aboutme from '../Components/abtme';
import Skill from '../Components/devskill';
import Project from '../Components/project';
import Footer from '../Components/footer';
import '../css/main.css'

// import bgImage from "../image/bg1.png"

const About= () => {
    return (
        <about>
    <div>
      <Navbar/>
        {/* <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', marginLeft:"50px" }}> */}
      <Aboutme/>
         
       </div>
       
        <div>
          <Footer/>
        </div>
      

    </about>
    );
};

export default About;