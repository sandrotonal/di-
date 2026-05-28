import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [p, setP] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scroll = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? scroll / max : 0);
      setScrolled(scroll > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { p, scrolled };
}
