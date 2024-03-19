//Home.jsx
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h1>Welcome to my professional portfolio!</h1>
        <div className="div-projects">
            <Link to="/projects">My projects</Link>
        </div>
        <div className="div-resume">
            <Link to="/resume">My resume</Link>
        </div>
        </>

    )
}

export default Home;