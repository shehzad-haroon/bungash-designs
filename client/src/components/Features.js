import React from 'react';

export default function Features(){
  return (
    <section id="features" className="features">
      <div className="features-bg"></div>
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Why Choose Bungash Designs</span>
          <h2 className="section-title">Features & <span className="gradient-text">Benefits</span></h2>
        </div>

        <div className="features-showcase">
          <div className="feature-item">
            <div className="feature-visual">
              <div className="feature-number">01</div>
              <div className="feature-bg-image" style={{backgroundImage: `url('https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=600&q=80')`}}></div>
            </div>
            <div className="feature-content">
              <h3>Hygienic & Reliable</h3>
              <p>Nonporous surface means no place for bacteria and mold to take root.</p>
              <ul className="feature-list"><li>NSF/ANSI 51 certified for food contact</li><li>Resistant to bacteria growth</li><li>Easy to clean and maintain</li></ul>
            </div>
          </div>

          <div className="feature-item reverse">
            <div className="feature-visual">
              <div className="feature-number">02</div>
              <div className="feature-bg-image" style={{backgroundImage: `url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80')`}}></div>
            </div>
            <div className="feature-content">
              <h3>Seamless Beauty</h3>
              <p>Create virtually seamless installations with inconspicuous seams.</p>
              <ul className="feature-list"><li>Invisible seam integration</li><li>Thermoformable for curves</li><li>Custom fabrication options</li></ul>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-visual">
              <div className="feature-number">03</div>
              <div className="feature-bg-image" style={{backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80')`}}></div>
            </div>
            <div className="feature-content">
              <h3>Renewable Surface</h3>
              <p>Minor scratches and stains can be easily removed with a light abrasive cleanser.</p>
              <ul className="feature-list"><li>Repairable and renewable</li><li>Maintains appearance over time</li><li>Long-lasting investment</li></ul>
            </div>
          </div>

          <div className="feature-item reverse">
            <div className="feature-visual">
              <div className="feature-number">04</div>
              <div className="feature-bg-image" style={{backgroundImage: `url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80')`}}></div>
            </div>
            <div className="feature-content">
              <h3>Versatile Applications</h3>
              <p>From countertops to wall cladding, from furniture to lighting - Bungash Designs adapts to any design challenge.</p>
              <ul className="feature-list"><li>Kitchen & bathroom surfaces</li><li>Commercial installations</li><li>Decorative elements & furniture</li></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
