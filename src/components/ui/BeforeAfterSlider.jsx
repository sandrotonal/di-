import { useState } from 'react';

export function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="ba-container rounded-sm aspect-[4/5] relative shadow-xl cursor-ew-resize">
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      <img
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="ba-divider" style={{ left: `${pos}%` }}>
        <div className="ba-handle">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 8 4 4-4 4"/><path d="m6 8-4 4 4 4"/><path d="M8 12h8"/>
          </svg>
        </div>
      </div>
      <input
        type="range"
        min="5" max="95"
        value={pos}
        onChange={(e) => setPos(e.target.value)}
        className="ba-slider"
        aria-label="Before after comparison"
      />
      <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-[11px] font-medium text-white tracking-wider">BEFORE</span>
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-[11px] font-medium text-gray-900 tracking-wider">AFTER</span>
      </div>
    </div>
  );
}
