import { useState, useEffect } from 'react';

export function useChapterIndicator() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const sections = document.querySelectorAll('[data-chapter]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = parseInt(e.target.dataset.chapter);
            setActive(idx);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}
