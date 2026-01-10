import "./styles/App.css"

import Navbar from "./components/CS/Navbar.jsx";
import Hero from "./components/CS/Hero.jsx";
import Education from "./components/CS/Education.jsx";
import Experience from "./components/CS/Experience.jsx"; 
import Projects from "./components/CS/Projects.jsx";
import TechStack from "./components/CS/TechStack.jsx";
import Footer from "./components/CS/Footer.jsx";

import BGimg from "./assets/BGimg.webp"


function App() {
  return (
    <div className="app">  
      <Navbar />
      <Hero />
      <TechStack/>
      <Projects />
      <Experience />
      <Education />

      <Footer />
    
    </div>
  );
}


export default App
