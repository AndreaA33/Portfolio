import React from 'react'
import "./navbar.css"
import "@fontsource/inter";
import { useState, useEffect, useRef } from 'react';

function NavbarComp() {

  const [isEvent, setEvent] = useState(0)

function handleToAboutme() {
    const event = new CustomEvent('ToAboutMe');
    setEvent(1)
    document.dispatchEvent(event);
}

function handleToHome() {
    const event = new CustomEvent('ToHome');
    setEvent(0)
    document.dispatchEvent(event);
}

function handleToContactMe() {
  const event = new CustomEvent('ToContactMe');
  setEvent(4)
  document.dispatchEvent(event);
}

function handleToProjects() {
  const event = new CustomEvent('ToProjects');
  setEvent(2)
  document.dispatchEvent(event);
}

function handleToSkills() {
  const event = new CustomEvent('ToSkills');
  setEvent(3)
  document.dispatchEvent(event);
}

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('event1');
  if (window.scrollY > 200 && navbar != null) {
      navbar.classList.add('selected-button');
  } else if (navbar != null){
      navbar.classList.remove('selected-button');
  }
});

  return (
    <div className='navbar' id='navbar'>
      <div className='nav-container'>
        <button className={isEvent == 0 ? "selected-button" :'navbar-button'} onClick={handleToHome}>Home</button>
        <button className={isEvent == 1 ? "selected-button" :'navbar-button'} onClick={handleToAboutme}>About Me</button>
        <button className={isEvent == 2 ? "selected-button" :'navbar-button'} onClick={handleToProjects}>Projects</button>
        <button className={isEvent == 3 ? "selected-button" :'navbar-button'} onClick={handleToSkills}>Skills</button>
        <button className={isEvent == 4 ? "selected-button" :'navbar-button'} onClick={handleToContactMe}>Contact Me</button>
      </div>
    </div>
  )
}

export default NavbarComp
