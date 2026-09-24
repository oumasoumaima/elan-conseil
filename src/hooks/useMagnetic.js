import { useEffect } from 'react';
import gsap from 'gsap';

// Applies a magnetic hover effect to every element matching the selector.
export const useMagnetic = (selector = '.btn', strength = 0.35) => {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const els = document.querySelectorAll(selector);

    const handlers = [];

    els.forEach((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        gsap.to(el, {
          x: relX * strength,
          y: relY * strength,
          duration: 0.4,
          ease: 'power3.out',
        });
      };
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' });
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      handlers.push({ el, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ el, onMove, onLeave }) => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [selector, strength]);
};
