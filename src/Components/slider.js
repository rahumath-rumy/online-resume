import React , { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from '../Components/certcourse';
import '../css/about.css';

const Slider = () =>{
  const [value, setValue] = useState(0); 
  
return (
  <div className='slider'>
    <div className='cert'> 
      <img src = {SliderData[value].image} alt={SliderData[value].id} className="image"/>

     <div className="cert-info">
       <h3> {SliderData[value].title}</h3>
  
       <h3> {SliderData[value].course}</h3>
       <a  href ={SliderData[value].link} target="_blank"> Link to Certificate </a>
     </div> 
    
   </div>
  
  <div>
    <FaArrowAltCircleLeft className='left-arrow' onClick={() => value === 0 ? setValue(3) : setValue(value - 1)} />
    <FaArrowAltCircleRight className='right-arrow' onClick={() => value === 3 ? setValue(0) : setValue(value + 1)} />
  </div>

</div>  
             
 );
 };

export default Slider;

