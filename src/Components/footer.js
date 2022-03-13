import React from 'react';
import styled from 'styled-components';
import '../css/section.css';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

import footer from "../image/Footer.png"

const Footer = () => {
    return (
        <footer>
          <div className="footer" style={{ backgroundImage: `url(${footer})`,  
          backgroundSize: 'cover'}} > 
            
              <h1 className='footerName'>Rahumath Rumy</h1>
                
                <a href="www.linkedin.com/in/rahumath-rumy"
                className="linkedin social" style={{color:'white', marginLeft:'540px'}}>
                <FontAwesomeIcon icon={faLinkedin}/>
                </a>
    
                <a href="https://github.com/rahumath-rumy"
                    className="github social" style={{color:'white'}}>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
    
                <a href="mailto:rahumath.rumy98@gmail.com"
                    className="mail social" style={{color:'white'}}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
    
                <a href="www.given/on/request"
                    className="tele social" style={{color:'white'}}>
                    <FontAwesomeIcon icon={faPhone}/>
                </a>

                <h5>
                    © 2022 Designed by Safra Rifai & Developed by Rahumath Rumy.All Rights Reserved
                </h5>
    </div>

        </footer>
        
    );
};




export default Footer;