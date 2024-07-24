import React from 'react'
import "./main.css"
import linkedin from "../../assets/icons8-linkedin (2).svg"
import github from "../../assets/icons8-github (1).svg"
import "@fontsource/inter";
import { useEffect } from 'react';
import { IoMdDownload } from "react-icons/io";

function MainComp() {

  useEffect( () =>{
    function ToHome() {
        const eventsSection = document.getElementById('home');
        if (eventsSection != null){
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    document.addEventListener('ToHome', ToHome);
    return () => {
        document.removeEventListener('ToHome', ToHome);
    };
  },[])

  function handleToAboutme() {
    const event = new CustomEvent('ToAboutMe');
    document.dispatchEvent(event);
  }


  return (
    <div className='main' id='home'>
      <div className='main-heading'>
        <h2><span style={{ color: '#1f7ed2', fontSize: 40, WebkitTextStroke: 0.5, WebkitTextStrokeColor: "black"}}>Hi!, I am </span><br/> Andrea Anikwe <br/><span style={{ color: '#1f7ed2', fontSize: 40, WebkitTextStroke: 0.5, WebkitTextStrokeColor: "black"}}> Student | Software engineer </span></h2>
      </div>
      <div className='main-links'>
        <a href = {`${process.env.PUBLIC_URL}/Andrea Anikwe Resume.pdf`} download = 'Andrea Anikwe Resume.pdf' id='main-button'>RESUME<IoMdDownload style={{fontSize: 20}}/></a>
        <a href={"https://www.linkedin.com/in/andrea-anikwe/"}><img src={linkedin} alt='linkedin' className='main-link'/></a>
        <a href={"https://github.com/AndreaA33"}><img src={github} alt='github' className='main-link'/></a>
      </div>
      <div class="mouse" onClick={handleToAboutme}/>
    </div>
  )
}
export default MainComp
