import "/src/styles/App.css"

import Navbar from "/src/components/CS/Navbar.jsx";
import Hero from "/src/components/CS/Hero.jsx";
import Education from "/src/components/CS/Education.jsx";
import Experience from "/src/components/CS/Experience.jsx"; 
import Projects from "/src/components/CS/Projects.jsx";
import TechStack from "/src/components/CS/TechStack.jsx";
import Footer from "/src/components/CS/Footer.jsx";

import BGimg from "/src/assets/BGimg.webp"


function App() {
  return (
    <div className="app" id="CS">   
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <TechStack/>
      <Footer />
    
    </div>
  );
}


export default App
