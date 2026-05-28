import { PageHero } from '../components/PageHero';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { IMG } from '../data/images';

export default function Cases({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.cases.tag}
        title={t.cases.title}
        subtitle={t.beforeAfter.sub}
        breadcrumb={t.nav.cases}
        lang={lang}
      />

      {/* ── Cases — alternating large layout ─────────── */}
      <section className="bg-white">
        {t.cases.items.map((c, i) => (
          <div key={i} className={`py-16 sm:py-20 border-b border-gray-100 ${i === 0 ? 'border-t' : ''}`}>
            <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                <div className={`reveal-img ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <BeforeAfterSlider before={IMG.before} after={IMG.after} />
                  </div>
                </div>
                <div className={`reveal ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-6 h-[1px] bg-[#4a78e0]" />
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{c.tag}</span>
                  </div>
                  <h2 className="text-[clamp(1.4rem,3vw,2.5rem)] font-extralight tracking-[-0.02em] leading-[1.15] mb-5 text-gray-900">{c.t}</h2>
                  <p className="text-[14px] sm:text-[15px] text-[#5a6473] leading-[1.85] mb-7 font-light">{c.d}</p>
                  <div className="text-[11px] tracking-[0.2em] text-gray-300 uppercase font-light">{c.meta}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Patient image strip ───────────────────────── */}
      <section className="bg-[#f4f6fa]">
        <div className="grid grid-cols-3 gap-2 p-2">
          {[IMG.patient1, IMG.patient2, IMG.patient3].map((img, i) => (
            <div key={i} className="aspect-[3/4] overflow-hidden img-zoom rounded-sm">
              <img src={img} alt={`Hasta ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s]" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
