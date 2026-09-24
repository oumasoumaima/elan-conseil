import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "L'accompagnement d'ÉLAN m'a permis de structurer mon projet professionnel à un moment où tout me semblait flou. Une approche très humaine et ancrée dans le réel.",
    author: "Sophie"
  },
  {
    text: "J'ai apprécié la bienveillance et l'écoute. Les séances m'ont aidé à reprendre confiance en mes capacités et à oser le changement.",
    author: "Thomas"
  },
  {
    text: "Processus simple, clair et efficace. Merci pour votre accompagnement du début à la fin.",
    author: "Marie"
  },
  {
    text: "Un regard extérieur précieux et des outils concrets. Je me sens enfin alignée avec mes choix de vie.",
    author: "Karim"
  }
];

// Simple smiley avatar, tinted per-testimonial via a hue-rotate filter
// so every avatar stays within the site's own primary color family.
const Avatar = ({ hue }) => (
  <div className="testimonial-avatar" style={{ filter: `hue-rotate(${hue}deg)` }}>
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="20" fill="var(--color-primary)" />
      <circle cx="20" cy="20" r="20" fill="url(#avatar-shade)" />
      <circle cx="14" cy="17" r="1.8" fill="#fff" />
      <circle cx="26" cy="17" r="1.8" fill="#fff" />
      <path d="M13 24c2.5 3 11.5 3 14 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      <defs>
        <linearGradient id="avatar-shade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Testimonials = () => {
  return (
    <section id="avis" className="testimonials section">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-dot"></span>
          <h2 className="section-title">Avis</h2>
        </div>

        <div className="flex flex-col items-center justify-center mb-lg fade-in-up delay-100">
          <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem', justifyContent: 'center' }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} fill="var(--color-primary)" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <p style={{ fontWeight: '600', fontSize: '1.25rem', margin: 0, textAlign: 'center' }}>Noté 4.9/5</p>
        </div>

        <h3 className="section-main-heading fade-in-up delay-100">Ils m'ont fait confiance</h3>

        <div className="testimonials-grid" data-stagger>
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <Avatar hue={index * 45} />
              </div>
              <p className="testimonial-text">&ldquo;{item.text}&rdquo;</p>
              <p className="testimonial-author">— {item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;