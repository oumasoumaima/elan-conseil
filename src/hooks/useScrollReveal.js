import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const groups = [
        { selector: '.fade-in-up', y: 32, x: 0 },
        { selector: '.fade-in-left', y: 0, x: -40 },
        { selector: '.fade-in-right', y: 0, x: 40 },
      ];

      const getDelay = (el) => {
        const match = [...el.classList].find((c) => /^delay-\d+$/.test(c));
        return match ? parseInt(match.split('-')[1], 10) / 1000 : 0;
      };

      groups.forEach(({ selector, y, x }) => {
        document.querySelectorAll(selector).forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y, x, filter: 'blur(6px)' },
            {
              opacity: 1,
              y: 0,
              x: 0,
              filter: 'blur(0px)',
              duration: 1,
              delay: getDelay(el),
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
      });

      // Staggered reveal for groups of cards/items sharing a common parent
      document.querySelectorAll('[data-stagger]').forEach((parent) => {
        const items = parent.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 28, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: parent,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Subtle parallax for elements tagged data-parallax
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const strength = parseFloat(el.dataset.parallax) || 60;
        gsap.to(el, {
          y: strength,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
};
