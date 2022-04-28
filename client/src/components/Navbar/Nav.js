import React from 'react'
import "../Navbar/Nav.css"
const Nav = () => {
    return (
        <div className="row m-0">
            <div className="container-fluid p-0" id="container">
                <nav className="navbar navbar-expand-lg">
                    {/* <a href="#about"
                        className="ml-auto" id="myName"><span className='p-tag'>P</span></a> */}
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                        data-target="#basic-navbar-nav"
                        aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="dark-blue-text"><i
                            className="fas fa-bars fa-1x"></i></span></button>
                    <div className="navbar-collapse collapse" id="basic-navbar-nav" style={{ marginTop: '3vh' }}>
                        <ul className="navbar-nav ml-auto" style={{ position: "relative" }}>
                            <li className="nav-item " >
                                <a className="nav-link " href="#about" style={{
                                    position: "absolute", top: '0',
                                    right: '44vw', width: '10vw', color: 'rgba(255, 255, 255, 1)',
                                    fontWeight: '400', fontStyle: 'normal', fontSize: '1.5vw'
                                }}><span >01.</span>&nbsp;About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project" style={{
                                    position: "absolute", top: '0',
                                    right: '36vw', width: '10vw', color: 'rgba(255, 255, 255, 1)',
                                    fontWeight: '400', fontStyle: 'normal', fontSize: '1.5vw'
                                }}><span >02.</span>&nbsp;Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skill" style={{
                                    position: "absolute", top: '0',
                                    right: '26vw', width: '10vw', color: 'rgba(255, 255, 255, 1)',
                                    fontWeight: '400', fontStyle: 'normal', fontSize: '1.5vw'
                                }} ><span >03.</span>&nbsp;Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" style={{
                                    position: "absolute", top: '0',
                                    right: '19vw', width: '10vw', color: 'rgba(255, 255, 255, 1)',
                                    fontWeight: '400', fontStyle: 'normal', fontSize: '1.5vw'
                                }} ><span >04.</span>&nbsp;Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://medium.com/@philipk179" style={{
                                    position: "absolute", top: '0',
                                    right: '10vw', width: '10vw', color: 'rgba(255, 255, 255, 1)',
                                    fontWeight: '400', fontStyle: 'normal', fontSize: '1.5vw'
                                }} ><span >05.</span>&nbsp;Articles</a>
                            </li>
                            <li className="nav-item">
                                <div style={{ position: 'relative', right: '2vw', width: '8vw', height: '7vh' }}>
                                    <a className="nav-link" href="https://medium.com/@philipk179" style={{
                                        position: "absolute", top: '0vh', border: '2px solid #5CADA9', borderRadius: '10px',
                                        padding: '1vh 2vw', textAlign: 'center',
                                        right: '0', color: 'rgba(255, 255, 255, 1)',
                                        fontWeight: '400', fontStyle: 'normal', fontSize: '1.5vw'
                                    }} >Resume</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav


// position: absolute;
//     top: 0;
//     width: 7vw;
//     right: 27vw;