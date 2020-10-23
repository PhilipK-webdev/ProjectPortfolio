import React from 'react'
import "../Contact/Contact.css"
import FormRequest from './FormRequest'

const Contact = () => {
    return (
        <div className="container-fluid" id="contact">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="text-center col-md-6">
                    <h1 className="text-center mt-3 mb-4" style={{ color: "rgb(255, 255, 255)", fontSize: "4rem" }}>Contact Me</h1>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="text-center col-md-6">
                    <div style={{ display: "inline-block" }}>
                        <a href="https://github.com/PhilipK-webdev" target="_blank" aria-label="GitHub icon">
                            <i className="fab fa-github" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}></i>
                        </a>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <a href="https://www.linkedin.com/in/philip-kouchner-886264100/" target="_blank" aria-label="Linkedin icon">
                            <i className="fab fa-linkedin" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}></i>
                        </a>
                    </div>
                    <div style={{ display: "inline-block" }}>
                        <a href="mailto:philipk179@gmail.com">
                            <i alt="Email icon" className="fas fa-envelope" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}>
                            </i>
                        </a>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="container-fluid">
                <div className="row no-gutters" style={{ marginBottom: "15px" }}>
                    <div class="text-center col"><div class="container" style={{ display: "inline" }}>
                        <FormRequest />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
