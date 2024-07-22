import React from 'react'
import "./contactme.css"
import { useEffect } from 'react';
import { BsFillSendFill } from "react-icons/bs";

function ContactMeComp() {

  useEffect( () =>{
    function ToContactMe() {
        const eventsSection = document.getElementById('contactme');
        if (eventsSection != null) {
            eventsSection.scrollIntoView({behavior: 'smooth'});
        }
    }
    document.addEventListener('ToContactMe', ToContactMe);
    return () => {
        document.removeEventListener('ToContactMe', ToContactMe);
    };
},[])

  return (
    <div className='contactme' id="contactme">
      <h1 id='heading' className='contactme-heading'>Contact me</h1>
      <div className='contactme-main'>
        <p>Please contact me directly through <a href='mailto:Andreaanikwe@gmail.com'><span>Andreaanikwe@gmail.com</span></a> or through this form</p>
        <div className='contact-form'>
          <input className='input1' placeholder='Your email'></input>
          <textarea className='input2' placeholder='Your message'></textarea>
        </div>
      </div>
      <button id='main-button'>Submit <BsFillSendFill style={{ fontSize: 20}}/></button>
    </div>
  )
}

export default ContactMeComp
