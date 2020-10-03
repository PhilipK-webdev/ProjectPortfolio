import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Cards from './components/Cards/Cards';
import FormRequest from './components/Contact/FormRequest';
import Footer from './components/Footer/Footer';
import Nav from './components/Navbar/Nav';
function App() {
  return (
    <body className="App">
      <header>
        <Nav />
      </header>
      <main>
        <div className="d-flex flex-column ">
          <div className="container-fluid rounded-0">
            <div className="row">
              <div className="col-12 p-0 ">
                <div id="about">
                  <Card />
                </div>
              </div>
              <div className="col-12 p-0">
                <div id="project" className="container-fluid pr-0 pl-0">
                  <Cards />
                </div>
              </div>
            </div>
            <FormRequest />
          </div>
        </div>
      </main>
      <footer className="container-fluid">
        <Footer />
      </footer>
    </body>
  );
}

export default App;
