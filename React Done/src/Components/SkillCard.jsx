
export default function SkillCard({ skill, index }) {
    return (
        <article
            className={`skill-card skill-${skill.color.toLowerCase()}`}
            style={{ "--delay": `${index * 0.15}s` }}
        >
            <div className="skill-card-top">
                <span className="skill-category">
                    {skill.category}
                </span>

                <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            <h2>{skill.name}</h2>

            <p className="skill-description">
                {skill.description}
            </p>

            <div className="skill-progress-info">
                <span>Learning progress</span>
                <span>{skill.progress}%</span>
            </div>

            <div
                className="skill-progress"
                role="progressbar"
                aria-label={`${skill.name} learning progress`}
                aria-valuenow={skill.progress}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                    className="skill-progress-fill"
                    style={{ "--progress": `${skill.progress}%` }}
                />
            </div>

            <div className="skill-card-footer">
                <span>XPIDER SYSTEM</span>
                <span>IN PROGRESS</span>
            </div>
        </article>
    );
}
