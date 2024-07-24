import React from 'react'
import "./projects.css"
import project1img from "../../assets/guitartunerimg.png"
import project2img from "../../assets/STmanageappimg.png"
import project3img from "../../assets/BMHimg.png"
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
        <a href='https://github.com/AndreaA33/Guitar-tuning-software'>
        <div className='project1'>
          <img className="imgleft" src={project1img}/>
          <div className='project-desc'>
            <h3>Guitar tuning project</h3>
            <p>A guitar tuner built using python and several libraries such as blablabla</p>
            <div className='project-language'>
              <p>Python</p>
            </div>
          </div>
        </div></a>
        <a href='https://github.com/AndreaA33/Screen-Time-Management-App'>
        <div className='project2'>
          <div className='project-desc' id={"desc2"}>
            <h3>Screen time management app</h3>
            <p>An iOS app designed to help you manage and take control of your family's screen time, by allowing them to make more mindful and productive use of your devices</p>
            <div className='project-language'>
              <p>React Native</p>
              <p>JavaScript</p>
              <p>Expo Go</p>
            </div>
          </div>
          <img className="imgright" src={project2img}/>
        </div></a>
        <a href='https://github.com/AndreaA33/Birmingham-Motor-Hub'>
        <div className='project1'>
        <img className="imgleft" src={project3img}/>
          <div className='project-desc'>
            <h3>Birmingham Motor Hub</h3>
            <p>A guitar tuner built using python and several libraries such as blablabla</p>
            <div className='project-language'>
              <p>TypeScript</p>
              <p>CSS</p>
            </div>
          </div>
        </div></a>
      </div>
    </div>
  )
}

export default ProjectsComp
