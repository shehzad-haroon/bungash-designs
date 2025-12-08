import React from 'react';

export default function About(){
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Bungash Designs</span>
          <h2 className="section-title">The Surface That <span className="gradient-text">Defines Excellence</span></h2>
          <p className="section-subtitle">For over 50 years, Bungash Designs has been the gold standard in solid surface materials, trusted by designers and architects worldwide.</p>
        </div>
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Modern kitchen" />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-card">
              <div className="card-icon">✓</div>
              <div className="card-content"><h4>Premium Quality</h4><p>Certified & Tested</p></div>
            </div>
          </div>
          <div className="about-text">
            <h3>Innovative Design Meets Durability</h3>
            <p>Bungash Designs Solid Surface is a sophisticated blend of natural minerals and pure acrylic polymer, creating a nonporous material that's incredibly versatile and durable.</p>
            <div className="features-grid">
              <div className="feature-card"><div className="feature-icon">🎨</div><h4>150+ Colors</h4><p>Endless design possibilities</p></div>
              <div className="feature-card"><div className="feature-icon">♻️</div><h4>Sustainable</h4><p>Eco-friendly materials</p></div>
              <div className="feature-card"><div className="feature-icon">🛡️</div><h4>10 Year Warranty</h4><p>Quality guaranteed</p></div>
              <div className="feature-card"><div className="feature-icon">✨</div><h4>Easy Maintenance</h4><p>Seamless & hygienic</p></div>
            </div>

            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
