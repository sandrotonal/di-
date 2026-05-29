import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';
import { Icon } from '../components/ui/Icons';

function slugify(text) {
  const map = { 'ü': 'u', 'ş': 's', 'ı': 'i', 'ö': 'o', 'ç': 'c', 'ğ': 'g' };
  return text.toLowerCase().replace(/[üşıöçğ]/g, c => map[c]).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const journalImages = [
  IMG.treatmentDsd,
  IMG.treatmentImplant,
  IMG.treatmentVeneer,
  IMG.treatmentOrtho,
  IMG.journal5,
  IMG.treatmentWhitening,
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
  IMG.treatmentCrown,
  IMG.treatmentEndo
];

export default function JournalPage({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.journal.tag}
        title={t.journal.title}
        subtitle={t.journal.sub}
        breadcrumb={t.nav.journal || "Journal"}
        lang={lang}
      />

      {/* ── Featured article — large split layout ─────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Link to={`/journal/${slugify(t.journal.items[0].t)}`} className="aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer">
              <img 
                src={journalImages[0]} 
                alt={t.journal.items[0].t} 
                className="journal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100" 
                loading="lazy" 
              />
            </Link>
            
            <div className="lg:pl-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#4a78e0] font-medium">{t.journal.items[0].cat}</span>
                <span className="text-[10px] text-gray-300">·</span>
                <span className="text-[10px] text-gray-400 font-light">{t.journal.items[0].date}</span>
                <span className="text-[10px] text-gray-300">·</span>
                <span className="text-[10px] text-gray-400 font-light">{t.journal.items[0].read}</span>
              </div>
              <h2 className="text-[clamp(1.5rem,3vw,2.8rem)] font-extralight tracking-[-0.02em] leading-[1.12] mb-6 text-gray-900">
                {t.journal.items[0].t}
              </h2>
              <p className="text-[14px] text-[#5a6473] leading-[1.85] mb-8 max-w-md">
                {t.journal.items[0].d}
              </p>
              <Link to={`/journal/${slugify(t.journal.items[0].t)}`}
                className="group inline-flex items-center gap-4 text-[13px] text-gray-800 hover:text-[#4a78e0] transition-colors font-medium"
              >
                <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#4a78e0] group-hover:scale-105 transition-all duration-300 bg-white/50">
                  <Icon.Arrow s={11} className="group-hover:translate-x-0.5 transition-transform group-hover:text-[#4a78e0]" />
                </span>
                {t.common.readMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article list ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 stagger">
            {t.journal.items.slice(1).map((article, i) => (
              <Link key={i} to={`/journal/${slugify(article.t)}`} className="group cursor-pointer journal-card">
                <div className="mb-6">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <img
                      src={journalImages[i + 1] || IMG.dental5}
                      alt={article.t}
                      className="journal-img w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#4a78e0] font-medium journal-tag">{article.cat}</span>
                  <span className="text-[10px] text-gray-300">·</span>
                  <span className="text-[10px] text-gray-400 font-light">{article.date}</span>
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-light text-gray-900 tracking-[-0.01em] leading-[1.4] group-hover:text-[#4a78e0] transition-colors duration-400">
                  {article.t}
                </h3>
                <p className="text-[12px] text-[#5a6473] leading-[1.6] mt-2 line-clamp-2">
                  {article.d}
                </p>
                <div className="mt-4 h-[1px] bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#4a78e0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category list — plain text ─────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f6fa] border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-8 reveal">
            <div className="w-6 h-[1px] bg-gray-300" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">{t.common.categories}</span>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 stagger">
            {(lang === 'tr'
              ? ['Teknoloji', 'Klinik', 'Estetik', 'İmplantoloji', 'Ortodonti', 'Hijyen']
              : lang === 'de'
                ? ['Technologie', 'Klinik', 'Ästhetik', 'Implantologie', 'Kieferorthopädie', 'Hygiene']
                : ['Technology', 'Clinical', 'Aesthetic', 'Implantology', 'Orthodontics', 'Hygiene']
            ).map((cat, i) => (
              <button key={i}
                className="text-[clamp(0.85rem,1.5vw,1rem)] font-light text-[#5a6473] border-b border-transparent hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 pb-0.5"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
