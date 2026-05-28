import { useState } from 'react';
import { Icon, FlagSvg } from './Icons';

export function LangSwitch({ lang, setLang, isLightTheme = false }) {
  const [open, setOpen] = useState(false);
  const F = FlagSvg[lang];
  const langs = [{c:'tr',l:'Türkçe'},{c:'en',l:'English'},{c:'de',l:'Deutsch'}];

  const btnClass = isLightTheme
    ? "border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/20"
    : "border-black/5 bg-white/40 text-[#5a6473] hover:border-black/10 hover:bg-white hover:shadow-[0_0_15px_rgba(0,0,0,0.02)]";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[11px] font-medium tracking-wide uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${btnClass}`}
        aria-label={`Dil: ${lang.toUpperCase()}`}
      >
        <F />
        <span>{lang}</span>
        <Icon.Chevron s={10} c={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 py-2.5 z-50 min-w-[140px]">
            {langs.map(l => {
              const LF = FlagSvg[l.c];
              return (
                <button
                  key={l.c}
                  onClick={() => { setLang(l.c); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-black/5 transition-colors ${lang === l.c ? 'font-medium text-[#4a78e0]' : 'text-[#5a6473]'}`}
                >
                  <LF />
                  <span className="text-[12px]">{l.l}</span>
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
