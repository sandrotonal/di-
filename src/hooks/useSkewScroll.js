import { useEffect } from 'react';

export function useSkewScroll() {
  useEffect(() => {
    let lastScroll = 0;
    let velocity = 0;
    const els = document.querySelectorAll('.skew-scroll');
    let intervalId;

    const onScroll = () => {
      const current = window.scrollY;
      velocity = (current - lastScroll) * 0.025;
      velocity = Math.max(-2.5, Math.min(2.5, velocity));
      lastScroll = current;
      els.forEach(el => el.style.transform = `skewY(${velocity}deg)`);
    };

    intervalId = setInterval(() => {
      if (Math.abs(velocity) > 0.1) {
        velocity *= 0.88;
        els.forEach(el => el.style.transform = `skewY(${velocity}deg)`);
      } else {
        els.forEach(el => el.style.transform = 'skewY(0deg)');
      }
    }, 16);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(intervalId);
    };
  }, []);
}
