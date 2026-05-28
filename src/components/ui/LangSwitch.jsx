import { useState } from 'react';
import { Icon, FlagSvg } from './Icons';

export function LangSwitch({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const F = FlagSvg[lang];
  const langs = [{c:'tr',l:'Türkçe'},{c:'en',l:'English'},{c:'de',l:'Deutsch'}];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 hover:opacity-60 transition-opacity"
        aria-label={`Dil: ${lang.toUpperCase()}`}
      >
        <F />
        <span className="text-[11px] font-medium tracking-wide uppercase">{lang}</span>
        <Icon.Chevron s={11} c={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-3 bg-white rounded-lg shadow-xl border border-black/5 py-2 z-50 min-w-[140px]">
            {langs.map(l => {
              const LF = FlagSvg[l.c];
              return (
                <button
                  key={l.c}
                  onClick={() => { setLang(l.c); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-black/5 transition-colors ${lang === l.c ? 'font-medium' : ''}`}
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
