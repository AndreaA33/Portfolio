import React, { useState, useEffect } from 'react';
import "./projects.css";
import project0img from "../../assets/privatecloudimg.png";
import project1img from "../../assets/chatappSS2.png";
import project2img from "../../assets/guitartunerimg.png";
import project3img from "../../assets/STmanageappimg.png";
import project4img from "../../assets/BMHimg.png";

function ProjectsComp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    function ToProjects() {
      const eventsSection = document.getElementById('projects');
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    document.addEventListener('ToProjects', ToProjects);
    return () => {
      document.removeEventListener('ToProjects', ToProjects);
    };
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className='projects' id="projects">
      <h2 id='heading' className='project-heading'>Projects</h2>
      <div className='project-main'>
        <div className='project2' onClick={openPopup}>
          <div className='project-desc' id="desc2">
            <h3>Distributed Private Cloud hosting a Collaborative Whiteboard App</h3>
            <p>A robust cloud-based solution leveraging AWS to create a reliable and scalable collaborative whiteboard application.</p>
            <div className='project-language'>
              <p>AWS</p>
              <p>Docker</p>
              <p>Redis</p>
              <p>Node.js</p>
              <p>React</p>
              <p>Socket.io</p>
            </div>
          </div>
          <img className="imgright" src={project0img} alt='projectimage' />
        </div>
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
        {isPopupOpen && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h3>Distributed Private Cloud hosting a Collaborative Whiteboard App</h3>
              <img src={project0img} alt="Whiteboard Project" className="popup-image" />
              <div className="popup-desc">
                <p>This project implements a collaborative whiteboard application that is hosted on AWS. It handles fluctuating user traffic using various scalable and resilient cloud services. Here are the steps taken to create and deploy the application:</p>
                
                <h4>Step 1: Designing the Architecture</h4>
                <ul>
                  <li><strong>CloudFormation</strong>: Used to automate infrastructure provisioning.</li>
                  <li>Defined VPC, EC2, RDS, and other key resources using declarative YAML scripts in <strong>AWS CloudFormation</strong>.</li>
                </ul>

                <h4>Step 2: Containerizing the Application</h4>
                <ul>
                  <li><strong>Docker</strong>: The app components were containerized for consistent deployments and easier scaling.</li>
                  <li><strong>Multi-stage Dockerfile</strong> used to separate development, build, and production environments for improved security and performance.</li>
                </ul>

                <h4>Step 3: Ensuring Scalability & Load Balancing</h4>
                <ul>
                  <li>Deployed on <strong>AWS EC2 instances</strong> behind an <strong>Elastic Load Balancer (ELB)</strong> to distribute traffic evenly across multiple instances.</li>
                  <li>Utilized <strong>Auto-Scaling</strong> to dynamically adjust the number of instances based on traffic and resource requirements.</li>
                </ul>

                <h4>Step 4: Handling Data Storage and Caching</h4>
                <ul>
                  <li><strong>AWS DynamoDB</strong>: A NoSQL database was used for storing user data, offering high availability and scalability for our collaborative whiteboard application.</li>
                  <li><strong>AWS ElastiCache (Redis)</strong>: Redis was utilized for caching session data, which helps in reducing database calls and improving the app’s responsiveness.</li>
                </ul>

                <h4>Step 5: Real-Time Collaboration</h4>
                <ul>
                  <li><strong>Socket.io</strong>: Implemented to allow real-time updates for all users. Whenever one user makes changes to the whiteboard, those changes are broadcasted to everyone connected to that whiteboard.</li>
                </ul>

                <p>With these strategies combined, the application is not only scalable and resilient, but it is also optimized for a seamless user experience even under high loads.</p>
              </div>

              <div className="project-language">
                <p>AWS</p>
                <p>Docker</p>
                <p>Redis</p>
                <p>Node.js</p>
                <p>React</p>
                <p>Socket.io</p>
              </div>

              <button className="popup-close" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsComp
