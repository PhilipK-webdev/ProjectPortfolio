import React from 'react'
import me from "../Navbar/img/me2.svg"
import project from "../Navbar/img/project.svg"
import contact from "../Navbar/img/contact.svg"
import paper from "../Navbar/img/paper.svg"
const Nav = () => {
    return (
        <div >
            <nav className="navbar sticky-top mw-100 navbar navbar-expand-sm" style={{ backgroundColor: "#3f51b6" }}>
                <div className="collapse.show navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-pills">
                            <a className="nav-link text-white" href="#about"><img src={me} style={{ width: "50px" }} />About</a>
                        </li>
                        <li className="nav-pills">
                            <a className="nav-link text-white" href="#project"><img src={project} style={{ width: "50px" }} />Projects</a>
                        </li>
                        <li className="nav-pills">
                            <a className="nav-link text-white" href="#contact"><img src={contact} style={{ width: "50px" }} />Contact</a>
                        </li>
                        <li className="nav-pills">
                            <a className="nav-link text-white" href="#article" ><img src={paper} style={{ width: "50px" }} />Articles</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav
