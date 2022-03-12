import React from 'react';
//import styled from 'styled-components';
import '../css/main.css';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";



const Intro = () => {
    return (
        <intro >
          <div className='intro'>
            <h2 style={{textAlign:'left'}}> Hi, I'm </h2>
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

<div class="social-container">
    <a href="www.linkedin.com/in/rahumath-rumy"
      className="linkedin social">
      <FontAwesomeIcon icon={faLinkedin}/>
    </a>
    
    <a href="https://github.com/rahumath-rumy"
        className="github social">
        <FontAwesomeIcon icon={faGithub}/>
    </a>
    
    
    <a href="mailto:rahumath.rumy98@gmail.com"
        className="mail social">
        <FontAwesomeIcon icon={faEnvelope} />
    </a>
    
    <a href="www.given/on/request"
        className="tele social">
        <FontAwesomeIcon icon={faPhone}/>
    </a>
    </div>

          </div>

        </intro>
    );
};

export default Intro;