import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h2>Free Online Tools for Everyday Tasks</h2>
        <p>Free browser-based tools for PDFs, images, design, careers and more. Compress, convert, create and explore without limits in the unified PixelTools Ecosystem.</p>
        
        <div id="search" style={{ marginTop: '32px', display: 'flex', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Search tools..." 
            style={{ 
              padding: '16px 24px', 
              fontSize: '1.1rem', 
              borderRadius: '24px', 
              border: '1px solid var(--border-color)', 
              width: '100%', 
              maxWidth: '500px',
              outline: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }} 
          />
        </div>
      </section>
      
      <section id="categories" style={{ marginTop: '64px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px' }}>Explore Our Categories</h3>
        <div className="tools-grid">
          
          <div className="tool-card">
            <h3>PDF Tools</h3>
            <p>Use free online PDF tools to merge, split, compress and convert PDF files. Fast browser-based PDF tools.</p>
            <a href="https://pdf-tools-rose.vercel.app/" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>View PDF Tools</a>
          </div>
          
          <div className="tool-card">
            <h3>Image Tools</h3>
            <p>Compress, resize, crop and convert images online for free with fast browser-based image tools.</p>
            <a href="https://image-tools-mauve.vercel.app/" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>View Image Tools</a>
          </div>
          
          <div className="tool-card">
            <h3>Design Tools</h3>
            <p>Free browser-based design tools for colors, palettes, CSS gradients, shadows and buttons.</p>
            <a href="https://design-tools-one.vercel.app/" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>View Design Tools</a>
          </div>
          
          <div className="tool-card">
            <h3>Career Tools</h3>
            <p>Build a professional resume and use practical career tools to prepare for your next job opportunity.</p>
            <a href="https://career-tools-phi.vercel.app/" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>View Career Tools</a>
          </div>
          
          <div className="tool-card">
            <h3>Playground</h3>
            <p>Explore free interactive games, generators, randomizers and fun browser-based tools.</p>
            <a href="https://playground-tools-seven.vercel.app/" className="primary-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>View Playground</a>
          </div>

        </div>
      </section>

      <section style={{ marginTop: '80px', background: 'var(--surface-color)', padding: '40px', borderRadius: '24px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>100% Private & Secure</h3>
        <p style={{ color: 'var(--muted-color)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          All PixelTools process your files directly in your browser. We never upload your documents or images to our servers. What happens on your device stays on your device.
        </p>
      </section>

    </div>
  );
}

export default Home;
