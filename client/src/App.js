import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Cards from './components/Cards/Cards';
import FormRequest from './components/Contact/FormRequest';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav';
function App() {
  return (
    <div style={{ position: "relative", zindex: "0" }}>
      <header>
        <div style={{ position: " relative", minHeight: "620px", marginBottom: "0px" }}>
          <div style={{ position: "relative", top: "0px", minHeight: " 545px", width: "100%", zIndex: "1" }}>
            <Nav />
            <div minheight="620" style={{ height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", zIndex: "-2", backgroundColor: "rgb(222, 166, 175)" }}>
              <div style={{ height: "100%" }}></div>
              <svg preserveAspectRatio="none" viewBox="0 0 100 102" version="1.1" xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "75px", position: "relative", top: "-1px" }}><path d="M0 0 L50 100 L100 0 Z" fill="#dea6af"></path></svg>
            </div>
            <div className="container-fluid p-0">
              <div className="text-center col" id="intro">
                <div className="continer-fluid">
                  <div >Kouchner Philip
                  <div className="pb-5 mb-2 col" id="webDev">
                      Software Engineer - Front-end And Back-end
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="row m-0">
          <div style={{ position: "relative", minHeight: "300px", marginBottom: "0px !important" }} id="about">
            <div style={{ height: "100px" }}></div>
            <div style={{ position: "relative", top: "0px", minHeight: "125px", width: "100%", zIndex: "1" }}>
              <Card />
            </div>
            <div minheight="300" style={{ height: "100%", width: "100%", position: "absolute", top: "0px", left: " 0px", zIndex: "-2", backgroundColor: "rgb(230, 219, 201)" }}><div style={{ height: "100%" }}></div>
              <svg preserveAspectRatio="none" viewBox="0 0 100 102" version="1.1" xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "75px", position: "relative", top: "-1px" }}><path d="M0 0 L50 100 L100 0 Z" fill="#e6dbc9"></path></svg></div>
          </div>
          <Cards />
        </div>
      </main>
    </div >





  );
}

export default App;
