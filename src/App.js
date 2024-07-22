import './App.css';
import NavbarComp from "./page components/navbar/NavbarComp.js";
import MainComp from "./page components/main/MainComp.js";
import ProjectsComp from "./page components/projects/ProjectsComp.js";
import "@fontsource/inter"; 
import AboutMeComp from "./page components/about me/AboutMeComp.js";
import SkillsComp from "./page components/skills/SkillsComp.js";
import ContactMeComp from "./page components/contact me/ContactMeComp.js";

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <MainComp/>
      <AboutMeComp/>
      <ProjectsComp/>
      <SkillsComp/>
      <ContactMeComp/>
    </div>
  );
}

export default App;
