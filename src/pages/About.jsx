import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container" style={{ maxWidth: '850px', margin: '0 auto', padding: '3rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.75rem', color: 'var(--primary-color, #FF9B51)' }}>
          About PixelTools
        </h2>
        <p style={{ color: 'var(--text-secondary, #666)', fontSize: '1.15rem', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto' }}>
          The modern, privacy-first web productivity ecosystem. Fast, free, and processed 100% locally on your device.
        </p>
      </div>

      <div style={{ padding: '2rem 1.5rem', background: 'var(--surface-color, #ffffff)', borderRadius: '16px', border: '1px solid var(--border-color, #BFC9D1)', marginBottom: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', borderBottom: '2px solid var(--border-color, #BFC9D1)', paddingBottom: '0.5rem', color: 'var(--text-color, #333)' }}>
          The PixelTools Vision
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-color, #333)', marginBottom: '1.5rem', lineHeight: 1.7, textAlign: 'left' }}>
          Every day, millions of people use online converters and generators that require file uploads, place artificial limits on free users, inject watermarks, or track activity across the web. 
          <strong> PixelTools</strong> was engineered to challenge that status quo. By leveraging high-performance browser technology, we provide an all-in-one suite of specialized toolkits that process everything client-side.
        </p>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', borderBottom: '2px solid var(--border-color, #BFC9D1)', paddingBottom: '0.5rem', color: 'var(--text-color, #333)' }}>
          Our Tool Suites
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem', textAlign: 'left' }}>
          <div style={{ padding: '1rem', background: '#F8FAFA', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <strong style={{ color: 'var(--primary-color, #FF9B51)' }}>📄 PDF Tools:</strong>
            <p style={{ fontSize: '0.95rem', margin: '0.25rem 0 0 0', color: '#555' }}>Merge, split, compress, and convert documents securely with zero server uploads.</p>
          </div>
          <div style={{ padding: '1rem', background: '#F8FAFA', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <strong style={{ color: 'var(--primary-color, #FF9B51)' }}>🖼️ Image Tools:</strong>
            <p style={{ fontSize: '0.95rem', margin: '0.25rem 0 0 0', color: '#555' }}>Compress, resize, crop, and convert image formats at instantaneous speed.</p>
          </div>
          <div style={{ padding: '1rem', background: '#F8FAFA', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <strong style={{ color: 'var(--primary-color, #FF9B51)' }}>🎨 Design Tools:</strong>
            <p style={{ fontSize: '0.95rem', margin: '0.25rem 0 0 0', color: '#555' }}>Generate palettes, gradients, shadows, and interactive buttons with clean CSS.</p>
          </div>
          <div style={{ padding: '1rem', background: '#F8FAFA', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <strong style={{ color: 'var(--primary-color, #FF9B51)' }}>💼 Career Tools:</strong>
            <p style={{ fontSize: '0.95rem', margin: '0.25rem 0 0 0', color: '#555' }}>Build professional, ATS-friendly resumes with live preview and instant export.</p>
          </div>
          <div style={{ padding: '1rem', background: '#F8FAFA', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
            <strong style={{ color: 'var(--primary-color, #FF9B51)' }}>🎮 Playground:</strong>
            <p style={{ fontSize: '0.95rem', margin: '0.25rem 0 0 0', color: '#555' }}>Interactive browser toys, falling sand physics, fortune cookies, and secret vault.</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', borderBottom: '2px solid var(--border-color, #BFC9D1)', paddingBottom: '0.5rem', color: 'var(--text-color, #333)' }}>
          Zero Data Collection Guarantee
        </h3>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-color, #333)', lineHeight: 1.7, textAlign: 'left', margin: 0 }}>
          Your files, images, and text never touch a remote server. We do not store your data, train models on your work, or sell information to third parties. Complete privacy is guaranteed by design.
        </p>
      </div>

      {/* Creator & Portfolio Section */}
      <div style={{ padding: '2rem 1.5rem', background: 'var(--surface-color, #ffffff)', borderRadius: '16px', border: '1px solid var(--border-color, #BFC9D1)', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--text-color, #333)' }}>
          Created with ❤️ by Akhilesh
        </h3>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary, #666)', marginBottom: '1.5rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
          Passionate about building intuitive, performant, and privacy-respecting web applications. Discover more projects, experiments, and engineering work on my portfolio.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://portfolio-akhilesh.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="primary-btn"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              padding: '0.8rem 1.75rem', 
              textDecoration: 'none', 
              fontWeight: 600, 
              borderRadius: '8px' 
            }}
          >
            <span>Visit My Portfolio</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          <Link
            to="/"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              padding: '0.8rem 1.5rem', 
              textDecoration: 'none', 
              borderRadius: '8px',
              border: '1px solid var(--border-color, #BFC9D1)',
              background: 'transparent',
              color: 'var(--text-color, #333)',
              fontWeight: 500
            }}
          >
            Explore Tools
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
