import "../../styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"> <p>ajhdrr </p></div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#tech">Tech</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
      </div>
    </nav>
  );
}

export default Navbar;