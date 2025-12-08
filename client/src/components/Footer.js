import React from 'react';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo"><span className="logo-text">BUNGASH<sup>DESIGNS</sup></span><span className="logo-tagline">Premium Surfaces</span></div>
            <p>For over 50 years, Bungash Designs has been the trusted choice for designers, architects, and homeowners.</p>
            <div className="footer-badge"><span>🇺🇸 Made in USA</span></div>
          </div>

          <div className="footer-column"><h4>Products</h4><ul><li><a href="#">Color Collections</a></li><li><a href="#">Countertops</a></li></ul></div>
          <div className="footer-column"><h4>Resources</h4><ul><li><a href="#">Documentation</a></li><li><a href="#">Installation Guide</a></li></ul></div>
          <div className="footer-column"><h4>Company</h4><ul><li><a href="#">About Us</a></li><li><a href="#">Careers</a></li></ul></div>
          <div className="footer-column"><h4>Newsletter</h4><p>Subscribe to get the latest updates.</p><form className="newsletter-form"><input type="email" placeholder="Your email" /><button type="submit">→</button></form></div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Bungash Designs. All rights reserved.</p>
          <div className="footer-links"><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
