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
                <img src={pythonlogo}/>
                <p>Python</p>
            </div>
            <div className='skill'>
                <img src={javalogo}/>
                <p>Java</p>
            </div>
            <div className='skill'>
                <img src={jslogo}/>
                <p>JavaScript</p>
            </div>
            <div className='skill'>
                <img src={sqllogo}/>
                <p>SQL</p>
            </div>
            <div className='skill'>
                <img src={reactlogo}/>
                <p>React</p>
            </div>
            <div className='skill'>
                <img src={htmllogo}/>
                <p>React</p>
            </div>
            <div className='skill'>
                <img src={csslogo}/>
                <p>React</p>
            </div>
            <div className='skill'>
                <img src={gitlogo}/>
                <p>React</p>
            </div>
        </div>
    </div>
    )
}

export default SkillsComp
