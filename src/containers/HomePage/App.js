import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from "../../context/CartContext"; //Importamos CartPrivider
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
    <CartProvider> {/* Envolvemos toda la app con el proveedor */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/shirts" element={<ShirtsPage />} />
            <Route path="/sets" element={<SetsPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;