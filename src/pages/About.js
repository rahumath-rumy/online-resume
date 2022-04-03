import React from 'react';
import Navbar from '../Components/Navbar';
import Aboutme from '../Components/abtme';

import Footer from '../Components/footer';
import '../css/main.css'



const About= () => {
    return (
        <about>
    <div>
      <Navbar/>
        {/* <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', marginLeft:"50px" }}> */}
      <Aboutme/>
         
       </div>
       
        <div style={{marginTop:"-600px"}}>
          <Footer/>
        </div>
      

    </about>
    );
};

export default About;