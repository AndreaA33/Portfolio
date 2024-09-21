import React from 'react'
import "./projects.css"
import project1img from "../../assets/chatappSS2.png"
import project2img from "../../assets/guitartunerimg.png"
import project3img from "../../assets/STmanageappimg.png"
import project4img from "../../assets/BMHimg.png"
import { useEffect } from 'react';

function ProjectsComp() {

  useEffect( () =>{
    function ToProjects() {
        const eventsSection = document.getElementById('projects');
        if (eventsSection != null){
            eventsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    document.addEventListener('ToProjects', ToProjects);
    return () => {
        document.removeEventListener('ToProjects', ToProjects);
    };
  },[])


  return (
    <div className='projects' id="projects">
      <h2 id='heading' className='project-heading'>Projects</h2>
      <div className='project-main'>
        <a href='https://github.com/AndreaA33/Chat-Application'>
        <div className='project1'>
          <img className="imgleft" src={project1img} alt='projectimage'/>
          <div className='project-desc'>
            <h3>Chatterbee</h3>
            <p>This project is a full-fledged real-time chat application that enables users to communicate through text messages</p>
            <div className='project-language'>
              <p>React</p>
              <p>MongoDB</p>
              <p>Express</p>
              <p>Node.js</p>
              <p>Socket.io</p>
              <p>Cloudinary</p>
            </div>
          </div>
        </div>
        </a>
        <a href='https://github.com/AndreaA33/Guitar-tuning-software'>
        <div className='project2'>
          <div className='project-desc' id={"desc2"}>
            <h3>Guitar tuning algorithm</h3>
            <p>The guitar tuning algorithm is designed to accurately and efficiently tune a guitar by analyzing the frequency of the sound produced by each string and making real-time adjustments to match the desired standard or custom tuning</p>
            <div className='project-language'>
              <p>Python</p>
              <p>NumPy</p>
              <p>Matplotlib</p>
              <p>Wave</p>
            </div>
          </div>
          <img className="imgright" src={project2img} alt='projectimage'/>
        </div>
        </a>
        <a href='https://github.com/AndreaA33/Screen-Time-Management-App'>
        <div className='project1'>
          <img className="imgleft" src={project3img} alt='projectimage'/>
          <div className='project-desc'>
            <h3>Screen time management app</h3>
            <p>An iOS app designed to help you manage and take control of your family's screen time, by allowing them to make more mindful and productive use of your devices</p>
            <div className='project-language'>
              <p>React Native</p>
              <p>JavaScript</p>
              <p>Expo Go</p>
            </div>
          </div>
        </div>
        </a>
        <a href='https://github.com/AndreaA33/Birmingham-Motor-Hub'>
        <div className='project2'>
          <div className='project-desc' id={"desc2"}>
            <h3>Birmingham Motor Hub</h3>
            <p>My Website is tailored to Car Hobbyists travelling to and visiting the city of Birmingham. One of my main motivations for making such a website is Birmingham's strong car community; with passionate individuals who appreciate classic cars and supercars</p>
            <div className='project-language'>
              <p>React</p>
              <p>TypeScript</p>
              <p>CSS</p>
            </div>
          </div>
          <img className="imgright" src={project4img} alt='projectimage'/>
        </div>
        </a>
      </div>
    </div>
  )
}

export default ProjectsComp
