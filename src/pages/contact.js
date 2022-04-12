import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import Email from '../Components/email.js';

import '../css/main.css'
import '../css/contact.css'

const Contact= () => {
    return (
        <contact>
            <div>
                <Navbar/>
            </div>

            <div>
             <Email/>
            </div>
            <div style={{marginTop:"-600px"}}>
                <Footer/>
            </div>
    
        </contact>
    );
};

export default Contact;