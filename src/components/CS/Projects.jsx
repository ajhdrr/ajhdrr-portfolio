import "../../styles/Projects.css";


function Projects() {
    const projList = [
        {
            id: 1,
            title: "Web Portfolio Development",
            desc: "Developing a personal portfolio website with a React-based frontend and Node.js backend to showcase academic and co-op projects. Implemented responsive design using HTML, CSS, and JavaScript while leveraging Git for scalable full-stack development and version control.",
            duration: "Dec 2025 – Present",
            tech: ["React", "Node.js", "HTML", "CSS", "JavaScript", "Git"]
        },
        {
            id: 2,
            title: "Photo & Video Rental DBMS",
            desc: "Designed a relational database system using ER diagrams and schemas normalized to 3NF and BCNF to reduce redundancy and improve consistency. Developed a Java-based UI to manage rentals, customers, and equipment with full CRUD functionality and implemented SQL queries, joins, and stored procedures for real-time reporting.",
            duration: "Sept 2025 – Dec 2025",
            tech: ["Java", "Swing", "Oracle SQL Developer", "SQL"]
        },
        {
            id: 3,
            title: "Game Production – The Journey of Blob",
            desc: "Developed a 2D/3D Unity game using C#, implementing player controls, physics, UI systems, and event-driven mechanics. Refactored and tested code to improve performance and maintainability, achieving a 20% runtime improvement and reducing bugs by 30%.",
            duration: "May 2024 – Aug 2024",
            tech: ["C#", "Unity", "Photoshop"]
        }
    ];


    return (
        <div className="projects">
            <h2 style={{ margin: "1vw 23vw", fontSize: "2.5vw"}}>Projects</h2>     
            <div className="proj-container" >   
                {projList.map((proj) => (
                    <ProjCard key={proj.id} projList={proj} />
                ))}
            </div>
        </div>
    );
}


function ProjCard({projList}) {
    return (
        <div className="proj-cards"> 
            <div className="proj-img">
                <img src={projList.logo} alt={`${projList.title} Image`} />
            </div>
            <div className="proj-details">
                <h6 style={{ textAlign: "right", marginRight: "1vw" }}>{projList.duration}</h6>
                <h3>{projList.title}</h3>
                <section className="proj-tech">
                    {projList.tech.map((tech, index) => (
                    <p key={index}>{tech}</p>
                ))}
                </section>
                <p style={{marginBottom:"0"}}>{projList.desc}</p>
            </div>
        </div>
    );
}

export default Projects;