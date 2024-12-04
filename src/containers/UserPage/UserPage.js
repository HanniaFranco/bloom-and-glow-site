import React from 'react';
import './UserPage.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function UserPage() {
  return (
    <>
      <Header />
      <div className="userpage-container">
        <div className="user-container">
          <h2 className="user-title">Iniciar Sesión</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">Iniciar Sesión</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserPage;