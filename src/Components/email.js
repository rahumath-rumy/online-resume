import React from 'react';
import emailjs from "emailjs-com";
import { useRef } from "react";

import '../css/contact.css';
import '../css/section.css';
import email from "../image/email.png"

const Email = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n54ecxi",
        "resume_website",
        form.current,
        "AJ8cSKX7dTSa7I2j4"
      )

      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


    return (
        <div>
        <email>
         <h2 className='title' style={{marginTop:"10px", textAlign:"Left", marginLeft:"50px"}}>Lets Talk </h2>

        <div class="row">
            <div class="column1" >
             <form ref={form} onSubmit={sendEmail}>
                <label className='label'>Your Name</label> <br/>
                <input type="text" name="name" />  <br/>

                <label className='label'>Your Email</label> <br/>
                <input type="email" name="email" />    <br/>

                <label className='label'> Message</label>   <br/>
                <textarea name="message" className='msgfield' />
                
                <br/>
                <input type="submit" value="Send Message" />
            </form>
            </div>

        <div class="column2">
            <img src={email} alt='Clipart' className="clipart"></img>
        </div>
  
        </div> 

        </email>
        </div>
    );
};

export default Email;