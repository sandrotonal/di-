import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';

export default function Clinic({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.tour.tag}
        title={t.tour.title}
        subtitle={t.tour.desc}
        breadcrumb={t.nav.clinic}
        lang={lang}
      />

      {/* ── Full-bleed hero image ─────────────────────── */}
      <section className="h-[55vh] sm:h-[65vh] overflow-hidden reveal-img">
        <div className="relative w-full h-full img-zoom">
          <img src={IMG.clinic2} alt={lang === 'tr' ? 'Klinik' : 'Clinic'} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2.5s]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm shadow-sm border border-black/5 font-medium text-gray-800">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a78e0] animate-pulse" />
              {t.common.virtualTour}
            </span>
          </div>
          <div className="absolute bottom-8 left-8 text-white">
            <div className="text-[clamp(1.5rem,3vw,2.8rem)] font-extralight">Aura Dental Studio</div>
            <div className="text-[11px] tracking-[0.25em] opacity-80 mt-1 uppercase font-light">{t.tour.info}</div>
          </div>
        </div>
      </section>

      {/* ── Features — clean horizontal list ─────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-4 lg:pr-12 pb-10 lg:pb-0 reveal flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-[1px] bg-[#4a78e0]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.common.clinicalExperience}</span>
                </div>
                <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-extralight tracking-[-0.02em] leading-[1.15] text-gray-900 mb-8">
                  {t.common.clinicalComfort}
                </h2>
              </div>
              <div className="mt-4 mb-6 lg:mb-0 w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-xl border border-gray-150 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.689084012345!2d28.9895!3d41.0485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzU0LjYiTiAyOMKwNTknMjIuMiJF!5e0!3m2!1str!2str!4v1700000000000"
                  width="100%" height="100%"
                  style={{ border: 0, display: 'block', filter: 'grayscale(0.2) contrast(1.05)', width: '100%', height: '100%' }}
                  allowFullScreen="" loading="lazy"
                  title={lang === 'tr' ? 'Konum' : lang === 'de' ? 'Standort' : 'Location'}
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-2xl" />
              </div>
            </div>
            <div className="lg:col-span-8">
              {(t.tour.items || []).map((f, i) => (
                <div key={i} className="reveal border-t border-gray-100 py-7 last:border-b group">
                  <h3 className="text-[clamp(1rem,1.8vw,1.2rem)] font-light mb-2 group-hover:text-[#4a78e0] transition-colors duration-300">{f.t}</h3>
                  <p className="text-[13px] text-[#5a6473] leading-[1.75] max-w-lg">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery — 3-col images ────────────────────── */}
      <section className="py-0 bg-[#f4f6fa]">
        <div className="grid grid-cols-3 gap-2 p-2">
          {[IMG.clinic, IMG.clinic3, IMG.clinic4].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden img-zoom rounded-sm">
              <img src={img} alt={lang === 'tr' ? `Klinik ${i + 1}` : `Clinic ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications — minimal text list ───────── */}
      <section className="py-14 sm:py-20 bg-[#f4f6fa]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-10 reveal">
            <div className="w-6 h-[1px] bg-gray-300" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">{t.common.certificates}</span>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 stagger">
            {t.awards.map((a, i) => (
              <span key={i} className="text-[clamp(0.85rem,1.5vw,1rem)] font-light text-[#5a6473] border-b border-transparent hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 pb-0.5 cursor-default">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
