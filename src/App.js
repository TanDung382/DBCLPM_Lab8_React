import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <h2>Chào mừng đến với Movie Web!</h2>
          <p>Đây là nội dung giữa Header và Footer.</p>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
