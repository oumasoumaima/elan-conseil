import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'success'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ce champ est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'Ce champ est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Ce champ est requis';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`Demande de contact — ${formData.name}`);
    const bodyLines = [
      `Nom : ${formData.name}`,
      `Email : ${formData.email}`,
      formData.phone ? `Téléphone : ${formData.phone}` : null,
      '',
      formData.message
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));

    window.location.href = `mailto:contact@elan-conseil.fr?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header fade-in-up" style={{ justifyContent: 'flex-start' }}>
          <span className="section-dot"></span>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info fade-in-right">
            <h3 className="section-main-heading" style={{ textAlign: 'left', marginBottom: '1rem', marginTop: 0 }}>Vous souhaitez en parler ?</h3>
            <p className="contact-subtext">
            Un premier échange suffit parfois pour y voir plus clair. 
            N'hésitez pas à me contacter pour toute question ou pour planifier une séance découverte.
          </p>
          <div className="contact-details">
            <p>
              <a href="https://www.linkedin.com/in/oumaima-oumas" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </p>
            <p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            </p>
          </div>
        </div>
        
        <div className="contact-form-wrapper fade-in-left delay-200">
          <form className="contact-form-premium" onSubmit={handleSubmit}>
            <div className="form-group-floating">
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder=" "
              />
              <label htmlFor="name">Nom</label>
              {errors.name && <span className="error-text-premium">{errors.name}</span>}
            </div>
            
            <div className="form-group-floating">
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder=" "
              />
              <label htmlFor="email">Email</label>
              {errors.email && <span className="error-text-premium">{errors.email}</span>}
            </div>
            
            <div className="form-group-floating">
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="phone">Téléphone (optionnel)</label>
            </div>
            
            <div className="form-group-floating">
              <textarea 
                id="message" 
                name="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Votre message</label>
              {errors.message && <span className="error-text-premium">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn-submit-premium"
            >
              <span>Envoyer ma demande</span>
            </button>
            
            {status === 'success' && (
              <p className="success-message">Votre client mail va s'ouvrir avec votre message pré-rempli.</p>
            )}
          </form>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
