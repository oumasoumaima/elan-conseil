import React from 'react';
import './HowItWorks.css';
import echangeImg from '../assets/echange.jpg';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Échange',
      description: 'Un premier échange pour comprendre votre situation, vos questions et ce que vous souhaitez faire évoluer.',
      image: echangeImg
    },
    {
      number: '02',
      title: 'Analyse',
      description: 'Nous prenons le temps de mettre les choses à plat, d\'identifier vos priorités et les pistes possibles.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop'
    },
    {
      number: '03',
      title: 'Plan',
      description: 'Vous repartez avec des prochaines étapes claires, réalistes et adaptées à votre situation.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="comment-ca-marche" className="how-it-works section">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-dot"></span>
          <h2 className="section-title">Comment ça marche ?</h2>
        </div>
        <h3 className="section-main-heading fade-in-up delay-100">Un processus simple et bienveillant</h3>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`timeline-step ${isEven ? 'step-left' : 'step-right'}`}>
                <div className="timeline-dot fade-in-up delay-200">{step.number}</div>
                
                <div className={`timeline-content fade-in-${isEven ? 'left' : 'right'} delay-300`}>
                  <div className="step-card">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
                
                <div className={`timeline-image-wrapper fade-in-${isEven ? 'right' : 'left'} delay-400`}>
                  <img src={step.image} alt={step.title} className="step-image" loading="lazy" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
