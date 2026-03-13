"use client";

import { useEffect } from 'react';

export default function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2, // 20% visible hote hi trigger
        rootMargin: '0px 0px -100px 0px', // Thoda pehle trigger
      }
    );

    // Observe all elements that need animation
    const elements = document.querySelectorAll(
      '.hero, .break-section, .how-section, .ai-section, .ai-stack-section, .footer-section, ' +
      '.break-card, .how-card, .ai-statItem, .ai-stack-item, ' +
      '.break-section h2, .break-subtext, .how-title, .how-subtitle, ' +
      '.ai-headline, .ai-stack-title, .ai-stack-description, ' +
      '.cta-title, .cta-description'
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}