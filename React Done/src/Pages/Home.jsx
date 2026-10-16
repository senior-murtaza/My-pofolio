import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <span className="home-badge">WELCOME TO MY PORTFOLIO</span>

      <h1>
        Hi, I'm Murtaza
        <span>Building for the Web.</span>
      </h1>

      <h2>Junior React Developer</h2>

      <p>
        I build responsive websites using React and Tailwind CSS. I'm passionate
        about learning and creating useful web experiences.
      </p>

      <div className="home-buttons">
        <Link className="home-button primary" to="/Projects">
          View Projects →
        </Link>

        <Link className="home-button secondary" to="/Contact">
          Contact Me
        </Link>
      </div>
    </main>
  );
}
