import React from 'react'
import avatar from "../Cards/img/myAvatar.png";
import me from '../Cards/img/me.jpg'
import "../Cards/Card.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Card = () => {
    return (
        <div>
            <ScrollAnimation animateIn="fadeIn">
                <div className="container-fluid m-0" id="about">
                    <h1 className="display-2 text-center mt-3 mb-4" id="aboutMe">About Me</h1>
                    <div className="row mb-4 m-0">
                        <div className="col-sm-12">
                            <div className="card text-white" id="cardBackground">
                                <div className="row m-0">
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-3 col-md-12">
                                        <img src={me} className="img-fluid pt-3" id="myself" alt="" />

                                    </div>

                                    <div className="mt-3 col-lg-6 col-md-12" id="about">

                                        <ScrollAnimation animateIn="zoomIn">
                                            <strong style={{ fontSize: "30px" }}>Who am I:</strong> <br />
                                            Hi! My name is Philip Kouchner, a B.Sc. graduate, residing in Israel.
                                            I like hiking, reading books and am a big sports fan (if you are looking for Ping-Pong player then you found one).
                                            I've spent the last 3.5 years working in California,and now coming back to Israel.
                                            <br />
                                            <strong style={{ fontSize: "30px" }}>Where it all began:</strong> <br />
                                            In 2014, I took the first step towards my career as a web developer
                                            by entering the school of Computer Science in Holon Institute of Technology (HIT) in Israel.Three years later I received my B.Sc. diploma.<br />
                                            <strong style={{ fontSize: "30px" }}>What else:</strong> <br />
                                            Seeking to broaden my knowledge, I took a “Full Stack Web Developer”
                                            class at UC Berkeley Extension and am a fresh graduate (September 2020) with a 4.0 GPA.<br />
                                            <strong style={{ fontSize: "30px" }}>Where I am now:</strong> <br />
                                            Currently working at Protouch LTD company as a web developer.
                                            I’m always looking to evolve and keep up with the latest tech in a rapidly changing world.
                                        </ScrollAnimation>
                                    </div>

                                    <div className="col-lg-2"></div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </ScrollAnimation>
        </div>

    )
}

export default Card
