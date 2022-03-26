import React from 'react';
import styled from 'styled-components';
import '../css/section.css';
import '../css/about.css';
import timeline from './timeline';

import { ReactComponent as WorkIcon } from "../image/work.svg";
import { ReactComponent as SchoolIcon } from "../image/school.svg";

import { VerticalTimeline, VerticalTimelineElement,} 
    from "react-vertical-timeline-component"
  
import "react-vertical-timeline-component/style.min.css"

import portrait from "../image/portrait.jpg"
import right from "../image/rightdesign.png"
import left from "../image/leftdesign.png"

const AboutMe = () => {
  let workIconStyles = { background: "#EE6C4D" };
  let schoolIconStyles = { background: "#EE6C4D" };

    return (
        <aboutme>
            
            <div className='container'>
                <img src={portrait} alt='portrait' className='portrait'></img>
            </div>

            <div className='abtme'>
                  <h1 style={{paddingLeft:'520px', paddingTop:'50px', fontSize:'30px'}}>Get to Know Me </h1>
                  <p style={{margin:'0px 40px 0px 500px'}}> I am a passionate person who loves coding and debugging! :)
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Mauris condimentum nunc sit amet ipsum ullamcorper semper. Quisque ligula felis, 
                  suscipit viverra ex eu, fermentum feugiat arcu. Curabitur pellentesque fringilla elit,
                  non mollis ligula finibus in. Nulla faucibus risus ac urna mattis tincidunt. 
                  Mauris eu venenatis neque. Fusce feugiat quam a enim posuere, id vestibulum justo auctor. 
                  </p>
                  <img src={right} alt='design' className='design-right'></img>

                  <img src={left} alt='design' className='design-left'></img>

                  <h2 className='title' style={{marginTop:"-450px", paddingBottom:"100px", marginBottom:"-80px"}} >Education</h2>
          
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
      <div>
      <h2 className='title' style={{marginTop:"100px", paddingBottom:"100px", marginBottom:"-80px"}}> Certificate Courses</h2>
      </div>
        </aboutme>
    );
};

    
export default AboutMe;