import React from 'react';
import styled from 'styled-components';
import '../css/section.css';
import '../css/about.css';
import timeline from './timeline';
import Slider from '../Components/slider';
import { SliderData } from '../Components/certcourse';

import { ReactComponent as WorkIcon } from "../image/work.svg";
import { ReactComponent as SchoolIcon } from "../image/school.svg";

import { VerticalTimeline, VerticalTimelineElement,} 
    from "react-vertical-timeline-component"
  
import "react-vertical-timeline-component/style.min.css"

import portrait from "../image/portrait.jpg"
import right from "../image/rightdesign.png"
import left from "../image/leftdesign.png"
import arrow from "../image/arrowbg.png"
import imanacad from "../image/imanacad.png"
import line from "../image/line.png"


const AboutMe = () => {
  let workIconStyles = { background: "#EE6C4D" };
  let schoolIconStyles = { background: "#EE6C4D" };

    return (
        <aboutme>
            {/* About Me  */}
            <div className='container'>
                <img src={portrait} alt='portrait' className='portrait'></img>
            </div>

            <div className='abtme'>
                  <h1 style={{paddingLeft:'520px', paddingTop:'50px', fontSize:'30px'}}>Get to Know Me </h1>
                  <p className="para" style={{margin:'0px 50px 0px 500px', fontSize:"18px"}}> 
                  I am a passionate person who loves coding and debugging! :)
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Mauris condimentum nunc sit amet ipsum ullamcorper semper. Quisque ligula felis, 
                  suscipit viverra ex eu, fermentum feugiat arcu. Curabitur pellentesque fringilla elit,
                  non mollis ligula finibus in. Nulla faucibus risus ac urna mattis tincidunt. 
                  Mauris eu venenatis neque. Fusce feugiat quam a enim posuere, id vestibulum justo auctor. 
                  </p>
                  <img src={right} alt='design' className='design-right'></img>

                  <img src={left} alt='design' className='design-left'></img>

                  <h2 className='title' style={{marginTop:"-450px", paddingBottom:"100px", marginBottom:"-80px"}} >Education</h2>
          
{/* Education Timeline */}
            <VerticalTimeline>
             {timeline.map(element => {
                 let isWorkIcon = element.icon === "work";
        
                 return (
            <VerticalTimelineElement 
              key={element.key}
            
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
               
              <h3 className="vertical-timeline-element-title">
                {element.title} <br/>

              </h3>

              <h3 className="vertical-timeline-element-year">
                     {element.year}
              </h3>

              <h5 className="vertical-timeline-element-subtitle">
                {element.institute}
              </h5>

              <h5 className="description">
                  {element.place}
              </h5>
             
            </VerticalTimelineElement>
       )
        })}
            </VerticalTimeline>
      </div>
     
      {/* Slider */}
      <div>
      <h2 className='title' style={{marginTop:"40px", paddingBottom:"0px", marginBottom:"0px"}}> 
           Certificate Courses</h2>
      
        <Slider slides={SliderData} />
       
      </div>

      <div>
      <h2 className='title' style={{marginTop:"440px", paddingBottom:"50px", marginBottom:"-40px"}}> 
           Teams I Have Worked With</h2>
           <img src={arrow} alt='design' className='design-right'></img>
      <img src={imanacad} alt='Iman Academy' className="teams"></img>
      
      <div className="team-content">
      <img src={line} alt='Line Design' className="line"></img>
      
        <h3>Administration & Customer Coordinator</h3>
        <h2>2020-2021</h2>

        <h3 style={{marginTop:"70px"}}>Computer Science Educator - Edexcel (Year 04 - Ordinary Level) </h3>
        <h3 style={{marginTop:"-20px"}}> Maths Educator Lower Primary</h3>
        <h2>2021-2022</h2>
      </div>
      </div>

      </aboutme>
    );
};

    
export default AboutMe;