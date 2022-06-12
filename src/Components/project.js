import React from 'react';
import styled from 'styled-components';
import '../css/section.css';

import tools from "../image/tools.png"

import footer from "../image/Footer.png"

const Project = () => {
    return (
        <div>
        <project>
          <div className='shape-rec'>
                <h2 className='title' style={{color:'white', paddingTop:"20px"}}>Projects </h2>
          <div className='proj'>
              <h3> Xplore EdTech </h3>
              <p className='para'
               style={{color:"black", paddingLeft:"60px",  textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mi et id a vulputate euismod interdum adipiscing. 
              Blandit adipiscing volutpat lectus tempus sit. 
              Fermentum integer elementum justo, aenean sit elit. Sollicitudin 
              </p>
              <a href="" className='gitlink'> View Project</a>
          </div>  

          <div className='proj' style={{marginTop:'40px'}}>
              <h3> Tourism Website </h3>
              <p className='para' style={{color:"black", paddingLeft:"60px",  textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mi et id a vulputate euismod interdum adipiscing. 
              Blandit adipiscing volutpat lectus tempus sit. 
              Fermentum integer elementum justo, aenean sit elit. Sollicitudin 
              </p>
              <a href="" className='gitlink'> View Project</a>
          </div> 

          <div className='proj'>
              <h3> Resume Website </h3>
              <p className='para' style={{color:"black", paddingLeft:"60px",  textAlign:"justify"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Mi et id a vulputate euismod interdum adipiscing. 
              Blandit adipiscing volutpat lectus tempus sit. 
              Fermentum integer elementum justo, aenean sit elit. Sollicitudin 
              </p>
              <a href="" className='gitlink'> View Project</a>
          </div> 

          <div>
              <h2 className='title2' style={{paddingTop:"500px"}}> Tools</h2>
                 <img src={tools} alt='tools' className='tool'></img>
          </div>

          </div>
        </project>
        </div>
    );
};

export default Project;