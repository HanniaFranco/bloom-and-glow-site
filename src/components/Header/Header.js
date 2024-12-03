import React, { useState } from 'react';
import './Header.css';
import userIcon from '../../assets/images/usuario.png'; 
import cartIcon from '../../assets/images/carrito-de-compras.png';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            {/* Logo */}
            <Link to="/" className="logo">
                BLOOM & GLOW
            </Link>

            {/* Navegación */}
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Nosotros</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                    <li><Link to="/offers">Ofertas</Link></li>
                </ul>
            </nav>

            {/* Íconos */}
            <div className="icons">
                <img 
                    className="icon-user" 
                    src={userIcon} 
                    alt="Usuario"
                />
                <img 
                    className="icon-cart" 
                    src={cartIcon} 
                    alt="Carrito"
                />
            </div>

            {/* Menú hamburguesa */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </header>
    );
}

export default Header;