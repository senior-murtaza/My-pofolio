    import { Link } from "react-router-dom"

    export default function About(){
        return(
            <main className="about-page">
                <div className="introduction">
                    <span>Xpider code</span>
                    <h1>Murtaza Rahimi</h1>
                    <p>Hi, I am Murtaza Rahimi a React Front-end Developer</p>
                    <img src="/murtaza.jpg" alt="Murtaza Rahimi" />
                    
                </div>

                <div className="story">
                    <span>My Journey</span>
                    <h2>Who is Murtaza?</h2>
                    <p>I started learning front-end web development in Herat through a program supported by UNICEF and HBC, mentored by Faramarz Siad Mohammadi.</p>
                    <p>Nowadays, I spend hours learning to code and debugging. It can be challenging, but it is also rewarding</p>
                </div>

                <div className="skills-goals">
                    <div className="inprogress">
                        <h2>What I'm Learning</h2>
                        <p>I have been learning HTML, CSS, JavaScript and React for four months</p>
                        <strong>HTML</strong>
                        <strong>CSS</strong>
                        <strong>JavaScript</strong>
                        <strong>React</strong>
                        <span>Currently learning</span>
                    </div>

                    <div className="goals">
                        <h2>My goals</h2>
                        <p>I am working hard to be a SOFTWARE ENGINEER</p>
                        <strong>Build Projects</strong>
                        <strong>Improve My Skills</strong>
                        <strong>Write Clean Code</strong>
                    </div>

                    <div className="future">
                        <h2>My Future</h2>
                        <p>Every day, I work hard to learn new things and develop new and better websites so one day i can be a SOFTWARE ENGINEER</p>
                        <strong>Advanced React</strong>
                        <strong>Real-World Projects</strong>
                        <strong>Professional Growth</strong>
                    </div>
                </div>

                <div className="about-links">
                    <Link to="/">Home</Link>
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Skills">SKills</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </main>
        )
    }