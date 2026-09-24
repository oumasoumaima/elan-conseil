import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Comment ça marche', href: '#comment-ca-marche' },
    { name: 'Tarification', href: '#tarification' },
    { name: 'Avis', href: '#avis' },
    { name: 'FAQ', href: '#faq' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header header-animate-in ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <a href="#accueil" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="ÉLAN" className="header-logo-img" />
        </a>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-outline desktop-cta">
          Me contacter
        </a>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <nav className="mobile-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={closeMenu}>{link.name}</a>
                </li>
              ))}
              <li>
                <a href="#contact" className="btn btn-outline" onClick={closeMenu}>
                  Me contacter
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
