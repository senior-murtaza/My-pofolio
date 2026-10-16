
import ProjectCard from "../Components/ProjectCard";

const projects = [
    {
        id: 1,
        title: "Student Dashboard",
        description:
            "The Student Dashboard helps students organize their tasks and study activities.",
        technologies: "React, CSS",
        image: "/student-dashboard.png",
        liveLink: "https://studentdasboardd.netlify.app",
        codeLink: "https://github.com/senior-murtaza/Study-Dashboard"
    },
    {
        id: 2,
        title: "Registration Form",
        description:
            "A form that collects user information and validates the inputs.",
        technologies: "React, CSS",
        image: "/registration-form.png",
        liveLink: "https://rainbow-pika-17e6f9.netlify.app",
        codeLink: "https://github.com/senior-murtaza/Sign-Up-Form"
    },
    {
        id: 3,
        title: "Music Box",
        description: "A music application where you can enjoy music.",
        technologies: "React, CSS",
        image: "/music-box.png",
        liveLink: "https://xpider-music.netlify.app/",
        codeLink: "https://github.com/senior-murtaza/Music-Box"
    },
    {
        id: 4,
        title: "BookHub",
        description:
            "In BookHub you can find and read a variety of books.",
        technologies: "React, CSS",
        image: "/bookhub.png",
        liveLink: "https://bookhub-xpider.netlify.app",
        codeLink: "https://github.com/senior-murtaza/BookHub"
    },
    {
        id: 5,
        title: "Movie Box",
        description:
            "Movie Box lets you explore movies and discover your next watch.",
        technologies: "React, CSS",
        image: "/movie-box.png",
        liveLink: "https://expidermovies.netlify.app",
        codeLink: "https://github.com/senior-murtaza/MovieHub"
    },
    {
        id: 6,
        title: "Task Manager",
        description:
            "Task Manager helps you organize and manage your tasks.",
        technologies: "React, CSS",
        image: "/task-manager.png",
        liveLink: "https://expidertask.netlify.app",
        codeLink: "https://github.com/senior-murtaza/Task-Manager"
    }
];

export default function Projects() {
    return (
        <main className="ProjectsPage">
            <h1>My Projects</h1>

            <p className="ProjectsIntro">
                Here you can find a variety of projects.
            </p>

            <div className="Projects">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.image}
                        liveLink={project.liveLink}
                        codeLink={project.codeLink}
                    />
                ))}
            </div>
        </main>
    );
}
