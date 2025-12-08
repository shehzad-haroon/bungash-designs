import React from 'react';

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Premium Solid Surface Solutions</div>
          <h1 className="hero-title">
            <span className="line">Make Your</span>
            <span className="line gradient-text">Creative Visions</span>
            <span className="line">Come Alive</span>
          </h1>
          <p className="hero-subtitle">Endless possibilities with Bungash Designs Solid Surface. Engrave it. Color it. Thermoform it. Transform your space with innovative design that lasts a lifetime.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Products</button>
            <button className="btn btn-secondary">Watch Video</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><span className="stat-number" data-count="50">0</span><span>+</span><span className="stat-label">Years Experience</span></div>
            <div className="stat-item"><span className="stat-number" data-count="150">0</span><span>+</span><span className="stat-label">Color Options</span></div>
            <div className="stat-item"><span className="stat-number" data-count="95">0</span><span>%</span><span className="stat-label">Made in USA</span></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator"><span>Scroll Down</span><div className="scroll-line"></div></div>
    </section>
  );
}
