import React from 'react';

export default function Testimonials(){
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What <span className="gradient-text">Designers Say</span></h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"Bungash Designs has been my go-to material for over 15 years. The versatility and durability are unmatched."</p>
            <div className="testimonial-author"><img src="https://i.pravatar.cc/150?img=33" alt="Sarah"/><div><h4>Sarah Mitchell</h4><p>Interior Designer, NYC</p></div></div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"The seamless integration and color consistency across large installations make Bungash Designs the perfect choice."</p>
            <div className="testimonial-author"><img src="https://i.pravatar.cc/150?img=12" alt="James"/><div><h4>James Chen</h4><p>Architect, San Francisco</p></div></div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">"From a sustainability standpoint, Bungash Designs checks all the boxes. It's renewable, long-lasting, and stunning."</p>
            <div className="testimonial-author"><img src="https://i.pravatar.cc/150?img=45" alt="Emily"/><div><h4>Emily Rodriguez</h4><p>Sustainable Design Consultant</p></div></div>
          </div>
        </div>

        <div className="slider-dots"></div>
      </div>
    </section>
  );
}
