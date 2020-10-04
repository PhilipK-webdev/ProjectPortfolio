import React from 'react'
import me from "../Navbar/img/me2.svg"
import project from "../Navbar/img/project.svg"
import contact from "../Navbar/img/contact.svg"
import paper from "../Navbar/img/paper.svg"
const Nav = () => {
    return (
        <nav className="navbar navbar-light light-blue lighten-4" style={{ backgroundColor: "#3f51b6" }}>
            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                    className="fas fa-bars fa-1x"></i></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav">
                    <li className="nav-item active ">
                        <a className="nav-link text-white" href="#about"><img src={me} style={{ width: "50px" }} alt="about" />About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#project"><img src={project} style={{ width: "50px" }} alt="project" />Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#contact"><img src={contact} style={{ width: "50px" }} alt="contact" />Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="https://medium.com/@philipk179" ><img src={paper} style={{ width: "50px" }} alt="article" />Articles</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav


