import React from 'react'
import "./aboutme.css"
import PFP from "../../assets/PFP.png"
import { useEffect } from "react";
// import DownloadIcon from '@mui/icons-material/Download';
import { IoMdDownload } from "react-icons/io";

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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/Andrea Anikwe Resume.pdf`;
    link.download = 'Andrea Anikwe Resume.pdf';
    link.click();
  };

  return (
    <div className='aboutme' id='aboutme'>
      <h2 className='aboutme-heading' id='heading'>About me</h2>
      <div className='aboutme-main'>
        <p className='aboutme-main-p'>Hi my name is <span style={{ color: '#1f7ed2' }}> Andrea</span>. An enthusiastic and accomplished individual currently studying a BSc in <span style={{ color: '#1f7ed2' }}> Computer Science</span> at the University of Leicester.
        <br />Highly motivated student with a strong academic background and a passion for technology. Skilled in programming languages such as Python, Javascript, HTML, CSS with a solid understanding of data structures and algorithms.</p>
        <img className='aboutme-pfp' src={PFP}/>
      </div>
      <button className='resume' id='main-button'>RESUME <IoMdDownload style={{fontSize: 20}} onClick={downloadResume}/></button>
    </div>
  )
}

export default AboutMeComp


