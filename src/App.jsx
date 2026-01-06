import Navbar from "./components/CS/Navbar.jsx";
import Hero from "./components/CS/Hero.jsx";
import Education from "./components/CS/Education.jsx";
import Experience from "./components/CS/Experience.jsx"; 
import Projects from "./components/CS/Projects.jsx";
import TechStack from "./components/CS/TechStack.jsx";


function App() {
  return (
    <>  

      <Navbar />
      <Hero />
      <TechStack/>
      <Projects />
      <Experience />
      <Education />
      <p align="center" style={{ fontSize: "2vw" }}> BREAK</p>
    
    </>
  );
}


export default App
