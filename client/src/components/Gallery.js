import React from 'react';

export default function Gallery(){
  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid">
        <div className="section-header center">
          <span className="section-tag">Inspiration Gallery</span>
          <h2 className="section-title">Real Projects, <span className="gradient-text">Real Beauty</span></h2>
          <p className="section-subtitle">See how designers and architects around the world are bringing visions to life with Bungash Designs</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item tall"><img src="https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80" alt="Modern kitchen" /><div className="gallery-overlay"><div className="gallery-info"><h4>Modern Kitchen</h4><p>Residential Design</p></div></div></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Luxury bathroom" /><div className="gallery-overlay"><div className="gallery-info"><h4>Luxury Bathroom</h4><p>Spa Design</p></div></div></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80" alt="Commercial space" /><div className="gallery-overlay"><div className="gallery-info"><h4>Commercial Space</h4><p>Hospitality Design</p></div></div></div>
          <div className="gallery-item wide"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" alt="Designer countertop" /><div className="gallery-overlay"><div className="gallery-info"><h4>Designer Countertop</h4><p>Contemporary Home</p></div></div></div>
          <div className="gallery-item"><img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" alt="Wall cladding" /><div className="gallery-overlay"><div className="gallery-info"><h4>Wall Cladding</h4><p>Office Design</p></div></div></div>
          <div className="gallery-item tall"><img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80" alt="Custom furniture" /><div className="gallery-overlay"><div className="gallery-info"><h4>Custom Furniture</h4><p>Bespoke Design</p></div></div></div>
        </div>
      </div>
    </section>
  );
}
