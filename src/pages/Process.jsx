import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';

export default function Process({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.journey.tag}
        title={t.journey.title}
        subtitle={t.journey.intro}
        breadcrumb={t.nav.process}
        lang={lang}
      />

      {/* ── Process steps — full width lines ─────────── */}
      <section className="py-0 bg-white">
        {t.journey.items.map((step, i) => (
          <div key={i} className="reveal border-b border-gray-100 group">
            <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-12 gap-4 sm:gap-8 py-12 sm:py-14 items-start">
                {/* number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[clamp(2.5rem,5vw,4rem)] font-extralight text-gray-100 group-hover:text-[#4a78e0]/20 transition-colors duration-500 leading-none tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* content */}
                <div className="col-span-10 sm:col-span-8 pl-2 sm:pl-6">
                  <h2 className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-extralight tracking-[-0.02em] mb-3 group-hover:text-[#4a78e0] transition-colors duration-400">
                    {step.t}
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-[#5a6473] leading-[1.85] max-w-lg font-light">{step.d}</p>
                  <div className="mt-4 text-[11px] text-gray-400 font-light tracking-wide uppercase">{step.detail}</div>
                </div>

                {/* time badge */}
                <div className="hidden sm:block sm:col-span-3 text-right pt-1">
                  <span className="text-[10px] tracking-[0.15em] text-[#4a78e0] uppercase font-medium">{step.time}</span>
                </div>
              </div>
            </div>
            {/* hover accent line */}
            <div className="h-[2px] bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#4a78e0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </div>
          </div>
        ))}
      </section>

      {/* ── Split image + quote ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#f4f6fa] border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="reveal-img">
              <div className="aspect-[4/3] overflow-hidden rounded-sm group cursor-pointer">
                <img src={IMG.dental4} alt="Süreç" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] scale-105 group-hover:scale-100" loading="lazy" />
              </div>
            </div>
            
            <div className="reveal">
              <blockquote className="text-[clamp(1.3rem,2.5vw,2rem)] font-extralight leading-[1.5] tracking-[-0.02em] text-[#5a6473] italic mb-8">
                {t.philosophy.chapters[1].d}
              </blockquote>
              <div className="w-8 h-[1px] bg-[#4a78e0] mb-5" />
              <p className="text-[13px] sm:text-[14px] text-[#5a6473] leading-[1.85] max-w-sm font-light">
                {t.journey.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common questions — simple accordion feel ─── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[1px] bg-gray-400" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-455 font-medium">{t.common.questions}</span>
              </div>
              <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-extralight tracking-[-0.02em] text-gray-900">
                {t.faq.title}
              </h2>
            </div>
            <div className="lg:col-span-8">
              {t.faq.items.slice(0, 4).map((item, i) => (
                <div key={i} className="reveal border-t border-gray-100 py-5 last:border-b">
                  <div className="text-[14px] sm:text-[15px] font-medium text-gray-800 mb-1">{item.q}</div>
                  <div className="text-[13px] text-gray-400 leading-[1.7] font-light">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
