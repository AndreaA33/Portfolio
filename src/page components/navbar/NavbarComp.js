import React, { useState, useEffect } from 'react';
import "./navbar.css";
import "@fontsource/inter";
import logo from "../../assets/logo.png";

function NavbarComp() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let currentSection = null;
    const sectionElements = {};
    
    // Get all sections and store their positions
    const observerCallback = (entries) => {
      // Store all currently visible sections
      const visibleSections = entries.filter(entry => entry.isIntersecting)
                                   .map(entry => ({
                                     id: entry.target.id,
                                     top: entry.boundingClientRect.top
                                   }));

      if (visibleSections.length > 0) {
        // Sort visible sections by their position from top
        visibleSections.sort((a, b) => Math.abs(a.top) - Math.abs(b.top));
        // Use the most visible section
        const mostVisible = visibleSections[0].id;
        
        if (currentSection !== mostVisible) {
          currentSection = mostVisible;
          setActiveSection(mostVisible);
        }
      }
    };

    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for better accuracy
      rootMargin: '-10% 0px -90% 0px' // Adjust these values based on your layout
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    ['home', 'about', 'projects', 'skills', 'contact'].forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionElements[sectionId] = element;
        observer.observe(element);
      }
    });

    // Additional scroll event listener for edge cases
    const handleScroll = () => {
      // Check if we're at the very top of the page
      if (window.scrollY === 0) {
        setActiveSection('home');
      }
      // Check if we're at the bottom of the page
      else if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup
      Object.values(sectionElements).forEach(element => {
        observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate header height - adjust this value based on your header height
      const headerHeight = 80; // Example height in pixels
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact Me' }
  ];

  return (
    <div className='navbar' id='navbar'>
      <a href="https://andreaanikwe.netlify.app/">
        <img src={logo} className='logo' alt='logo'/>
      </a>
      <div className='nav-container'>
        {navLinks.map(({ id, label }) => (
          <button
            key={id}
            className={`navbar-button ${activeSection === id ? 'selected-button' : ''}`}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavbarComp;