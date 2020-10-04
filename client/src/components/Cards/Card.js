import React from 'react'
import avatar from "../Cards/img/myAvatar.png"

const Card = () => {
    return (
        <div className="row mb-4">
            <div className="col-sm-12">
                <div className="card bg-dark text-white">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5k1y0y0tPP3JiAOcBCSDb1acAlcfOi0fjHIi0kLMBzCPJj7D6lNFXjGxGNNp5QQqyyUbKO9EjEAWZSwCvQ6ZkTBXoAzxcOe8ntL4P&usqp=CAU&ec=45707746" className="card-img" alt="" style={{ height: "60vh" }} />
                    <div className="card-img-overlay text-center">
                        <div className="card-title display-4 mb-6" style={{ boxShadow: "10px 10px 14px -1px rgba(0,0,0,0.75)", textDecoration: "underline" }}>
                            <img src={avatar} alt="Avatar" className="img-thumbnail rounded-circle ml-3" style={{ width: "100px" }} />
                        </div>
                        <div className="text-justify d-flex justify-content-center" style={{ overflowY: "auto", maxHeight: "200px" }}>
                            <div className="card" style={{ width: "80rem" }}>
                                <div className="card-text" style={{ background: "#ADFF2F", boxShadow: "10px 10px 14px -1px rgba(0,0,0,0.75)" }}>
                                    < p className="font-weight-light text-monospace pl-3 pr-3 " style={{ fontSize: "18px", color: "black" }}>
                                        About Me :<br />
                                        My name is Philip Kouchner I'm 31 years old.
                                        I like hiking , traveling , spend time with freinds and family
                                        and if you looking for a ping-pong player so you found one 🏆.
                                       <br /> After I gradutate from HIT (Holon Institue of Technology) with my B.Sc at Computer Science .
                                        I decided that I want to get more knowledge and creativity therefore I decided to start the journey at UC Berkeley Extension as a FullStack web developer.
                                        Currently graduated from Berkley Extension with GPA 4.0.<br /> Looking for my new challenge in frontend, backend or Both.
                                        I'm a fast learner with excellent background in computers I like to learn new technologies and expand my knowledge in a variety of fields.
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
