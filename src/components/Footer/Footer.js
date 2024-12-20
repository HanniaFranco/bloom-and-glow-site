import React, { useState } from 'react';
import './Footer.css'; 
import facebookIcon from '../../assets/images/facebook.png';
import instagramIcon from '../../assets/images/instagram.png';
import twitterIcon from '../../assets/images/xicon.png';
import pinterestIcon from '../../assets/images/pinterest.png';

function Footer() {
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(true); 
  const [isHelpOpen, setIsHelpOpen] = useState(true); 
  const [isServiceOpen, setIsServiceOpen] = useState(true); //Para hacerlo abierto por defecto en pantallas grandes.

  const toggleSection = (section) => {
    if (section === 'about') {
      setIsAboutUsOpen(!isAboutUsOpen);
    } else if (section === 'help') {
      setIsHelpOpen(!isHelpOpen);
    } else if (section === 'service') {
      setIsServiceOpen(!isServiceOpen);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h4 onClick={() => toggleSection('about')} className="toggle-header">
            Sobre Nosotros {isAboutUsOpen ? '-' : '+'}
          </h4>
          <ul className={`footer-list ${isAboutUsOpen ? 'open' : ''}`}>
            <li>Quienes Somos</li>
            <li>Responsabilidad Social</li>
            <li>Nuestras Tiendas</li>
            <li>Trabaja con Nosotros</li>
            <li>Sala de Prensa</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 onClick={() => toggleSection('help')} className="toggle-header">
            Ayuda & Apoyo {isHelpOpen ? '-' : '+'}
          </h4>
          <ul className={`footer-list ${isHelpOpen ? 'open' : ''}`}>
            <li>Información de Envío</li>
            <li>Devolución</li>
            <li>Reembolso</li>
            <li>Pedidos</li>
            <li>Rastro de Pedido</li>
            <li>Guía de Tallas</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 onClick={() => toggleSection('service')} className="toggle-header">
            Servicio al Cliente {isServiceOpen ? '-' : '+'}
          </h4>
          <ul className={`footer-list ${isServiceOpen ? 'open' : ''}`}>
            <li>Contáctanos</li>
            <li>Forma de Pago</li>
            <li>Puntos</li>
          </ul>
        </div>

        <div className="footer-socials">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={pinterestIcon} alt="Pinterest" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="/terms">Términos y Condiciones</a>
          <a href="/privacy">Política de Privacidad</a>
          <a href="/copyright">Aviso de Copyright</a>
        </div>
        <p>© 2024 Bloom & Glow. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;