import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <img src="/bungash-logo-placeholder.png" alt="Bungash" style={{height:48}}/>
          <div className="brand-text">
            <div className="logo-text">BUNGASH<sup>DESIGNS</sup></div>
            <div className="logo-tagline">Premium Surfaces</div>
          </div>
        </div>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
