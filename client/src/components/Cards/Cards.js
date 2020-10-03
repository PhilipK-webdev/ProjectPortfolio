import React from 'react'
import group from "../Cards/img/groupProject.png"
import weather from "../Cards/img/weather.png"
import work from "../Cards/img/work-day.png"
import healt from "../Cards/img/HEALT.png"
const Cards = () => {
    return (
        <div className="container-fluid rounded-0">
            <div classNameName="row row-cols-1 row-cols-md-3">
                <div classNameName="col mb-4" id="project">
                    <div className="card">
                        <img src={group} className="img-fluid " alt="stockTracker App" />
                        <div className="card-body">
                            <a href="https://github.com/PhilipK-webdev/StockTracker" className="card-link btn btn-primary ">
                                Github
                            </a>

                            <a href="https://stock-market-appnew.herokuapp.com/" className="card-link btn btn-info">Heroku</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4 mt-4" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <div className="card" >
                        <img src={weather} className="img-fluid " alt="Weather App" />
                        <div className="card-body">
                            <a href="https://github.com/PhilipK-webdev/Weather-Dashboard" className="card-link btn btn-primary">
                                Github
                            </a>
                            <a href="https://philipk-webdev.github.io/Weather-Dashboard/" className="card-link btn btn-info">Live
                            link</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <div className="card">
                        <img src={work} className="img-fluid " alt="WorkDay App" />
                        <div className="card-body">
                            <a href="https://github.com/PhilipK-webdev/WorkDay-Scheduler" className="card-link btn btn-primary">
                                Github
                            </a>
                            <a href="https://philipk-webdev.github.io/WorkDay-Scheduler/" className="card-link btn btn-info">Live
                            link</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <div className="card">
                        <img src={healt} className="img-fluid " alt="Health App" />
                        <div className="card-body">
                            <a href="https://github.com/PhilipK-webdev/health_tracker" className="card-link btn btn-primary">
                                Github
                            </a>
                            <a href="https://health-tracker-appnew.herokuapp.com/" className="card-link btn btn-info">Heroku</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cards
