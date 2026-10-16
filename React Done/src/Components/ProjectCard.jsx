
export default function ProjectCard({
    title,
    description,
    technologies,
    image,
    liveLink,
    codeLink
}) {
    return (
        <div className="ProjectCard">
            <div className="ProjectImageContainer">
                <img
                    src={image}
                    alt={`${title} screenshot`}
                    className="ProjectImage"
                    loading="lazy"
                />
            </div>

            <div className="ProjectCardContent">
                <h2>{title}</h2>

                <p className="ProjectDescription">
                    {description}
                </p>

                <p className="ProjectTechnologies">
                    {technologies}
                </p>

                <div className="ProjectLinks">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="LiveLink"
                    >
                        Live Demo
                    </a>

                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="CodeLink"
                    >
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}
