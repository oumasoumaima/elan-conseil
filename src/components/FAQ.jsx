import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Combien de temps dure un accompagnement ?",
      answer: "Cela dépend de votre objectif et de votre rythme. Certaines personnes ont besoin de quelques échanges, d'autres préfèrent un accompagnement plus régulier."
    },
    {
      question: "Les séances peuvent-elles se faire en ligne ?",
      answer: "Oui. Les échanges peuvent être réalisés à distance en visioconférence."
    },
    {
      question: "Comment se déroule la séance découverte ?",
      answer: "Elle permet simplement de faire connaissance, de comprendre votre besoin et de voir ensemble si l'accompagnement proposé correspond à vos attentes."
    },
    {
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: "Les paiements peuvent s'effectuer par virement bancaire, chèque ou espèces à l'issue de chaque séance."
    },
    {
      question: "Quelle est la politique d'annulation ?",
      answer: "Toute séance annulée moins de 48h à l'avance est due, sauf cas de force majeure. Cela garantit le respect de nos engagements mutuels."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="section-dot"></span>
          <h2 className="section-title">F.A.Q</h2>
        </div>
        <h3 className="section-main-heading fade-in-up delay-100">Les questions fréquentes</h3>
        <div className="faq-list fade-in-up delay-200">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
