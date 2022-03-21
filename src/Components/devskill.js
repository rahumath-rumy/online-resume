import React from 'react';
import styled from 'styled-components';
import '../css/section.css';


const Skill = () => {
    return (
        <skill>
          <div className='skill'>
           <h2 className='title'>My Developement Skills </h2>
             <button className='devskills'> HTML </button> 
             <button className='devskills'> CSS </button>
             <button className='devskills'> PHP </button>
             <button className='devskills'> PYTHON </button>
             <button className='devskills'> JAVA </button>
             <button className='devskills'> JAVascript </button>
             <button className='devskills'> DJANGO </button>
             <button className='devskills'> MYSQL DB </button>
             <button className='devskills'> NOSQL (MONGODB)</button>
             <button className='devskills'> JAX-RS </button>
          
           </div>
        </skill>
    );
};




export default Skill;