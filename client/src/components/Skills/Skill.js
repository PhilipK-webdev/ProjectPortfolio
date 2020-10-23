import React from 'react'
import "../Skills/Skills.css"

function Skill() {
    return (
        <div className="container-fluid m-0">
            <h1 className="text-center mt-3 mb-4" id="skill">Skills</h1>
            <div className="row no-gutters">
                <div className="text-center mx-5 col">
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="Git icon" className="fab fa-git-alt" id="icon">
                                <p className="iconPargraph">Git</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="React.js icon" className="fab fa-react" id="icon">
                                <p className="iconPargraph">React</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="Node.js icon" className="fab fa-node" id="icon">
                                <p className="iconPargraph">Node</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="HTML icon" className="fab fa-html5" id="icon">
                                <p className="iconPargraph">HTML5</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="Javascript icon" className="fab fa-js-square" id="icon">
                                <p className="iconPargraph">Javascript</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="CSS icon" className="fab fa-css3-alt" id="icon">
                                <p className="iconPargraph">CSS 3</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="mySQL icon" className="fa fa-database" id="icon">
                                <p className="iconPargraph">MySQL</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="Mongodb icon" className="fa fa-database" id="icon">
                                <p className="iconPargraph">MongoDB</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="Bootstrap icon" className="fab fa-bootstrap" id="icon">
                                <p className="iconPargraph">Bootstrap</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="heroku icon" className="fas fa-server" id="icon">
                                <p className="iconPargraph">Heroku</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="jQuery icon" className="fab fa-js-square" id="icon">
                                <p className="iconPargraph">jQuery</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i alt="Github icon" className="fab fa-github" id="icon">
                                <p className="iconPargraph">Github</p>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="text-center col">
                    <div className="container" id="containerSkill">
                        <a>
                            <i className="fab" id="icon" style={{ fontSize: "70px" }}>
                                <p className="iconPargraph">React-Router</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i className="fab" id="icon" style={{ fontSize: "70px" }}>
                                <p className="iconPargraph">Express</p>
                            </i>
                        </a>
                    </div>
                    <div className="container" id="containerSkill">
                        <a>
                            <i className="fab" id="icon" style={{ fontSize: "70px" }}>
                                <p className="iconPargraph">Postman</p>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
