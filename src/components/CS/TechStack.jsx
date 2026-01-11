import "../../styles/TechStack.css";


function TechStack() {
const techList = [
    // Languages
    "Java",
    "Python",
    "C",
    "C++",
    "C#",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    

    // Frameworks & Technologies
    "React",
    "Node.js",
    "Express.js",
    "Spring Boot",
    "MongoDB",
    "MySQL",
    "REST APIs",

    // Developer Tools
    "Git",
    "GitHub",
    "VS Code",
    "Eclipse",
    "Postman",
    "Docker",
    "Unity",

    // Libraries
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",

];

    return (
        <div className="tech-stack" id="tech">
            <h2>Tech Stack</h2>
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