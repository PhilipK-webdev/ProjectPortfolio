import React from 'react'
import dashboard from "../Cards/img/dashboard.png"
import work from "../Cards/img/work-day.png"
import healt from "../Cards/img/HEALT.png"
import gifSearch from "../Cards/img/gifSearch.png"
import stockTracker from "../Cards/img/stockTracker.PNG"
import mySQL from "../Cards/img/mySQL.png"
import "../Cards/Cards.css"
import ScrollAnimation from 'react-animate-on-scroll';
const Cards = () => {
    return (
        <ScrollAnimation animateIn="rollIn">
            <div className="container-fluid m-0" id="projectContainer">
                <div className="row m-0">
                    <div className="text-center col-md-4 col-12">
                        <h1 className="text-center mt-3 mb-4" id="project">Projects</h1>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="text-center col-lg col-md-6 col-12">
                        <div className="card h-100" style={{ margin: "20px 0px 20px 10px !important" }}>
                            <img className="card-img-top" src={stockTracker} alt="stockTracker App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5 mt-1">StockTracker App</div>
                                <p className="card-text">
                                    The StockTracker app was developed during a team project.<br />
                            Operated a team of 4 and was instrumental in successfully completing StockTracker and “project goals, objectives, timeline”.
                            An app that can provide and help you to understand when and what company to invest by getting information on market trend obtaining news and other factors in the market which assist on decision making,
                            help you to know how your investments are performing and help you know when it’s time to make changes on your investment.
                            </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    Sequelize, mySql, Express, Node.js, Javascript , Passport authentication, Bootstrap and Materialize
                            </p>
                            </div>

                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/StockTracker" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://stock-market-appnew.herokuapp.com/" >
                                        <i className="fas fa-external-link-alt" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg col-md-6 col-12 mt-2">
                        <div className="card h-100" style={{ margin: "20px 0px 20px 10px !important" }}>
                            <img className="card-img-top" src={dashboard} alt="Weather App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5">Weather Dashboard</div>
                                <p className="card-text">
                                    An app that can provide information for users and help them to planning their trip somewhere in the world.
                                    As user you can look for any city in the world and get all the data such as :
                                    Temperature, Humidity, Wind Speed and UV.
                            </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    CSS,HTML,Bootstrap and jQuery and openweathermap third party API, Ajax
                            </p>
                            </div>

                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/Weather-Dashboard" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://philipk-webdev.github.io/Weather-Dashboard/" >
                                        <i className="fas fa-external-link-alt" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg col-md-6 col-12 mt-2">
                        <div className="card h-100" style={{ margin: "20px 0px 20px 10px !important" }}>
                            <img className="card-img-top" src={healt} alt="Health App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5">MERN App:</div>
                                <p className="card-text">
                                    MERN Health Tracker is an app designed for tracking calorie intake.
                                    You can search for food items and add logs to your profile,
                                    keeping track of what you’ve eaten, along with a detailed breakdown of the nutritional content of those foods.
                                    As user you want to be able to track you nutritions intake and to see history of what you have eaten.
                            </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    MERN, Sequelize, mySql, Express, React.js, Node.js, Javascript , Passport authentication, Material-UI
                            </p>
                            </div>
                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/health_tracker" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://health-tracker-appnew.herokuapp.com/" >
                                        <i className="fas fa-external-link-alt" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-2 mb-3">
                    <div className="text-center col-lg col-md-6 col-12  mt-2">
                        <div className="card h-100" style={{ margin: "20px 0px 20px 10px !important" }}>
                            <img className="card-img-top" src={work} alt="WorkDay App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5 mt-1">Work Day Scheduler App</div>
                                <p className="card-text">
                                    Main goal was to create and establish a program that can help with time management
                                    As user you can add important events to your daily calendar and be able to manage your time effectively.
                                    The flexibility of the app allows you delete and save our daily events as needed.
                            </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    CSS, Bootstrap ,jQuery , Node.js-moment.js, localstorage.
                            </p>
                            </div>

                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/WorkDay-Scheduler" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://philipk-webdev.github.io/WorkDay-Scheduler/" >
                                        <i className="fas fa-external-link-alt" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg col-md-6 col-12  mt-2">
                        <div className="card h-100" style={{ margin: "20px 0px 20px 10px !important" }}>
                            <img className="card-img-top" src={gifSearch} alt="Gif Search App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5">Gif Search App</div>
                                <p className="card-text">
                                    As a user you can search for a gif ,
                                    and view random results. With the same search input
                                    you can get 5 top sub reddit on the subject that you where looking for .
                            </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    CSS,HTML,Bootstrap ,jQuery,giphy api and reddit api.
                            </p>
                            </div>

                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/Gif-search-app" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://philipk-webdev.github.io/Gif-search-app/" >
                                        <i className="fas fa-external-link-alt" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg col-md-6 col-12  mt-2">
                        <div className="card h-100" style={{ margin: "20px 0px 20px 10px !important" }}>
                            <img className="card-img-top" src={mySQL} alt="Health App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5">Employee Tracker:</div>
                                <p className="card-text">
                                    A CMS - Content Management System for managing a company's employees .
                                    As a HR user of the app I want to be able to add a new employee to the company
                            </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    Node.js, Inquirer, Sequelize, mySql, Node.js, Javascript
                            </p>
                            </div>
                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/Employee-Tracker" alt="Github repo" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://www.youtube.com/watch?v=oPUJK9GTxmM" alt="Youtube Video">
                                        <i className="fas fa-external-link-alt" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>

    )
}

export default Cards
