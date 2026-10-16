import { NavLink } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="navbar">
            <h1 className="navbar-logo">Xpider</h1>
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Projects">Projects</NavLink></li>
                    <li><NavLink to="/Skills">Skills</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}