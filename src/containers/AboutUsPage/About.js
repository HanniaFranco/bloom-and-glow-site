import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <>
      <Header />
      <div className="aboutus-container">
        <div className="welcome-section">
          <p className="home-title">ACERCA DE NOSOTROS</p>
          <p className="home-text">Conócenos</p>
        </div>
      </div>
    <Footer />
    </>
  );
}

export default About;

