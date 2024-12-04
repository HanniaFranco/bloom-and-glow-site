import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import aboutusImage from '../../assets/images/aboutus_image.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Header />
      <div className="aboutus-container">
        <div className="welcome-section">
          <p className="home-title">ACERCA DE NOSOTROS</p>
          <p className="home-text">Conócenos</p>
        </div>

        {/* About Us section */}
        <div className="aboutus-coaching-section">
          <div className="aboutus-text-section">
            <span className="aboutus-section-header">Bloom and Glow</span>
            <h2>En Bloom and Glow, creemos que cada mujer merece sentirse hermosa y segura de sí misma.</h2>
            <p>
             Nuestra tienda está dedicada a ofrecerte una selección exquisita de ropa que no solo realza tu belleza natural, sino que también te permite expresar tu estilo único.
            </p>
            <button className="aboutus-service-button">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>COMPRA CON NOSOTROS</Link>
        </button>
          </div>
          <div className="aboutus-image-section">
          <img src={aboutusImage} alt="About Us Image" />
            <div className="aboutus-play-button-overlay">
              <span>&#9658;</span> {/* Símbolo" */}
            </div>
          </div>
        </div>

        {/* Más*/}
        <div className="aboutus-values-section">
          <span className="aboutus-section-header">Para Nosotros</span>
          <h3>Deja que tu belleza florezca y brille es más que nuestro eslogan; es nuestra misión</h3>

          <div className="aboutus-values-cards">
            {/* Card 1 */}
            <div className="value-card">
          
              <h3>Calidad y Estilo</h3>
              <p>
              En Bloom and Glow, nos comprometemos a ofrecer ropa de la más alta calidad que combine estilo y comodidad. Cada prenda está diseñada para resaltar tu belleza y hacerte sentir fabulosa.
              </p>
              <Link to="/" className="read-more-link">Read More →</Link>
            </div>

            {/* Card 2 */}
            <div className="value-card highlight-card">
         
              <h3>Atención Personalizada</h3>
              <p>
              Nos enorgullece brindar una atención personalizada a cada cliente. Nuestro equipo está aquí para ayudarte a encontrar las prendas perfectas que se adapten a tu estilo y necesidades.
              </p>
              <Link to="/" className="read-more-link">Read More →</Link>
            </div>

            {/* Card 3 */}
            <div className="value-card">
       
              <h3>Innovación y Tendencias</h3>
              <p>
              Siempre estamos a la vanguardia de las últimas tendencias de la moda. En Bloom and Glow, encontrarás las novedades más frescas y estilos innovadores que te harán destacar en cualquier ocasión.
              </p>
              <Link to="/" className="read-more-link">Read More →</Link>
            </div>
          </div>
        </div>

      </div>
    <Footer />
    </>
  );
}

export default About;

