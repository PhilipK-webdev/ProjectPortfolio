import React from 'react'
import developer from "../Footer/img/developer.svg"
const Footer = () => {

    return (
        <footer className="d-flex flex-column footer">
            <h2 > Made By Philip Kouchner</h2 >
            <p><img src={developer} style={{ width: "50px" }} /> &copy; 2020 FullStack Web Developer, Inc.</p>
        </footer >
    )
}

export default Footer
