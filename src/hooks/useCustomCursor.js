import { useEffect } from 'react';

export function useCustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    const t1 = document.getElementById('trail1');
    const t2 = document.getElementById('trail2');
    const t3 = document.getElementById('trail3');
    if (!dot || !ring) return;

    let dx = 0, dy = 0, tx = 0, ty = 0;
    let t1x = 0, t1y = 0, t2x = 0, t2y = 0, t3x = 0, t3y = 0;
    let animationId;

    const onMove = (e) => {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
    };

    const animate = () => {
      dx += (tx - dx) * 0.18;
      dy += (ty - dy) * 0.18;
      ring.style.transform = `translate(${dx - 18}px, ${dy - 18}px)`;

      t1x += (tx - t1x) * 0.12;
      t1y += (ty - t1y) * 0.12;
      t1.style.transform = `translate(${t1x - 1.5}px, ${t1y - 1.5}px)`;

      t2x += (tx - t2x) * 0.08;
      t2y += (ty - t2y) * 0.08;
      t2.style.transform = `translate(${t2x - 1.5}px, ${t2y - 1.5}px)`;

      t3x += (tx - t3x) * 0.05;
      t3y += (ty - t3y) * 0.05;
      t3.style.transform = `translate(${t3x - 1.5}px, ${t3y - 1.5}px)`;

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    animationId = requestAnimationFrame(animate);

    const onOver = (e) => {
      if (e.target.closest('a, button, .tilt-card, .cursor-grow, .service-card, .journal-card')) {
        ring.style.width = '56px';
        ring.style.height = '56px';
        ring.style.borderColor = 'rgba(255,255,255,0.9)';
      } else {
        ring.style.width = '36px';
        ring.style.height = '36px';
        ring.style.borderColor = 'rgba(255,255,255,0.5)';
      }
    };
    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);
}
