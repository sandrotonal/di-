import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CookiesBanner } from '../components/CookiesBanner';
import { useReveal, useCharReveal } from '../hooks/useReveal';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useTilt, useMagnetic } from '../hooks/useTilt';
import { useCustomCursor } from '../hooks/useCustomCursor';
import { useSkewScroll } from '../hooks/useSkewScroll';
import { useChapterIndicator } from '../hooks/useChapterIndicator';
import { useTime } from '../hooks/useTime';

export default function MainLayout({ lang, setLang, t, totalChapters, activeChapter, scrollProgress, scrolled, time }) {
  const path = useLocation();

  useReveal();
  useCharReveal();
  useTilt();
  useMagnetic();
  useCustomCursor();
  useSkewScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <CookiesBanner t={t} lang={lang} />

      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <div className="cursor-trail" id="trail1"></div>
      <div className="cursor-trail" id="trail2"></div>
      <div className="cursor-trail" id="trail3"></div>

      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }}></div>

      <div className="chapter-indicator">
        <div className="flex flex-col items-center gap-2">
          {Array.from({ length: totalChapters }).map((_, i) => (
            <div key={i} className={`chapter-dot ${activeChapter === i ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>

      <Navigation t={t} time={time} scrolled={scrolled} lang={lang} setLang={setLang} />

      <main>
        <Outlet context={{ t, lang, setLang }} />
      </main>

      <Footer t={t} time={time} lang={lang} />
    </>
  );
}
