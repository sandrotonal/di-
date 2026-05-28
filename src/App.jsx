import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { T } from './data/translations';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useChapterIndicator } from './hooks/useChapterIndicator';
import { useTime } from './hooks/useTime';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Approach from './pages/Approach';
import TechnologyPage from './pages/Technology';
import Process from './pages/Process';
import Transformations from './pages/Transformations';
import Cases from './pages/Cases';
import TestimonialsPage from './pages/Testimonials';
import Clinic from './pages/Clinic';
import JournalPage from './pages/Journal';
import TeamPage from './pages/Team';
import FAQPage from './pages/FAQ';
import ContactPage from './pages/Contact';

export default function App() {
  const [lang, setLang] = useState('tr');
  const t = T[lang];
  const time = useTime();
  const { p: scrollProgress, scrolled } = useScrollProgress();
  const activeChapter = useChapterIndicator();

  const totalChapters = 12;

  return (
    <Router>
      <Routes>
        <Route element={
          <MainLayout
            lang={lang} setLang={setLang}
            t={t}
            totalChapters={totalChapters}
            activeChapter={activeChapter}
            scrollProgress={scrollProgress}
            scrolled={scrolled}
            time={time}
          />
        }>
          <Route index element={<Home t={t} lang={lang} />} />
          <Route path="tedaviler" element={<Treatments t={t} lang={lang} />} />
          <Route path="yaklasim" element={<Approach t={t} lang={lang} />} />
          <Route path="teknoloji" element={<TechnologyPage t={t} lang={lang} />} />
          <Route path="surec" element={<Process t={t} lang={lang} />} />
          <Route path="donusumler" element={<Transformations t={t} lang={lang} />} />
          <Route path="vakalar" element={<Cases t={t} lang={lang} />} />
          <Route path="hastalar" element={<TestimonialsPage t={t} lang={lang} />} />
          <Route path="klinik" element={<Clinic t={t} lang={lang} />} />
          <Route path="journal" element={<JournalPage t={t} lang={lang} />} />
          <Route path="ekip" element={<TeamPage t={t} lang={lang} />} />
          <Route path="sss" element={<FAQPage t={t} lang={lang} />} />
          <Route path="iletisim" element={<ContactPage t={t} lang={lang} />} />
        </Route>
      </Routes>
    </Router>
  );
}
