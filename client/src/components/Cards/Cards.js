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
                            <h5 class="card-title">StockTracker App:</h5>
                            <p className="card-text">
                                The StockTracker app was developed during a team project.<br />
                                An app that can provide and
                                help you to understand when and what company to invest by getting information on market trend
                                obtaining news and other factors in the market which assist on decision making,
                                help you to know how your investments are performing and
                                help you know when it’s time to make changes on your investmen.
                            </p>

                            <a href="https://github.com/PhilipK-webdev/StockTracker" className="card-link btn btn-primary ">
                                Github
                            </a>
                            <a href="https://stock-market-appnew.herokuapp.com/" className="card-link btn btn-info">Heroku</a>

                        </div>
                    </div>
                </div>
                <div className="col mb-4" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <div className="card">
                        <img src={healt} className="img-fluid " alt="Health App" />
                        <div className="card-body">
                            <h5 class="card-title">MERN App:</h5>
                            <p className="card-text">
                                MERN Health Tracker is an app designed for tracking calorie intake.<br />
                                You can search for food items and add logs to your profile,<br />
                                keeping track of what you’ve eaten, along with a detailed breakdown of the nutritional content of those foods.<br />
                                As user you want to be able to track you nutritions intake and to see history of what you have eaten.<br />
                            </p>
                            <a href="https://github.com/PhilipK-webdev/health_tracker" className="card-link btn btn-primary">
                                Github
                            </a>
                            <a href="https://health-tracker-appnew.herokuapp.com/" className="card-link btn btn-info">Heroku</a>
                        </div>
                    </div>
                </div>
                <div className="col mb-4 mt-4" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <div className="card" >
                        <img src={weather} className="img-fluid" alt="Weather App" />
                        <div className="card-body">
                            <h5 class="card-title">Weather App:</h5>
                            <p className="card-text">

                                An app that can provide information for users and help them to planning their trip somewhere in the world.<br />
                                As user you can look for any city in the world and get all the data such as :<br />
                                Temperture, Humidity, Wind Speed and UV.<br />
                                Also 5-days forecast.
                            </p>
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
                            <h5 class="card-title">Work Day Scheduler App:</h5>
                            <p className="card-text">
                                Main goal was to create and establish a program that can help with time management.<br />
                                As user you can add important events to your daily calendar and be able to manage your time effectively.<br />
                                The flexibility of the app allows you delete and save our daily events as needed.<br />
                            </p>
                            <a href="https://github.com/PhilipK-webdev/WorkDay-Scheduler" className="card-link btn btn-primary">
                                Github
                            </a>
                            <a href="https://philipk-webdev.github.io/WorkDay-Scheduler/" className="card-link btn btn-info">Live
                            link</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Cards
