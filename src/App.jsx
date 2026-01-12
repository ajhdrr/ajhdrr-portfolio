import "./styles/App.css"
import PixelSnow from './PixelSnow';

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
    <div className="app" id="CS">  
       <div style={{ width: '1px', height: '1px', position: 'static' }}>
        <PixelSnow 
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={400}
          speed={1.1}
          density={0.2}
          direction={125}
          brightness={4}
        />
      </div>
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
