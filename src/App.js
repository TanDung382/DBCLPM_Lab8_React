<<<<<<< HEAD
<<<<<<< HEAD
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';  // Import HomePage component
=======
=======
>>>>>>> a996c678f3306ae80e7d08c927754d54c817867e
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
<<<<<<< HEAD
>>>>>>> a996c678f3306ae80e7d08c927754d54c817867e
=======
>>>>>>> a996c678f3306ae80e7d08c927754d54c817867e

function App() {
  return (
    <Router>
<<<<<<< HEAD
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Hiển thị HomePage */}
      </Routes>
=======
=======
>>>>>>> a996c678f3306ae80e7d08c927754d54c817867e
      <div>
        <Header />
        <div className="container">
          <h2>Chào mừng đến với Movie Web!</h2>
          <p>Đây là nội dung giữa Header và Footer.</p>
        </div>
        <Footer />
      </div>
<<<<<<< HEAD
>>>>>>> a996c678f3306ae80e7d08c927754d54c817867e
=======
>>>>>>> a996c678f3306ae80e7d08c927754d54c817867e
    </Router>
  );
}

export default App;
