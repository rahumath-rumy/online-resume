import React from 'react';
import styled from 'styled-components';
import '../css/section.css';
import '../css/about.css';
import timeline from './timeline';

 //import { ReactComponent as DIcon } from "../image/Degree.png";

// import { ReactComponent as SchoolIcon } from "./school.svg"

import { VerticalTimeline, VerticalTimelineElement,} 
    from "react-vertical-timeline-component"
  
import "react-vertical-timeline-component/style.min.css"

import portrait from "../image/portrait.jpg"
import right from "../image/rightdesign.png"
import left from "../image/leftdesign.png"

const AboutMe = () => {
// let DIconStyles = { background: "#06D6A0" }
//   let schoolIconStyles = { background: "#f9c74f" }
  let icon = { background: "#06D6A0" }
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

                  <h2 className='title' style={{marginTop:"-450px", paddingBottom:"100px"}} >Education</h2>
            
                  
            

            <VerticalTimeline  >
             {timeline.map(element => {
          return (
            <VerticalTimelineElement 
              key={element.key}
            //   date={element.year}

            //   dateClassName="date"
            // iconStyle={isDIcon ? DIconStyles : schoolIconStyles}
            // icon={isDIcon ? <DIcon /> : <SchoolIcon />}
            >
               
              <h3 className="vertical-timeline-element-title">
                {element.title} <br/>
                {element.year}
                {/* {element.icon} */}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.institute}
              </h5>
              <p id="description">
                  {element.place}
              </p>
             
            </VerticalTimelineElement>
       )
        })}
      </VerticalTimeline>
      </div>
        </aboutme>
    );
};

    
export default AboutMe;