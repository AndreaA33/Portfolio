import React from 'react'
import "./skills.css"
import pythonlogo from "../../assets/pythonlogo.svg"
import javalogo from "../../assets/javalogo.svg"
import jslogo from "../../assets/jslogo.svg"
import sqllogo from "../../assets/sqllogo.svg"
import reactlogo from "../../assets/reactlogo.svg"
import htmllogo from "../../assets/htmlogo.svg"
import csslogo from "../../assets/csslogo.svg"
import gitlogo from "../../assets/gitlogo.svg"
import { useEffect } from 'react'

function SkillsComp() {

    useEffect( () =>{
        function ToSkills() {
            const eventsSection = document.getElementById('skills');
            if (eventsSection != null){
                eventsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
        document.addEventListener('ToSkills', ToSkills);
        return () => {
            document.removeEventListener('ToSkills', ToSkills);
        };
      },[])

    return (
    <div className='skills' id="skills">
        <h2 id='heading' className='skills-heading'>Skills</h2>
        <div className='skills-main'>
            <div className='skill'>
                <img src={pythonlogo} alt='pythonlogo'/>
                <p>Python</p>
            </div>
            <div className='skill'>
                <img src={javalogo} alt='javalogo'/>
                <p>Java</p>
            </div>
            <div className='skill'>
                <img src={jslogo} alt='jslogo'/>
                <p>JavaScript</p>
            </div>
            <div className='skill'>
                <img src={sqllogo} alt='sqllogo'/>
                <p>SQL</p>
            </div>
            <div className='skill'>
                <img src={reactlogo} alt='reactlogo'/>
                <p>React</p>
            </div>
            <div className='skill'>
                <img src={htmllogo} alt='htmllogo'/>
                <p>HTML</p>
            </div>
            <div className='skill'>
                <img src={csslogo} alt='csslogo'/>
                <p>CSS</p>
            </div>
            <div className='skill'>
                <img src={gitlogo} alt='gitlogo'/>
                <p>Git</p>
            </div>
        </div>
    </div>
    )
}

export default SkillsComp
