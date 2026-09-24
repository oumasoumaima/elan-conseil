import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-brand fade-in-up">
            <div className="footer-logo">
              <img src="/logo.png" alt="ÉLAN" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Lancez, gérez et développez votre activité en toute sérénité.</p>
          </div>
          
          <div className="footer-col fade-in-up delay-100">
            <h4 className="footer-heading">Menu</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#avis">Avis</a></li>
              <li><a href="#tarification">Tarification</a></li>
              <li><a href="#comment-ca-marche">Comment ça marche</a></li>
            </ul>
          </div>
          
          <div className="footer-col fade-in-up delay-200">
            <h4 className="footer-heading">Suivez nous :</h4>
            <ul className="footer-links">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/oumaima-oumas" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
          
          <div className="footer-col fade-in-up delay-300">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:contact@gmail.com">contact@gmail.com</a></li>
              <li><a href="tel:+123456789">+123 456 789</a></li>
              <li><span>Casablanca, Maroc</span></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright@{new Date().getFullYear()} • Made by <span className="footer-badge">OumaimaOS</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
