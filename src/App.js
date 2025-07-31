// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';   
import Footer from './components/Footer';   
import HomePage from './pages/HomePage';  // Import HomePage component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Hiển thị HomePage */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
