import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import './styles/variables.css';
import './styles/global.css';

function AppContent() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo header-left">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h1>PixelTools</h1>
            <span className="subtitle">Ecosystem</span>
          </Link>
        </div>
        
        <div className="header-center">
          <nav>
            <Link to="/">Tools</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>

        <div className="header-right">
          <a href="/pdf/" className="primary-btn nav-action-btn" style={{ textDecoration: 'none' }}>Launch App</a>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div style={{ textAlign: 'center', padding: '100px' }}><h2>About PixelTools</h2><p>Your privacy-first tools ecosystem.</p></div>} />
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '100px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src="/Wolf-404.svg" alt="404 Error" style={{ width: '250px', maxWidth: '100%', marginBottom: '2rem' }} />
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text, var(--text-color, #333))' }}>Oops! Page Not Found</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--text-light, var(--text-secondary, #666))' }}>The page you are looking for doesn't exist or has been moved.</p>
              <Link to="/" className="primary-btn" style={{ padding: '0.8rem 1.5rem', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>Return Home</Link>
            </div>
          } />
        </Routes>
      </main>

      <footer className="app-footer">
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Link to="/">PixelTools</Link>
          <a href="/pdf/">PDF Tools</a>
          <a href="/image/">Image Tools</a>
          <a href="/design/">Design Tools</a>
          <a href="/career/">Career Tools</a>
          <a href="/playground/">Playground</a>
        </div>
        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.85rem' }}>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <p style={{ marginTop: '24px' }}>&copy; 2026 PixelTools. Processed locally, never uploaded.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
