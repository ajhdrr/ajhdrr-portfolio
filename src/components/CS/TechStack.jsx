import "../../styles/TechStack.css";


function TechStack() {
    const techList = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "GitHub",
        "Bootstrap",
        "Tailwind",
        "Figma"
    ];

    return (
        <div className="tech-stack" id="tech">
            <h2 style={{ margin: "0 23vw", fontSize: "2.5vw"}}>Tech Stack</h2>
            <div className="tech-container">
                {techList.map((tech, index) => (
                    <div key={index} className="tech-card">
                        <p>{tech}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;