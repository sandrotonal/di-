import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to allow DOM to update after route change
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        }),
        { threshold: 0.06, rootMargin: '0px 0px -60px 0px' }
      );

      document
        .querySelectorAll('.reveal, .reveal-clip, .reveal-clip-circle, .reveal-img, .stagger, .line-wrap, .split-reveal')
        .forEach(el => {
          el.classList.remove('visible');
          obs.observe(el);
        });

      return () => obs.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}

export function useCharReveal() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => {
          if (e.isIntersecting) {
            const chars = e.target.querySelectorAll('.char');
            chars.forEach((c, i) => setTimeout(() => c.classList.add('visible'), i * 40));
          }
        }),
        { threshold: 0.3 }
      );
      document.querySelectorAll('.char-reveal').forEach(el => obs.observe(el));
      return () => obs.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}
