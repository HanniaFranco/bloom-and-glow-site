import React from 'react';
import { Link } from 'react-router-dom';
import './SimpleHeader.css';
import userIcon from '../../assets/images/usuario.png';

function SimpleHeader() {
  return (
    <header className="simple-header">
      {/* Logo */}
      <Link to="/" className="logo">
        BLOOM & GLOW
      </Link>
      {/* Icono de usuario */}
        <Link to="/user">
            <img 
            className="icon-user" 
            src={userIcon} 
            alt="Usuario"
            />
        </Link>
    </header>
  );
}

export default SimpleHeader;