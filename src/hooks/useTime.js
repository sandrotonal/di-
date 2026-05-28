import { useState, useEffect } from 'react';

export function useTime() {
  const [t, setT] = useState(() =>
    new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Istanbul' })
  );
  useEffect(() => {
    const i = setInterval(() =>
      setT(new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Istanbul' })),
      1000
    );
    return () => clearInterval(i);
  }, []);
  return t;
}
