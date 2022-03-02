import React from 'react';
import styled from 'styled-components';
import '../css/main.css';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import github from "../image/github 1.png";
import linkedin from "../image/linkedin 1.png";
// import bgImage from "./../image/bg1.png"

const Intro = () => {
    return (
        <intro >
          <div className='intro'>
            <h2> Hi, I'm </h2>
            <h1> Rahumath Rumy</h1>
            <p>
              I am a Computer Science undergraduate and I am 
              currently reading my degree in Software Engineering <br/>
              affiliated by Solent University. I am a quick
              learner and love to be a part of team that's constantly <br/> growing.
              I have experience in developing front end and backend websites 
              using different technologies <br/> like HTML, CSS, Django, React
              MongoDB, Java, Jaxrs, Python. I also have little experience 
              with<br/> WordPress and always looking forward to learn and implement new technologies.
              </p>
              <div className='button'>
                <button> Download CV</button>
              </div>

          </div>
          
           
              <img alt="icon" src={linkedin} />
              <img alt="icon" src={linkedin} />
              <img alt="icon" src={linkedin} />
              <img alt="icon" src={linkedin} />
      
          
        </intro>
    );
};

const intro = styled.img`
 padding: 10rem 10rem;
`;

export default Intro;