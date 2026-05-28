import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CookiesBanner({ t, lang }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('aura_cookies_accepted');
    if (!accepted) {
      // Show with a small delay for a premium feel
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('aura_cookies_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  const content = {
    tr: {
      text: "Deneyiminizi kişiselleştirmek ve web trafiğini analiz etmek için çerezler kullanıyoruz. Sitemizi kullanarak çerez kullanımını kabul etmiş olursunuz.",
      policy: "Çerez Politikası & KVKK",
      btn: "Kabul Et"
    },
    en: {
      text: "We use cookies to personalize your experience and analyze web traffic. By using our website, you agree to our use of cookies.",
      policy: "Cookie Policy & GDPR",
      btn: "Accept"
    },
    de: {
      text: "Wir verwenden Cookies, um Ihre Erfahrung zu personalisieren und den Datenverkehr zu analysieren. Mit der Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.",
      policy: "Cookie-Richtlinie & DSGVO",
      btn: "Akzeptieren"
    }
  };

  const current = content[lang] || content.tr;

  return (
    <div className="fixed bottom-6 left-5 right-5 md:left-auto md:right-8 md:max-w-sm z-50 bg-white border border-[#4a78e0]/10 rounded-sm p-5 shadow-2xl animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
      <p className="text-[12px] text-[#5a6473] leading-[1.6] font-light">
        {current.text}
      </p>
      
      <div className="mt-4 flex items-center justify-between gap-4">
        <Link 
          to="/sss" 
          className="text-[11px] text-[#4a78e0] hover:text-[#4a78e0]/80 tracking-wide font-medium underline uppercase"
          onClick={() => setVisible(false)}
        >
          {current.policy}
        </Link>
        <button 
          onClick={accept}
          className="bg-[#4a78e0] text-white text-[11px] uppercase tracking-widest font-medium px-5 py-2.5 rounded-sm hover:bg-[#4a78e0]/90 transition-all shadow-sm"
        >
          {current.btn}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
