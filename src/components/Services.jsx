import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Compass, TrendingUp, RefreshCw, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Compass strokeWidth={1.5} size={28} />,
    title: 'Clarifier un choix',
    description: "Vous hésitez entre plusieurs possibilités ? Nous prenons le temps de poser les options et d'identifier ce qui correspond réellement à votre situation."
  },
  {
    icon: <TrendingUp strokeWidth={1.5} size={28} />,
    title: 'Faire évoluer votre projet',
    description: "Réfléchir à une nouvelle direction professionnelle, une reconversion ou une évolution de votre parcours."
  },
  {
    icon: <RefreshCw strokeWidth={1.5} size={28} />,
    title: 'Traverser une transition',
    description: "Faire le point lors d'une période de changement et avancer étape par étape vers la suite."
  },
  {
    icon: <Target strokeWidth={1.5} size={28} />,
    title: 'Passer de l\'idée à l\'action',
    description: "Transformer une réflexion en objectifs concrets et définir les prochaines étapes."
  }
];

// Shortest signed distance between slide i and the active index, on a circular track
const getOffset = (i, active, len) => {
  let diff = i - active;
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;
  return diff;
};

const Services = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const len = services.length;

  const next = useCallback(() => setActive((i) => (i + 1) % len), [len]);
  const prev = useCallback(() => setActive((i) => (i - 1 + len) % len), [len]);

  useEffect(() => {
    timerRef.current = setInterval(next, 4500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-dot"></span>
          <h2 className="section-title">Services</h2>
        </div>
        <h3 className="section-main-heading fade-in-up delay-100">
          Des accompagnements adaptés à vos besoins
        </h3>

        <div
          className="services-carousel fade-in-up delay-200"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Précédent">
            <ChevronLeft size={22} />
          </button>

          <div className="carousel-track">
            {services.map((service, i) => {
              const offset = getOffset(i, active, len);
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const hidden = abs > 2;

              return (
                <div
                  key={i}
                  className={`service-slide ${isActive ? 'is-active' : ''}`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * 62}%) scale(${isActive ? 1 : 0.8}) rotateY(${offset * -6}deg)`,
                    opacity: hidden ? 0 : isActive ? 1 : 0.45,
                    filter: isActive ? 'blur(0px)' : 'blur(2px)',
                    zIndex: 10 - abs,
                    pointerEvents: hidden ? 'none' : 'auto',
                  }}
                  onClick={() => !isActive && setActive(i)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Suivant">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="carousel-dots">
          {services.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Aller au service ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;