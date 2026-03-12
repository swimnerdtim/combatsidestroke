import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Technique from './pages/Technique';
import Training from './pages/Training';
import './App.css';

function App() {
  return (
    <Router basename="/combatsidestroke">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technique" element={<Technique />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
