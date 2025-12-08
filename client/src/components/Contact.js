import React from 'react';

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions? Our team of experts is here to help you choose the perfect Bungash Designs solution for your project.</p>
            <div className="contact-details">
              <div className="contact-item"><div className="contact-icon">📍</div><div><h4>Visit Us</h4><p>Buffalo, NY, United States</p></div></div>
              <div className="contact-item"><div className="contact-icon">📧</div><div><h4>Email Us</h4><p>info@bungashdesigns.com</p></div></div>
              <div className="contact-item"><div className="contact-icon">📞</div><div><h4>Call Us</h4><p>+92-300-BUNGASH</p></div></div>
            </div>
            <div className="social-links">
              <a className="social-link" href="#">FB</a>
              <a className="social-link" href="#">IG</a>
              <a className="social-link" href="#">YT</a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
            <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
            <div className="form-group"><input type="tel" placeholder="Phone Number" /></div>
            <div className="form-group"><select required><option value="">Project Type</option><option value="residential">Residential</option><option value="commercial">Commercial</option></select></div>
            <div className="form-group full"><textarea placeholder="Tell us about your project" rows="5" required></textarea></div>
            <button type="submit" className="btn btn-primary full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
