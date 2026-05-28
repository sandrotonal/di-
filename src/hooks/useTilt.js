import { useEffect } from 'react';

export function useTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    const handlers = [];
    cards.forEach(card => {
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1200px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(15px)`;
      };
      const onLeave = () => {
        card.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0)';
      };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      handlers.push({ card, onMove, onLeave });
    });
    return () => handlers.forEach(h => {
      h.card.removeEventListener('mousemove', h.onMove);
      h.card.removeEventListener('mouseleave', h.onLeave);
    });
  }, []);
}

export function useMagnetic() {
  useEffect(() => {
    const items = document.querySelectorAll('.magnetic');
    const handlers = [];
    items.forEach(el => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      };
      const onLeave = () => { el.style.transform = 'translate(0, 0)'; };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      handlers.push({ el, onMove, onLeave });
    });
    return () => handlers.forEach(h => {
      h.el.removeEventListener('mousemove', h.onMove);
      h.el.removeEventListener('mouseleave', h.onLeave);
    });
  }, []);
}
