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

const seoConfig = {
  tr: {
    '/': {
      title: 'Aura Dental Studio | Premium Diş Kliniği · Nişantaşı',
      desc: 'Nişantaşı\'nda dijital gülüş tasarımı, implantoloji, lamine veneer ve estetik diş hekimliği. Bilim ile sanatın buluştuğu yer.'
    },
    '/tedaviler': {
      title: 'Tedavilerimiz | Aura Dental Studio Nişantaşı',
      desc: 'İmplantoloji, şeffaf plak (Invisalign), lamine veneer, diş beyazlatma ve estetik diş hekimliği tedavilerimiz hakkında detaylı bilgi.'
    },
    '/yaklasim': {
      title: 'Klinik Yaklaşımımız | Aura Dental Studio',
      desc: 'Diş hekimliğinde bilim ve sanatın buluşması. Kişiye özel, minimal invaziv ve dijital tedavi felsefemiz.'
    },
    '/teknoloji': {
      title: 'Dijital Teknolojilerimiz | Aura Dental Studio',
      desc: '3D Tomografi, ağız içi tarayıcılar ve en son dijital diş hekimliği teknolojileri ile milimetrik teşhis ve tedavi.'
    },
    '/surec': {
      title: 'Tedavi Süreci | Aura Dental Studio',
      desc: 'İlk muayeneden yeni gülüşünüze kadar olan dijital ve konforlu tedavi aşamalarımız.'
    },
    '/donusumler': {
      title: 'Gülüş Dönüşümleri (Before/After) | Aura Dental Studio',
      desc: 'Kliniğimizde gerçekleştirilen başarılı lamine veneer, implant ve ortodonti vakalarının öncesi/sonrası fotoğrafları.'
    },
    '/vakalar': {
      title: 'Başarı Hikayeleri & Vakalar | Aura Dental Studio',
      desc: 'Detaylı vaka analizleri, tedavi planlamaları ve estetik gülüş tasarımı başarı öyküleri.'
    },
    '/klinik': {
      title: 'Nişantaşı Kliniğimiz | Aura Dental Studio',
      desc: 'Nişantaşı\'ndaki 420m² modern, steril ve konforlu klinik odalarımız ve 360° sanal turumuz.'
    },
    '/ekip': {
      title: 'Uzman Hekim Kadromuz | Aura Dental Studio',
      desc: 'İmplantoloji, estetik diş hekimliği, ortodonti ve endodonti alanlarında uzman diş hekimlerimiz.'
    },
    '/journal': {
      title: 'Dental Journal & Blog | Aura Dental Studio',
      desc: 'Diş sağlığı, estetik gülüş tasarımı ve ağız bakımı hakkında güncel makaleler ve hekim önerileri.'
    },
    '/sss': {
      title: 'Sıkça Sorulan Sorular | Aura Dental Studio SSS',
      desc: 'Tedavi süreleri, implant fiyatları, taksit imkanları ve merak ettiğiniz tüm soruların cevapları.'
    },
    '/iletisim': {
      title: 'İletişim & Randevu | Aura Dental Studio Nişantaşı',
      desc: 'Nişantaşı Abdi İpekçi Caddesi\'ndeki kliniğimiz için yol tarifi, telefon, çalışma saatleri ve randevu formu.'
    }
  },
  en: {
    '/': {
      title: 'Aura Dental Studio | Premium Dental Clinic · Nişantaşı',
      desc: 'Digital smile design, implantology, laminate veneers, and aesthetic dentistry in Nişantaşı, Istanbul. Where science meets art.'
    },
    '/tedaviler': {
      title: 'Our Dental Treatments | Aura Dental Studio Nişantaşı',
      desc: 'Detailed information on implantology, clear aligners (Invisalign), laminate veneers, teeth whitening, and cosmetic dentistry.'
    },
    '/yaklasim': {
      title: 'Our Clinical Approach | Aura Dental Studio',
      desc: 'Science meeting art in dentistry. Our personalized, minimally invasive, and digital treatment philosophy.'
    },
    '/teknoloji': {
      title: 'Dental Technology | Aura Dental Studio',
      desc: 'State-of-the-art 3D tomography, intraoral scanners, and digital dentistry for precise diagnosis and treatment.'
    },
    '/surec': {
      title: 'Treatment Journey | Aura Dental Studio',
      desc: 'Our digital and comfortable dental treatment phases, from initial consultation to your new smile.'
    },
    '/donusumler': {
      title: 'Smile Transformations (Before/After) | Aura Dental Studio',
      desc: 'Before and after photos of successful laminate veneers, implants, and orthodontic cases at our clinic.'
    },
    '/vakalar': {
      title: 'Clinical Cases & Stories | Aura Dental Studio',
      desc: 'Detailed case analysis, digital smile designs, and cosmetic dentistry success stories.'
    },
    '/klinik': {
      title: 'Our Clinic in Nişantaşı | Aura Dental Studio',
      desc: 'Explore our 420m² modern, sterile, and comfortable dental clinic in Nişantaşı through a 360° virtual tour.'
    },
    '/ekip': {
      title: 'Our Dental Team & Specialists | Aura Dental Studio',
      desc: 'Meet our specialist dentists in implantology, aesthetic dentistry, orthodontics, and endodontics.'
    },
    '/journal': {
      title: 'Dental Journal & Blog | Aura Dental Studio',
      desc: 'Recent articles, dental health tips, smile aesthetics, and expert recommendations from our dentists.'
    },
    '/sss': {
      title: 'Frequently Asked Questions | Aura Dental Studio FAQ',
      desc: 'Find answers on treatment durations, implant guarantees, payment options, and more.'
    },
    '/iletisim': {
      title: 'Contact & Appointment | Aura Dental Studio Nişantaşı',
      desc: 'Contact details, directions, working hours, and online booking for our Nişantaşı Abdi İpekçi clinic.'
    }
  },
  de: {
    '/': {
      title: 'Aura Dental Studio | Premium Zahnklinik · Nişantaşı',
      desc: 'Digitales Smile Design, Implantologie, Veneers und ästhetische Zahnmedizin in Nişantaşı, Istanbul.'
    },
    '/tedaviler': {
      title: 'Behandlungen | Aura Dental Studio Nişantaşı',
      desc: 'Erfahren Sie mehr über Implantologie, Invisalign-Zahnschienen, Porzellan-Veneers, Bleaching und ästhetische Zahnheilkunde.'
    },
    '/yaklasim': {
      title: 'Unser Ansatz | Aura Dental Studio',
      desc: 'Wissenschaft trifft Kunst in der Zahnmedizin. Unsere Philosophie einer personalisierten, minimalinvasiven und digitalen Behandlung.'
    },
    '/teknoloji': {
      title: 'Technologie | Aura Dental Studio',
      desc: 'Präzise Diagnostik und Behandlung mit 3D-Tomographie, Intraoralscannern und modernster digitaler Zahnmedizin.'
    },
    '/surec': {
      title: 'Behandlungsablauf | Aura Dental Studio',
      desc: 'Vom Erstgespräch bis zu Ihrem neuen Lächeln: Unsere digitalen und komfortablen Behandlungsphasen.'
    },
    '/donusumler': {
      title: 'Smile-Transformationen (Vorher/Nachher) | Aura Dental Studio',
      desc: 'Vorher-Nachher-Bilder erfolgreicher Veneer-, Implantat- und kieferorthopädischer Behandlungen in unserer Klinik.'
    },
    '/vakalar': {
      title: 'Fälle & Erfolgsberichte | Aura Dental Studio',
      desc: 'Detaillierte Fallanalysen, digitales Smile-Design und ästhetische Erfolgsgeschichten.'
    },
    '/klinik': {
      title: 'Unsere Klinik | Aura Dental Studio',
      desc: 'Besuchen Sie unsere 420m² große, sterile und komfortable Zahnarztpraxis in Nişantaşı per virtuellem 360-Grad-Rundgang.'
    },
    '/ekip': {
      title: 'Unser Ärzteteam | Aura Dental Studio',
      desc: 'Lernen Sie unsere spezialisierten Zahnärzte für Implantologie, Ästhetik, Kieferorthopädie und Endodontie kennen.'
    },
    '/journal': {
      title: 'Zahnärztliches Journal & Blog | Aura Dental Studio',
      desc: 'Aktuelle Artikel, Tipps zur Zahngesundheit, Lächeln-Ästhetik und Empfehlungen unserer Zahnärzte.'
    },
    '/sss': {
      title: 'Häufig gestellte Fragen | Aura Dental Studio FAQ',
      desc: 'Antworten zu Behandlungsdauer, Implantatgarantien, Ratenzahlungen und Notfällen.'
    },
    '/iletisim': {
      title: 'Kontakt & Termin | Aura Dental Studio Nişantaşı',
      desc: 'Kontaktdaten, Wegbeschreibung, Öffnungszeiten und Terminvereinbarung für unsere Klinik in Nişantaşı.'
    }
  }
};

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

  // Dynamic SEO Metadata Tags and Google Analytics Route tracking
  useEffect(() => {
    const currentPath = path.pathname;
    let title = '';
    let desc = '';

    // Check if it is a blog detail page
    if (currentPath.startsWith('/journal/')) {
      const slug = currentPath.split('/')[2];
      const items = t.journal?.items || [];
      
      const slugify = (text) => {
        const map = {
          'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c', 'ğ': 'g',
          'Ü': 'u', 'Ş': 's', 'İ': 'i', 'Ö': 'o', 'Ç': 'c', 'Ğ': 'g',
        };
        return text.toLowerCase().replace(/[üşıöçğ]/g, c => map[c] || c).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      };
      
      const article = items.find(a => slugify(a.t) === slug);
      if (article) {
        title = `${article.t} | Aura Dental Studio`;
        desc = article.d;
      }
    }

    // Fallback to static routes
    if (!title) {
      const config = seoConfig[lang] || seoConfig.tr;
      const matched = config[currentPath];
      if (matched) {
        title = matched.title;
        desc = matched.desc;
      } else {
        title = lang === 'tr' ? 'Aura Dental Studio | Premium Diş Kliniği · Nişantaşı' : 'Aura Dental Studio | Premium Dental Clinic · Nişantaşı';
        desc = lang === 'tr' 
          ? 'Nişantaşı\'nda dijital gülüş tasarımı, implantoloji, lamine veneer ve estetik diş hekimliği.' 
          : 'Digital smile design, implantology, laminate veneers, and aesthetic dentistry in Nişantaşı.';
      }
    }

    // Set page title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', desc);

    // Update Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Update Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', desc);

    // Send Google Analytics page_view dynamically in React SPA Router
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: currentPath,
        page_title: title
      });
    }
  }, [path.pathname, lang, t]);

  return (
    <>
      <CookiesBanner t={t} lang={lang} />

      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <div className="cursor-trail" id="trail1"></div>
      <div className="cursor-trail" id="trail2"></div>
      <div className="cursor-trail" id="trail3"></div>

      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }}></div>

      <Navigation t={t} time={time} scrolled={scrolled} lang={lang} setLang={setLang} />

      <main>
        <Outlet context={{ t, lang, setLang }} />
      </main>

      <Footer t={t} time={time} lang={lang} />
    </>
  );
}
