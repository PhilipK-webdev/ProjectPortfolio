import React from 'react'
import developer from "../Footer/img/developer.svg"


const Footer = () => {

    return (
        <div className="footer-copyright py-3 text-center" style={{ backgroundColor: "rgb(178, 133, 141)" }}>
            <div className="row">
                <div className="container-fluid">
                    <p><img src={developer} style={{ width: "30px" }} alt="developer" /> &copy; 2020 FullStack Web Developer, Inc.<br />
                    Made By Philip Kouchner<br />
                        <a href="mailto:philipk179@gmail.com" style={{ color: "#55474c" }}>philipk179@gmail.com</a>
                    </p>

                </div>
                <div className="container-fluid">
                    <div style={{ display: "inline-block", transform: "none" }}><a href="https://github.com/PhilipK-webdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub icon">
                        <i className="fab fa-github" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}>
                        </i>
                    </a>
                    </div>
                    <div style={{ display: "inline-block", transform: "none" }}>
                        <i className="fab fa-react" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}>
                        </i>

                    </div>
                    <div style={{ display: "inline-block", transform: "none" }}>
                        <i className="fab fa-node" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}>
                        </i>

                    </div>
                    <div style={{ display: "inline-block", transform: "none" }}>
                        <i className="fab fa-js-square" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}>
                        </i>

                    </div>
                    <div style={{ display: "inline-block", transform: "none" }}>
                        <i className="fab fa-bootstrap" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}>
                        </i>
                    </div>
                    <div style={{ display: "inline-block", transform: "none" }}>
                        <i className="fab fa-font-awesome-flag" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px" }}>
                        </i>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer
