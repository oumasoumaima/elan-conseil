import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import QuoteInterlude from './components/QuoteInterlude';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useLenis } from './hooks/useLenis';
import { useMagnetic } from './hooks/useMagnetic';

function App() {
  useLenis();
  useScrollReveal();
  useMagnetic('.btn', 0.35);

  return (
    <>
      <Cursor />
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <QuoteInterlude />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
