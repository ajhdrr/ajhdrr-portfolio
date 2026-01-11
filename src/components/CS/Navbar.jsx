import "../../styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"> <p>ajhdrr </p></div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#tech">TechStack</a>
        <a href="../../public/Resume.pdf" target="_blank" rel="noreferrer">
          <button className="resume-button">
            <svg className="resume-logo" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M12 18v-6"></path>
              <path d="m9 15 3 3 3-3"></path>
            </svg>
          </button>
        </a>

        

      </div>
    </nav>
  );
}
 
export default Navbar;