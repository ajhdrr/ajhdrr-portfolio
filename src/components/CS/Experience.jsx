import "../../styles/Experience.css";


function Experience() {
    const expList = [ 
        {
            id: 1,
            title: "Software Developer Co-op",
            company: "TD Bank",

            duration: "May 2023 - Aug 2023",
            points: [
                "Developed and maintained internal web applications using React and Node.js, improving user experience and functionality.",
                "Collaborated with cross-functional teams to gather requirements and implement new features, resulting in a 15% increase in application efficiency.",
                "Participated in code reviews and contributed to team knowledge sharing sessions to enhance code quality and team skills."
            ]
        },
        {
            id: 2,
            title: "Web Development Intern",
            company: "Tech Solutions Inc.",
            
            duration: "Jan 2023 - Apr 2023",
            points: [
                "Assisted in the development of client websites using HTML, CSS, and JavaScript, ensuring responsive design and cross-browser compatibility.",
                "Worked closely with designers to implement UI/UX improvements, leading to a 10% increase in user engagement.",
                "Conducted website testing and debugging to identify and resolve issues promptly."
            ]
        },
        {
            id: 3,
            title: "IT Support Assistant",
            company: "University IT Services",
            
            duration: "Sep 2022 - Dec 2022",
            points: [
                "Provided technical support to students and faculty, resolving hardware and software issues efficiently.",
                "Managed inventory of IT equipment and assisted in the setup of computer labs for new academic terms.",
                "Created user guides and documentation to help users troubleshoot common technical problems."
            ]
        }
    ];


    return (
        <div className="experience">
            <h2 style={{ margin: "1vw 20vw", fontSize: "4vw"}}>Experience</h2>     
            {expList.map((exp) => (
                <ExpCard key={exp.id} expList={exp} />
            ))}
        </div>
    );
}



function ExpCard({expList}) {
    return (
        <div className="exp-cards"> 
            <div className="exp-logo">
                <img src={expList.logo} alt={`${expList.company} logo`} />
            </div>
            <div className="exp-details">
                <h6 style={{ marginLeft: "-0.5vw" }}>{expList.duration}</h6>
                <h3>{expList.title}</h3>
                <h6 style={{ marginLeft: "-0.5vw" }}>{expList.company} </h6>
                <ul>
                    {expList.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experience;