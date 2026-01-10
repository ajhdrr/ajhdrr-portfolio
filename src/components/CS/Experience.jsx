import "../../styles/Experience.css";


function Experience() {
const expList = [
    {
        id: 1,
        title: "CLIENT IT CO-OP STUDENT",
        company: "Ontario Institute of Cancer Research (OICR), Toronto, ON",
        duration: "Sep 2024 – Dec 2024",
        points: [
        "Applied relational database concepts by structuring and querying inventory data, performing lookups and joins on primary keys to create detailed asset reports supporting data-driven decisions.",
        "Wrote SQL queries to extract user support metrics used in monthly team performance presentations.",
        "Documented and categorized over 150 IT support tickets and contributed to a new internal knowledge base, improving issue resolution times.",
        "Maintained and cleaned internal inventory databases by merging duplicates and validating entries, improving data accuracy by over 90%.",
        "Collaborated with cross-department teams to support organizational events by setting up and testing AV equipment, ensuring smooth execution."
        ]
    },
    {
        id: 2,
        title: "IT INTERN",
        company: "DPS STS School, Dhaka, Bangladesh",
        duration: "Oct 2022 – Dec 2022",
        points: [
        "Upgraded and configured over 30 lab computers via BIOS, improving system performance by nearly 20 times.",
        "Provided classroom IT support, reducing downtime by over 5 hours per week through prompt troubleshooting.",
        "Assisted in managing network and IT infrastructure including CCTV, RFID attendance systems, and control booth equipment."
        ]
    }
];


    return (
        <div className="experience" id="experience">
            <h2>Experience</h2>    
            <div className="exp-container">
                {expList.map((exp) => (
                    <ExpCard key={exp.id} expList={exp} />
                ))}
            </div> 
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