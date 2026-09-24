import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      title: 'Séance découverte',
      price: 'Offert',
      duration: '45 minutes',
      features: [
        'Premier contact',
        'Analyse de la demande',
        'Définition des objectifs'
      ],
      recommended: false
    },
    {
      title: 'Accompagnement individuel',
      price: '80€',
      duration: 'Par séance (1h)',
      features: [
        'Suivi personnalisé',
        'Outils et exercices',
        'Bilan d\'étape'
      ],
      recommended: true
    },
    {
      title: 'Suivi long terme',
      price: '350€',
      duration: 'Forfait 5 séances',
      features: [
        'Engagement durable',
        'Support inter-séances',
        'Bilan complet'
      ],
      recommended: false
    }
  ];

  return (
    <section id="tarification" className="pricing section">
      <div className="container">
        <h2 className="text-center mb-lg fade-in-up">Des formules simples et transparentes</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card fade-in-up delay-${(index + 1) * 100} ${plan.recommended ? 'recommended' : ''}`}>
              {plan.recommended && (
                <div className="popular-badge">Populaire</div>
              )}
              <div className="pricing-header">
                <h3>{plan.title}</h3>
                <div className="price">{plan.price}</div>
                <div className="duration">{plan.duration}</div>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${plan.recommended ? 'btn-primary' : 'btn-outline'}`}>
                Réserver
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
