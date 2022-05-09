import React from 'react'
import "../Navbar/Nav.scss";
const Nav = () => {


    return (
        <div className='nav'>
            <div className="nav__navigation">
                <div className='nav__navigation__logo'>
                    <a href="#about" className="nav__navigation__letter">P</a>
                </div>
                <input type='checkbox' id='navi-toggle' className='nav__navigation__checkbox'></input>
                <label for="navi-toggle" className="nav__navigation__button">
                    <span className="nav__navigation__icon">&nbsp;</span>
                </label>
                <div className="nav__navigation__background">&nbsp;</div>
                <nav className="nav__navigation__nav">
                    <ul className="nav__navigation__list">
                        <li className="nav__navigation__item">
                            <a href="#about" className="nav__navigation__link">
                                <span>01.</span>About
                            </a>
                        </li>
                        <li className="nav__navigation__item"><a href="#experience" className="nav__navigation__link"><span>02.</span>Experience</a></li>
                        <li className="nav__navigation__item"><a href="#skills" className="nav__navigation__link"><span>03.</span>Skills</a>
                        </li>
                        <li className="nav__navigation__item"><a href="#contact" className="nav__navigation__link"><span>04.</span>Contact</a></li>
                        <li className="nav__navigation__item"><a href="#articles" className="nav__navigation__link"><span>05.</span>Articles</a></li>
                        <li className="nav__navigation__item"><a href="#" className="nav__navigation__link"><span>06.</span>Resume</a></li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Nav


// position: absolute;
//     top: 0;
//     width: 7vw;
//     right: 27vw;