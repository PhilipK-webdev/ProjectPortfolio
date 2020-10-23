import React from 'react'
import "../Navbar/Nav.css"
const Nav = () => {
    return (
        <div className="row m-0">
            <div className="container-fluid p-0" id="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a href="#about" style={{ color: "black" }} id="myName">Philip Kouchner</a>
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#basic-navbar-nav"
                        aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                            className="fas fa-bars fa-1x"></i></span></button>
                    <div className="navbar-collapse collapse" id="basic-navbar-nav">
                        <ul className="mr-auto navbar-nav">
                            <li className="nav-item active ">
                                <a className="nav-link text-primary" href="#about">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="#project">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="#skill">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="https://medium.com/@philipk179" >Articles</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav


