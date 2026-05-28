import { PageHero } from '../components/PageHero';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { IMG } from '../data/images';

export default function Transformations({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.beforeAfter.tag}
        title={t.beforeAfter.title}
        subtitle={t.beforeAfter.sub}
        breadcrumb={t.nav.transformations}
        lang={lang}
      />

      {/* ── Horizontal scroll — before/after ─────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mb-8 reveal">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-[#4a78e0]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a78e0] font-medium">{t.beforeAfter.title}</span>
          </div>
        </div>
        <div className="h-scroll overflow-x-auto">
          <div className="flex gap-6 px-5 sm:px-8 lg:px-12 pb-6" style={{ width: 'max-content' }}>
            {[
              { label: 'Lamine Veneer', sub: '2 seans' },
              { label: 'Gülüş Tasarımı', sub: 'Dijital planlama' },
              { label: 'İmplant', sub: 'All-on-4 · 1 gün' },
              { label: 'Ortodonti', sub: 'Invisalign · 14 ay' },
            ].map((item, i) => (
              <div key={i} className="shrink-0 w-[80vw] sm:w-[55vw] lg:w-[400px]">
                <BeforeAfterSlider before={IMG.before} after={IMG.after} />
                <div className="mt-4 pl-1">
                  <div className="text-[12px] text-[#4a78e0] tracking-[0.1em] uppercase mb-0.5 font-medium">{item.label}</div>
                  <div className="text-[13px] text-[#5a6473] font-light">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case studies — editorial list ────────────── */}
      <section className="py-16 sm:py-24 bg-[#f4f6fa] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-12 reveal">
            <div className="w-6 h-[1px] bg-gray-400" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium">{t.cases.tag}</span>
          </div>

          {t.cases.items.map((c, i) => (
            <div key={i} className="reveal group border-t border-gray-200 py-8 sm:py-10 last:border-b cursor-pointer">
              <div className="grid grid-cols-12 gap-4 items-baseline">
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-gray-350 tracking-[0.1em] font-light">{c.tag}</span>
                </div>
                <div className="col-span-10 sm:col-span-8 pl-2 sm:pl-6">
                  <h2 className="text-[clamp(1.1rem,2vw,1.6rem)] font-extralight tracking-[-0.01em] mb-2 group-hover:text-[#4a78e0] transition-colors duration-400">
                    {c.t}
                  </h2>
                  <p className="text-[13px] text-[#5a6473] leading-[1.7] font-light">{c.d}</p>
                </div>
                <div className="hidden sm:block sm:col-span-3 text-right">
                  <span className="text-[11px] text-gray-300 tracking-[0.1em] font-light">{c.meta}</span>
                </div>
              </div>
              <div className="relative mt-6 h-[1px] bg-gray-200/50 overflow-hidden">
                <div className="absolute inset-0 bg-[#4a78e0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
