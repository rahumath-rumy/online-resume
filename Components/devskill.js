import React from 'react';
import styled from 'styled-components';
import '../css/section.css';

import rightimg from "../image/Vector.png"
import leftimg from "../image/Vector (1).png"

const Skill = () => {
    return (
        <skill>
          <div className='skill'>
        
           <h2 className='titledev'>My Developement Skills </h2>
            <div className='col1'>
             <button className='devskills'> HTML </button> 
             <button className='devskills'> CSS </button>
             <button className='devskills'> PHP </button>  
             <button className='devskills'> Javascript </button>          
             <button className='devskills'> JAVA </button>
             <button className='devskills'> REACT </button>

             <button className='devskills'> PYTHON </button>
             <button className='devskills'> DJANGO </button>
             <button className='devskills'> MYSQL DB </button>
             <button className='devskills' > MONGODB</button>
             <button className='devskills'> JAX-RS </button>
             </div>
           </div>
        </skill>
    );
};

export default Skill;