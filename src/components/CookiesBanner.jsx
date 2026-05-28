import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CookiesBanner({ t, lang }) {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('aura_cookies_consent');
    if (!consent) {
      // 2-second premium delay to allow the splash/hero animations to complete first
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (consents) => {
    localStorage.setItem('aura_cookies_consent', JSON.stringify(consents));
    setVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const handleDeclineAll = () => {
    const declined = { necessary: true, analytics: false, marketing: false };
    setPreferences(declined);
    saveConsent(declined);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!visible) return null;

  const content = {
    tr: {
      title: "Gizliliğinize Değer Veriyoruz",
      desc: "Web sitemizdeki deneyiminizi kişiselleştirmek, site trafiğimizi analiz etmek ve sosyal medya özelliklerini sunmak için çerezler kullanıyoruz. Sitemizi kullanarak çerez kullanımını kabul etmiş olursunuz. Detaylar için ",
      linkText: "Gizlilik ve Çerez Politikamızı",
      linkSuffix: " inceleyebilirsiniz.",
      customizeText: "Tercihleri Özelleştir",
      closeSettingsText: "Ayarları Kapat",
      acceptText: "Tümünü Kabul Et",
      declineText: "Reddet",
      saveText: "Seçimleri Kaydet",
      categories: {
        necessary: {
          title: "Zorunlu Çerezler",
          desc: "Web sitesinin düzgün ve güvenli bir şekilde çalışması için gerekli temel işlevlerdir."
        },
        analytics: {
          title: "Analitik Çerezler",
          desc: "Ziyaretçi sayıları ve trafik kaynaklarını ölçerek sitemizi geliştirmemize yardımcı olur."
        },
        marketing: {
          title: "Pazarlama Çerezleri",
          desc: "İlgi alanlarınıza göre kişiselleştirilmiş reklamlar göstermek amacıyla kullanılır."
        }
      }
    },
    en: {
      title: "We value your privacy",
      desc: "We use cookies to personalize your experience, analyze site traffic, and provide social media features. By using our website, you agree to our use of cookies. For more details, see our ",
      linkText: "Privacy & Cookie Policy",
      linkSuffix: ".",
      customizeText: "Customize Choices",
      closeSettingsText: "Close Settings",
      acceptText: "Accept All",
      declineText: "Decline",
      saveText: "Save Preferences",
      categories: {
        necessary: {
          title: "Necessary Cookies",
          desc: "Required for the website to function properly and securely."
        },
        analytics: {
          title: "Analytics Cookies",
          desc: "Help us measure traffic and analyze visitor sources to improve our website."
        },
        marketing: {
          title: "Marketing Cookies",
          desc: "Used to display personalized advertisements tailored to your interests."
        }
      }
    },
    de: {
      title: "Wir schätzen Ihre Privatsphäre",
      desc: "Wir verwenden Cookies, um Ihre Erfahrung zu personalisieren, den Datenverkehr zu analysieren und Social-Media-Funktionen bereitzustellen. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. Weitere Details finden Sie in unserer ",
      linkText: "Datenschutzerklärung",
      linkSuffix: ".",
      customizeText: "Optionen anpassen",
      closeSettingsText: "Einstellungen schließen",
      acceptText: "Alle akzeptieren",
      declineText: "Ablehnen",
      saveText: "Auswahl speichern",
      categories: {
        necessary: {
          title: "Notwendige Cookies",
          desc: "Erforderlich für die ordnungsgemäße und sichere Funktion der Website."
        },
        analytics: {
          title: "Analytische Cookies",
          desc: "Helfen uns, den Datenverkehr zu messen und Besucherquellen zu analysieren, um die Website zu verbessern."
        },
        marketing: {
          title: "Marketing-Cookies",
          desc: "Werden verwendet, um auf Ihre Interessen zugeschnittene, personalisierte Werbung anzuzeigen."
        }
      }
    }
  };

  const current = content[lang] || content.tr;

  return (
    <div 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="cookie-consent-title"
      className="fixed bottom-6 left-5 right-5 md:left-auto md:right-8 md:max-w-[420px] z-[999] bg-white/95 backdrop-blur-lg border border-gray-100 rounded-2xl p-5 md:p-6 shadow-[0_20px_50px_rgba(74,120,224,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] animate-[cookieSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards]"
    >
      <div className="flex flex-col items-center">
        {/* Premium Cookie Illustration */}
        <div className="w-16 h-16 mb-4 flex items-center justify-center relative drop-shadow-[0_4px_12px_rgba(74,120,224,0.15)]">
          <svg
            viewBox="0 0 24 24"
            className="w-12 h-12 text-[#4a78e0]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Hand-drawn editorial feel cookie outline */}
            <path d="M12 2a10 10 0 1 0 10 10c0-1.8-1-3.5-2.5-4.5A5 5 0 0 1 14 3c-.5-1-1.8-1.5-2-1z" strokeDasharray="2 1" />
            <path d="M12 2a10 10 0 1 0 10 10c0-1.5-1.2-2.7-2.7-2.7h-.3A4.5 4.5 0 0 1 14.5 4.8V4.5C14.5 3 13.5 2 12 2z" />
            
            {/* Choc chips */}
            <circle cx="8" cy="9" r="1" fill="currentColor" />
            <circle cx="16" cy="11" r="1" fill="currentColor" />
            <circle cx="11" cy="15" r="1.2" fill="currentColor" />
            <circle cx="15" cy="7" r="0.8" fill="currentColor" />
            <circle cx="8" cy="15" r="0.8" fill="currentColor" />
            
            {/* Bite marks */}
            <path d="M20 7.5a1.5 1.5 0 0 0 2.5 1c.5-.5 1-.2 1.5.3" />
          </svg>
          {/* Subtle brand glow ring behind the cookie */}
          <div className="absolute inset-0 bg-[#4a78e0]/5 rounded-full filter blur-md -z-10 animate-pulse"></div>
        </div>

        {/* Title */}
        <h2 
          id="cookie-consent-title" 
          className="text-gray-900 text-lg font-light tracking-tight text-center mb-2"
        >
          {current.title}
        </h2>

        {/* Description / Content */}
        {!showCustomize ? (
          <p className="text-[13px] text-[#5a6473] leading-relaxed font-light text-center mb-5">
            {current.desc}
            <Link 
              to="/gizlilik" 
              className="text-[#4a78e0] hover:text-[#4a78e0]/80 font-medium underline transition-colors"
            >
              {current.linkText}
            </Link>
            {current.linkSuffix}
          </p>
        ) : (
          /* Preference Panel */
          <div className="w-full space-y-3 mb-5 border-t border-gray-100 pt-4 animate-[cookieFadeIn_0.3s_ease_forwards]">
            {/* Necessary */}
            <div className="flex items-start justify-between gap-3 text-left">
              <div className="flex-1">
                <h3 className="text-[12px] font-medium text-gray-800">{current.categories.necessary.title}</h3>
                <p className="text-[11px] text-[#5a6473] font-light leading-normal">{current.categories.necessary.desc}</p>
              </div>
              <div className="relative flex items-center justify-center mt-1">
                <input 
                  type="checkbox" 
                  checked={preferences.necessary} 
                  disabled 
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-blue-100 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#4a78e0] after:rounded-full after:h-3 after:w-3 after:transition-all"></div>
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start justify-between gap-3 text-left border-t border-gray-50/50 pt-3">
              <div className="flex-1">
                <h3 className="text-[12px] font-medium text-gray-800">{current.categories.analytics.title}</h3>
                <p className="text-[11px] text-[#5a6473] font-light leading-normal">{current.categories.analytics.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer mt-1 select-none">
                <input 
                  type="checkbox" 
                  checked={preferences.analytics} 
                  onChange={() => togglePreference('analytics')}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#4a78e0]"></div>
              </label>
            </div>

            {/* Marketing */}
            <div className="flex items-start justify-between gap-3 text-left border-t border-gray-50/50 pt-3">
              <div className="flex-1">
                <h3 className="text-[12px] font-medium text-gray-800">{current.categories.marketing.title}</h3>
                <p className="text-[11px] text-[#5a6473] font-light leading-normal">{current.categories.marketing.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer mt-1 select-none">
                <input 
                  type="checkbox" 
                  checked={preferences.marketing} 
                  onChange={() => togglePreference('marketing')}
                  className="sr-only peer"
                />
                <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-[#4a78e0]"></div>
              </label>
            </div>
          </div>
        )}

        {/* Buttons / Actions */}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between gap-2.5">
            <button 
              type="button"
              onClick={handleDeclineAll}
              className="flex-1 border border-gray-200 hover:border-gray-300 text-gray-600 text-[12px] font-medium py-2 px-4 rounded-full transition-all duration-300 active:scale-98 bg-white hover:bg-gray-50"
            >
              {current.declineText}
            </button>
            
            {showCustomize ? (
              <button 
                type="button"
                onClick={handleSavePreferences}
                className="flex-1 bg-[#4a78e0] hover:bg-[#4a78e0]/90 text-white text-[12px] font-medium py-2 px-4 rounded-full transition-all duration-300 active:scale-98 shadow-sm"
              >
                {current.saveText}
              </button>
            ) : (
              <button 
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 bg-[#4a78e0] hover:bg-[#4a78e0]/90 text-white text-[12px] font-medium py-2 px-4 rounded-full transition-all duration-300 active:scale-98 shadow-sm"
              >
                {current.acceptText}
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setShowCustomize(prev => !prev)}
            className="text-[11px] text-gray-400 hover:text-[#4a78e0] transition-colors mt-2 tracking-wide font-normal focus:outline-none focus:underline"
          >
            {showCustomize ? current.closeSettingsText : current.customizeText}
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes cookieFadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
