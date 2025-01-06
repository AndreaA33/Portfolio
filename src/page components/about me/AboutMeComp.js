import React from 'react'
import "./aboutme.css"
import PFP from "../../assets/PFP.png"
import { useEffect } from "react";

function AboutMeComp() {
  
  useEffect( () =>{
      function ToAboutMe() {
          const eventsSection = document.getElementById('aboutme');
          if (eventsSection != null) {
              eventsSection.scrollIntoView({behavior: 'smooth'});
          }
      }
      document.addEventListener('ToAboutMe', ToAboutMe);
      return () => {
          document.removeEventListener('ToAboutMe', ToAboutMe);
      };
  },[])

  return (
    <div className='aboutme' id='about'>
      <h2 className='aboutme-heading' id='heading'>About me</h2>
      <div className='aboutme-main'>
        <p className='aboutme-main-p'>Hi my name is <span style={{ color: '#1f7ed2' }}> Andrea</span>. An enthusiastic and accomplished individual currently studying a BSc in <span style={{ color: '#1f7ed2' }}> Computer Science</span> at the University of Leicester.
        <br />Highly motivated student with a strong academic background and a passion for technology. Skilled in programming languages such as Python, Java, Javascript, HTML, CSS with a solid understanding of data structures and algorithms.</p>
        <img className='aboutme-pfp' src={PFP} alt='profilepic'/>
      </div>
    </div>
  )
}

export default AboutMeComp


