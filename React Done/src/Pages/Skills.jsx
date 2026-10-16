import SkillCard from "../Components/SkillCard"

let skills = [
    {name:"React", category:"Frontend Development", description:"Building reusable UI components", progress:60, color:"Blue"},
    {name:"HTML", category:"Frontend Development", description:"Building reusable UI components", progress:80, color:"Orange"},
    {name:"CSS", category:"Frontend Development", description:"Styling", progress:70, color:"Blue"},
    {name:"Javascript", category:"Frontend Development", description:"Functios and interaction", progress:65, color:"Yellow"}
]

export default function Skills(){
    return(
        <main className="skills-page">
            <div className="skills-heading">
                <p className="skills-label">XPIDER / MY ABILITIES</p>
                <h2 className="title">My skills</h2>
                <p className="skills-intro">The technologies I'm learning and using
                to bring my ideas to life.</p>
            </div>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    />
                ))}
            </div>
        </main>
    )
}