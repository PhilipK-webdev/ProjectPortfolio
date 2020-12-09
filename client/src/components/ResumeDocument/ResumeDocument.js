import React from 'react'
import resume from "../Resume/resume2.pdf"
const ResumeDocument = () => {
    return (
        <div>
            <a href={resume} title="Resume" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-file-pdf" style={{ color: "rgb(255, 255, 255)", margin: "10px", fontSize: "27px", cursor: "pointer" }} >
                </i>
            </a>
        </div>
    )
}

export default ResumeDocument
