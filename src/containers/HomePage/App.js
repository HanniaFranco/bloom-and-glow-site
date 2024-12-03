import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import About from '../AboutUsPage/About'; 
import ProductsPage from '../ProductsPage/ProductsPage'
import './App.css';
import OffersPage from '../OffersPage/OffersPage';
import CartPage from '../CartPage/CartPage';
import UserPage from '../UserPage/UserPage';
import SetsPage from '../SetsPage/SetsPage';
import ShirtsPage from '../ShirtsPage/ShirtsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/shirts" element={<ShirtsPage />} />
          <Route path="/sets" element={<SetsPage />} />
          <Route path="/about" element={<About />} /> {/* Página About */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;