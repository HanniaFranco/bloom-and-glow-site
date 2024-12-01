import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import About from '../AboutUsPage/About'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página principal */}
          <Route path="/about" element={<About />} /> {/* Página About */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

