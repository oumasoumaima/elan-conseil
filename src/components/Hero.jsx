import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';
import heroImage from '../assets/hero.png';

const HEADLINE = 'Avancez avec plus de clarté, à votre rythme.';

const Hero = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const words = headlineRef.current.querySelectorAll('.word span');
    gsap.fromTo(
      words,
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.045,
        delay: 0.15,
      }
    );
  }, []);

  const words = HEADLINE.split(' ');

  return (
    <section id="accueil" className="hero section">
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge fade-in-up">ACCOMPAGNEMENT & CONSEIL</div>
          <h1 ref={headlineRef} className="hero-headline">
            {words.map((word, i) => (
              <React.Fragment key={i}>
                <span className="word">
                  <span>{word}</span>
                </span>
                {i < words.length - 1 ? ' ' : ''}
              </React.Fragment>
            ))}
          </h1>
          <p className="fade-in-up delay-200">
            Un espace pour prendre du recul, faire le point et avancer sur les décisions qui comptent pour vous.
          </p>
          <div className="hero-actions fade-in-up delay-300">
            <a href="#services" className="btn btn-primary">
              Voir les accompagnements
              <div className="btn-icon-wrapper">
                <ArrowRight size={18} strokeWidth={2} />
              </div>
            </a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>
        </div>
        <div className="hero-image-wrapper fade-in-right delay-400">
          <img
            src={heroImage}
            alt="Espace de travail inspirant avec carnet et café"
            className="hero-image"
            data-parallax="40"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;