import "../../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      
        <h1>AJMAIN HYDER</h1>
        <p className="subtitle">Computer Science Student & Developer</p>
        <p className="school">Toronto Metropolitan University — Co-op Program</p>
    
    <div className="cred-buttons"> 
      <a href="../../public/Resume.pdf" target="_blank" rel="noreferrer">
        
        <button className="cred-button">
          <svg className="down-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 15V3"></path>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <path d="m7 10 5 5 5-5"></path>
          </svg> <span className="resumetxt">RESUME</span> </button>
      </a>
      {/*}
      <a href="https://www.linkedin.com/in/ajhdr" target="_blank"> LINKDIN </a>
      <a href="https://github.com/ajhdrr" target="_blank"> GIT </a>
      */}
      
      <a href="https://www.linkedin.com/in/ajhdr" target="_blank" rel="noreferrer" className="cred-icon" aria-label="LinkedIn">
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>

      <a href="https://github.com/ajhdrr" target="_blank" rel="noopener noreferrer" className="cred-icon" aria-label="GitHub">
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3
            1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68
            1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      </a>
      
      

    </div>
    </section>
  );
}

export default Hero;
