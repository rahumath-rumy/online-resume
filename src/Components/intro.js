import React from 'react';
import styled from 'styled-components';
import '../css/main.css';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import github from "../image/github 1.png";
import linkedin from "../image/linkedin 1.png";
import bgImage from "./../image/bg1.png"

const Intro = () => {
    return (
        <intro >
          <div>
            <h3> Hi, I'm</h3>
          <div className='topic2'>
            <h1> Rahumath Rumy</h1>
          </div>
          <div className='topicpara'>
              <p> Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 adipiscing elit. Sociis sit faucibus commodo dui 
                a nisl. Enim dapibus blandit rutrum pellentesque.
                 Aliquet consequat arcu morbi sit imperdiet eget 
                 consequat posuere turpis.</p>
          </div>
          <div className='button'>
           <button> Download CV</button>
           </div>
            
           </div>
            {/* <div className="icon">
              <img alt="icon" src={linkedin} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>

            <div className="icon">
              <img alt="icon" src={linkedin} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>

            <div className="icon">
              <img alt="icon" src={linkedin} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>

            <div className="icon">
              <img alt="icon" src={linkedin} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
    
        <img alt="camera" src={linkedin} /> */}
    
        </intro>
    );
};

// const intro = styled.intro`
// img {
//   background-image: url("../image/bgimage.png");
// }

// `;
export default Intro;