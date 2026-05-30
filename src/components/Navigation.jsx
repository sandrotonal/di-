import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './ui/Icons';
import { LangSwitch } from './ui/LangSwitch';
import { LocationTag } from './ui/location-tag';

const allRoutes = [
  { key: 'treatments', path: '/tedaviler' },
  { key: 'approach', path: '/yaklasim' },
  { key: 'technology', path: '/teknoloji' },
  { key: 'process', path: '/surec' },
  { key: 'transformations', path: '/donusumler' },
  { key: 'cases', path: '/vakalar' },
  { key: 'clinic', path: '/klinik' },
  { key: 'doctors', path: '/ekip' },
  { key: 'journal', path: '/journal' },
  { key: 'faq', path: '/sss' },
  { key: 'contact', path: '/iletisim' },
];

const navItems = [
  { path: '/tedaviler', key: 'treatments' },
  { path: '/yaklasim', key: 'approach' },
  { path: '/donusumler', key: 'transformations' },
  { path: '/klinik', key: 'clinic' },
  { path: '/ekip', key: 'doctors' },
  { path: '/iletisim', key: 'contact' },
];

export function Navigation({ t, time, scrolled, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.height = '';
    };
  }, [menuOpen]);

  useEffect(() => { closeMenu(); }, [location.pathname]);

  const half = Math.ceil(allRoutes.length / 2);
  const col1 = allRoutes.slice(0, half);
  const col2 = allRoutes.slice(half);

  // Determine if we should render light text (on homepage, not scrolled, menu closed)
  const isLightTheme = isHome && !scrolled && !menuOpen;

  const navBgClass = menuOpen 
    ? 'bg-[#f4f6fa] py-4'
    : scrolled 
      ? 'bg-[#f4f6fa]/95 backdrop-blur-md border-b border-black/5 py-4 shadow-sm' 
      : 'bg-transparent py-6 sm:py-8';

  const logoColorClass = isLightTheme 
    ? 'text-white' 
    : 'text-gray-900';

  const linkColorClass = (isActive) => {
    if (isLightTheme) {
      return isActive ? 'text-[#4a78e0] font-semibold' : 'text-white/80 hover:text-white';
    }
    return isActive ? 'text-[#4a78e0] font-semibold' : 'text-[#5a6473] hover:text-[#4a78e0]';
  };

  const rightControlsColorClass = isLightTheme ? 'text-white/90' : 'text-gray-700';

  const ctaClass = isLightTheme 
    ? 'border-white/20 bg-white/10 text-white hover:bg-white hover:text-gray-900 hover:scale-[1.02] active:scale-[0.98]' 
    : 'border-[#4a78e0]/20 bg-white/40 text-[#4a78e0] hover:bg-[#4a78e0] hover:text-white hover:scale-[1.02] active:scale-[0.98]';

  const menuBtnBgClass = isLightTheme 
    ? 'bg-white/10 border-white/20 hover:bg-white/25 text-white hover:scale-[1.05] active:scale-[0.95]' 
    : 'bg-white/90 border-black/5 hover:bg-white text-gray-800 hover:scale-[1.05] active:scale-[0.95]';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] px-5 sm:px-8 transition-all duration-500 ${navBgClass}`}>
        <div className="nav-inner max-w-[1440px] mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-[17px] sm:text-[19px] font-extralight tracking-[-0.04em] flex items-center gap-1 z-50 group/logo transition-colors duration-500 ${logoColorClass}`}
            onClick={closeMenu}
          >
            <span className="italic font-thin text-[#4a78e0] group-hover/logo:tracking-wider transition-all duration-500">Aura</span>
            <span className="opacity-20 font-thin text-[#5a6473]">/</span>
            <span className="font-light group-hover/logo:text-[#4a78e0] text-[#5a6473] transition-colors">Dental</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-9 text-[12px] uppercase tracking-[0.15em] font-medium">
            {navItems.map(({ path, key }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative py-1.5 transition-all duration-500 ${linkColorClass(isActive)}`}
                >
                  <span>{t.nav[key]}</span>
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full bg-[#4a78e0]`} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className={`flex items-center gap-4 sm:gap-6 z-50 transition-colors duration-500 ${rightControlsColorClass}`}>
            {/* Location tag with live time */}
            <div className="hidden xl:block">
              <LocationTag lang={lang} timezone="GMT+3" isLightTheme={isLightTheme} />
            </div>

            {/* Language selection dropdown */}
            <LangSwitch lang={lang} setLang={setLang} isLightTheme={isLightTheme} />

            {/* Call Action */}
            <a 
              href="tel:+902121234567" 
              className={`hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.08em] border px-5 py-2.5 rounded-full transition-all duration-500 shadow-sm font-medium ${ctaClass}`}
            >
              <Icon.Phone s={12} />
              <span>+90 212 123 45 67</span>
            </a>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-500 z-50 shadow-sm ${menuBtnBgClass}`}
              aria-label={lang === 'tr' ? 'Menü' : 'Menu'}
            >
              {menuOpen ? <Icon.X s={14} /> : <Icon.Menu s={14} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Fullscreen menu overlay */}
      <div className={`fixed inset-0 z-[90] bg-[#f4f6fa] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        menuOpen 
          ? 'translate-y-0 opacity-100 pointer-events-auto visible' 
          : '-translate-y-full opacity-0 pointer-events-none invisible'
      }`}>
        <div className="flex-1 overflow-y-auto px-6 pt-32 pb-10 sm:px-12 max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
            
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#4a78e0]/70 font-semibold mb-4 border-b border-black/5 pb-2">
                {lang === 'tr' ? 'SAYFALAR' : lang === 'de' ? 'SEITEN' : 'PAGES'}
              </div>
              {col1.map(({ path, key }) => (
                <Link
                  key={key}
                  to={path}
                  onClick={closeMenu}
                  className={`text-[26px] sm:text-[38px] md:text-[44px] font-extralight tracking-[-0.03em] py-1.5 hover:text-[#4a78e0] transition-colors w-fit ${
                    location.pathname === path ? 'text-[#4a78e0] italic font-light' : 'text-gray-900'
                  }`}
                >
                  {t.nav[key]}
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-1 sm:pt-[calc(10px+2.5rem)]">
              {col2.map(({ path, key }) => (
                <Link
                  key={key}
                  to={path}
                  onClick={closeMenu}
                  className={`text-[26px] sm:text-[38px] md:text-[44px] font-extralight tracking-[-0.03em] py-1.5 hover:text-[#4a78e0] transition-colors w-fit ${
                    location.pathname === path ? 'text-[#4a78e0] italic font-light' : 'text-gray-900'
                  }`}
                >
                  {t.nav[key]}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Menu footer */}
        <div className="px-6 sm:px-12 py-6 md:py-8 border-t border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 max-w-[1440px] mx-auto w-full">
          <a href="tel:+902121234567" className="flex items-center gap-3 text-[16px] md:text-[18px] font-light hover:text-[#4a78e0] transition-colors text-[#5a6473]">
            <Icon.Phone s={16} />
            <span>+90 212 123 45 67</span>
          </a>
          <LocationTag lang={lang} timezone="GMT+3" />
        </div>
      </div>
    </>
  );
}
