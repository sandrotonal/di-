import { useEffect, useState } from 'react';

export function Splash({ onDone }) {
  const [isDone, setIsDone] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Trigger logo reveal animation shortly after mount
    const activeTimer = setTimeout(() => {
      setActive(true);
    }, 150);

    // Start fade out transition after 2.4 seconds
    const fadeTimer = setTimeout(() => {
      setIsDone(true);
    }, 2400);

    // Completely unmount after fade transition completes (900ms)
    const unmountTimer = setTimeout(() => {
      onDone();
    }, 3300);

    return () => {
      clearTimeout(activeTimer);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onDone]);

  return (
    <div className={`splash ${isDone ? 'done' : ''}`} style={{
      background: 'radial-gradient(circle at center, #111b1c 0%, #060809 100%)',
    }}>
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none mix-blend-screen" />

      {/* Main Animated Logo Container */}
      <div className={`flex flex-col items-center transition-all duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        active ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        
        {/* SVG Luxury Circular Loader Track */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 flex items-center justify-center">
          <svg className="absolute w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="46" 
              stroke="rgba(201, 169, 110, 0.08)" 
              strokeWidth="1" 
              fill="transparent" 
            />
            <circle 
              cx="50" cy="50" r="46" 
              stroke="#C9A96E" 
              strokeWidth="1.5" 
              fill="transparent" 
              strokeDasharray="290"
              strokeDashoffset={active ? "0" : "290"}
              className="transition-all duration-[2.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </svg>
          
          {/* Glowing center dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-ping absolute" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] absolute" />
        </div>

        {/* Text Logo */}
        <div className="splash-logo text-white text-[38px] sm:text-[48px] font-extralight tracking-[-0.04em] flex items-center select-none">
          <span className={`italic font-thin text-[#C9A96E] transition-all duration-[1.5s] ease-out ${
            active ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}>Aura</span>
          <span className="mx-3 opacity-25 font-thin">/</span>
          <span className={`opacity-95 font-extralight transition-all duration-[1.5s] ease-out ${
            active ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}>Dental</span>
        </div>

        {/* Small separator line */}
        <div className="w-12 h-[1px] bg-[#C9A96E]/30 my-6 transition-all duration-[2s] ease-out" style={{
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
        }} />

        {/* Subtitle location details */}
        <div className={`text-[9px] sm:text-[10px] tracking-[0.35em] text-white/40 font-mono transition-all duration-[2s] ease-out ${
          active ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          N İ Ş A N T A Ş I   ·   İ S T A N B U L
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .bg-radial-glow {
          background: radial-gradient(circle at center, rgba(61, 123, 128, 0.15) 0%, transparent 65%);
        }
      `}} />
    </div>
  );
}
