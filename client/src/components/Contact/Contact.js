import React from 'react'
import "../Contact/Contact.css"
import FormRequest from './FormRequest'
import ScrollAnimation from 'react-animate-on-scroll';
import ResumeDocument from '../ResumeDocument/ResumeDocument'
const Contact = () => {
    return (
        <div className="container-fluid" id="contact">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="text-center col-md-6">
                    <ScrollAnimation animateIn="slideInRight" duration={2}>
                        <h1 className="text-center mt-3 mb-4" id="contactMe" style={{ color: "rgb(255, 255, 255)", fontSize: "4rem" }} >Contact Me</h1>
                    </ScrollAnimation>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">

                <div className="col-md-3"></div>
                <div className="text-center col-md-6">
                    <ScrollAnimation animateIn="zoomInUp" duration={2}>
                        <div style={{ display: "inline-block" }} >
                            <a href="https://github.com/PhilipK-webdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub icon" title="GitHub">
                                <i className="fab fa-github" id="fa-github" style={{ cursor: "pointer" }}>
                                </i>
                            </a>
                        </div>
                        <div style={{ display: "inline-block" }}>
                            <a href="https://www.linkedin.com/in/philip-kouchner-886264100/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin icon" title="Linkedin">
                                <i className="fab fa-linkedin" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px", cursor: "pointer" }}></i>
                            </a>
                        </div>
                        <div style={{ display: "inline-block" }}>
                            <a href="mailto:philipk179@gmail.com" title="Email">
                                <i alt="Email icon" className="fas fa-envelope" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px", cursor: "pointer" }}>
                                </i>
                            </a>
                        </div>
                        <div style={{ display: "inline-block" }} >
                            <ResumeDocument />
                        </div>
                    </ScrollAnimation>
                </div>
                <div className="col-md-3"></div>

            </div>
            <div className="container-fluid">
                <div className="row no-gutters" style={{ marginBottom: "15px" }}>
                    <div className="text-center col"><div className="container" style={{ display: "inline" }}>
                        <ScrollAnimation animateIn="slideInUp" duration={2}>
                            <FormRequest />
                        </ScrollAnimation>
                    </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
