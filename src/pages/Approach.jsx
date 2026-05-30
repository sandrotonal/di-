import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';

export default function Approach({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.philosophy.tag}
        title={t.philosophy.title}
        subtitle={t.philosophy.desc}
        breadcrumb={t.nav.approach}
        lang={lang}
      />

      {/* ── Full-width image ─────────────────────────── */}
      <section className="h-[45vh] sm:h-[55vh] overflow-hidden reveal-img relative group">
        <img 
          src={IMG.clinic2} 
          alt={lang === 'tr' ? 'Klinik' : 'Clinic'} 
          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
      </section>

      {/* ── Philosophy — numbered list, no cards ─────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* sticky label */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 pb-10 lg:pb-0 reveal">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[1px] bg-[#4a78e0]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.common.methodology}</span>
                </div>
              </div>
            </div>

            {/* chapters */}
            <div className="lg:col-span-9">
              {t.philosophy.chapters.map((c, i) => (
                <div key={i} className="reveal grid grid-cols-12 gap-4 border-t border-gray-100 py-10 sm:py-12 last:border-b group">
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-[clamp(2rem,4vw,3.5rem)] font-extralight text-gray-100 group-hover:text-[#4a78e0]/20 transition-colors duration-500 leading-none tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="col-span-10 sm:col-span-11 pl-4 sm:pl-8">
                    <h2 className="text-[clamp(1.3rem,2.5vw,2rem)] font-extralight tracking-[-0.02em] mb-4 group-hover:text-[#4a78e0] transition-colors duration-400">
                      {c.t}
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-[#5a6473] leading-[1.85] max-w-lg">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Split: text left, image right ────────────── */}
      <section className="py-16 sm:py-24 bg-[#f4f6fa]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="reveal order-2 lg:order-1">
              <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-extralight tracking-[-0.03em] mb-7 leading-[1.1] text-gray-900">
                {t.common.everyPatientUnique}<br />
                <span className="italic font-thin text-[#4a78e0]">{t.common.everyPlanSpecial}</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#5a6473] leading-[1.85] mb-7 max-w-md">
                {t.common.approachIntro}
              </p>
              <p className="text-[14px] sm:text-[15px] text-[#5a6473] leading-[1.85] max-w-md">
                {t.common.approachFollow}
              </p>
            </div>
            
            <div className="order-1 lg:order-2 reveal-img">
              <div className="aspect-[4/5] overflow-hidden rounded-sm group cursor-pointer">
                <img 
                  src={IMG.clinic} 
                  alt={lang === 'tr' ? 'Yaklaşım' : lang === 'de' ? 'Ansatz' : 'Approach'} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] scale-105 group-hover:scale-100" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
