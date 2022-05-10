import React from 'react';
import "../Cards/Card.scss";
import me from "./img/me.jpg";
const Card = () => {
    return (
        <div className='card'>
            <header className='card__header-title'>
                Hi my name is
                <div className='card__title'>
                    Philip Kouchner.<br />
                    <span className='card__title__span'> I build thing for the web.</span>
                </div>
                <div className='card__paragraph'>
                    I'm a software engineer specializing in building and design web application.
                    Currently,I'm working at Algorax as a fullstack web developer.
                </div>
            </header>
            <div className='card__about' id='about'>
                <div className='card__about__header'>
                    <div className='card__about__header__title'> About me</div>
                    <div className='card__about__header__border'></div>
                </div>
                <div className='card__about__content'>
                    <div className='card__about__content__body'>
                        <strong className='card__about__content__body__bold'>Who am I:</strong> <br />
                        Hi! My name is Philip Kouchner, a B.Sc. graduate, residing in Israel.
                        I like hiking, reading books and am a big sports fan (if you are looking for Ping-Pong player then you found one).
                        I've spent the last 3.5 years working in California,and now coming back to Israel.
                        <br />
                        <strong className='card__about__content__body__bold'>Where it all began:</strong> <br />
                        In 2014, I took the first step towards my career as a web developer
                        by entering the school of Computer Science in Holon Institute of Technology (HIT) in Israel.Three years later I received my B.Sc. diploma.<br />
                        <strong className='card__about__content__body__bold'>What else:</strong> <br />
                        Seeking to broaden my knowledge, I took a “Full Stack Web Developer”
                        class at UC Berkeley Extension and am a fresh graduate (September 2020) with a 4.0 GPA.<br />
                        <strong className='card__about__content__body__bold'>Where I am now:</strong> <br />
                        Currently working at Algorax as a web developer.
                        I’m always looking to evolve and keep up with the latest tech in a rapidly changing world.
                    </div>
                    <div className='card__about__content__body__border' ></div>
                    <img src={me} alt='Myself' className='card__about__content__image' />
                </div>
                <div className='card__about__title'> Here are a few technologies I’ve been working with recently:</div>
                <div className='card__about__tech'>
                    <ul className='card__about__tech__1'>
                        <li><span style={{ color: '#5CADA9' }}>&#10097;</span> &nbsp;JavaScript(ES6+)</li>
                        <li><span style={{ color: '#5CADA9' }}>&#10097;</span> &nbsp;ReactJS</li>
                        <li><span style={{ color: '#5CADA9' }}>&#10097;</span> &nbsp;Sass</li>
                        <li><span style={{ color: '#5CADA9' }}>&#10097;</span> &nbsp;Node.js</li>
                        <li> <span style={{ color: '#5CADA9' }}>&#10097;</span> &nbsp;MongoDB</li>
                        <li> <span style={{ color: '#5CADA9' }}>&#10097;</span> &nbsp;socket.io</li>
                    </ul>
                </div>
            </div>
        </div >

    )
}

export default Card


