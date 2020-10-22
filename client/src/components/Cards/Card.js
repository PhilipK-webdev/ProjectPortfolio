import React from 'react'
import avatar from "../Cards/img/myAvatar.png"
import "../Cards/Card.css"
const Card = () => {
    return (

        <div className="container-fluid m-0" id="cardBackground">
            <h1 className="display-2 text-center mt-3 mb-4" id="aboutMe">About Me</h1>
            <div className="row mb-4 m-0">
                <div className="col-sm-12">
                    <div className="card text-white" id="cardBackground">
                        <div className="row m-0">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-3 col-md-12">
                                <img src={avatar} className="img-fluid pt-3" />
                            </div>
                            <div className="mt-3 col-lg-6 col-md-12" id="about">
                                <strong>Who am I.</strong> <br />
                                        My name is Philip Kouchner, a B.Sc. graduate, residing in California.
                                        I like hiking, spending time with friends and family and am a big sports fan (if you are looking for Ping-Pong player then you found one). <br />
                                <strong>Where it all began.</strong> <br />
                                        In 2013 I took a first step towards my career as a web developer
                                        by entering the school of Computer Science in Holon Institute of Technology (HIT) and three years later I received my B.Sc. diploma.<br />
                                <strong>What else.</strong> <br />
                                        Seeking to broaden my knowledge I took a “Full Stack Web Developer”
                                         class at UC Berkeley Extension and am a fresh graduate (September 2020) with a 4.0 GPA.<br />
                                <strong>Where I am now.</strong> <br />
                                          Currently seeking for position as a front end, back end or full stack developer.
                                          Having the skills in : <p className="font-italic" style={{ marginRight: "5px", marginBottom: "0px" }}> HTML, CSS , JavaScript, jQuery , React , Node.js, MongoDB , MySQL , Bootstarp , Material-UI.</p>
                                          I’m always looking to upgrade myself and keep up with the new techniques
                                          in a constantly changing world of technologies.
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Card
