import React from 'react'
import "./main.css"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.png"
import dots from "../../assets/dots.png"
import "@fontsource/inter";
import { useEffect } from 'react';

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

  return (
    <div className='main' id='home'>
      <div className='main-heading'>
        <h1><span style={{ color: '#19568c', fontSize: 40, WebkitTextStroke: 0.2, WebkitTextStrokeColor: "white"}}>Hi!, I am </span><br/> Andrea Anikwe <br/><span style={{ color: '#19568c', fontSize: 40, WebkitTextStroke: 0.2, WebkitTextStrokeColor: "white"}}> Student | Software engineer </span></h1>
      </div>
      <div className='main-links'>
        <img src={dots} alt='dots' className='main-dots'/>
        <a href={"https://www.linkedin.com/in/andrea-anikwe/"}><img src={linkedin} alt='linkedin' className='main-link'/></a>
        <a href={"https://github.com/AndreaA33"}><img src={github} alt='github' className='main-link'/></a>
        <img src={dots} alt='dots' className='main-dots'/>
      </div>
    </div>
  )
}
export default MainComp
