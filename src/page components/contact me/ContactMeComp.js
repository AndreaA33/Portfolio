import "./contactme.css"
import { useState, useEffect, useRef } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';

function ContactMeComp() {

  const [send, setSend] = useState(0)

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9bv96yc', 'template_bticu3d', form.current, {
        publicKey: 'AbHjJhFjjgBZQ8In3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSend(1)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSend(1)
        },
      );
  };


  return (
    <div className='contactme' id="contact">
      <h1 id='heading' className='contactme-heading'>Contact me</h1>
      <div className='contactme-main'>
        <p>Please contact me directly through <a href='mailto:Andreaanikwe@gmail.com'><span>Andreaanikwe@gmail.com</span></a> or through this form:</p>
        <form className='contact-form' onSubmit={sendEmail} ref={form}>
          <input className='input1' type="text" placeholder='Your name' name='name'></input>
          <input className='input1' type="email" placeholder='Your email' name='email'></input>
          <textarea className='input2' type="text" placeholder='Your message' name='message'></textarea>
          <button id='main-button'><input className='submit-input' type='submit' value={send === 1 ? "Sent" : "Send"}/><BsFillSendFill style={{ fontSize: 20 }}/></button>
        </form>
      </div>
    </div>
  )
}

export default ContactMeComp
