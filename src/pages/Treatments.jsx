import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';
import { Icon } from '../components/ui/Icons';

const svcImages = [IMG.dental1, IMG.dental2, IMG.dental3, IMG.dental4, IMG.dental5, IMG.dental6, IMG.dental7, IMG.dental8];

export default function Treatments({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.services.tag}
        title={t.services.title}
        subtitle={t.services.desc}
        breadcrumb={t.nav.treatments}
        lang={lang}
      />

      {/* ── Two-column masonry image + list ─────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">

            {/* Left: sticky image */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="sticky top-28">
                <div className="aspect-[3/4] overflow-hidden rounded-sm reveal-img">
                  <img src={IMG.dental2} alt="Tedaviler" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Right: treatment list */}
            <div className="lg:col-span-7">
              {t.services.items.map((s, i) => (
                <div key={i} className="reveal group border-t border-gray-100 py-7 last:border-b">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-[10px] text-gray-300 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                        <h2 className="text-[clamp(1.1rem,2vw,1.4rem)] font-light text-gray-900 group-hover:text-[#4a78e0] transition-colors duration-400 tracking-[-0.01em]">
                          {s.t}
                        </h2>
                      </div>
                      <p className="pl-8 text-[13px] text-[#5a6473] leading-[1.75] max-w-sm">{s.d}</p>
                    </div>
                    <div className="shrink-0 pt-1">
                      <span className="text-[10px] tracking-[0.15em] text-[#4a78e0] uppercase font-light">{s.meta}</span>
                    </div>
                  </div>
                  {/* hover line */}
                  <div className="relative mt-5 h-[1px] bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-[#4a78e0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Image gallery strip ──────────────────────── */}
      <section className="py-0 bg-[#f4f6fa]">
        <div className="h-scroll overflow-x-auto">
          <div className="flex gap-3 p-3" style={{ width: 'max-content' }}>
            {svcImages.slice(0, 5).map((img, i) => (
              <div key={i} className="shrink-0 w-[52vw] sm:w-[36vw] lg:w-[28vw] aspect-[3/4] overflow-hidden img-zoom rounded-sm">
                <img src={img} alt={t.services.items[i]?.t} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#f4f6fa]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 reveal">
          <p className="text-[clamp(1.4rem,3vw,2.5rem)] font-extralight tracking-[-0.02em] max-w-lg leading-[1.2] text-gray-900">
            {t.common.freeConsultation}
          </p>
          <Link to="/iletisim"
            className="magnetic shrink-0 inline-flex items-center gap-3 text-[13px] border border-gray-300 bg-white/50 text-gray-700 px-7 py-3.5 rounded-full hover:border-[#4a78e0] hover:text-[#4a78e0] transition-all duration-300 font-medium"
          >
            {t.common.contactUs} <Icon.Arrow s={11} className="-rotate-45 group-hover:text-[#4a78e0]" />
          </Link>
        </div>
      </section>
    </>
  );
}
