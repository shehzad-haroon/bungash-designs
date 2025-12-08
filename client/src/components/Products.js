import React from 'react';

export default function Products(){
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Our Collection</span>
          <h2 className="section-title">Discover <span className="gradient-text">Color Families</span></h2>
          <p className="section-subtitle">Explore our extensive palette of over 150 colors, organized into distinct families</p>
        </div>

        <div className="product-filters">
          <button className="filter-btn active" data-filter="all">All Collections</button>
          <button className="filter-btn" data-filter="neutral">Neutral Tones</button>
          <button className="filter-btn" data-filter="marble">Marble Inspired</button>
          <button className="filter-btn" data-filter="vibrant">Vibrant Colors</button>
          <button className="filter-btn" data-filter="natural">Natural Aesthetics</button>
        </div>

        <div className="products-grid">
          <div className="product-card" data-category="neutral marble">
            <div className="product-image"><img src="https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80" alt="Glacier White"/>
              <div className="product-overlay"><button className="product-btn">View Details</button></div>
            </div>
            <div className="product-info"><h3>Glacier White</h3><p>Pure & Timeless</p><span className="product-tag">Neutral</span></div>
          </div>
          <div className="product-card" data-category="marble">
            <div className="product-image"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80" alt="Calacatta Greige"/>
              <div className="product-overlay"><button className="product-btn">View Details</button></div>
            </div>
            <div className="product-info"><h3>Calacatta Greige</h3><p>Marble Elegance</p><span className="product-tag">Marble Inspired</span></div>
          </div>
          <div className="product-card" data-category="natural">
            <div className="product-image"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" alt="Stonecrest Smoke"/>
              <div className="product-overlay"><button className="product-btn">View Details</button></div>
            </div>
            <div className="product-info"><h3>Stonecrest Smoke</h3><p>Natural Beauty</p><span className="product-tag">Natural</span></div>
          </div>
          <div className="product-card" data-category="vibrant">
            <div className="product-image"><img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80" alt="Deep Nocturne"/>
              <div className="product-overlay"><button className="product-btn">View Details</button></div>
            </div>
            <div className="product-info"><h3>Deep Nocturne</h3><p>Bold & Modern</p><span className="product-tag">Vibrant</span></div>
          </div>
        </div>

        <div className="products-cta"><button className="btn btn-primary">View All 150+ Colors</button></div>
      </div>
    </section>
  );
}
  );
}
