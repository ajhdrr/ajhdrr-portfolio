import "../../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
        <h1>AJMAIN HYDER</h1>
        <p className="subtitle">Computer Science Student & Developer</p>
        <p className="school">Toronto Metropolitan University — Co-op Program</p>
    <div className="cred-buttons"> 
      <button className="cred-button "> Resume </button>
      <a href="https://www.linkedin.com/in/ajhdr" target="_blank"> LINKDIN </a>
      <a href="https://github.com/ajhdrr" target="_blank"> GIT </a>
    </div>
    </section>
  );
}

export default Hero;