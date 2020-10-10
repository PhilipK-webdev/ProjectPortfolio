import React from 'react'
import avatar from "../Cards/img/myAvatar.png"

const Card = () => {
    return (
        <div className="row mb-4">
            <div className="col-sm-12">
                <div className="card bg-dark text-white">
                    <img src="https://www1.clikpic.com/digipal/images/background-21.jpg" className="card-img" alt="" style={{ height: "60vh" }} />
                    <div className="card-img-overlay text-center">
                        <div className="card-title display-4 mb-6" style={{ boxShadow: "10px 10px 14px -1px rgba(0,0,0,0.75)", textDecoration: "underline" }}>
                            <img src={avatar} alt="Avatar" className="img-thumbnail rounded-circle ml-3" style={{ width: "100px" }} />
                        </div>
                        <div className="text-justify d-flex justify-content-center" style={{ overflowY: "auto", maxHeight: "200px" }}>
                            <div className="card" style={{ width: "80rem" }}>
                                <div className="card-text" style={{ background: "#EDF7FD", boxShadow: "10px 10px 14px -1px rgba(0,0,0,0.75)" }}>
                                    < p className="pl-3 pr-3 " style={{ fontSize: "18px", color: "black" }}>
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
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card
