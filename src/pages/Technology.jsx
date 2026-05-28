import { PageHero } from '../components/PageHero';
import { IMG } from '../data/images';

const techImages = [IMG.tech1, IMG.tech2, IMG.tech3, IMG.tech4];

export default function TechnologyPage({ t, lang }) {
  return (
    <>
      <PageHero
        tag={t.tech.tag}
        title={t.tech.title}
        subtitle={t.tech.sub}
        breadcrumb={t.nav.technology}
        lang={lang}
      />

      {/* ── Alternating image / text rows ───────────── */}
      <section className="bg-white">
        {t.tech.items.map((item, i) => (
          <div
            key={i}
            className={`py-16 sm:py-20 border-b border-gray-100 ${i === 0 ? 'border-t' : ''}`}
          >
            <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                <div className={`reveal-img ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[16/10] overflow-hidden rounded-sm group cursor-pointer">
                    <img src={techImages[i]} alt={item.n} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.2s] scale-105 group-hover:scale-100" loading="lazy" />
                  </div>
                </div>
                <div className={`reveal ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-[10px] tracking-[0.3em] text-[#4a78e0] uppercase mb-5 font-medium">{item.meta}</div>
                  <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-extralight tracking-[-0.03em] mb-5 leading-[1.08] text-gray-900">
                    {item.n}
                  </h2>
                  <p className="text-[14px] sm:text-[15px] text-[#5a6473] leading-[1.85] font-light">{item.d}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Full-bleed dark image ────────────────────── */}
      <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img src={IMG.dental7} alt="Teknoloji" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-center px-5 sm:px-8 lg:px-12 max-w-[1440px] mx-auto reveal">
          <div>
            <div className="w-8 h-[1px] bg-[#4a78e0] mb-6" />
            <p className="text-white text-[clamp(1.4rem,3vw,2.6rem)] font-extralight leading-[1.2] tracking-[-0.02em] max-w-xl">
              {t.tech.sub}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
