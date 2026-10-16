import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <main>
            <h1 className="notfound-code">404</h1>

            <h2>Oops! Page Not Found!</h2>

            <p>
                Looks like this page has disappeared into another dimension.
                Let's get you back on track!
            </p>

            <Link to="/" className="notfound-button"> ← Back to Home</Link>
        </main>
    )
}