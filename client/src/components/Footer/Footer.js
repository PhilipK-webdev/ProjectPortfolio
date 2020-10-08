import React from 'react'
import developer from "../Footer/img/developer.svg"
const Footer = () => {

    return (
        <footer className="d-flex flex-column footer">
            <h2 > Made By Philip Kouchner</h2 >
            <p><img src={developer} style={{ width: "50px" }} alt="developer" /> &copy; 2020 FullStack Web Developer, Inc.<br />
                <a href="https://www.linkedin.com/in/philip-kouchner-886264100/" className="text-white mr-2">Linkedin</a><a href="https://github.com/PhilipK-webdev" className="text-white">Github</a>
            </p>

        </footer >
    )
}

export default Footer
