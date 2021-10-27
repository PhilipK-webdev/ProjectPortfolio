import React from 'react'
import work from "../Cards/img/work-day.png"
import healt from "../Cards/img/HEALT.png"
import weather from "../Cards/img/Weather.png";
import stockTracker from "../Cards/img/stockTracker.PNG"
import mySQL from "../Cards/img/mySQL.png";
import trivia from "../Cards/img/triviaGame.PNG";
import product from "../Cards/img/Product.png";
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
                            <img className="card-img-top" src={weather} alt="Weather App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5">Weather App</div>
                                <p className="card-text">
                                    An app that can provide information for users and help them to planning their trip somewhere in the world.
                                    As user you can look for any city in the world and get all the data such as :
                                    Temperature, Humidity, Wind Speed and UV.
                                </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    CSS,HTML,Material-UI,React,redux,axios and https://developer.accuweather.com/ as third party API.
                                </p>
                            </div>

                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/WeatherApp" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://philipk-webdev.github.io/WeatherApp/" >
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
                            <img className="card-img-top" src={product} alt="Product App" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5 mt-1">Product App</div>
                                <p className="card-text">
                                    As a Shop Owner I want to look for a specific product. I can lookup for the product by
                                    Barcode or Supplier name or by the name of the product. I can change the price and update the product.
                                </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    HTML5,CSS,Material Ui,React,express,MongoDB,AtlasDB
                                </p>
                            </div>

                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/My_Product" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://mernproductapp.herokuapp.com/" >
                                        <i className="fas fa-external-link-alt" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center col-lg col-md-6 col-12  mt-2">
                        <div className="card h-100" style={{ margin: "20px 0px 20px 10px !important" }}>
                            <img className="card-img-top" src={trivia} alt="Trivia GameApp" id="cardImg" />
                            <div className="card-body">
                                <div className="card-title h5">Trivia Game App</div>
                                <p className="card-text">
                                    Main goal of the app is to able to check your general knowledge.
                                    As a user I want to be able to play a trivia game.
                                </p>
                                <p className="card-text">Stack:</p>
                                <p className="card-text">
                                    CSS,HTML,React,axios and third party API (https://opentdb.com/).
                                </p>
                            </div>

                            <div className="card-footer">
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://github.com/PhilipK-webdev/TriviaGame" >
                                        <i className="fab fa-github" style={{ color: "rgb(222, 166, 175)", margin: "10px", fontSize: "27px" }}></i>
                                    </a>
                                </div>
                                <div style={{ display: "inline-block" }}>
                                    <a href="https://philipk-webdev.github.io/TriviaGame/" >
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
