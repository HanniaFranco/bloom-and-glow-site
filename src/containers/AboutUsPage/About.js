import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <>
      <Header />
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">En esta página puedes encontrar más sobre nosotros.</p>
    </div>
    <Footer />
    </>
  );
}

export default About;

