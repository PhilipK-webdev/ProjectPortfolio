import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Cards from './components/Cards/Cards';
import FormRequest from './components/Contact/FormRequest';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav';
function App() {
  return (
    <body>
      <header>
        <Nav />
      </header>
      <main>
        <div className="d-flex flex-column" style={{ background: "#f7cac9" }}>
          <div className="container-fluid rounded-0">
            <div className="row">
              <div className="col-12 p-0" id="about">
                <Card />
              </div>
              <div className="col-12">
                <div id="project" className="container pr-0 pl-0">
                  <Cards />
                </div>
              </div>
              <div className="col-12 mb-2" id="contact">
                <FormRequest />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer >
        <Footer />
      </footer>
    </body>
  );
}

export default App;
