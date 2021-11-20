import React from 'react'
import Resume from "./Resume/Philip_Kouchner_final.pdf";

const ResumeDocument = () => {
    return (
        <div>
            <a href={Resume} title="Resume" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-pdf" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px", cursor: "pointer" }} >
                </i>
            </a>
        </div>
    )
}

export default ResumeDocument
