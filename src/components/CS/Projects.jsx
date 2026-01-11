import "/src/styles/Projects.css";
import Blob from "/src/assets/project/Blob.webp"
import DBMSImg from "/src/assets/project/DBMS-Img.webp";
import WebPortfolio from "/src/assets/project/WebPortfolio.webp";

import DBMSR from "/src/assets/project/DBMS-Report.pdf";


function Projects() {
    const projList = [
        {
            id: 1,
            title: "Web Portfolio Development",
            logo: WebPortfolio,
            desc: "Developing a personal portfolio website with a React-based frontend to showcase academic and co-op projects. Implemented responsive design using HTML, CSS, and JavaScript.",
            duration: "Dec 2025 – Present",
            tech: ["React", "Node.js", "HTML", "CSS", "JavaScript", "Git"],
            links: [ ["Website", "ajhdrr.com"], ["GitHub", "https://github.com/ajhdrr/ajhdrr-portfolio"]]
        },
        {
            id: 2,
            title: "Photo & Video Rental DBMS",
            logo: DBMSImg,
            desc: "Designed a relational database system using ER diagrams and schemas normalized to 3NF and BCNF to reduce redundancy and improve consistency. Developed a Java-based UI to manage rentals, customers, and equipment with full CRUD functionality and implemented SQL queries, joins, and stored procedures for real-time reporting.",
            duration: "Sept 2025 – Dec 2025",
            tech: ["Java", "Swing", "Oracle SQL Developer", "SQL"],
            links: [ ["Report", DBMSR], ["GitHub", "https://github.com/ajhdrr/CPS510-CameraRentalDBMS-project"]]
        },
        {
            id: 3,
            title: "Game Production – The Journey of Blob",
            logo: Blob,
            desc: "Developed a 2D/3D Unity game using C#, implementing player controls, physics, UI systems, and event-driven mechanics. Refactored and tested code to improve performance and maintainability, achieving a 20% runtime improvement and reducing bugs by 30%.",
            duration: "May 2024 – Aug 2024",
            tech: ["C#", "Unity", "Photoshop"],
            links: [ ["Website", "https://ajtron.itch.io/the-journy-of-blob"]]
        }
    ];


    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>     
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
                    <p key={index}>{tech}</p> ))}
                </section>
                <p className="desc">{projList.desc}</p>
            </div>
            <div className="proj-buttons">
                {projList.links.map((link, index) => (
                <a key={index} href={link[1]} target="_blank" rel="noreferrer">
                    <button className="proj-button">
                        <p> {link[0]} </p>
                    </button>
                </a>
                ))}

                
            </div>
        </div>
    );
}

export default Projects;